import { FunctionalComponent,h } from '@stencil/core';

interface NavBarProps {
    title: string;
}

export const Navbar: FunctionalComponent<NavBarProps> = ({title}) => (
    <ion-header class="ion-no-border">
        <ion-toolbar>
            <ion-title>{title}</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button />
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
);