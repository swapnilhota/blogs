import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {

    //need to use redux-thunk for async actions inside action creators
    //const response = await jsonplaceholder.get('/posts');  -> bad

    // redux-thunk -> middleware to help us make requests from action creators

    return function (dispatch, getState) {
        const promise = jsonplaceholder.get('/posts');

        return {
            type: 'FETCH_POSTS',
            payload: promise
        }
    }

}