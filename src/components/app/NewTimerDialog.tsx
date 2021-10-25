/** @jsxRuntime classic /
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Dialog } from '../overlays/Dialog';
import { Input } from '../interaction/Input';
import { Button } from '../interaction/Button';
import { DurationPicker } from '../interaction/DurationPicker';
import { v4 } from 'uuid';
import { Text } from '../text/Text';
import { Label } from '../text/Label';
import VisuallyHidden from '@reach/visually-hidden';

const styles = {
    form: css`
        padding-top: var(--spacing-500);
        display: flex;
        flex-direction: column;
    `,
    input: css`
        width: 100%;
        max-width: 350px;
        margin-bottom: var(--spacing-300);
    `,
    button: css`
        margin-left: auto;
    `,
};

const createNewTimer = (): Timer => {
    return { label: 'New timer', seconds: 120, uuid: v4() };
};

interface NewTimerDialogProps {
    isOpen: boolean;
    timer: Timer;
    close: () => void;
    onSubmit: ({ label, seconds, uuid }: Timer) => void;
}

export const NewTimerDialog = ({
    isOpen,
    timer = createNewTimer(),
    close,
    onSubmit,
}: NewTimerDialogProps) => {
    const [name, setName] = useState(timer.label);
    const [time, setTime] = useState(timer.seconds);

    const toSeconds = ({ minutes, seconds }: Duration) => {
        return minutes * 60 + seconds;
    };

    const fromSeconds = (seconds: number): Duration => {
        console.log({
            minutes: Math.floor(seconds / 60),
            seconds: seconds % 60,
        });

        return {
            minutes: Math.floor(seconds / 60),
            seconds: seconds % 60,
        };
    };

    return (
        <Dialog isOpen={isOpen} close={close}>
            <Text tag="h2" size={500}>
                Add new timer
            </Text>
            <form
                css={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    return onSubmit({
                        label: name,
                        seconds: time,
                        uuid: timer.uuid,
                    });
                }}
            >
                <Label htmlFor="value">
                    <VisuallyHidden>Name</VisuallyHidden>
                </Label>
                <Input
                    css={styles.input}
                    id="value"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <DurationPicker
                    label="Time"
                    value={fromSeconds(timer.seconds)}
                    onChange={(val) => setTime(toSeconds(val))}
                />

                <Button type="submit" css={styles.button}>
                    save
                </Button>
            </form>
        </Dialog>
    );
};
