import React from 'react';
import ReactDurationPicker from 'react-duration-picker';
import './DurationPicker.css';

interface InputProps {
    label: string;
    value: Duration;
    onChange?: (e: any) => void;
}

export const DurationPicker = ({ label, value, onChange }: InputProps) => {
    return (
        <ReactDurationPicker
            aria-label={label}
            initialDuration={value}
            noHours={true}
            onChange={onChange}
        />
    );
};
