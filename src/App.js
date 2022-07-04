import './App.css';
import AdminChallenges from './components/AdminChallenges';
import ListPage from './components/ListPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import DetailPage from './components/DetailPage';

function App() {

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/admin/:id' element={<AdminChallenges />} />
        <Route path='detail/:id' element={<DetailPage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
