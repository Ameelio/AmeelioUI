### Examples

#### Auto-layout columns
`Col` will render columns with equal width if no column width is provided.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className='border border-primary'>1 of 2</Col>
    <Col className='border border-primary'>2 of 2</Col>
  </Row>
  <Row>
    <Col className='border border-primary'>1 of 3</Col>
    <Col className='border border-primary'>2 of 3</Col>
    <Col className='border border-primary'>3 of 3</Col>
  </Row>
</Container>
```

#### One column width
If you set the width of only one column, the other columns will automatically resize around it. 

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className='border border-primary'>1 of 3</Col>
    <Col xs={6} className='border border-primary'>2 of 3 (wider)</Col>
    <Col className='border border-primary'>3 of 3</Col>
  </Row>
  <Row>
    <Col className='border border-primary'>1 of 3</Col>
    <Col xs={5} className='border border-primary'>2 of 3 (wider)</Col>
    <Col className='border border-primary'>3 of 3</Col>
  </Row>
</Container>
```

#### Variable width content
Setting the column value to `"auto"` will size columns based on the width of their content.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row  className="justify-content-md-center">
    <Col xs lg='2' className='border border-primary'>1 of 3</Col>
    <Col md='auto' className='border border-primary'>Variable width content</Col>
    <Col xs lg='2' className='border border-primary'>3 of 3</Col>
  </Row>
  <Row>
    <Col className='border border-primary'>1 of 3</Col>
    <Col md='auto' className='border border-primary'>Variable width content</Col>
    <Col xs lg='2' className='border border-primary'>3 of 3</Col>
  </Row>
</Container>
```

#### Responsive grids
`Col` allows column widths to be specified for each breakpoint size (xs, sm, md, lg, xl). For each breakpoint, the number of colums to span can ben set, or you can simply set the prop to `true` for automatic widths.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col sm={8} className='border border-primary'>sm=8</Col>
    <Col sm={4} className='border border-primary'>sm=4</Col>
  </Row>
  <Row>
    <Col sm className='border border-primary'>sm=true</Col>
    <Col sm className='border border-primary'>sm=true</Col>
    <Col sm className='border border-primary'>sm=true</Col>
  </Row>
</Container>
```

Breakpoints can also be mixed and matched to create different grids based on screen size.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  {/* Stack columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8} className='border border-primary'>xs=12 md=8</Col>
    <Col xs={6} md={4} className='border border-primary'>xs=6 md=4</Col>
  </Row>

  {/* Columns start at 50% width on mobile and bump up to 33.3% width on desktop */}  
  <Row>
    <Col xs={6} md={4} className='border border-primary'>xs=6 md=4</Col>
    <Col xs={6} md={4} className='border border-primary'>xs=6 md=4</Col>
    <Col xs={6} md={4} className='border border-primary'>xs=6 md=4</Col>
  </Row>

  {/* Columns always have 50% width on mobile and desktop */}  
  <Row>
    <Col xs={6} className='border border-primary'>xs=6</Col>
    <Col xs={6} className='border border-primary'>xs=6</Col>
  </Row>
</Container>
```

`Col` breakpoint props can also be specified in `object` form: `{span: number, order:number, offset: number}` for specifying offsets and visual ordering.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col xs className='border border-primary'>First, but unordered</Col>
    <Col xs={{ order: 12 }} className='border border-primary'>Second, but last</Col>
    <Col xs={{ order: 1 }} className='border border-primary'>Third, but second</Col>
  </Row>
</Container>
```

The `order` also supports `first` and `last`

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col xs={{order: 'last' }} className='border border-primary'>First, but last</Col>
    <Col xs className='border border-primary'>Second, but unordered</Col>
    <Col xs={{ order: 'first' }} className='border border-primary'>Third, but first</Col>
  </Row>
</Container>
```

For offsetting columns, you can set an `offset` value. For more general layout, use the margin utility class.

```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col md={4} className='border border-primary'>md=4</Col>
    <Col md={{ span: 4, offset: 4 }} className='border border-primary'>{`md={{ span: 4, offset: 4 }}`}</Col>
  </Row>
  <Row>
    <Col md={{ span: 3, offset: 3 }} className='border border-primary'>{`md={{ span: 3, offset: 3 }}`}</Col>
    <Col md={{ span: 3, offset: 3 }} className='border border-primary'>{`md={{ span: 3, offset: 3 }}`}</Col>
  </Row>
  <Row>
    <Col md={{ span: 6, offset: 3 }} className='border border-primary'>{`md={{ span: 6, offset: 3 }}`}</Col>
  </Row>
</Container>
```
