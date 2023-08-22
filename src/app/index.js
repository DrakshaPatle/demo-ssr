
// src/pages/index.js
import React from 'react';
import { getBooks } from '../books-api';
import Layout from '../components/Layout';

const Home = ({ books }) => {
  return (
    <Layout>
      <h1>Bookstore</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <a href={`/book/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getServerSideProps() {
  const books = getBooks();
  return {
    props: { books },
  };
}

export default Home;
