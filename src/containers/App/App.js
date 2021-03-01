import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Provider from '../App/Provider'
import NavBar from '../../components/NavBar/NavBar';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import Home from '../Home/Home';
import Pet from '../Pet/Pet';

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app}>
        <CssBaseline />

        <Provider>
          <NavBar />
          <NavDrawer />
        </Provider>

        <main className={classes.container}>
          <div className={classes.body}>

            <Route path="/" exact component={Home} />
            <Route path="/pet" component={Pet} />

          </div>
        </main>

      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    height: '100vh',
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  body: {
    width: '80%',
    heigth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
    flexDirection: 'column',
  },
}));

export default App;
