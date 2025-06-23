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

            <div class="top-bar-menu">
                <a href="./pages/projects.html">Projects</a>

                <a href="./pages/team.html">Team</a>
                
                <a href="./pages/contact.html">Contact</a>
            </div>
        `;
    }
}

class CommonFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="footer-nav">
                <div>
                    <a href="./pages/home.html">NUSHDev</a>
                    <ul>
                        <li><a href="./pages/projects.html">Projects</a></li>
                        <li><a href="./pages/team.html">Team</a></li>
                        <li><a href="./pages/contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div class="footer-credits">
                Page content copyright &copy; NUSHDev 2025 unless otherwise stated. NUSHDev is not endorsed by or affiliated with NUS High School.
            </div>
        `;
    }
}

customElements.define("ndv-header", CommonHeader);
customElements.define("ndv-footer", CommonFooter);