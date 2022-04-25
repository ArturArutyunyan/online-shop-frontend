import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import CardPage from './components/CardPage/CardPage';
import NotFound from './components/NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cardPage" element={<CardPage />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

