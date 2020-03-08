import React, {useState, useEffect} from 'react';
import { postsRef, userRef, getPostsRef } from "../../utils/endpoints";

const usePostsFetch = (params) => {
    const [state, setState] = useState({posts: [], currentPage:0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPosts = async ({topic}) => {
        setLoading(true);
        setError(false);
        try {
            let endpoint = postsRef();
            if (params.user_id) {
                endpoint = postsRef().where("user_id", "==", userRef(params.user_id));
            }
            
            if (topic){
                endpoint = postsRef().where("topic", "==", topic)
            }

            const res = await endpoint.get();
            const posts = [];

            res.docs.map(doc => {
                if (doc.exists) {
                    posts.push({...doc.data(), id: doc.id});
                } else {
                    console.log("No such document!");
                }
            });
            setState(prev => ({
                ...prev,
                posts,
                currentPage: prev .currentPage++,
                totalPages: posts.length
            }));
        } catch (e) {
            console.log("err -->", e);
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts({});
    }, []);

    return [{state, loading, error}, fetchPosts];
};

export {
    usePostsFetch
}