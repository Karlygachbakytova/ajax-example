
import classes from "./Author.module.css";
const Author = ({userId}) => {
 
    const [email, setEmail] = useState("Loading")
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + [userId]
          .then((response) => {
            console.log(response);
            const email = response.data.email;
            setEmail(email);
          });
      }, [userId]);


    return ( 
      <div className={classes.Author}>
{email}
      </div>
     );
}
 
export default Author;