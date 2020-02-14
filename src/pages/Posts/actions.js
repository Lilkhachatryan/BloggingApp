import { createAction } from 'redux-actions';
import { useDispatch } from 'react-redux';
import {myFirebase} from '../../config/firebase';

export const GET_POSTS = 'GET_POSTS';
const getPostsAction = createAction(GET_POSTS);

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const addPostSuccessAction = createAction(ADD_POST_SUCCESS);

export const ADD_POST_ERROR = "ADD_POST_ERROR";
const addPostErrorAction = createAction(ADD_POST_ERROR);
// const db=firebase.firestore();

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const addCommentSuccess = createAction(ADD_COMMENT_SUCCESS);

export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";
const addCommentError = createAction(ADD_COMMENT_ERROR);

export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
const uploadFileSuccess = createAction(UPLOAD_FILE_SUCCESS);

export const UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR";
const uploadFileError = createAction(UPLOAD_FILE_ERROR);



function getPosts(dispatch) {
    dispatch(getPostsAction());
}

export function useActions() {
    const dispatch = useDispatch();

    return {
        handleGetPosts: () => getPosts(dispatch)
    }
}

export const poster = ({title, about}) => {
    return (dispatch, getState) => {
            const post = {
                title: title,
                content: about,
            }
            myFirebase.firestore().collection("posts").doc().set(post)
            .then((res) => {                    
                dispatch(addPostSuccessAction(post));
                //console.log("post", res);
            })
            .catch(err => dispatch(addPostErrorAction(post))
            )
    }
                
}
