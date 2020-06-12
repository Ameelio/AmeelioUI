### Examples

#### Setting column widths
`Row` allows you to specify the number of columns that will fit next to each other for each breakpoint size.

```js
import Container from '../Container';
import Col from '../Col';

<Container>
  <Row xs={2} md={4} lg={6}>
    <Col className='border border-primary'>1 of 2</Col>
    <Col className='border border-primary'>2 of 2</Col>
  </Row>
  <Row xs={1} md={2}>
    <Col className='border border-primary'>1 of 3</Col>
    <Col className='border border-primary'>2 of 3</Col>
    <Col className='border border-primary'>3 of 3</Col>
  </Row>
</Container>
```

Note that `Row` column widths will override Col widths set on lower breakpoints when viewed on larger screens. The elow `Col` size will be overriden by the `Row` size on medium and larger screens.

```js
import Container from '../Container';
import Col from '../Col';

<Container>
  <Row md={4}>
    <Col className='border border-primary'>1 of 3</Col>
    <Col xs={6} className='border border-primary'>2 of 3</Col>
    <Col className='border border-primary'>3 of 3</Col>
  </Row>
</Container>
```
