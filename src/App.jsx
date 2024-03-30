
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from './context/ContextGlobal';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Favs from './pages/Favs';
import Detail from './pages/Detail';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/favs" component={Favs} />
          <Route exact path="/dentist/:id" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
};

export default App;