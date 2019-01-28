import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
        console.log('5. postActions - fetchPosts');
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(console.log( '6. postActions - inside fetchPost fetch ' +dispatch))
        .then(res => res.json())  
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    
};
             
export const createPost = (postData) => dispatch => {
    console.log('5. postActions - createPosts');
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));

};