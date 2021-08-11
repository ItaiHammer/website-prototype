import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// files
import './App.css';

// pages
import Main from './pages/Main.jsx';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    );
}

export default App;
