import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Container, { ContainerProps } from './Container';
import Row from '../Row';
import Col from '../Col';

const sampleText = 'Some text';

describe('<Container />', () => {
    let component: ShallowWrapper<ContainerProps>;

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

    describe('with fluid style', () => {
        beforeEach(() => {
            component = shallow(<Container fluid>
                <Row>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with fluid style and breakpoint', () => {
        beforeEach(() => {
            component = shallow(<Container fluid="md">
                <Row>
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
            component = shallow(<Container bsPrefix="ameelio-container">
                <Row>
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
            component = shallow(<Container className="TEST_CLASSNAME">
                <Row>
                    <Col>{sampleText}</Col>
                </Row>
            </Container>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });
});