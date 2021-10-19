/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';
import { formatTime } from '../../helpers/formatTime';
import { Card } from '../layout/Card';
import { Text } from '../text/Text';

const styles = {
    card: css`
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 2.25rem;
        grid-template-areas:
            'timer action'
            'label action';
        gap: var(--spacing-100);
    `,
    timer: css`
        grid-area: timer;
        font-weight: 700;
        line-height: 1;
    `,
    label: css`
        grid-area: label;
        line-height: 1;
    `,
    button: css`
        grid-area: action;
        align-self: center;
        appearance: none;
        border: none;
        background: none;
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
        filter: drop-shadow(var(--shadow-strong));
    `,
    play: css`
        width: 2rem;
        height: 2rem;
    `,
    path: css`
        fill: var(--color-primary);
    `,
};

interface TimerCardProps {
    playing: boolean;
    onPlay: () => void;
}

export const TimerCard = ({
    seconds,
    label,
    playing,
    onPlay,
}: Timer & TimerCardProps) => {
    const formattedTimer = formatTime(seconds);
    return (
        <Card tag="li" css={styles.card}>
            <Text css={styles.timer} size={500}>
                {formattedTimer}
            </Text>
            <Text css={styles.label} size={400}>
                {label}
            </Text>
            <button css={styles.button} onClick={onPlay}>
                <VisuallyHidden>{playing ? 'Play' : 'Pause'}</VisuallyHidden>
                <TimerPlayIcon isActive={playing} />
            </button>
        </Card>
    );
};

const TimerPlayIcon = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
        return (
            <svg css={styles.play} viewBox="0 0 32 32">
                <path
                    css={styles.path}
                    d="M4 4h10v24h-10zM18 4h10v24h-10z"
                ></path>
            </svg>
        );
    }

    return (
        <svg css={styles.play} viewBox="0 0 64 64">
            <path
                css={styles.path}
                d="m 10.966268,58.441755 0,-25.628195 0,-25.6281938 L 33.160936,19.999464 55.355602,32.81356 33.160934,45.627658 Z"
            ></path>
        </svg>
    );
};
