import './App.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
