import axios from 'axios';

axios.defaults.baseURL = 'https://627fc0f2be1ccb0a46646711.mockapi.io';

export async function fetchContacts() {
  const data = await axios.get('/contacts');
  console.log(data);
  return data;
}
