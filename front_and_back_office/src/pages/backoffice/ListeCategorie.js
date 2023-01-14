
function ListeCategorie() {
    return (
        <>
            <div className="container">
                <h1>Liste des Encheres</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <td>idCategorie</td>
                        <td>Categorie</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Value id={12} cat="sdhsbsdfdsfdshh" />
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
            <td>{props.id}</td>
            <td>{props.cat}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </>
    );
}

export default ListeCategorie;