import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Provider from '../App/Provider'
import NavBar from '../../components/NavBar/NavBar';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Pet from '../Pet/Pet';
import Progress from '../Progress/Progress';
import Skills from '../Skills/Skills';
import Test from '../Test/Test';
import Footer from '../../components/General/Footer';
import Exercises from '../Exercises/Exercises';
import Exercise from '../Exercise/Exercise';

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>

        <Provider>
          <NavBar />
          <NavDrawer />
        <main className={classes.container}>
          <div className={classes.content}>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/Pet" component={Pet} />
            <Route path="/Progress" component={Progress} />
            <Route path="/Skills" component={Skills} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/exercise" component={Exercise} />
            <Route path="/Test" component={Test} />
          </div>
    
          <div className={classes.footer}>
            <Footer />
          </div>
        </main>
        </Provider>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  container: {
    width: '100%',
    height: '75vh',
    marginTop: '5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  content: {
    width: '80%',
    heigth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
  },
  footer: {
    width: '100%',
    heigth: '100%',
    position: 'fixed',
    bottom: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default App;
