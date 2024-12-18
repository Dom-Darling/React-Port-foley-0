import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Navigation />
                <Switch>
                    <Route path="/about" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/" exact component={AboutMe} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;