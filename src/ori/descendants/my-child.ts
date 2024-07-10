import { LitElement, html, css } from "lit";
import { property, state, customElement } from "lit/decorators.js";
import { consume } from "@lit/context";
import { myContext } from "../myContext";
import { DataObjectInterface } from "../my.interfaces"
import {StateElement} from "../StateElement";
// my-child.ts
// only has a button in it with an array to keep track of the clicks/state
@customElement('my-child')
export class MyChild extends StateElement {
  @consume({ context: myContext, subscribe: true })
  @state()
  myData: DataObjectInterface = {} as DataObjectInterface;

  // constructor() {
  //   super();
  //   this.numberValue = 0;
  // }

  static styles = [
    css`
      .container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }
      button {
        border-radius: 10px;
        padding: 1rem;
        cursor: pointer;
        color: #fff;
      }

      .purple {
        background: rebeccapurple;
      }

      .success {
        background: green;
      }

      .danger {
        background: tomato;
      }
    `,
  ];

  render() {
    return html`
      <div class="container">
      <p> --- This Root works!</p>
        <p>I am only handling the data and the events</p>
        <code>${JSON.stringify(this.myData)}</code>




        <div>My Child Works!</div>
        <input
          autocomplete="off"
          style="width: 100%"
          @input="${this._handleInput}"
          name="name"
          type="text"
          placeholder="update me and i will update the name property"
        />
        <!--<input @change="${this._handleInputDate}" type="date" />-->
        <my-grandchild></my-grandchild>
        <button class="purple" @click="${this._handleButtonClick}">
          This is in the child. Click me to see magic happen
        </button>
        <button
          class="status-change ${
            this.myData.metadata.status.toUpperCase() === 'REJECTED' ? 'success' : 'danger'
          }"
          @click="${this._handleStatusUpdate}"
        >
          ${this.myData.metadata.status.toUpperCase() === 'REJECTED' ? 'APPROVE' : 'REJECT'}
        </button>
      </div>
    `;
  }



  _handleStatusUpdate() {
    this._createEvent(
      'status-update',
      this.myData.metadata.status.toUpperCase() === 'REJECTED' ? 'APPROVED' : 'REJECTED'
    );
  }

  _handleInput() {
    this._createEvent(
      'input-text-changed',
      (this.shadowRoot?.querySelector('input[type=text]') as HTMLInputElement).value || ''
    );
  }

  _handleInputDate() {
    this._createEvent(
      'input-date-changed',
      (this.shadowRoot?.querySelector('input[type=date]') as HTMLInputElement).value || ''
    );
  }

  _handleButtonClick() {
    // this.tags.push(`Tag-${this.numberValue}`);
    // this.numberValue++;
    this._createEvent('button-pushed', '');
  }
}