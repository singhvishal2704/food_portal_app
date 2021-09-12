import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <HomeScreen />
      <Footer />
    </Router>
    </>
  );
}

export default App;
