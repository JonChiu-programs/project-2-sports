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
    this.activePage = window.location.hash.replace("#", "") || "home";
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
      activePage: { type: String, reflect: true },
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

       .homeImage{
        position: relative;
        display: flex;
        color: var(--ddd-theme-default-roarGolden);
        text-align: center;
        padding-left: var(--ddd-spacing-0);
        align-items: center;
        justify-content: center;
        background-image: url('./assets/General/HomeImage.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: rgba(255, 255, 255, .5);
        height: 75vh;
        background-blend-mode: lighten;
      }

      h3{
        font-size: 100px;
      }

      project-2-webpage{
        display: flex;
        border: var(--ddd-border-md);
      }

      .about, .sports{
        display: block;
      }
      
      .grudgbyHeader{
        text-align: center;
        font-size: 5vh;
        font-size: 5vw;
      }

      project-2-textBox{
        border: var(--ddd-border-md);
      }

      .webText{
        display: inline-block;
        width: 65vw;
        border: var(--ddd-border-md);
        font-size: 3vh;
        font-size: 2vw;
      }

      ul {
        list-style-type: disc;
      }

      ul li::marker {
          color: red;
      }

      ul li{
        font-size: 2vh;
        font-size: 2vw;
      }

      project-2-imgHolder{
        display: grid;
        border: var(--ddd-border-md);
        padding: var(--ddd-spacing-0);
        width: 35vw;
        place-items: center;
      }

      .sportsImg{
        display: block;
        height: 20vh;
        width: 30vw;
        padding: var(--ddd-spacing-3);
      }
      
    `];
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hashchange", () => {
      this.activePage = window.location.hash.replace("#", "") || "home";
    });
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", () => {
      this.activePage = window.location.hash.replace("#", "") || "home";
    });
    super.disconnectedCallback();
  }

  // Lit render the HTML
  render() {
   switch (this.activePage) {
      case "home":
        return this.renderHome();
      case "about":
        return this.renderAbout();
      case "sports":
        return this.renderSports();
      case "grudgby":
        return this.renderGrudgby();
      case "flyerDerby":
        return this.renderFlyerDerby();
      case "teams":
        return this.renderTeams();
      case "banshees":
        return this.renderBanshees();
      case "emeraldEntrails":
        return this.renderEmeraldEntrails();
      case "schedule":
        return this.renderSchedule();
      default:
        return this.renderHome();
    }
  }

  renderHome() {
    return html`
      <project-2-homepage>
        <div class="homeImage"><h3>Welcome to the <br> Hexside School of Magic and Demonics</h3></div>
        <project-2-textbox>Welcome to the Hexside School of Magic and Demonics.</project-2-textbox>
      </project-2-homepage>
    `;
  }

  renderAbout() {
    return html`
      <project-2-webpage class="about">
        <div class="homeImage"><h3>About Hexside</h3></div>
        <project-2-textbox>
          <h2>What is Hexside</h2>
          <p>The Hexside School of Magic and Demonics is a prominent setting in the animated show "The Owl House". It is a premier institution for young witches and demons with sports programs to match.</p>
          <p>Founded by the great Hieronymus Bump, we pride ourselves on a multi-track approach to magic.</p>
        </project-2-textbox>
      </project-2-webpage>
    `;
  }

  renderSports() {
    return html`
      <project-2-webpage class="sports">
        <div class="homeImage"><h3>Hexside Sports</h3></div>
        <project-2-textbox>
          <h2>Grudgby & Flyer Derby</h2>
          <p>Whether you're flying high in Flyer Derby or smashing balls in Grudgby, 
          Hexside has the most competitive athletic programs in the realm.</p>
          <ul>
            <li><strong>Grudgby:</strong> A high-stakes, magical version of rugby played on the ground and in the air.</li>
            <li><strong>Flyer Derby:</strong> A team-based flight competition focusing on speed and agility.</li>
          </ul>
        </project-2-textbox>
      </project-2-webpage>
    `;
  }

  renderGrudgby() {
    return html`
      <project-2-webpage>
        <project-2-textbox class="webText">
          <h2 class=grudgbyHeader>Grudgby</h2>
          <p>Whether you're flying high in Flyer Derby or smashing balls in Grudgby, 
          Hexside has the most competitive athletic programs in the realm.</p>
        <ul>
          <li><strong>Grudgby:</strong> A high-stakes, magical version of rugby played on the ground and in the air.</li>
          <li><strong>Flyer Derby:</strong> A team-based flight competition focusing on speed and agility.</li>
        </ul>
        </project-2-textbox>
        <project-2-imgHolder>
          <img class= "sportsImg" alt= "sportsImg" src="./assets/Sports/Grudgby/GrudgbyImg.jpeg">
          <img class= "sportsImg" alt= "sportsImg" src="./assets/Sports/Grudgby/Clawthornes.jpeg">
          <img class= "sportsImg" alt= "sportsImg" src="./assets/Sports/Grudgby/RustySmidge.jpeg">
        </project-2-imgHolder>
      </project-2-webpage>
    `;
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