class Match extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
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
    }

    connectedCallback() {
        const homeTeamScore = this.getAttribute("homeTeamScore");
        const awayTeamScore = this.getAttribute("awayTeamScore");
        const homeTeamImage = this.getAttribute("homeTeamImage");
        const awayTeamImage = this.getAttribute("awayTeamImage");
        const imgSrc = this.getAttribute("imgSrc");

        this.shadowRoot.innerHTML = `
        <style>

    .leagueimg {
        width:40px;
        height:40px;
    }

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
        width: 40%;
        text-align: center;
        border: 1px green;
        padding-top: 1px;
        padding-right: 1px;
        padding-bottom: 1px;
        padding-left: 1px;
    }

    .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
    }


        </style>
        <div class="container" >
            <div>
                <img src="${imgSrc}" class="leagueimg">
            </div>
            <div class="inside">
                <p>${homeTeamScore}</p>
                <img src="${homeTeamImage}" style="width:40px">
            </div>
            <div class="inside">
                <p>${awayTeamScore}</p>
                <img src="${awayTeamImage}" style="width:40px">
            </div>
        </div>
        `;
    }
}

customElements.define('match-result', Match);