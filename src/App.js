import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Protected Cmp={AddProduct} />} />
        <Route path="/update" element={<Protected  Cmp={UpdateProduct} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
