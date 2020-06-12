import React, { Component } from 'react';
import BootstrapContainer, { ContainerProps as BootstrapContainerProps} from 'react-bootstrap/Container';
import { ElementType } from 'react';
import { ContainerSize } from './types';

export { ContainerSize }

export interface ContainerProps extends BootstrapContainerProps {
    /**
     * Custom element type for this component
     * @default <div>
     */
    as?: ElementType;

    /**
     * Allow the Container to fill all of its available horizontal space
     * @default false
     */
    fluid?: boolean | ContainerSize;

    /**
     * Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css
     * @default 'container'
     */
    bsPrefix?: string;

    /**
     * One or more class names to be added to the root element of this component
     */
    className?: string;
}

export default class Container extends Component<ContainerProps> {
    public render() {
        const className = `y-container ${this.props.className ? this.props.className : ''}`
        return (
            <BootstrapContainer {...this.props} className={className}/>
        );
    }
}
