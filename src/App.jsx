import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';
import Navbar from './components/Navbar';
import Loggin from './routes/Loggin';
import UploadListing from './routes/UploadListing';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/LoggingIn' element={<Loggin />} />
          <Route path='/UploadListing' element={<UploadListing />} />
        </Routes>
    </div>
  );
}

export default App;
