/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = css`
    appearance: none;
    background: var(--color-primary);
    border: none;
    border-radius: var(--corners-500);
    padding: var(--spacing-300) var(--spacing-500);
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: lowercase;
    cursor: pointer;
    transition: all var(--transition-300);
    color: white;
    filter: drop-shadow(var(--shadow-primary));

    &:hover {
        transform: translate3d(0, 2px, 0);
    }

    &:focus {
        outline: none;
        box-shadow: var(--shadow-outline);
    }
`;

const paddings = new Map([
    ['small', 'var(--spacing-200) var(--spacing-400)'],
    ['medium', 'var(--spacing-300) var(--spacing-500)'],
    ['large', 'var(--spacing-400) var(--spacing-600)'],
]);

interface ButtonProps {
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    children: React.ReactNode;
    [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    size = 'medium',
    children,
    ...props
}: ButtonProps) => {
    const padding = paddings.get(size);
    return (
        <button
            type="button"
            css={css`
                ${styles};
                padding: ${padding};
            `}
            {...props}
        >
            {children}
        </button>
    );
};
