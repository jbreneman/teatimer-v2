/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = {
    list: css`
        display: flex;
        flex-direction: column;
        margin: 0;
        margin-bottom: var(--spacing-900);
        padding: 0 var(--spacing-400);
        gap: var(--spacing-300);
    `,
};

interface TimerListProps {
    children: React.ReactNode;
}

export const TimerList = ({ children }: TimerListProps) => {
    return <ul css={styles.list}>{children}</ul>;
};
