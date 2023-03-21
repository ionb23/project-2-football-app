import HomePage from './components/Homepage/Homepage';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SavedTeamPage from './components/SavedTeamsPage/SavedTeamsPage';
import SummaryPage from './components/SummaryPage/SummaryPage';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/live" element={<SummaryPage />} />
        <Route path="/saved/*" element={<SavedTeamPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;