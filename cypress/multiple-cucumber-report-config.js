const report = require("multiple-cucumber-html-reporter");

const browserName = process.env.BROWSER_NAME || "unknown-browser";
const browserVersion = process.env.BROWSER_VERSION || "unknown-version";
const device = process.env.DEVICE || "unknown-device";
const platformName = process.env.PLATFORM_NAME || "unknown-platform";
const platformVersion = process.env.PLATFORM_VERSION || "unknown-version";

const cypressVersion = require("cypress/package.json").version;
const nodeVersion = process.version;

report.generate({
  jsonDir: "./cypress/reports/cucumber-json/",
  reportPath: "./cypress/reports/cucumber-report/",
  openReportInBrowser: true,
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: browserName,
      version: browserVersion,
    },
    device: device,
    platform: {
      name: platformName,
      version: platformVersion,
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "todomvc-cucumber" },
      { label: "Release", value: "1.0.0" },
      { label: "Node Version", value: nodeVersion },
      { label: "Cypress Version", value: cypressVersion },
    ],
  },
});
