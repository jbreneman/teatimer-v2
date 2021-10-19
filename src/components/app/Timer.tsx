/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { formatTime } from '../../helpers/formatTime';
import { Text } from '../text/Text';

const styles = css`
    font-size: 6rem;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
    line-height: 1;
    padding: var(--spacing-700) var(--spacing-300);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface TimerProps {
    seconds: number;
}

export const Timer = ({ seconds, ...props }: TimerProps) => {
    const formattedTimer = formatTime(seconds);
    return (
        <Text css={styles} {...props}>
            {formattedTimer}
        </Text>
    );
};
