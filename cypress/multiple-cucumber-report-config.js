const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/cucumber-json/",
  reportPath: "./cypress/reports/cucumber-report/",
  openReportInBrowser: true,
  displayDuration: true,
  displayReportTime: true,
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "todomvc-cucumber" },
      { label: "Release", value: "1.0.0" },
      { label: "Node Version", value: "16.16.0" },
      { label: "Cypress Version", value: "12.14.0" },
    ],
  },
});
