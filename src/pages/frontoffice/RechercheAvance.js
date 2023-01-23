

function RechercheAvance() {

    return (
        <>
            <div className="container">
                <div className="row col-md-12">
                    <form action="" autoComplete="off">
                        <h1 className="text-center">Recherche avancé</h1>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="cat">Catégorie</label>
                                        <select className="form-control" name="cat" id="cat">
                                            <option value="">name</option>
                                            <option value="">mecanique</option>
                                            <option value="">value</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="daty">Date</label>
                                        <input type="date" className="form-control" id="daty" name="daty"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="prix">Prix</label>
                                        <input type="number" className="form-control" id="prix" name="prix"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="stat">Status</label>
                                        <input type="number" className="form-control" id="stat" name="stat"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label htmlFor="key">Mot clé</label>
                                        <input type="text" className="form-control" id="key" name="key"></input>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <br/><button type="submit" id="btn" className="btn btn-primary">Valider</button>
                                    </div>
                                </div>


                            </div>
                    </form>
                </div>
            </div>

        </>
    );
}


export default RechercheAvance;