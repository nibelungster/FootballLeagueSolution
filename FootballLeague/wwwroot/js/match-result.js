class Match extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });

        const container = this.container = document.createElement("div");
        container.setAttribute("class", "container");

        const team1 = this.container.team1 = document.createElement("div");
        team1.setAttribute("class", "inside");

        const team2 = this.container.team2 = document.createElement("div");
        team2.setAttribute("class", "inside");

        const icon = this.container.icon = document.createElement("div");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);

        let imgUrl;
        if (this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "favicon.ico";
        }

        const img = this.container.icon.img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        console.log(style.isConnected);

        style.textContent = `
    .container {
        border: 1px solid black;
        overflow-y: hidden;
        white-space: nowrap;
        background: yellow;
        border-radius: 10px;
        padding-top: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
    }

    .inside {
        display: inline-block;
        background: white;
        border-radius: 2px;
        width: 50%;
        text-align: center;
        border: 1px green;
        padding-top: 1px;
        padding-right: 1px;
        padding-bottom: 1px;
        padding-left: 1px;
    }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(container);
        container.appendChild(team1);
        container.appendChild(team2);
        container.appendChild(icon);
    }

    connectedCallback() {
        // Create a shadow root
        const team1 = this.getAttribute("team1");
        const team2 = this.getAttribute("team2");
        const imgSrc = this.getAttribute("imgSrc");
        this.container.team1.innerText = team1;
        this.container.team2.innerText = team2;
        this.container.icon.img.src = imgSrc;
    }
}

customElements.define('match-result', Match);