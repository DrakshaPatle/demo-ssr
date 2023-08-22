import React from 'react';

const SSRPage = ({ serverData }) => {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Server data: {serverData}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Simulate fetching data from an API or database
  const serverData = 'This data was fetched on the server';

  return {
    props: {
      serverData,
    },
  };
}

export default SSRPage;
