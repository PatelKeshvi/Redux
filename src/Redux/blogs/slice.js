const initialState = {
    blogs : [],
    blog  : [],
    isLoading : false,
    err : {},
};

const blogSlice = createSlice ({
    name : 'blogs',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
       .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
       })
       .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
       })
       .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.err = action.payload;
       })
    }
})

export const blogReducer = blogSlice.reducers;