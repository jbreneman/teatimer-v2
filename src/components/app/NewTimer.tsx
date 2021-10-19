/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import VisuallyHidden from '@reach/visually-hidden';
import React from 'react';
import { Button } from '../interaction/Button';

const styles = {
    button: css`
        position: fixed;
        bottom: var(--spacing-400);
        right: var(--spacing-400);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-300);
        width: 3.5rem;
        height: 3.5rem;
    `,
    icon: css`
        width: 1.5rem;
        height: 1.5rem;
    `,
    path: css`
        fill: white;
    `,
};

interface NewTimerProps {
    onClick: () => void;
}

export const NewTimer = ({ onClick, ...props }: NewTimerProps) => {
    return (
        <Button css={styles.button} onClick={onClick}>
            <VisuallyHidden>Add new timer</VisuallyHidden>
            <svg
                css={styles.icon}
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    css={styles.path}
                    d="M0.12 16.592V9.584H9.432V0.0319996H16.968V9.584H26.232V16.592H16.968V26.096H9.432V16.592H0.12Z"
                />
            </svg>
        </Button>
    );
};
