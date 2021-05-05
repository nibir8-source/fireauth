import firebase from 'firebase/app'
import {auth} from '../firebase'

export class AuthService {
     public confirmationResult   :   any;

    // public sendEmailLink(email: string){
    //     const actionCodeSettings = {
    //         url: 'http://localhost:3333/',
    //         handleCodeInApp: true
    //     }
    //     localStorage.setItem('emailForSignIn', email);
    //     // return auth.sendSignInLinkToEmail(email, actionCodeSettings); 
    //     return auth.sendSignInLinkToEmail(email, actionCodeSettings);
    // }
    // public async verifyEmailLink(url: string){
    //     if (firebase.auth().isSignInWithEmailLink(url)) {
    //         var email = window.localStorage.getItem('emailForSignIn');
    //         if (!email) {
    //           email = window.prompt('Please provide your email for confirmation');
    //         }
    //         const result = await auth.signInWithEmailLink(email, url);
    //         console.log("FirebaseUser: ", result);
    //         console.log("IsNewUser: ", result.additionalUserInfo.isNewUser);

    //         if(result.additionalUserInfo.isNewUser){
    //             // do something
    //         }

    //         if(history && history.replaceState){
    //             history.replaceState({}, document.title, url.split('?')[0]);
    //         }

    //         localStorage.removeItem("emailForSignIn");
    //     }
    // }

    public createUserByEmail(email: string, password: string, phone: string, recaptcha: any) {
        return auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("User: ", user);
            return this.phoneAuth(phone, recaptcha);
        })
        .catch((error) => {
            console.log('signup error: ', error.code + ' - ' + error.message);
            if (error.code === 'auth/email-already-in-use') {
                return this.signInByEmail(email, password, phone, recaptcha);
            } else {
                return null;
            }
        })
    }

    public signInByEmail(email: string, password: string, phone: string, recaptcha: any) {
        return auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('Signed In. User: ', user);
            if(user.user.phoneNumber==null){
                return this.phoneAuth(phone, recaptcha);
            }else{
                return null;
            }
        })
        .catch((error) => {
            console.log('signin error: ', error.code + ' - ' + error.message);
            return null;
        });
    }

    private phoneAuth(phone: string, recaptcha: any) {
        return auth.currentUser.linkWithPhoneNumber(phone, recaptcha)
        .then(linkReponse => {
            this.confirmationResult =   linkReponse;
            console.log('OTP sent');
        }).catch(err => {
            console.log('Phone Auth Error: ', err);
        });
    }


    public google(phone: string, recaptcha: any) {
        const provider = new firebase.auth.GoogleAuthProvider()
        return this.providerHandler(provider, phone, recaptcha);
    }

    private async providerHandler(provider: any, phone: string, recaptcha: any) {
        const result = await auth.signInWithPopup(provider);
        console.log(result);
        if(result.additionalUserInfo.isNewUser || result.user.phoneNumber==null){
            auth.currentUser.linkWithPhoneNumber(phone, recaptcha)
            .then(linkResponse => {
                this.confirmationResult = linkResponse;
                console.log("OTP sent");
            }).catch(err => {
                console.log(err.message);
            });
        }else{
            console.log("User: ",result.user);
        }
    }

    public verifyOTP(OTP: string) {
        return this.confirmationResult.confirm(OTP).then(confirmResponse => {
            let user            =   confirmResponse.user;
            console.log("User: ", user);
        }).catch(confirmError => {
            console.log("Error: ", confirmError);
        });
    }
}

export const AuthSvc = new AuthService();