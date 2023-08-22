

import React from 'react';
const booksData = [
  {
    id: 1,
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: 3,
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
  },
  {
    id: 4,
    title: 'You Are a Badass',
    author: 'Jen Sincero',
  },
  {
    id: 5,
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  },
  {
    id: 6,
    title: 'The 5 Second Rule',
    author: 'Mel Robbins',
  },
];

const BooksPage = ({books}) => {
  return (
    <div className="books-container">
      <h1 className="page-title">Books List</h1>
      <ul className="books-list">
        {booksData.map(book => (
          <li key={book.id} className="book-item">
            <div className="book-box">
              <strong className="book-title">{book.title}</strong>
              <p className="author-name">by {book.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from the JSON source
  const response = await fetch('/books.json');
  const books = await response.json();

  return {
    props: {
      books,
    },
  };
}
export default BooksPage;

// import React from 'react';
// import { getBooks } from '../books-api';
// import Layout from '../components/Layout';

// const Home = ({ books }) => {
//   return (
//     <Layout>
//       <h1>Bookstore</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             <a href={`/book/${book.id}`}>{book.title}</a>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// };

// export async function getServerSideProps() {
//   const books = getBooks();
//   return {
//     props: { books },
//   };
// }

// export default Home;
