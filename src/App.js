import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Public from './pages/public/Public.page';
import Login from './features/auth/Login.page';
import DashLayout from './components/layout/DashLayout';
import DashBoard from './pages/DashBoard.page';
import Transactions from './features/transactions/Transactions.page';
import Accounts from './features/accounts/Accounts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<DashLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<Accounts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
