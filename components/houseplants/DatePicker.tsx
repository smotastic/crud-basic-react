import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

type BasicDatePickerProps = {
    onChange: (date: Date | undefined) => void,
    initialValue: Date | undefined
}

export default function BasicDatePicker({ onChange, initialValue }: BasicDatePickerProps) {
    const [value, setValue] = React.useState<Date | undefined>(initialValue);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Last Watered"
                value={value}
                onChange={(newValue) => {
                    if(newValue) {
                        setValue(newValue);
                        onChange(newValue);
                    } else {
                        setValue(undefined);
                        onChange(undefined);
                    }
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}