// ? Context API
// Used to share props across components without props drilling (passing props through many layers of components that don't need them).


// 1. Create a Context. (Create new folder store and create file with this context)
import {createContext} from 'react';

export const UserContext = createContext(null); // null is the default value


// 2. Provide the Context — wrap components that need access to the data:
import {UserContext} from './store/UserContext.jsx';

function App() {
  const [user, setUser] = useState({ name: 'Alice', role: 'admin' });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Main />
    </UserContext.Provider>
  );
}

// 3. Consume the Context — in any nested component, no matter how deep:
import { useContext } from 'react';

function Navbar() {
  const { user } = useContext(UserContext);
  
  return <h1>Hello, {user.name}!</h1>;
}