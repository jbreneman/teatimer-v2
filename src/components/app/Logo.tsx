/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Text } from '../text/Text';

const styles = css`
    position: fixed;
    bottom: 0;
    left: 0;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 1;
    color: var(--color-primary);
    text-shadow: 0px 0px 20px rgba(var(--color-primary-rgb), 0.25);
    padding: var(--spacing-100) var(--spacing-200);
`;

export const Logo = ({ ...props }) => {
    return (
        <Text css={styles} {...props}>
            teatimer
        </Text>
    );
};
