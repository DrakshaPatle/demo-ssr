// import React from 'react';

// const SSRPage = ({ serverData }) => {
//   return (
//     <div>
//       <h1>Server-Side Rendering Example</h1>
//       <p>Server data: {serverData}</p>
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   // Simulate fetching data from an API or database
//   const serverData = 'This data was fetched on the server';

//   return {
//     props: {
//       serverData,
//     },
//   };
// }

// export default SSRPage;


import React from 'react';

const booksData = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
  },
];

const BooksPage = ({books}) => {
  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {booksData.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
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
