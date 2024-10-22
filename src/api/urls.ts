export const Urls ={
    users: {
        list: "/users",
        ById: (id:number)=> `/users/${id}`,
    },
    posts: {
        list: "/posts",
        ById: {
            ID:(id:number)=> `/posts/${id}`,
            comments:(id:number)=> `/posts/${id}/comments`,
        },
    }
}