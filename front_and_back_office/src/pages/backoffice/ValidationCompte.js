
function ValidationCompte() {
    return (<>
        <div className="container">
            <h1>Liste des demande de rechargement </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>tel</th>
                        <th>montant</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Value username="blablabl" tel="0348549237" montant={250} />
                    </tr>
                </tbody>
            </table>
        </div>

    </>);
}

const Value = (props) => {
    return (
        <>
            <td>{props.username}</td>
            <td>{props.tel}</td>
            <td>{props.montant} $ </td>
            <td><button className="btn btn-primary">Valider</button></td>
        </>
    );
}

export default ValidationCompte;