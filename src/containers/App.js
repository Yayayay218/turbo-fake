import React, {Component} from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="page-wrapper">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App
