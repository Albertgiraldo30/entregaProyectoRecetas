import Articles from "./articles";
import recipesData from "../../public/datos.json"
function Content() {
    console.log(recipesData);
    
    return(
        <div className="col-sm-8">
            <Articles />
            <Articles />
            <Articles />
        </div>
    );
}
export default Content;