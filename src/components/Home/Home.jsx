import classes from './Home.module.css'
import Post from './Post/Post'
import {useState, useEffect} from "react";
import axios from 'axios'


const Home = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await axios.get('https://6019d37497d15aac.mokky.dev/api');
                setPost(res.data); // json
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className={classes.home}>

            {post.map((post) => (
                <Post key={post.id} post={post}/>
            ))}

        </div>
    )
}

export default Home