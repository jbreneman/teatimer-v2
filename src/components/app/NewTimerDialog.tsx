/** @jsxRuntime classic /
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Dialog } from '../overlays/Dialog';
import { Input } from '../interaction/Input';
import VisuallyHidden from '@reach/visually-hidden';
import { Button } from '../interaction/Button';
import { v4 } from 'uuid';
import { Text } from '../text/Text';
import { Label } from '../text/Label';

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

interface NewTimerDialogProps {
    isOpen: boolean;
    close: () => void;
    onSubmit: ({ label, seconds, uuid }: Timer) => void;
}

export const NewTimerDialog = ({
    isOpen,
    close,
    onSubmit,
}: NewTimerDialogProps) => {
    const [name, setName] = useState('new timer');
    const [time, setTime] = useState(120);

    return (
        <Dialog isOpen={isOpen} close={close}>
            <Text tag="h2" size={500}>
                Add new timer
            </Text>
            <form
                css={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    return onSubmit({ label: name, seconds: time, uuid: v4() });
                }}
            >
                <Label htmlFor="value">name</Label>
                <Input
                    css={styles.input}
                    id="value"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Label htmlFor="time">Time</Label>
                <Input
                    css={styles.input}
                    type="time"
                    id="time"
                    value={time.toString()}
                    onChange={(e) => setTime(+e.target.value)}
                />
                <Button type="submit" css={styles.button}>
                    save
                </Button>
            </form>
        </Dialog>
    );
};
