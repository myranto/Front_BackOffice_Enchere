import { Outlet, Link } from "react-router-dom";

function FicheEnchere() {

    return (
        <>
            <div className="container">
                <h1>Fiche  Enchere</h1>
                    <Fiche id={1} prod="dbsdhdbs" description="bsuxicnsmc" prix_min_vente={400} prix_mise={200} />
                    <img src="cujdincdm" alt="" ></img>
                    <img src="cujdincdm" alt=""></img>
                    <img src="cujdincdm" alt=""></img>
                <Link className="btn btn-primary" to="/FormEncherir">Rencherir</Link>
                <Outlet/>
            </div>
        </>
    );

}

const Fiche = (props) => {
    return (
        <>
            Encher_id : {props.id} <br/>
            Produit : {props.prod}<br/>
            Description : {props.description}<br/>
            Prix minimum de vente : {props.prix_min_vente}  $<br/>
            Prix mise en Encheres : {props.prix_mise}  $<br/>
        </>
    );
}

export default FicheEnchere;