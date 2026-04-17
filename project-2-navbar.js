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
export class Project2NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2-NavBar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
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

      .buttons {
      border: var(--ddd-border-xs);
      display: block;
      text-align: right;
      padding: var(--ddd-spacing-3);
    }

    .project-2-button{
      z-index: 1;
      display: inline-block;
      width: 200px;
      padding: var(--ddd-spacing-3);
      font-size: 20px;
      position: relative;
      .dropdown{
        display: none;
      }
    }

    .droplink{
      display: grid;
      font-size: 75px;
      color: red;
      place-items: center;
      background-color: green;
    }
    
    .dropbutton{
      display: block;
      height: 100px;
      width: 200px;
      font-size: 45px;
    }

    .project-2-button:hover{
      .dropdown{
        position: absolute;
      display: block;
       }
    }

    .dropbutton:hover{
      background-color: green;
      overflow: scroll;
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

globalThis.customElements.define(Project2NavBar.tag, Project2NavBar);