import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartCounter: 0, items: [], totalPrice: 0, isLoading: false, error: null };

// Create async thunk for fetching cart data
export const fetchCart = createAsyncThunk(
    'cart/fetchCartData',
    async () => {
        const res = await fetch('http://localhost:5000/cart');
        if (!res.ok) throw new Error('Failed to fetch cart');
        return res.json();
    }
);

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (item) => {
        await fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });
        return item;
    }
)

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (id) => {
        await fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE',
        });
        return id;
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // 🔹 FETCH CART
            .addCase(fetchCart.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;

                // ✅ calculate totals
                state.cartCounter = action.payload.reduce(
                    (total, item) => total + (item.quantity || 1),
                    0
                );

                state.totalPrice = action.payload.reduce(
                    (total, item) => total + (item.totalPrice || item.price),
                    0
                );
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            // 🔹 ADD ITEM
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;

                const newItem = action.payload;
                console.log(newItem);

                // check if item already exists
                const existingItem = state.items.find(
                    (i) => i.id === newItem.id
                );

                if (!existingItem) {
                    state.items.push({
                        id: newItem.id,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                        title: newItem.title,
                    }); state.cartCounter++;
                } else {
                    existingItem.quantity++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                    state.cartCounter++;
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            // 🔹 REMOVE ITEM
            .addCase(removeFromCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.isLoading = false;

                const id = action.payload;

                const existingItem = state.items.find(
                    (item) => item.id === id
                );

                if (!existingItem) return;

                state.cartCounter -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;

                state.items = state.items.filter(
                    (item) => item.id !== id
                );
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default cartSlice.reducer;