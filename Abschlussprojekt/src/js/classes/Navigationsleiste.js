'use strict';

{/* <nav id="navigationsleiste">
<a href="index.html"><span id="markenname">Liqui-Planner</span></a>
</nav> */}

class Navigationsleiste {
    constructor() {
        this._html = this._html_generieren();
    }
    _html_generieren() {
        let navigationsleiste = document.createElement('nav');
        navigationsleiste.setAttribute('id', 'navigationsleiste');

        let anker = document.createElement('a');
        anker.setAttribute('href', '#');

        let span = document.createElement('span');
        span.setAttribute('id', 'markenname');
        span.textContent = 'Wallet-Wizard';
        anker.insertAdjacentElement('afterbegin', span);

        navigationsleiste.insertAdjacentElement('afterbegin', anker);
        return navigationsleiste;
    }
    anzeigen() {
        let body = document.querySelector('body');
        if(body !== null) {
            body.insertAdjacentElement('afterbegin', this._html);
        }
    }
}