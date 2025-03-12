export const fetchBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  try {
      let res = await API.get ("/blogs");
      return res.data;
  } catch (error) {
    
  }
})