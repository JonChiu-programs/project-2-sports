import { html, fixture, expect } from '@open-wc/testing';
import "../project-2-sports.js";

describe("Project2Sports test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <project-2-sports
        title="title"
      ></project-2-sports>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
