import { LitElement, html, css } from 'lit-element';

export class MyComponent extends LitElement {
    firstUpdated() {
        this.count = 0;
        const shadow = this.shadowRoot;
        const buttonLeague1 = shadow.querySelector("button");
        buttonLeague1.onclick = (e) => {
            this.count++;
            this.dispatchEvent(new CustomEvent("clicked", {
                detail: this.count //data
            }));
        }

        const buttonLeague2 = shadow.querySelector("button");
        buttonLeague2.onclick = (e) => {
            this.count++;
            this.dispatchEvent(new CustomEvent("clicked", {
                detail: this.count //data
            }));
        }
    }

    render() {
        return html`<button>Click me!</button>
    <child-component> </child-component>`;
    }
}
