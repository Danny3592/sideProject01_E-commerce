import { Outlet } from 'react-router-dom';
import Nav from './MainNav';

export default function RootHome() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
