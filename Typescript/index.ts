import axios from 'axios';

interface User {
  name: string;
  email: string;
  website: string;
}

const url = 'https://jsonplaceholder.typicode.com/users/1';
axios.get(url).then(response => {
  const { name, email, website } = response.data as User;

  logUser(name, email, website);
});

const logUser = (name: string, email: string, website: string) => {
  console.log(
    `User is ${name}. Contact them at ${email} or access their site at ${website}`
  );
};
