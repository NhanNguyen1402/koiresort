
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomsInfo from './pages/RoomInfo';
import Services from './pages/Services';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom'; 
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/rooms/" component = {Rooms} />
        <Route exact path = "/rooms/:slug" component = {RoomsInfo} />
        <Route exact path = "/services" component = {Services} />
        <Route component = {Error}/>
      </Switch>
    </>
  );
}

export default App;
