import { getBook } from '../data/books';
import { Link, Outlet } from 'react-router-dom'

const Books = () => {
    const books = getBook();

    return (
        <div style={{ display: 'flex', }}>
            <nav style={{ borderLeft: 'solid 1px', padding: '1rem' }}>
                <input type='text' placeholder='جستجوی نام کتاب' />
                {
                    books.map((book) => (
                        <Link to={`/books/${book.number}`} key={book.number} style={{ display: 'block' }}>{book.name}</Link>
                    ))
                }
            </nav>

            <Outlet />

        </div>
    )
}

export default Books;