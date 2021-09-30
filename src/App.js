import { Box } from '@mui/material';
import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailView from './Components/post/DetailView';
import CreatePost from './Components/post/CreatePost';
import UpdatePost from './Components/post/UpdatePost';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Box style={{ marginTop: 64 }}>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/details"><DetailView /></Route>
            <Route exact path="/createpost"><CreatePost /></Route>
            <Route exact path="/updatepost"><UpdatePost /></Route>
          </Switch>
        </Box>
      </Router>
    </>
  );
}

export default App;
