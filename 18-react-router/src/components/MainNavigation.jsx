import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
