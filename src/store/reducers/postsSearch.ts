import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts:[],
}

const postsSearch = createSlice({
    name:'searchPosts',
    initialState,
    reducers: {
        setSearch(state, action){
            state.posts = action.payload;
        },
    },
})

export const {setSearch} = postsSearch.actions;
export default postsSearch.reducer;