
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import SignUp from './pages/SignUp';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <NavBar />
      <div id='page-body'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles" element={<ArticlesListPage/>} />
          <Route path="/articles/:articleId" element={<ArticlePage/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
