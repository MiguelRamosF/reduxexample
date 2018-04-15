import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log("fetching");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPost = (postData) => dispatch => {
    console.log('action called')
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post => {
          console.log(post)
        dispatch({
            type: NEW_POST,
            payload: post
        })
    }
    );
};

export const deletePost = (postId) => dispatch => {
    console.log('action delete called')
    console.log(postId)
    fetch('https://jsonplaceholder.typicode.com/posts/'+postId, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(post => {
        console.log(post);
        dispatch({
            type: DELETE_POST,
            payload: postId
        })
        }   
    );
    
};