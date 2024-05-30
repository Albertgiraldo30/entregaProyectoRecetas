
import Contact from "./pages/contact";
import Home from "./pages/home";
import Ours from "./pages/ours";
import Recipes from "./pages/recipes";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ours" element={<Ours/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
        
    </>
  );
}
export default App;