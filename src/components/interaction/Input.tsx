/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = css`
    appearance: none;
    background: white;
    border: 1px solid rgba(var(--color-primary-rgb), 0.25);
    border-radius: var(--corners-500);
    font-weight: 300;
    font-size: 1.25rem;
    text-transform: lowercase;
    transition: all var(--transition-300);
    color: black;
    padding: var(--spacing-300) var(--spacing-500);

    &:focus {
        outline: none;
        box-shadow: var(--shadow-outline);
    }
`;

interface InputProps {
    /**
     * The input type.
     */
    type?: string;
    /**
     * Input value
     */
    value: string;
    /**
     * Optional click handler
     */
    onChange?: (e: any) => void;
}

/**
 * Primary UI component for user input
 */
export const Input = ({
    type = 'text',
    ...props
}: InputProps & React.HTMLProps<HTMLInputElement>) => {
    return <input type={type} css={styles} {...props} />;
};
