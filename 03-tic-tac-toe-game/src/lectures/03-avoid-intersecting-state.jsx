// ? Avoid intersecting state
// Don’t keep multiple pieces of state that overlap or describe the same thing.

// ❌ Example of intersecting state (bad)
// const [users, setUsers] = useState([]);
// const [selectedUser, setSelectedUser] = useState(null);


// ✅ Better approach
const [users, setUsers] = useState([]);
const [selectedUserId, setSelectedUserId] = useState(null);

// Derived Value
const selectedUser = users.find(
  user => user.id === selectedUserId
);
