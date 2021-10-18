import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../interaction/Button';

export default {
    title: 'Overlays/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    return (
        <div>
            <Button onClick={open}>Toggle modal</Button>
            <Dialog {...args} isOpen={showDialog} close={close}>
                test
            </Dialog>
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
