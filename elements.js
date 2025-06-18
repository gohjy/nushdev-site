"use strict";

class CommonHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="./" class="logo-box">
                <span class="logo-tag">
                    &lt;<span class="logo-asterisk">*</span>&gt;
                </span>
                <span class="logo-text">
                    NUSHDEV
                </span>
            </a>

            <a href="./projects">Projects</a>
            
            <a href="./contact.html">Contact</a>
        `;
    }
}

class CommonFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- <nav class="footer-nav"></nav> -->

            <div class="footer-credits">
                Copyright &copy; NUSHDev 2025 unless otherwise stated. 
            </div>
        `;
    }
}

customElements.define("ndv-header", CommonHeader);
customElements.define("ndv-footer", CommonFooter);