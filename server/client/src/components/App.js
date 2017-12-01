import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Profile = () => <h2>Profile</h2>
const Contact = () => <h2>Contact</h2>
const About = () => <h2>About</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Profile} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
