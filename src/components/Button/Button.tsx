import React, { Component } from 'react';
import BootstrapButton, { ButtonProps as BootstrapButtonProps } from 'react-bootstrap/Button';
import { ElementType } from 'react';

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
    size?: 'sm' | 'lg';

    /**
     * Defines HTML button type attribute
     * @default 'button''
     */
    type?: 'button' | 'reset' | 'submit';

    /**
     * One or more button variant combinations including outline variants
     * @default 'primary'
     */
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'dark'
        | 'light'
        | 'link'
        | 'outline-primary'
        | 'outline-secondary'
        | 'outline-success'
        | 'outline-danger'
        | 'outline-warning'
        | 'outline-info'
        | 'outline-dark'
        | 'outline-light';

    /**
     * Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css
     * @default 'btn'
     */
    bsPrefix?: string;
}

export default class Button extends Component<ButtonProps> {
    public render() {
        return (
            <BootstrapButton {...this.props} />
        );
    }
}
