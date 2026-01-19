import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Italiana } from '../pages/Italiana';
import { Japonesa } from '../pages/Japonesa';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/italiana" element={<Italiana />} />
        <Route path="/japonesa" element={<Japonesa />} />
      </Routes>
    </BrowserRouter>
  );
}
