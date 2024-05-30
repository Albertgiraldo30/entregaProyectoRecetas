
import Contact from "./pages/contact";
import Home from "./pages/home";
import Ours from "./pages/ours";
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import { Routes,Route } from "react-router-dom";
import { RecipessProvider } from "./components/recipeProvider";


function App() {
  return (
    <>
    <RecipessProvider>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ours" element={<Ours/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
        </RecipessProvider>
    </>
  );
}
export default App;