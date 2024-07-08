//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextUtils" />
    <div className='container my-3'>
      <TextForm title="Text Operations"/>
    </div>
    </>
  );
}

export default App;
