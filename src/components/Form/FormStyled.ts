import styled from "styled-components";

const NewSlothFormStyled = styled.form`
  width: 50%;
  background-color: ${({ theme }) => theme.colours.main};
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colours.accent};
  align-items: center;

  .sloth-form {
    &__box {
      margin: 20px;
      color: ${({ theme }) => theme.colours.text};
      font-weight: 900;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__data {
      border: none;
      border-radius: 10px;
      padding: 10px;
      font-size: 20px;
      color: ${({ theme }) => theme.colours.text};
      background-color: ${({ theme }) => theme.colours.secondary};
    }

    &__create-new {
      color: ${({ theme }) => theme.colours.text};
      background-color: ${({ theme }) => theme.colours.secondary};
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
`;
export default NewSlothFormStyled;
