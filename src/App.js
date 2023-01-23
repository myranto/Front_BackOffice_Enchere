
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Inscription from "./pages/common/Inscription";
import Login from "./pages/common/Login";
import ValidationCompte from "./pages/backoffice/ValidationCompte";
import FicheEnchere from "./pages/frontoffice/FicheEnchere";
import FormEncherir from "./pages/frontoffice/FormEncherir";
import Historique from "./pages/frontoffice/Historique";
import ListeEnchere from "./pages/frontoffice/ListeEnchere";
import RechercheAvance from "./pages/frontoffice/RechercheAvance";
import FormCategorie from "./pages/backoffice/FormCategorie";
import ListeCategorie from "./pages/backoffice/ListeCategorie";
import HomeAdmin from "./pages/backoffice/Home";
import HomeCli from "./pages/frontoffice/HomeCli";
import FormDuration from "./pages/backoffice/DefaultDuration";
import Commission from "./pages/backoffice/commission/Commission";
import Statistique from "./pages/backoffice/Statistique";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="indexAdmin" element={<HomeAdmin />} />
        <Route path="indexCli" element={<HomeCli />} />
        <Route path="getstat" element={<Statistique />} />
        <Route path="dure_auction" element={<FormDuration />} />
        <Route path="commission" element={<Commission />} />
        <Route path="Inscription" element={<Inscription />} />
        <Route path="Login" element={<Login action={0} />} />
        <Route path="login_admin" element={<Login action={1} />} />
        <Route path="ValidationCompte" element={<ValidationCompte />} />
        <Route path="FicheEnchere" element={<FicheEnchere/>} />
        <Route path="FormEncherir" element={<FormEncherir/>} />
        <Route path="Historique" element={<Historique/>} />
        <Route path="ListeEnchere" element={<ListeEnchere/>} />
        <Route path="RechercheAvance" element={<RechercheAvance/>} />
        <Route path="FormCategorie" element={<FormCategorie/>} />
        <Route path="ListeCategorie" element={<ListeCategorie/>} />
      </Routes>
    </Router>
  );
}

export default App;
