"use strict";

class CommonHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a href="./pages/home.html#main-content-jump" class="logo-box">
                <span class="logo-tag">
                    &lt;<span class="logo-asterisk">*</span>&gt;
                </span>
                <span class="logo-text">
                    NUSHDEV
                </span>
            </a>

            <a href="./pages/projects.html">Projects</a>
            
            <a href="./pages/contact.html">Contact</a>
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
                Page content copyright &copy; NUSHDev 2025 unless otherwise stated. NUSHDev is not endorsed by or affiliated with NUS High School.
            </div>
        `;
    }
}

customElements.define("ndv-header", CommonHeader);
customElements.define("ndv-footer", CommonFooter);