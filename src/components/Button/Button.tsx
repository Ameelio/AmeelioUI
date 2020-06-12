import React, { Component } from 'react';
import BootstrapButton, { ButtonProps as BootstrapButtonProps } from 'react-bootstrap/Button';
import { ElementType } from 'react';
import { ButtonSize, ButtonType, ButtonVariant } from './types';

import './Button.css';

export { ButtonSize, ButtonType, ButtonVariant }

export interface ButtonProps extends BootstrapButtonProps {
    /**
     * Manually set the visual state of the button to :active
     * @default false
     */
    active?: boolean;

    /**
     * Custom element type for this component
     */
    as?: ElementType;

    /**
     * Span full width of the Button parent
     */
    block?: boolean;

    /**
     * Disables the Button, preventing mouse events
     * @default false
     */
    disabled?: boolean;

    /**
     * Providing href will render an <a> element, styled as a button
     */
    href?: string;

    /**
     * Specifies large or small button
     */
    size?: ButtonSize;

    /**
     * Defines HTML button type attribute
     * @default ButtonType.BUTTON
     */
    type?: ButtonType;

    /**
     * One or more button variant combinations including outline variants
     * @default ButtonVariant.PRIMARY
     */
    variant?: ButtonVariant;

    /**
     * Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css
     * @default 'btn'
     */
    bsPrefix?: string;

    /**
     * One or more class names to be added to the root element of this component
     */
    className?: string;
}

export default class Button extends Component<ButtonProps> {
    public render() {
        const className = `y-button ${this.props.className ? this.props.className : ''}`
        return (
            <BootstrapButton {...this.props} className={className}/>
        );
    }
}
