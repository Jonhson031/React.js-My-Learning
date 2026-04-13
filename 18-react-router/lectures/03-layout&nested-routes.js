// ? Layout and Nested Routes
// We can create separate MainNavigation component to not repeat ourselves in every component 

import { Link } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    );
}

// And then import it to Root component(page)
import { Outlet } from 'react-router-dom';
// * Outlet components marks the place where child route component should be rendered to

import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
    return (
        <div>
            <MainNavigation /> {/*  Main Navigation will be on top of children components that we defined in our router */}
            <Outlet />
        </div>
    );
}

// * After that
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [ // defining childrens for RootLayout:
            { path: '/', element: <HomePage /> }, // every object represents React Route
            { path: '/products', element: <Products /> },
        ],
    },
]);