import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  german: string;
  english: string;
};

export const NewCard = () => {
  const { register, handleSubmit, } = useForm<FormData>();
  const onSubmit = handleSubmit(({ german, english }) => {
    console.log(`saving new card: ${german} = ${english}`);
  });

  return (
    <React.Fragment>
      <h1>Add New Card</h1>
      <form onSubmit={onSubmit} noValidate>
        <input name="german" ref={register} />
        <input name="english" ref={register} />
        <input type="submit" value="Save" />
      </form>
    </React.Fragment>
  );
};
