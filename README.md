# AmeelioUI

[![Build and Deploy](https://github.com/AmeelioDev/AmeelioUI/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/AmeelioDev/AmeelioUI/actions?query=workflow%3A%22Build+and+Deploy%22)
[![Tests](https://github.com/AmeelioDev/AmeelioUI/workflows/Tests/badge.svg)](https://github.com/AmeelioDev/AmeelioUI/actions?query=workflow%3ATests+branch%3A+master)

The UI component framework for Ameelio: a non-profit technology company committed to transforming prison communications.

## Using AmeelioUI

You can consume this component library in your own project. 

### Installing

Install AmeelioUI as a dependency

```
npm install --save ameelioui
```

### Components

Documentation for all components can be viewed in the [hosted style guide](https://ameeliodev.github.io/AmeelioUI/).

Individual components can be imported individualy. For example:

```js
import Button from 'ameelioui/dist/components/Button';
```

You can then use this `Button` component:

```
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

```
npm install
```

#### Starting the Project

To start the local development server run

```
npm start
```

This runs the interactive component style guide.<br />
Open [http://localhost:6060/](http://localhost:6060/) to view it in the browser.

## Running the tests

### Run unit tests

```
npm test
```

## Deployment

To generate a production build run

```
npm run build
```

Builds the style guide assets for deployment to the `build/docs` folder. Merges to master are automatically deployed to GitHub Pages.

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
