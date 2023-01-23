import {Link} from "react-router-dom";

export default function HomeCli(){
    return (
        <>
            {/*<br/><Link className="btn btn-primary" to='/Inscription' > Pages D'Inscription </Link><br/>*/}
            {/*<br/><Link className="btn btn-primary" to='/FicheEnchere' > Fiche Enchère </Link><br/>*/}
            {/*<br/><Link className="btn btn-primary" to='/FormEncherir' > Encherir </Link><br/>*/}
            <br/><Link className="btn btn-primary" to='/Historique' > Historique de vos enchere </Link><br/>
            <br/><Link className="btn btn-primary" to='/ListeEnchere' > Liste des Enchères </Link><br/>
            <br/><Link className="btn btn-primary" to='/RechercheAvance' > Recherche Avance </Link><br/>
        </>
    );
}