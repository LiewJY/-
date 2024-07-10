import { LitElement, html, css } from "lit";

export class StateElement extends LitElement {

  _createEvent(name: string, detail: any) {
    const event = new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail,
    });

    this.dispatchEvent(event);
  }

}