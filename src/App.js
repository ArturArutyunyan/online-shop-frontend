import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import CardPage from './components/CardPage/CardPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cardPage" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

