import { TextField } from '@material-ui/core';
import Button from './common/Button';
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
                <div>
                    <TextField id="german" label="German" inputRef={register} />
                </div>
                <div>
                    <TextField
                        id="english"
                        label="English"
                        inputRef={register}
                    />
                </div>
                <div>
                    <Button variant="outlined" color="primary" type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
};
