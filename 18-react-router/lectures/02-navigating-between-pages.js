// ? Navigating between Pages with Links

// To navigate between pages, we use speacial Link components from react-router-dom
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>This is home page</h1>
            <Link to="/products">Products</Link>
        </div>
    );
}

export default function Products() {
    return (
        <div>
            <h1>Products Page</h1>
            <Link to="/">Home</Link>
        </div>
    );
}
