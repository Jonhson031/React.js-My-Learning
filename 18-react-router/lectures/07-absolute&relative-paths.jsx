// ? Absolute and Relative Paths in React Router

// * Absolute Path
// An absolute path always starts from the root (/).
// ? Use for main navigation / navbar
<NavLink to="/products">Products</NavLink>
// 👉 This always goes to: http://localhost:3000/products, no matter where you are.

// * Relative Path
// ? Better use for Inside nested routes, Building modular components
// A relative path depends on our current route.
/ <NavLink to="products">Products</NavLink>

// 👉 If we currently on dashboard: /dahsboard
// It will go to: /dashboard/products

// *  .. (go up one level)
// /dashboard/products → /dashboard
/ <NavLink to="..">Back</NavLink> 
