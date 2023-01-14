import './bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";

function Home() {

    return (
        <>
            <br/><Link className="btn btn-primary" to='/Inscription' > Pages D'Inscription </Link><br/>
            <br/><Link className="btn btn-primary" to='/Login' > Pages De Login </Link><br/>
            <br/><Link className="btn btn-primary" to='/ValidationCompte' > Page de Validation de compte </Link><br/>
            <br/><Link className="btn btn-primary" to='/FicheEnchere' > Fiche Enchère </Link><br/>
            <br/><Link className="btn btn-primary" to='/FormEncherir' > Encherir </Link><br/>
            <br/><Link className="btn btn-primary" to='/Historique' > Page d'Historique </Link><br/>
            <br/><Link className="btn btn-primary" to='/ListeEnchere' > Liste Enchère </Link><br/>
            <br/><Link className="btn btn-primary" to='/RechercheAvance' > Recherche Avance </Link><br/>
            <br/><Link className="btn btn-primary" to='/FormCategorie' > Ajout Categorie </Link><br/>
            <br/><Link className="btn btn-primary" to='/ListeCategorie' > Liste Categorie </Link><br/>

            <Outlet />
        </>
    );

}

export default Home;