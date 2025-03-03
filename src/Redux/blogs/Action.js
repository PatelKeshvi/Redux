export const getBlogs = (payload) =>{
    return{
        type: "GET_BLOGS",
        payload: payload,
    }
}

export const fatchBlogs = () =>{
    async(dispatch)=>{
        let  res = await API.get ("/blogs")
        dispatch(getBlogs(res.data))
    }
}