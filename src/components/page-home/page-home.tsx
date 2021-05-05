import { Component, h } from '@stencil/core';
import { Navbar } from '../functional';


@Component({
    tag: 'page-home',
    styleUrl: 'page-home.scss'
})
export class PageHome {


    render() {
        return (
            <Navbar title="Home" />
        )
    }
}
