import { createContext, useContext, useReducer, useEffect } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
})


// useEffect(()=>{

// },[])

let Default_Post_list = [{
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less htmlFortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: [
        "history",
        "american",
        "crime"
    ],
    reactions: {
        likes: 192,
        dislikes: 25
    },
    views: 305,
    userId: 121
},
{
    id: 2,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less htmlFortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: [
        "history",
        "american",
        "crime"
    ],
    reactions: {
        likes: 192,
        dislikes: 25
    },
    views: 305,
    userId: 121
}

]

const postListReducer = (currPostList, dispatch) => {
    newPostList = currPostList;

    return newPostList
}

const addPost = () => {
    
}
const deletePost = () => {

}

export default function PostListProvider({ children }) {
    const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_list)

    return (
        <PostListContext.Provider value={{
            postList, addPost, deletePost
        }}>
            {children}
        </PostListContext.Provider>
    )
}