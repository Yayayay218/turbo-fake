import React, {Component} from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

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
