/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

const overlayStyles = css`
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
`;
const contentStyles = css`
    position: relative;
    border-radius: var(--corners-500);
    filter: drop-shadow(var(--shadow-primary));
    border: 1px solid rgba(var(--color-primary-rgb), 0.25);

    @media screen and (max-width: 680px) {
        position: absolute;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
        width: 100%;
        margin: 0;
        bottom: 0;
    }
`;
const closeStyles = css`
    position: absolute;
    top: 0;
    right: 0;
    appearance: none;
    border: none;
    background: none;
    padding: var(--spacing-300);
    line-height: 1;
    font-size: 1rem;
    border-radius: var(--corners-500);

    &:focus {
        outline: none;
        box-shadow: var(--shadow-outline);
    }
`;

interface DialogProps {
    /**
     * Controls whether or not the dialog is open.
     */
    isOpen: boolean;
    /**
     * A method that updates the isOpen state to close.
     */
    close: () => void;
    /**
     * Dialog contents
     */
    children: React.ReactNode;
}

/**
 * A dialog modal
 */
export const Dialog = ({ isOpen, close, children, ...props }: DialogProps) => {
    return (
        <DialogOverlay css={overlayStyles} isOpen={isOpen} onDismiss={close}>
            <DialogContent css={contentStyles}>
                <button css={closeStyles} onClick={close}>
                    close
                </button>
                {children}
            </DialogContent>
        </DialogOverlay>
    );
};
