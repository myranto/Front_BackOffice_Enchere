import { Outlet, Link } from "react-router-dom";

function ListeEnchere() {
    return (
        <>
            <div className="container">
                <h1>Liste des Encheres</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <td>Date Encheres</td>
                        <td>idEnchere</td>
                        <td>Produits</td>
                        <td>Duree</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Value date="2023-05-03" id={12} prod="sdhsbh" duree={2} />
                    </tr>
                    </tbody>
                </table>
            </div>
            <Outlet/>
        </>
    );
}

const Value = (props) => {
    return (
        <>
            <td>{props.date}</td>
            <td>{props.id}</td>
            <td>{props.prod}</td>
            <td>{props.duree}h</td>
            <td><Link to="/FicheEnchere">Détail</Link></td>
        </>
    );
}


export default ListeEnchere;