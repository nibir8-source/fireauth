import { State, Component, h } from '@stencil/core'
import { AuthSvc } from '../../services/auth.service'
import { Navbar } from '../functional'
import firebase from 'firebase/app'

@Component({
    tag: 'page-auth',
    styleUrl: 'page-auth.scss'
})
export class PageAuth {
    // @State() email: string;
    @State() phone: string;
    @State() OTP: string;
    @State() email: string;
    @State() password: string;
    private recaptcha: any = new firebase.auth.RecaptchaVerifier('recaptcha');

    // componentWillLoad() {
    //     AuthSvc.verifyEmailLink(location.href);
    // }

    // async sendLink(){
    //     try{
    //         if(this.email){
    //             await AuthSvc.sendEmailLink(this.email.trim());
    //             console.log('Email Sent');
    //         }
    //     } catch (error) {
    //         console.log(error.code, error.message);
    //     }
    // }
    // private inputHandler(event){
    //     this.email = event.target.value;
    // }

    private inputHandlerPhone(event){
        this.phone = event.target.value;
    }
    private inputHandlerOTP(event){
        this.OTP = event.target.value;
    }
    private inputHandlerEmail(event){
        this.email = event.target.value;
    }
    private inputHandlerPassword(event){
        this.password = event.target.value;
    }

    render() {
        return [
            <Navbar title="Authentication" />,
            <ion-content>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label position="floating">Email</ion-label>
                                <ion-input required type="email" onInput={(event) => this.inputHandlerEmail(event)}/>
                            </ion-item>
                            <ion-item>
                                <ion-label position="floating">Password</ion-label>
                                <ion-input required type="password" onInput={(event) => this.inputHandlerPassword(event)}/>
                            </ion-item>
                            <ion-item>
                                <ion-label position="floating">Phone Number</ion-label>
                                <ion-input required type="text" onInput={(event) => this.inputHandlerPhone(event)}/>
                            </ion-item>
                           
                            {/* <ion-item>
                                <ion-label position="floating">Email</ion-label>
                                <ion-input required type="email" onInput={(event) => this.inputHandler(event)}/>
                            </ion-item> */}
                            {/* <ion-button class="ion-margin-top" expand="block" onClick={() => this.sendLink()}>Send link</ion-button> */}
                            <div id="recaptcha"></div>
                            <ion-button expand="block" onClick={() => AuthSvc.signInByEmail(this.email, this.password, this.phone, this.recaptcha)}>Login with Email</ion-button>
                            <ion-button expand="block" onClick={() => AuthSvc.createUserByEmail(this.email, this.password, this.phone, this.recaptcha)}>Signup with Email</ion-button>
                            <ion-button expand="block" onClick={() => AuthSvc.google(this.phone, this.recaptcha)}>Login with Google</ion-button>
                            <ion-item>
                                <ion-label position="floating">OTP</ion-label>
                                <ion-input required onInput={(event) => this.inputHandlerOTP(event)}/>
                            </ion-item>
                            <ion-button expand="block" onClick={() => AuthSvc.verifyOTP(this.OTP)}>Verify OTP</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}
