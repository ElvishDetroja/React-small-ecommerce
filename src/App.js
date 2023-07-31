import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute, SignedRoute } from "./specialRoute";
import SignIn from "./components/signIn";
import Product from "./components/product";
import Products from "./components/products";
import Nav from "./components/nav";
import AddProduct from './components/addProduct';
import SignOut from './components/signOut';

//
//
//

function App() {
  return (
    <>
      <Nav />
      <hr />
      <Routes>
        <Route element={<SignedRoute />}>
          <Route path="/" element={<SignIn />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/signout" element={<SignOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
