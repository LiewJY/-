import { consume } from "@lit/context";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { DataObjectInterface } from "../my.interfaces";
import { myContext } from "../myContext";

@customElement('my-great-great-grandchild')
export class MyGreatGrandchild extends LitElement {
  /**
   * Consuming the myContext provided from the root element
   */
  @consume({ context: myContext, subscribe: true })
  @state()
  myData: DataObjectInterface = {} as DataObjectInterface;

  render() {
    return html`
      ${
        this.myData.metadata.date
          ? html`<h2>Test my Great Grandchild</h2>
    The Status is: ${this.myData.metadata.status.toUpperCase()}
    <!--The Date set is: ${this.myData.metadata.date}-->
    </div>`
          : html`
            <!--<my-great-great-grandchild></my-great-great-grandchild>-->
          `
      }
    `;
  }
}