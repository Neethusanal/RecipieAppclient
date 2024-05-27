
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Layout from './Layouts/Layout';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route element={<Layout/>}/>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
