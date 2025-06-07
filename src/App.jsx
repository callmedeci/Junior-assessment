import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homapge';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
