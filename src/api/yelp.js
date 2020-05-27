import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer uvsIMGTFWuyDy3Y5lnEa0pVz5QGIu3j2ZVx-O_jO3dmqYIoyVKLS5KuSkLgO5R7SZQsFqsYQLcat4EAZA_zDWEeBwME1KShm5-7BG1G7O4PRfJkU26tz5R1LtUDLXnYx'
  }
});  
