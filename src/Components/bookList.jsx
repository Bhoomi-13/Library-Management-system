import { useState,useEffect } from "react";
import '../styles/bookList.css';
import { useNavigate } from "react-router-dom";
const BookList = () => {
    let[books,setBooks] = useState([])

     useEffect ( ()=>{
        let fetchData = async () =>{
             let response = await fetch('http://localhost:3007/books')
             let data = await response.json()
             setBooks(data)
        }
        fetchData()
    },[books])
    let handleDelete = (id,title) =>{
       fetch(` http://localhost:3007/books/${id}`,{
          method:'DELETE'
       });
       alert(`${title} will be deleted permanently`)
    }
    let navigate = useNavigate()
    let Read = (id) =>{
        navigate(`/admin/book-list/${id}`)
    }

    return ( 
        <div className="booklist">
            <h1>Book List</h1>
            <div className="books_section">
                { books.map( data => (
                     <div className="layout">
                     <div className="img123">
                       <img  src={data.thumbnailUrl} alt="" />
                    </div>
                    <div className="book">
                        <h3>{data.title}</h3>
                        <h4>{data.authors}</h4>
                        <h5>{data.categories}</h5>
                        <h6>{data.pageCount}</h6>
                        <button onClick={ ()=>Read(data.id)}>Read more</button>
                        <button onClick={ ()=> handleDelete(data.id,data.title)}>Delete</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>

     );
}
 
export default BookList;