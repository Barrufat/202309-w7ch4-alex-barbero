import { useState } from "react";
import { Sloth } from "../../types";

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
    <form onSubmit={onFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={newSloth.name}
          onChange={onChangeName}
        ></input>
      </label>
      <label>
        Picture:
        <input
          type="text"
          value={newSloth.picture}
          onChange={onChangePicture}
        ></input>
      </label>
      <label>
        Finguers:
        <input
          type="number"
          value={newSloth.finguers}
          onChange={onChangeFinguers}
        ></input>
      </label>
      <button type="submit">Create New</button>
    </form>
  );
};
export default Form;
