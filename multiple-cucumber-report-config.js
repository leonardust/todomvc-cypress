const report = require("multiple-cucumber-html-reporter");
const cypressVersion = require("cypress/package.json").version;
const nodeVersion = process.version;
const fs = require("fs");
const os = require("node:os");

function getBrowserDetails() {
  const fileContent = fs.readFileSync("./browserDetails.json", "utf-8");
  return JSON.parse(fileContent);
}

const browserDetails = getBrowserDetails();

report.generate({
  jsonDir: "./cypress/reports/cucumber-json/",
  reportPath: "./cypress/reports/cucumber-report/",
  openReportInBrowser: true,
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: browserDetails.displayName || "electron",
      version:
        browserDetails.displayName + " " + browserDetails.majorVersion ||
        "unknown-version",
    },
    device: os.type() || "unknown-platform",
    platform: {
      name: os.type() || "unknown-type",
      version: os.version() || "unknown-version",
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
