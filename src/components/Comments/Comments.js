import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Comments.module.css";
const Comments = ({ setSelectedComments }) => {
  const [comments, setComments] = useState([]);
  // Выводится только при первом выводе
  useEffect(() => {
    console.log("[Posts.js] render with useEffect");
  }, []);
  // Выводится только при изменении message
  // useEffect(() => {
  //   console.log("[Posts.js] render with useEffect depeding on message variable");
  // }, [message]);
  // Для задержки выполнения чего-то
  useEffect(() => {
    setTimeout(() => console.log("Hello from Posts"), 2000);
  }, []);
 
useEffect (() => {
    axios.get ('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        const comments = response.data;
        const only5commets = comments.slice(0, 5)
        setComments(only5commets);
    })
}, []);

  const results = comments.map((post) => (
    <article key={post.id} onClick={() => setSelectedComments(post.id)}>
      <h2>{comments.name}</h2>
      <p>{comments.body}</p>
    </article>
  ));
  return (
    <div className={classes.Comments}>
      {results.length > 0 ? results : "Loading..."}
    </div>
  );
}
export default Comments;