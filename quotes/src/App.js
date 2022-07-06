import { useState, useEffect, React } from 'react';
import './App.css';


const API_LINK = 'https://api.quotable.io/random';

const App = () => {

  function refreshPage() {
    window.location.reload(false);
  }

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");


  useEffect(() => {
    const fetchquote = async () => {
      const response = await fetch(API_LINK);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author)
      console.log(data);
    };
    fetchquote();
  }, []);

  return (
    <div className="App">
      <h1>Quote of the Day!!</h1>
      <div className='quotebox'>
        <div>
          {quote}
        </div>
        <div>
          <p>Author: {author}</p>
        </div>
        <button onClick={refreshPage}>More Quotes</button>
      </div>
    </div>
  );

}
export default App;
