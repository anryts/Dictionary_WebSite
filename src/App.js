import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main_page from "./components/pages/Main_page";
import Dictionary_page from "./components/pages/Dictionary_page";
function App() {
  return (
      /*<Main_page />*/
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main_page/>}/>
            <Route path="/dictionary" element={<Dictionary_page/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
