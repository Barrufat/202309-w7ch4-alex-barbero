import { useState } from "react";
import { Sloth } from "../../types";
import NewSlothFormStyled from "./FormStyled";

const Form = () => {
  const initialSloth: Sloth = {
    id: 0,
    name: "",
    picture: "",
    finguers: 0,
  };
  const [newSloth, setNewSloth] = useState<Sloth>(initialSloth);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSloth((newSloth) => ({
      ...newSloth,
      name: event.target.value,
    }));
  };

  const onChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSloth((newSloth) => ({
      ...newSloth,
      picture: event.target.value,
    }));
  };

  const onChangeFinguers = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSloth((newSloth) => ({
      ...newSloth,
      finguers: Number(event.target.value),
    }));
  };

  const getSlothsLength = async () => {
    const response = await fetch("https://sloths-api.onrender.com/sloths");
    const sloths = (await response.json()) as Sloth[];

    return sloths.length;
  };

  const addSloth = async () => {
    const currentLength = await getSlothsLength();

    setNewSloth((newSloth) => ({
      ...newSloth,
      id: currentLength + 1,
    }));

    const response = await fetch("https://sloths-api.onrender.com/sloths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSloth),
    });

    if (response.status !== 201) {
      return;
    }
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSloth();
  };

  return (
    <NewSlothFormStyled className="sloth-form" onSubmit={onFormSubmit}>
      <label className="sloth-form__box">
        Name:
        <input
          className="sloth-form__data"
          type="text"
          value={newSloth.name}
          onChange={onChangeName}
        ></input>
      </label>
      <label className="sloth-form__box">
        Picture:
        <input
          className="sloth-form__data"
          type="text"
          value={newSloth.picture}
          onChange={onChangePicture}
        ></input>
      </label>
      <label className="sloth-form__box">
        Finguers:
        <input
          className="sloth-form__data"
          type="number"
          value={newSloth.finguers}
          onChange={onChangeFinguers}
        ></input>
      </label>
      <button className="sloth-form__create-new" type="submit">
        Create New
      </button>
    </NewSlothFormStyled>
  );
};
export default Form;
