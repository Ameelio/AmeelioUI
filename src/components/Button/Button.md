### Examples

Basic button:

```js
<Button>Push Me</Button>
```

Secondary button:

```js
const { ButtonVariant } = require('.');

<Button
  variant={ButtonVariant.SECONDARY}
>Push Me</Button>
```

Disabled button:

```js
<Button
  disabled={true}
>Push Me</Button>
```

Block button:

```js
<Button
  block={true}
>Push Me</Button>
```

Small button:

```js
const { ButtonSize } = require('.');

<Button
  size={ButtonSize.SMALL}
>Push Me</Button>
```

Large button:

```js
const { ButtonSize } = require('.');

<Button
  size={ButtonSize.LARGE}
>Push Me</Button>
```
