import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let navigate=useNavigate()
    let [title,settitle] = useState("")
    let [categories,setcategories] = useState("")
    let [authors,setauthors] = useState("")
    let [pageCount,setpageCount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")


    let handleSubmit = (e) =>{
        e.preventDefault();
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}     
        

         //posting to server
         fetch(' http://localhost:3007/books' ,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(bookData)
      })
      alert('book added successfully')
      navigate('/admin/book-list')
    }

    
    

    return ( 
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" required placeholder="title of the book"/>
                    </div>
                    <div className="authors">
                       <input value={authors} onChange={(e)=>setauthors(e.target.value)} type="text" required placeholder="authors of the book"/>
                    </div>
                    <div className="categories">
                       <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" required placeholder="categories of the book"/>
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="number" required placeholder="pageCount of the book"/>
                    </div>
                    <div className="shortDescription">
                         <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} placeholder="shortDescription" cols="20" rows="20"></textarea> 
                    </div>
                    <div className="longDescription">
                      <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} placeholder="longDescription" cols="20" rows="20"></textarea> 
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" required placeholder="image of the book" />
                    </div>
                    <button>Add Book</button>
                </form>

            </div>
        </div>
     );
}
 
export default AddBook;