### Examples

#### Basic container
`Container` provides a means to center and horizontally pad content. Containers provide responsive pixel width.

```js
import Row from '../Row';
import Col from '../Col';

<Container className='border border-primary'>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

#### Fluid container
Fluid containers will span the full width on all viewports and device sizes.

```js
import Row from '../Row';
import Col from '../Col';

<Container fluid className='border border-primary'>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

#### Fluid contianer with breakpoint
Breakpoints can be combined with the `fluid` prop to set the container as fluid up to a specified breakpoint.

```js
import Row from '../Row';
import Col from '../Col';

<Container fluid="md" className='border border-primary'>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```
