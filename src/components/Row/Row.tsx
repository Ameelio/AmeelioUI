import React, { Component } from 'react';
import BootstrapRow, { RowProps as BootstrapRowProps} from 'react-bootstrap/Row';
import { ElementType } from 'react';
import { RowSpec } from './types';

export interface RowProps extends BootstrapRowProps {
    /**
     * Custom element type for this component
     * @default <div>
     */
    as?: ElementType;

    /**
     * The number of columns that will fit next to each other on large devices (>=992px)
     */
    lg?: RowSpec;

    /**
     * The number of columns that will fit next to each other on medium devices (>=768px)
     */
    md?: RowSpec;

    /**
     * Removes the gutter spacing between Cols as well as any added negative margins
     * @default false
     */
    noGutters?: boolean;

    /**
     * The number of columns that will fit next to each other on small devices (>=576px)
     */
    sm?: RowSpec;

    /**
     * The number of columns that will fit next to each other on extra large devices (>=1200px)
     */
    xl?: RowSpec;

    /**
     * The number of columns that will fit next to each other on extra small devices (>=576px)
     */
    xs?: RowSpec;

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

export default class Row extends Component<RowProps> {
    public render() {
        const className = `y-row ${this.props.className ? this.props.className : ''}`
        return (
            <BootstrapRow {...this.props} className={className}/>
        );
    }
}
