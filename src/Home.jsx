// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/Form')
  }

  return (
    <>
    
    <div className="home-container">
      <button style={{position: 'absolute', right: '40px', border: '1px solid black', backgroundColor: '#FF8C00', color: 'white'}}onClick={goToForm}>Add Book</button>
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;