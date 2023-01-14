
function Historique() {
    return (
        <>
            <div className="container">
                <h1>Historique Client : Nathan</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Date Encheres</td>
                            <td>idEnchere</td>
                            <td>Produit</td>
                            <td>Duree</td>
                            <td>Description</td>
                            <td>Prix de vente </td>
                            <td>Prix mise en Encheres</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Value date="2023-05-03" id={12} prod="sdhsbh" duree={2} desc="dfjsfds" prix_vente={200} prix_mise={400}/>
                    </tr>
                    </tbody>
                </table>
            </div>
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
            <td>{props.desc}</td>
            <td>{props.prix_vente} $ </td>
            <td>{props.prix_mise} $ </td>
        </>
    );
}

export default Historique;