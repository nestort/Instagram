const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const personData = [{
    age: 19,
    name: "Juan"
}];

const resolvers = {
    Query: {
      books: () => books,
      person: () => personData,
    },
  };

  export default resolvers;