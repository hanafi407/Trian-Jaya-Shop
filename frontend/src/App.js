import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
