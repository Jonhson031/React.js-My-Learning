// ? Redux & Async Code
// * Reducers must be pure, side-effect free, synchronous functions!
// Instead we can execute side-effects and async code inside components or inside the action creators


// ? The Modern Solution: Redux Toolkit + createAsyncThunk
// * createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise. 
// * It generates a thunk that dispatches pending/fulfilled/rejected action types based on the promise returned by the callback function.

// Step 1: Create async thunk
import { createAsyncThunk } from '@reduxjs/toolkit';
/* 👉 This automatically creates:
- pending
- fulfilled
- rejected actions */

// Step 2: Create slice
import { createSlice } from '@reduxjs/toolkit';

// Step 3: Use in React component
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    // reducers → handles your own actions
    reducers: {},

    extraReducers: (builder) => { // extraReducers is used to handle actions that are NOT defined inside your slice.
        // extraReducers → handles external actions
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
// import { fetchUsers } from './userThunk';

function Users() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}