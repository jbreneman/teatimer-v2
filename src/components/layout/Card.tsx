/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = css`
    border-radius: var(--corners-500);
    padding: var(--spacing-300) var(--spacing-500);
    font-weight: 300;
    font-size: 1rem;
    text-transform: lowercase;
    background: white;
    color: black;
    border: 1px solid rgba(var(--color-primary-rgb), 0.25);
    box-shadow: var(--shadow-primary);
`;

interface CardProps {
    /**
     * The HTML tag to use for this card. Defaults to div.
     */
    tag?: string;
    /**
     * Card contents
     */
    children: React.ReactNode;
}

/**
 * Primary UI component for section
 */
export const Card = ({ tag = 'div', children, ...props }: CardProps) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag css={styles} {...props}>
            {children}
        </Tag>
    );
};
