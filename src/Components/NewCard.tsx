import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    german: string;
    english: string;
};

export const NewCard = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit(({ german, english }) => {
        console.log(`saving new card: ${german} = ${english}`);
    });

    return (
        <React.Fragment>
            <h1>Add New Card</h1>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField id="german" label="German" />
                <TextField id="english" label="English" />
                <input type="submit" value="Save" />
            </form>
        </React.Fragment>
    );
};
