import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h3>
        <i className='fa fa-book'></i> کتابخانه ی من
        </h3>
        <Link to="books">لیست کتابها</Link>
        <Link to="about">درباره من</Link>

      </header>
      <Outlet/>
    </div>
  );
}

export default App;
