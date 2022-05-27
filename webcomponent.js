class AppCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const title = this.getAttribute('title')

    shadowRoot.innerHTML = `
        <style>
          .card {
            padding: var(--padding-card, 16px);
            width: var(--width, 344px);
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            color: #3f517d;
          }
        </style>

        <div class="card">
          <div>${title}</div>
        </div>
      `;
  }
}

window.customElements.define('app-card', AppCard);