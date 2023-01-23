
function Inscription() {
    return (
        <>
            <div className="container">
                <div className="row col-md-12">
                    <form action="" method="" autoComplete="off">
                        <h1 className="text-center">Inscription</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" className="form-control"></input><br/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control"></input><br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="pwd">Mot de passe</label>
                                    <input type="password" name="pwd" className="form-control"></input><br/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="pwdconf">Retaper le mot de passe</label>
                                    <input type="password" name="pwdconf" className="form-control"></input><br/>
                                </div>
                            </div>
                        </div>
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



export default Inscription;