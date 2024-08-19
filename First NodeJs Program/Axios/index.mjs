import axios from 'axios';

axios.get('https://api.codingninjas.com/api/v3/event_tags')
    .then(response => {
        // Handle response
        console.log(response.data);
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });