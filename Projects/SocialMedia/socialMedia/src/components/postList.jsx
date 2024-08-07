import { PostListContext } from "../store/post-list-store";
import Post from "./post";
import { useContext } from "react";

export default function PostList(){
    const {postList} = useContext(PostListContext)

    console.log(postList)

    return(
        <div className="test">
            {
                postList.map((post)=>{
                   return  <Post key={post.id} post={post} />
                })
            }
        </div>
    )
}