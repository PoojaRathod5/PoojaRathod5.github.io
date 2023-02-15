import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ProfileHome } from './Components/ProfileHome';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProfileHome></ProfileHome>
    </div>
  );
}

export default App;
