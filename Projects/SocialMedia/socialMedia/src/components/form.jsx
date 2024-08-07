import { useState } from "react"

export default function Form() {
    let [formDatas, setFormDatas] = useState({
        userId : "" , 
        title :"" , 
        body : "", 
        views : "" , 
        tags : "",
        reactions : {
            likes : "" , 
            dislikes : ""
        }
    })

    const formDataChange = (e) =>{
        setFormDatas((currdata)=>{
            return {...currdata , [e.target.name] : e.target.value}
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        console.log(formDatas)
    }

    return (
        <form className="form" onSubmit={formSubmit}>
            <div className="mb-3">
                <h1>Create a new post </h1>
            </div>

            <div className="mb-3 ">
                <label htmlFor="userId" className="form-label"> Enter some id   </label>
                <input type="text" className="form-control" id="userId" name="userId" value={formDatas.userId} onChange={formDataChange} />
            </div>

            <div className="mb-3 ">
                <label htmlFor="title" className="form-label"> Title  </label>
                <input type="text" className="form-control" id="title" name="title" value={formDatas.title}
                onChange={formDataChange}  />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label"> Body </label>
                <textarea id="body" row="5" className="form-control" name="body" value={formDatas.body} onChange={formDataChange}  placeholder="Explain about your title in detail ">
                </textarea>
            </div>


            <div className="mb-3 ">
                <label htmlFor="views" className="form-label"> Enter no of views   </label>
                <input type="text" className="form-control" id="views"  name="views" value={formDatas.views} onChange={formDataChange} />
            </div>


            <div className="reactions">
                <div className="mb-3 col-4">
                    <label htmlFor="likes" className="form-label"> Enter no of likes   </label>
                    <input type="text" className="form-control" id="likes" name="reactions.likes" value={formDatas.reactions.likes} onChange={formDataChange} />
                </div>

                <div className="mb-3 col-4">
                    <label htmlFor="dislikes" className="form-label"> Enter no of dislikes   </label>
                    <input type="text" className="form-control" id="dislikes" name="reactions.dislikes" value={formDatas.reactions.dislikes} onChange={formDataChange} />
                </div>

            </div>
            <div className="mb-3 ">
                <label htmlFor="tags" className="form-label"> Tags   </label>
                <input type="text" className="form-control" id="tags"  name="tags" value={formDatas.tags} placeholder="Enter tags separated by space " onChange={formDataChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}