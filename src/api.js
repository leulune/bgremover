import axios from 'axios';

axios.get(`http://localhost:3000/removeImageBackground`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
