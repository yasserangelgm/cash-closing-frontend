import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';

const DashLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default DashLayout;
