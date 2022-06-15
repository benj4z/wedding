import Main from "./sections/Main/Main";
import Schedule from "./sections/Schedule/Schedule";
import Concept from "./sections/Concept/Concept";
import Place from "./sections/Place/Place";
import Restorant from "./sections/Restorant/Restorant";
import Form from "./sections/Form/Form";

function App() {
  return (
    <div className="App">
      <Main />
      <Schedule />
      <Concept />
      <Place />
      <Restorant />
      <Form />
    </div>
  );
}

export default App;
