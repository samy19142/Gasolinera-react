import { Box, Container } from '@chakra-ui/react';
import './App.css';
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Surtidor from './pages/Surtidor';
import Product from './pages/Product';
import MethodPayment from './pages/MethodPayment';
import Quantity from './pages/Quantity';
import Resume from './pages/Resume';

function App() {
  
  return (
    <Box w={'100vw'} h={'100vh'}>
      <Navbar/>
      <Container paddingTop={'10'}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/surtidor' element={<Surtidor/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/method-payment' element={<MethodPayment/>}></Route>
        <Route path='/quantity' element={<Quantity/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
      </Container>
    </Box>
  )
}

export default App
