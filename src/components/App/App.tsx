import Form from "../Form/Form";
import NewSlothAppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <NewSlothAppStyled>
      <h1 className="main-title">Sloths App</h1>
      <Form />
    </NewSlothAppStyled>
  );
};
export default App;
