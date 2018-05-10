import React, {Component} from 'react'
import Star from '../../assets/images/star-icon.svg'
import axios from 'axios'

class FreePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initWebView: 1
        }
    }

    componentDidMount() {
        axios.get('http://astraler.com/turbodl/turbodlwebview.json')
            .then(res => {
                if (res.webviewnumbertobify !== 1)
                    this.setState({
                        initWebView: 2
                    })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <div className="row">
                    <div className="col-12">
                        <img src={Star} alt="" style={{marginTop: '105px'}}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <p className="rate-app">
                            If you like the app, please <br/> rate it on Appstore
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <button
                            className="btn btn-rate-app"
                            onClick={() => window.location.href = 'https://itunes.apple.com/app/id1377075001'}
                        >
                            Rate Tobify
                        </button>
                    </div>
                </div>
                {
                    this.state.initWebView === 1 &&
                    <div className="row">
                        <div className="col-12">
                            <button
                                className="btn btn-rate-it"
                                onClick={() => window.location.href = 'https://videodl.net?tokens=e9adebad-a22b-4de8-b13b-d18ce2624e4d'}
                            >
                                Website
                            </button>
                        </div>
                    </div>
                }

                <div className="row">
                    <div className="col-12">
                        <p className="feedback">
                            For any support or feedback, please <br/> email us at <a href="mailto:tobifyapp@gmail.com"
                                                                                     className="mailto">tobifyapp@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FreePage