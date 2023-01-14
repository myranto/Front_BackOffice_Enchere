
function FormEncherir() {
    return (
        <>
            <div className="container">
                <div className="row col-md-12">
                    <form action="" autoComplete="off">
                        <h1>Encherir</h1>
                        <Data id={1} prod = "sdhqh" prix={200} /><br/>
                        <div className="row col-md-6">
                            <label htmlFor="encherir">Encherir</label>
                            <input type="number" id="encherir" className="form-control"  name="prixEnchere"></input>
                        </div><br/>
                        <button type="submit" className="btn btn-primary" >Valider</button>
                    </form>
                </div>
            </div>
        </>
    );

}

const Data = (props) => {
    return (
        <>
            Num Enchère: {props.id} <br/>
            Produit : {props.prod}<br/>
            Prix actuel : {props.prix} $<br/>
        </>
    );
}

export default FormEncherir;