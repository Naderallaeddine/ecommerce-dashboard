import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Protected Cmp={ProductList} />} />
        <Route path="/add" element={<Protected Cmp={AddProduct} />} />
        <Route path="/update/:id" element={<Protected  Cmp={UpdateProduct} />} />
        <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
