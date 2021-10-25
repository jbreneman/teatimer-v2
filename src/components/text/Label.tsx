/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = css`
    margin: 0;
    padding: 0;
    text-transform: lowercase;
    font-size: 1.25rem;
    font-weight: 700;
    margin-left: var(--spacing-500);
`;

interface LabelProps {
    /**
     * Card contents
     */
    children: React.ReactNode;
}

/**
 * Renders text more easily.
 */
export const Label = ({
    children,
    ...props
}: LabelProps & React.HTMLProps<HTMLLabelElement>) => {
    return (
        <label css={styles} {...props}>
            {children}
        </label>
    );
};
