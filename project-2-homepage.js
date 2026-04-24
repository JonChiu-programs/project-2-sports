/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `project-2-homepage
 * 
 * @demo index.html
 * @element project-2-sports
 */
export class Project2homepage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2-homepage";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    //this.homeImage = new URL(`./assets/HomeImage.jpeg`, import.meta.url).href;
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/project-2-sports.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      //homeImage: { type: String },
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      .homeImage{
        position: relative;
        display: flex;
        color: var(--ddd-theme-default-roarGolden);
        text-align: center;
        padding-left: var(--ddd-spacing-0);
        align-items: center;
        justify-content: center;
        background-image: url("./assets/HomeImage.jpeg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: rgba(255, 255, 255, .5);
        height: 75vh;
        background-blend-mode: lighten;
      }

      h3{
        font-size: 100px;
      }
      
      project-2-textbox{
        display: block;
        border: var(--ddd-border-md);
        padding-left: var(--ddd-spacing-3);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Project2homepage.tag, Project2homepage);