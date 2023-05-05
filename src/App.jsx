import Header from "./components/Header";
import "./App.css"
const App = () => {
  return (
    <>
      <div className="tweet">
        <img
          className="prsofile-pic"
          src="https://placekitten.com/50/50"
          alt="Profile Picture"
        />
        <div className="tweet-content">
           <Header/>
          <p className="tweet-text">This is a sample tweet!</p>
          <img
            className="tweet-image"
            src="https://placekitten.com/200/150"
            alt="Tweet Image"
          />
          <div className="tweet-footer">
            <button className="btn-reply">Reply</button>
            <button className="btn-retweet">Retweet</button>
            <button className="btn-like">Like</button>
            <button className="btn-share">Share</button>
          </div>
        </div>
      </div>
      <Header/>
      <Header/><Header/><Header/>
      <h1> Hello world</h1>
    </>
  );
};

export default App;
