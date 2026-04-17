/**
 * Copyright 2026 JonChiu-programs
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./project-2-creatortag.js";
import "./project-2-textbox.js";

/**
 * `project-2-sports`
 * 
 * @demo index.html
 * @element project-2-sports
 */
export class Project2Sports extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2-sports";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.homeImage = new URL(`./assets/HomeImage.jpeg`, import.meta.url).href;
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
      homeImage: { type: String },
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
        margin: var(--ddd-spacing-0);
      }

      project-2-homepage{
        display: block;
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

      project-2-navbar{
      width: 100vw;
      display: inline-block;
      border: var(--ddd-border-xs);
    }

    project-2-creatortag{
      display: inline-block;
      border: var(--ddd-border-xs);
      justify-content: left;
    }

    .buttons {
      border: var(--ddd-border-xs);
      display: block;
      text-align: right;
      padding: var(--ddd-spacing-1);
    }

    .project-2-button{
      z-index: 1;
      display: inline-block;
      width: 200px;
      padding: var(--ddd-spacing-0);
      font-size: 20px;
      position: relative;
      .dropdown{
        display: none;
      }
    }

    .droplink{
      display: block;
      width: 200px;
      display: grid;
      border-bottom: var(--ddd-border-md);
      font-size: 35px;
      text-align: center;
      color: red;
      place-items: center;
      background-color: green;
    }
    
    .dropbutton{
      border: var(--ddd-border-md);
      display: block;
      height: 50px;
      width: 200px;
      font-size: 35px;
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
      color: red;
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <project-2-navbar>
    <section class="buttons">
      <div class="project-2-button">
      <button id="sportsButton" class="dropbutton">Sports</button>
        <div class=dropdown>
        <a class="droplink" href="https://youtu.be/dQw4w9WgXcQ?si=XXbxb65FXc2WTeo3">Grudgby</a>
        <a class="droplink" href="https://youtu.be/dQw4w9WgXcQ?si=XXbxb65FXc2WTeo3">Flyer Derby</a>
        </div>
      </div>
      <div class="project-2-button">
        <button id="teamsButton" class="dropbutton">Teams</button>
        <div class=dropdown>
        <a class="droplink" href="https://youtu.be/dQw4w9WgXcQ?si=XXbxb65FXc2WTeo3">Banshees</a>
        <a class="droplink" href="https://youtu.be/dQw4w9WgXcQ?si=XXbxb65FXc2WTeo3">Emerald Entrails</a>
        </div>
      </div>
      <div class="project-2-button">
        <button id="scheduleButton" class="dropbutton">Schedule</button>
      </div>
    </section>
    </project-2-navbar>
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

globalThis.customElements.define(Project2Sports.tag, Project2Sports);