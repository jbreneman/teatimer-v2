/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const styles = {
    list: css`
        margin: 0;
        padding: 0 var(--spacing-400);
    `,
};

interface TimerListProps {
    children: React.ReactNode;
}

export const TimerList = ({ children }: TimerListProps) => {
    return <ul css={styles.list}>{children}</ul>;
};
