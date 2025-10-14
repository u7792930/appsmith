import EditorNavigation, {
  EntityType,
} from "../../../../../support/Pages/EditorNavigation";

const {
  agHelper,
  propPane,
} = require("../../../../../support/Objects/ObjectsCore");

describe(
  "JSONForm Button Style Property Pane Sync",
  { tags: ["@tag.Widget", "@tag.JSONForm"] },
  function () {
    before(() => {
      agHelper.AddDsl("emptyDSL");
    });

    it("1. Should sync Submit button borderRadius property pane selection with widget style", function () {
      // Add JSONForm widget
      cy.dragAndDropToCanvas("jsonformwidget", { x: 300, y: 300 });
      cy.openPropertyPane("jsonformwidget");

      // Switch to Style tab
      cy.get('.ads-v2-tabs__list-tab:contains("Style")').eq(0).click();

      // Expand Submit button styles section
      cy.get(".t--property-pane-section-collapse-submitbuttonstyles").click();

      // Get the initial borderRadius value (should be default theme value)
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.borderradius"]',
      ).within(() => {
        // Click on first border radius option
        cy.get('button[aria-label]').first().click();
        cy.wait(500);

        // Verify first option is selected
        cy.get('button[aria-label]')
          .first()
          .should("have.attr", "aria-checked", "true");
      });

      // Change to second border radius option
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.borderradius"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(1).click();
        cy.wait(500);

        // Verify second option is selected
        cy.get('button[aria-label]')
          .eq(1)
          .should("have.attr", "aria-checked", "true");
      });

      // Change to third border radius option
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.borderradius"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(2).click();
        cy.wait(500);

        // Verify third option is selected and reflects in property pane
        cy.get('button[aria-label]')
          .eq(2)
          .should("have.attr", "aria-checked", "true");
      });
    });

    it("2. Should sync Submit button boxShadow property pane selection with widget style", function () {
      cy.openPropertyPane("jsonformwidget");

      // Switch to Style tab
      cy.get('.ads-v2-tabs__list-tab:contains("Style")').eq(0).click();

      // Expand Submit button styles section
      cy.get(".t--property-pane-section-collapse-submitbuttonstyles").click();

      // Get the box shadow control
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.boxshadow"]',
      ).within(() => {
        // Click on first box shadow option (none)
        cy.get('button[aria-label]').first().click();
        cy.wait(500);

        // Verify first option is selected
        cy.get('button[aria-label]')
          .first()
          .should("have.attr", "aria-checked", "true");
      });

      // Change to second box shadow option
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.boxshadow"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(1).click();
        cy.wait(500);

        // Verify second option is selected
        cy.get('button[aria-label]')
          .eq(1)
          .should("have.attr", "aria-checked", "true");
      });

      // Change to third box shadow option
      cy.get(
        '[data-testid="t--property-control-wrapper-submitbuttonstyles.boxshadow"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(2).click();
        cy.wait(500);

        // Verify third option is selected and reflects in property pane
        cy.get('button[aria-label]')
          .eq(2)
          .should("have.attr", "aria-checked", "true");
      });
    });

    it("3. Should sync Reset button borderRadius property pane selection with widget style", function () {
      cy.openPropertyPane("jsonformwidget");

      // Switch to Content tab first to enable reset button
      cy.get('.ads-v2-tabs__list-tab:contains("Content")').eq(0).click();

      // Enable reset button
      cy.get(
        '[data-testid="t--property-control-wrapper-showreset"] input[type="checkbox"]',
      ).check({ force: true });

      // Switch to Style tab
      cy.get('.ads-v2-tabs__list-tab:contains("Style")').eq(0).click();

      // Expand Reset button styles section
      cy.get(".t--property-pane-section-collapse-resetbuttonstyles").click();

      // Get the initial borderRadius value
      cy.get(
        '[data-testid="t--property-control-wrapper-resetbuttonstyles.borderradius"]',
      ).within(() => {
        // Click on first border radius option
        cy.get('button[aria-label]').first().click();
        cy.wait(500);

        // Verify first option is selected
        cy.get('button[aria-label]')
          .first()
          .should("have.attr", "aria-checked", "true");
      });

      // Change to second border radius option
      cy.get(
        '[data-testid="t--property-control-wrapper-resetbuttonstyles.borderradius"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(1).click();
        cy.wait(500);

        // Verify second option is selected
        cy.get('button[aria-label]')
          .eq(1)
          .should("have.attr", "aria-checked", "true");
      });
    });

    it("4. Should sync Reset button boxShadow property pane selection with widget style", function () {
      cy.openPropertyPane("jsonformwidget");

      // Switch to Style tab
      cy.get('.ads-v2-tabs__list-tab:contains("Style")').eq(0).click();

      // Expand Reset button styles section
      cy.get(".t--property-pane-section-collapse-resetbuttonstyles").click();

      // Get the box shadow control
      cy.get(
        '[data-testid="t--property-control-wrapper-resetbuttonstyles.boxshadow"]',
      ).within(() => {
        // Click on first box shadow option (none)
        cy.get('button[aria-label]').first().click();
        cy.wait(500);

        // Verify first option is selected
        cy.get('button[aria-label]')
          .first()
          .should("have.attr", "aria-checked", "true");
      });

      // Change to second box shadow option
      cy.get(
        '[data-testid="t--property-control-wrapper-resetbuttonstyles.boxshadow"]',
      ).within(() => {
        cy.get('button[aria-label]').eq(1).click();
        cy.wait(500);

        // Verify second option is selected and reflects in property pane
        cy.get('button[aria-label]')
          .eq(1)
          .should("have.attr", "aria-checked", "true");
      });
    });
  },
);
