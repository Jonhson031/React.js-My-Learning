// ? Error Page
export default function ErrorPage() {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />, // * This component will be rendered if user tries to access a page that doesn't exist
        children: [
            { path: '/', element: <HomePage /> }, // every object represents React Route
            { path: '/products', element: <Products /> },
        ],
    },
]);