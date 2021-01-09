
import './App.css';
import Content from './components/content/content.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Movies from './pages/movies/movies.component';
import Series from './pages/series/series.components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
        </Switch>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
