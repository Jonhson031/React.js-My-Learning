// ? NavLink
// * Better to use for main navigation and menus
// NavLink gives us isActive, and we can use it for styling.

import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {/* end used for exact matching */}
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
