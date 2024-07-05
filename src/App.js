import './App.css';
import Coffee from './components/Coffee';
function App() {

  return (
    <>
      <div className="banner">
      </div>
      <div className="container">
        <div className="content">
          <h2>Our Collection</h2>
          <p className='intro'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

          <div className='filter'>
            <a href="#g">All Products</a>
            <a href="#s">Available Now</a>
          </div>
          <div className='listing'>
            <Coffee />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
