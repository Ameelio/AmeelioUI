import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Row, { RowProps } from './Row';
import Container from '../Container';
import Col from '../Col';

const sampleText = 'Some text';

describe('<Row />', () => {
    let component: ShallowWrapper<RowProps>;

    describe('with default options', () => {
        beforeEach(() => {
            component = shallow(<Container>
                <Row>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with row breakpoints', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row xs={2} md={4} lg={6}>
                    <Col>{sampleText}</Col>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with row breakpoints that override column breakpoints', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row md={4}>
                    <Col>{sampleText}</Col>
                    <Col xs={6}>{sampleText}</Col>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with custom base class prefix', () => {
        beforeEach(() => {
            component = shallow(<Container>
                <Row bsPrefix="ameelio-container">
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with additional className', () => {
        beforeEach(() => {
            component = shallow(<Container>
                <Row className="TEST_CLASSNAME">
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });
});