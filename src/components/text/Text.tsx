/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = css`
    margin: 0;
    padding: 0;
    text-transform: lowercase;
`;

interface TextProps {
    /**
     * The HTML tag to use for this card. Defaults to span.
     */
    tag?: string;
    /**
     * The text size.
     */
    size?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
    /**
     * Card contents
     */
    children: React.ReactNode;
}

/**
 * Renders text more easily.
 */
export const Text = ({
    tag = 'span',
    size = 300,
    children,
    ...props
}: TextProps) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag
            css={css`
                ${styles};
                font-size: var(--spacing-${size});
            `}
            {...props}
        >
            {children}
        </Tag>
    );
};
