import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Col, { ColProps } from './Col';
import Container from '../Container';
import Row from '../Row';

const sampleText = 'Some text';

describe('<Row />', () => {
    let component: ShallowWrapper<ColProps>;

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

    describe('with one column width', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col>{sampleText}</Col>
                    <Col xs={6}>{sampleText}</Col>
                    <Col>{sampleText}</Col>
                </Row>
                <Row>
                    <Col>{sampleText}</Col>
                    <Col xs={5}>{sampleText}</Col>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with auto column width', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col xs lg='2'>{sampleText}</Col>
                    <Col md='auto'>{sampleText}</Col>
                    <Col xs lg='2'>{sampleText}</Col>
                </Row>
                <Row>
                    <Col>{sampleText}</Col>
                    <Col md='auto'>{sampleText}</Col>
                    <Col xs lg='2'>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with auto width small breakpoint', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col sm>{sampleText}</Col>
                    <Col sm>{sampleText}</Col>
                    <Col sm>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with mixed breakpoints', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col xs={12} md={8}>{sampleText}</Col>
                    <Col xs={6} md={4}>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with breakpoint order numbers', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col xs>{sampleText}</Col>
                    <Col xs={{ order: 12 }}>{sampleText}</Col>
                    <Col xs={{ order: 1 }}>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with breakpoint order keywords', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col xs={{ order: 'last' }}>{sampleText}</Col>
                    <Col xs>{sampleText}</Col>
                    <Col xs={{ order: 'first' }}>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with offsets', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>{sampleText}</Col>
                    <Col md={{ span: 3, offset: 3 }}>{sampleText}</Col>
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
                <Row>
                    <Col bsPrefix="ameelio-container">{sampleText}</Col>
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
                <Row>
                    <Col className="TEST_CLASSNAME">{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });
});