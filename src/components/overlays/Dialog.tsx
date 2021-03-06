/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { motion, AnimatePresence } from 'framer-motion';

const overlayStyles = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    overflow: hidden;
`;
const contentStyles = css`
    width: 50vw;
    margin: 10vh auto;
    background: white;
    padding: 2rem;
    outline: none;
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

const MotionDialogContent = motion(DialogContent);
const MotionDialogOverlay = motion(DialogOverlay);

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
        <AnimatePresence>
            {isOpen && (
                <MotionDialogOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'tween',
                        duration: 0.3,
                        ease: 'anticipate',
                    }}
                    css={overlayStyles}
                >
                    <MotionDialogContent>
                        <motion.div
                            css={contentStyles}
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{
                                type: 'tween',
                                duration: 0.5,
                                ease: 'anticipate',
                            }}
                        >
                            <button css={closeStyles} onClick={close}>
                                close
                            </button>
                            {children}
                        </motion.div>
                    </MotionDialogContent>
                </MotionDialogOverlay>
            )}
        </AnimatePresence>
    );
};
