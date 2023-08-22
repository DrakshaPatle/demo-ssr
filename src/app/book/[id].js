// src/pages/book/[id].js

import React from 'react';
import { useRouter } from 'next/router';
import { getBooks } from '../../books-api';
import Layout from '../../components/Layout';

const BookDetail = ({ book }) => {
  return (
    <Layout>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query; // Access the value of 'id' from the URL
  const books = getBooks();
  const book = books.find(item => item.id === parseInt(id));

  return {
    props: { book },
  };
}

export default BookDetail;
