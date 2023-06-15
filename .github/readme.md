# Github Actions

Create folder **workflows** inside of **.github**

Create basic.yml file

```yml
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Clear npm cache
        run: npm cache clean --force
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
      - name: Checkout
        uses: actions/checkout@v3
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          install-command: npm install
          build: npm run build
          start: npm start
```

`install-command: npm install` is used to install devDependencies