import React, { Component } from 'react';
import Header from './Navigation';
import Footer from './Footer';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>

        );
    }
}

export default Root;