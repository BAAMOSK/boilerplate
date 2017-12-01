import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Profile = () => <h2>Profile</h2>
const Contact = () => <h2>Contact</h2>
const About = () => <h2>About</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Profile} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="/contact/about" component={About} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
