import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {

    //need to use redux-thunk for async actions inside action creators
    //const response = await jsonplaceholder.get('/posts');  -> bad

    // redux-thunk -> middleware to help us make requests from action creators

    return async (dispatch) => {
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data })
    }
}