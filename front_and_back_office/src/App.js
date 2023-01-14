import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Inscription from './pages/common/Inscription';
import Login from './pages/common/Login';
import ValidationCompte from './pages/backoffice/ValidationCompte';
import FicheEnchere from './pages/frontoffice/FicheEnchere';
import FormEncherir from './pages/frontoffice/FormEncherir';
import Historique from './pages/frontoffice/Historique';
import ListeEnchere from './pages/frontoffice/ListeEnchere';
import RechercheAvance from './pages/frontoffice/RechercheAvance';
import FormCategorie from './pages/backoffice/FormCategorie';
import ListeCategorie from './pages/backoffice/ListeCategorie';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="Inscription" element={<Inscription />} />
              <Route path="Login" element={<Login />} />
              <Route path="ValidationCompte" element={<ValidationCompte />} />
              <Route path="FicheEnchere" element={<FicheEnchere/>} />
              <Route path="FormEncherir" element={<FormEncherir/>} />
              <Route path="Historique" element={<Historique/>} />
              <Route path="ListeEnchere" element={<ListeEnchere/>} />
              <Route path="RechercheAvance" element={<RechercheAvance/>} />
              <Route path="FormCategorie" element={<FormCategorie/>} />
              <Route path="ListeCategorie" element={<ListeCategorie/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
