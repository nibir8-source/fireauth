import { Component, h } from '@stencil/core';


@Component({
    tag: 'app-menu',
    styleUrl: 'app-menu.scss'
})
export class AppMenu {

    appPages = [
        {title:"Home", url:"/", icon:"home"},
        {title:"About", url:"/about", icon:"person"},
        {title:"Tabs", url:"/home", icon:"person"}
    ];

    render() {
        return (
            <ion-menu side="start" type="overlay" contentId="main">
                <ion-content>
                    <ion-menu-toggle>
                    <ion-list>
                        {this.appPages.map((appPage) => (
                            <ion-item href={appPage.url}>
                                <ion-icon name={appPage.icon} slot="start" />
                                <ion-label>{appPage.title}</ion-label>
                            </ion-item>
                        ))}
                    </ion-list>
                    </ion-menu-toggle>
                </ion-content>
            </ion-menu>
        );
    }
}
