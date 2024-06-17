import {showBook} from "../data/books";
import { useParams } from "react-router-dom";

const Book = ()=>{
    const params = useParams();
    console.log(params);
    const book = showBook(parseInt(params.bookId)) 
    
    return(
        <div style={{margin:'30px'}}>
            <p>{`نام کتاب: ${book.name}`}</p>
            <p>{`نویسنده: ${book.Write}`}</p>
            <p>{`قیمت: ${book.Price}`}</p>
            <p>{`کد کتاب: ${book.number}`}</p>
        </div>
    )
}

export default Book;