import { TextField } from '@material-ui/core';
import Button from './common/Button';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
    german: string;
    english: string;
};

export const NewCard = () => {
    const [successMsg, setSuccessMsg] = useState<string>('');

    const validationSchema = yup.object().shape({
        german: yup.string().required(),
        english: yup.string().required(),
    });

    const { register, handleSubmit, errors } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = handleSubmit(({ german, english }) => {
        console.log(`saving new card: ${german} = ${english}`);
        setSuccessMsg('Card saved!');
    });

    return (
        <React.Fragment>
            <h1>Add New Card</h1>
            <h2>{successMsg}</h2>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
                <div>
                    <TextField
                        name="german"
                        id="german"
                        label="German"
                        inputRef={register}
                        error={!!errors.german}
                        helperText={errors.german?.type}
                    />
                </div>
                <div>
                    <TextField
                        name="english"
                        id="english"
                        label="English"
                        inputRef={register}
                        error={!!errors.english}
                        helperText={errors.english?.type}
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
