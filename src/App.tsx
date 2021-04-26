import logo from './logo.svg';
import './App.css';
import PublicChat from './pages/public-chat'
import Profile from './pages/profile'
import EditProfile from './pages/edit-profile'
import Connect from './pages/connect'

const App = () => {
  return (
    <div className="App">
      {/* <Connect/> */}
      {/* <EditProfile/> */}
      {/* <Profile/> */}
      <PublicChat/>
    </div>
  );
}

export default App;
