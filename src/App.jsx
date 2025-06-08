import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homapge';
import ProtectedRoutes from './pages/ProtectedRoutes';
import MessagesProvider from './store/MessagesContext';

function App() {
  return (
    <MessagesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MessagesProvider>
  );
}

export default App;
