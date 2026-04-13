import { Outlet } from 'react-router-dom';
// * Outlet components marks the place where child route component should be rendered to
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}
