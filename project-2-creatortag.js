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
export class Project2creatortag extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2-creatortag";
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

      .avatar{
      display: inline-block;
      height: 70px;
      width: 70px;
      background-color: var(--ddd-theme-default-white);
      border-radius: var(--ddd-radius-circle);
    }

    .avatarText{
      display: inline-block
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <img class="avatar" alt="author" src="./assets/1-Light_glyph.png">
    <h3 class="avatarText">JonChiu-programs</h3>
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

globalThis.customElements.define(Project2creatortag.tag, Project2creatortag);