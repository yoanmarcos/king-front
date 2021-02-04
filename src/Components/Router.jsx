import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Map from '../Pages/Map';
import Population from '../Pages/Population';
import Ressource from '../Pages/Ressource';
import Navigation from './Navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Carte" component={Map} />
        <Route path="/Ressource" component={Ressource} />
        <Route path="/Population" component={Population} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
