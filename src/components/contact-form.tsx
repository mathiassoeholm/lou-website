import React from "react";
import { useForm, OnSubmit } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface IProps {
  onSubmit: OnSubmit<Inputs>;
}

const ContactForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <label>Navn</label>
      <input name="name" defaultValue="test" ref={register} />
      <label>Email</label>
      <input name="email" ref={register({ required: true })} />
      <label>Emne</label>
      <input name="subject" ref={register} />
      <label>Besked</label>
      <input name="message" ref={register} />
      <input type="submit" />
    </form>
  );
};

export { ContactForm };
