import { provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './descendants/my-descendants';
import { DataObjectInterface } from './my.interfaces';
import { myContext } from './myContext';

// my-element.ts
@customElement('my-element')
/**
 * 
 * 
 * 
 * state and reducer are placed here
 * 
 * 
 * 
 */
export class MyElement extends LitElement {
  /**
   * Providing a context at the root element to maintain application state
   */
  @provide({ context: myContext })
  @property({ attribute: false })
  myDataObject: DataObjectInterface = {
    name: '',
    title: '',
    description: '',
    metadata: {
      date: '',
      time: '',
      status: 'REJECTED',
    },
    tags: [],
  } as DataObjectInterface;

  static styles = [
    css`
      .container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        overflow-wrap: break-word;
      }
    `,
  ];

  cal() {

    return 'as'

  }

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot?.addEventListener('button-pushed', async (e: any) => {
      const val = await this.cal();
      const newTagss = this.myDataObject.tags.concat(val);
      // only updating tags but it is in a nested object and is an array of strings
      this.myDataObject = { ...this.myDataObject, tags: newTagss};
    });

    this.shadowRoot?.addEventListener('input-text-changed', (e: any) => {
      // only updating name but it is in a nested object
      this.myDataObject = { ...this.myDataObject, name: 'asd' };
    });

    this.shadowRoot?.addEventListener('input-date-changed', (e: any) => {
      // only updating name but it is in a nested object
      this.myDataObject = {
        ...this.myDataObject,
        metadata: { ...this.myDataObject.metadata, date: e.detail },
      };
    });

    this.shadowRoot?.addEventListener('status-update', (e: any) => {
      // only updating name but it is in a nested object
      this.myDataObject = {
        ...this.myDataObject,
        metadata: { ...this.myDataObject.metadata, status: e.detail },
      };
    });
  }

  render() {
    return html`
      <div class="container">
        <my-child ></my-child>
      </div>
    `;
  }
}
