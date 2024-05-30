import Header from "../components/header";
import Menu from "../components/menu";
import Aside from "../components/aside";
import Footer from "../components/footer";

let Ours = ()=>{
return(
    <>
<Header/>
<Menu/>
<div className="container mt-5">
    <div className="ROW">
        <Aside/>
            <div className="col-sm-8">
            <h1>Nosotros</h1>

            </div>   
    </div>
</div>
<Footer/>
</>
    
)
}

export default Ours;