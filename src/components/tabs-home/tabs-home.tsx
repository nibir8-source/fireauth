import { Component, h } from '@stencil/core';
import { Navbar } from '../functional';

@Component({
    tag: 'tabs-home',
    styleUrl: 'tabs-home.scss'
})
export class TabsHome {


    render() {
        return (
            <Navbar title="Home" />
        );
    }
}
