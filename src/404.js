import React, { Component } from 'react';
import './404.css';
import {Link} from 'react-router-dom';
import Footer from './components/Footer/Footer';
class ErrorPage extends Component{
    render(){
        return(
            <div>
            <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to="/">Return Home</Link>
            </div>
        </div>
        <Footer />
        </div>
        );
    }
}
export default ErrorPage;