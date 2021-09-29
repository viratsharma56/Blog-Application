import { Box } from '@mui/system';
import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Box style={{marginTop: 64}}>
        <Home />
      </Box>
    </>
  );
}

export default App;
