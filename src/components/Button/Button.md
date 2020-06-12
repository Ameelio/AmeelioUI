### Examples

#### Variants
The `variant` prop can be used to quickly create buttons of various styles.

```js
const { ButtonVariant } = require('.');
<>
  <Button variant={ButtonVariant.PRIMARY}>Primary</Button>{' '}
  <Button variant={ButtonVariant.SECONDARY}>Secondary</Button>{' '}
  <Button variant={ButtonVariant.SUCCESS}>Success</Button>{' '}
  <Button variant={ButtonVariant.WARNING}>Warning</Button>{' '}
  <Button variant={ButtonVariant.DANGER}>Danger</Button>{' '}
  <Button variant={ButtonVariant.INFO}>Info</Button>{' '}
  <Button variant={ButtonVariant.LIGHT}>Light</Button>{' '}
  <Button variant={ButtonVariant.DARK}>Dark</Button>{' '}
<Button variant={ButtonVariant.LINK}>Link</Button>
</>
```

#### Outline buttons
The `variant` prop also offers outline variants which have no background color.

```js
const { ButtonVariant } = require('.');
<>
  <Button variant={ButtonVariant.OUTLINE_PRIMARY}>Primary</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_SECONDARY}>Secondary</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_SUCCESS}>Success</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_WARNING}>Warning</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_DANGER}>Danger</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_INFO}>Info</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_LIGHT}>Light</Button>{' '}
  <Button variant={ButtonVariant.OUTLINE_DARK}>Dark</Button>
</>
```

#### Button tags
`Button` will usually render a HTML `<button>` element. However, you can render whatever you'd like using the `href` prop to render an `<a />` element or the `as` prop to render wahtever element you'd like.

```js
const { ButtonType } = require('.');
<>
  <Button href="#">Link</Button>{' '}
  <Button type={ButtonType.BUTTON}>Button</Button>{' '}
  <Button as="input" type={ButtonType.BUTTON} value="Input" />{' '}
  <Button as="input" type={ButtonType.SUBMIT} value="Submit" />{' '}
  <Button as="input" type={ButtonType.RESET} value="Reset" />
</>
```

#### Sizes
Buttons have small and large size variants.

```js
const { ButtonVariant, ButtonSize } = require('.');
<>
  <div className="mb-2">
    <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE}>
      Large button
    </Button>{' '}
    <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE}>
      Large button
    </Button>
  </div>
  <div>
    <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.SMALL}>
      Small button
    </Button>{' '}
    <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SMALL}>
      Small button
    </Button>
  </div>
</>
```

The `block` prop allows you to create buttons that span the full width of the parent element.

```js
const { ButtonVariant, ButtonSize } = require('.');
<>
  <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE} block>
    Block level button
  </Button>{' '}
  <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE} block>
    Block level button
  </Button>
</>
```

#### Active state
The button's active state can be set manually with the `active` prop.

```js
const { ButtonVariant, ButtonSize } = require('.');
<>
  <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE} active>
    Primary button
  </Button>{' '}
  <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE} active>
    Button
  </Button>
</>
```

#### Disabled state
The button can be made to appear inactive with the `disabled` prop. This will prevent all `onClick` handlers from firing.

```js
const { ButtonVariant, ButtonSize } = require('.');
<>
  <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE} disabled>
    Primary button
  </Button>{' '}
  <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE} disabled>
    Button
  </Button>{' '}
  <Button href="#" variant={ButtonVariant.SECONDARY} size={ButtonSize.LARGE} disabled>
    Link
  </Button>
</>
```

#### Button loading state
To give visual feedback when activiating an async action, you can update the `Button` props from state.

```js
const { ButtonVariant } = require('.');
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant={ButtonVariant.PRIMARY}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
  );
}

<LoadingButton />;
```
