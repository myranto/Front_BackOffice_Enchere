
function FormCategorie() {
    return (
        <>
        <div className="container">
            <div className="row col-md-12">
                <form action="" method="" autoComplete="off">
                    <h1>Ajout Catégorie</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="cat">Catégorie</label>
                                <select className="form-control" name="cat" id="cat">
                                    <option value="">name</option>
                                    <option value="">mecanique</option>
                                    <option value="">value</option>
                                </select>
                            </div>
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" >Valider</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default FormCategorie;