# AmeelioUI

[![Build and Deploy](https://github.com/AmeelioDev/AmeelioUI/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/AmeelioDev/AmeelioUI/actions?query=workflow%3A%22Build+and+Deploy%22)
[![Tests](https://github.com/AmeelioDev/AmeelioUI/workflows/Tests/badge.svg)](https://github.com/AmeelioDev/AmeelioUI/actions?query=workflow%3ATests+branch%3A+master)
[![npm version](http://img.shields.io/npm/v/ameelioui.svg?style=flat)](https://www.npmjs.com/package/ameelioui)

The UI component framework for Ameelio: a non-profit technology company committed to transforming prison communications.

## Using AmeelioUI

You can consume this component library in your own project. 

### Installing

Install AmeelioUI as a dependency

```sh
npm install --save ameelioui
```

### Base CSS

In your app, import `ameelioui/dist/css/custom.css`.

### Components

Documentation for all components can be viewed in the [hosted style guide](https://ameeliodev.github.io/AmeelioUI/).

Individual components can be imported individualy. For example:

```js
import Button from 'ameelioui/dist/components/Button';
```

You can then use this `Button` component:

```js
<Button variant="secondary">Click me</Button>
```

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Install [Node.js](https://nodejs.org/en/)
* Install [npm](https://www.npmjs.com/get-npm)

### Installing

#### Install Project Dependencies

To install dependencies run

```sh
npm install
```

#### Starting the Project

To start the local development server run

```sh
npm start
```

This runs the interactive component style guide.<br />
Open [http://localhost:6060/](http://localhost:6060/) to view it in the browser.

## Running the tests

### Run unit tests

```sh
npm test
```

## Deployment

To generate a production style guide build run

```sh
npm run build
```

Builds the style guide assets for deployment to the `build/docs` folder. Merges to master are automatically deployed to GitHub Pages.

## Releasing a new version

To release a new version of AmeelioUI, do the following to create a release branch. Replace version_type with `major`, `minor`
or `patch` as appropriate, based on [SemVer](https://semver.org):-

```sh
git checkout -b awesome-release-branch
npm version version_type -m "Release version %s"
git push
git push --tags
```

This will add a commit that updates `package.json` and `package-lock.json` with the updated version number.

Once this branch's PR is merged to master, do the following to publish the release so it can be consumed from npm:-

```sh
# requires an npm user with permissions to release
git checkout master
git pull
npm install
npm publish
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Create React App](https://create-react-app.dev/) - Project bootstrapping
* [React Styleguidist](https://react-styleguidist.js.org/) - Interactive style guide
* [React-Bootstrap](https://react-bootstrap.github.io/) - Base component library

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and [CONTRIBUTING.md](CONTRIBUTING.md) for the process for submitting pull requests to us.

## Authors

See the list of [contributors](https://github.com/AmeelioDev/letters/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
