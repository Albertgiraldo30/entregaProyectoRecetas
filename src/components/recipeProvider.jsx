import { createContext,useState } from "react"
// crear contexto global
let infoContext = createContext();



//crear componente proveedro del contexto

let RecipessProvider = ({children} ) => {
    let [infoRecipes , setInfoRecipes] = useState("hola");
    return (
        <infoContext.Provider value={{infoRecipes,setInfoRecipes}}>
            {/*componente hijo que se utilizaran el contexto*/}
             {children}
        </infoContext.Provider>
    );
}


export {infoContext, RecipessProvider}