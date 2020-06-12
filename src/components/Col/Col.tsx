import React, { Component } from 'react';
import BootstrapCol, { ColProps as BootstrapColProps} from 'react-bootstrap/Col';
import { ElementType } from 'react';
import { ColSpec } from './types';

export interface ColProps extends BootstrapColProps {
    /**
     * Custom element type for this component
     * @default <div>
     */
    as?: ElementType;

    /**
     * The number of columns that will fit next to each other on large devices (>=992px)
     */
    lg?: ColSpec;

    /**
     * The number of columns that will fit next to each other on medium devices (>=768px)
     */
    md?: ColSpec;

    /**
     * The number of columns that will fit next to each other on small devices (>=576px)
     */
    sm?: ColSpec;

    /**
     * The number of columns that will fit next to each other on extra large devices (>=1200px)
     */
    xl?: ColSpec;

    /**
     * The number of columns that will fit next to each other on extra small devices (>=576px)
     */
    xs?: ColSpec;

    /**
     * Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css
     * @default 'row'
     */
    bsPrefix?: string;

    /**
     * One or more class names to be added to the root element of this component
     */
    className?: string;
}

export default class Col extends Component<ColProps> {
    public render() {
        const className = `y-col ${this.props.className ? this.props.className : ''}`
        return (
            <BootstrapCol {...this.props} className={className}/>
        );
    }
}
