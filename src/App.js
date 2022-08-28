import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main_page from "./components/pages/Main_page";
import Dictionary_page from "./components/pages/Dictionary_page";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" >
          <Main_page />
        </Route>
        <Route path="/dictionary" >
            <Dictionary_page />
            </Route>
    </BrowserRouter>
  );
}

export default App;
