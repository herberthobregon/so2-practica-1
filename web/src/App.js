import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Main></Main>
    </Router>
  </Provider>
);

export default App;
