import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
