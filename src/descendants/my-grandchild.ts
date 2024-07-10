import { LitElement, html } from "lit";
import { state, customElement } from "lit/decorators.js";
import { consume } from "@lit/context";
import { myContext } from "../myContext";
import { DataObjectInterface } from "../my.interfaces"


// my-grandchild.ts
@customElement('my-grandchild')
export class MyGrandchild extends LitElement {
  /**
   * Consuming the myContext provided from the root element
   */
  @consume({ context: myContext, subscribe: true })
  @state()
  myData: DataObjectInterface = {} as DataObjectInterface;

  render() {
    return html`
      <div>Test my grandchild</div>
      <div style="color: rebeccapurple; font-weight: 600;">
        This is in the grand child component btw
        <!--<code>${JSON.stringify(this.myData)}</code>-->
        ${
          this.myData?.name
            ? html`
              <h3>Hello, my name is ${this.myData.name}</h3>
            `
            : html``
        }
      </div>
      <slot></slot>
      <!-- <my-great-grandchild></my-great-grandchild> -->
    `;
  }
}