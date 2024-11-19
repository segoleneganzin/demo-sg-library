import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import DemoFull from './pages/DemoModal.tsx';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/demo-modal' element={<DemoFull />} />
      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
