import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/about';
import Books from './components/books';
import Book from './components/book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'about'} element={<About />}></Route>
          <Route path={'books'} element={<Books />}>
            <Route path={':bookId'} element={<Book/>}></Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


