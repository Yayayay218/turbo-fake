import React, {Component} from 'react'
import Star from '../../assets/images/star-icon.svg'

class FreePage extends Component {
    render() {
        console.log(this)
        return (
            <div className="container" style={{textAlign: 'center'}}>
                {/*<div className="row" style={{marginTop: '15px', textAlign: 'center'}} >*/}
                {/*<div className="col-4" style={{textAlign: 'left'}}>*/}
                {/*<a href="#" data-toggle="modal" data-target="#myModal"><img src={Logo}*/}
                {/*alt="" style={{height: '46px'}} /></a>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="modal fade" id="myModal">*/}
                {/*<div className="modal-dialog modal-dialog-centered">*/}
                {/*<div className="modal-content">*/}
                {/*<div className="modal-body">*/}
                {/*The website that you are about to visit is not hosted by Tobify*/}
                {/*</div>*/}

                {/*<div className="modal-footer">*/}
                {/*<a href="https://videodl.net?tokens=e9adebad-a22b-4de8-b13b-d18ce2624e4d"*/}
                {/*className="btn btn-secondary">OK</a>*/}
                {/*</div>*/}

                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                <div className="row">
                    <div className="col-12">
                        <img src={Star} alt="" style={{marginTop: '105px'}}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <p className="rate-app">
                            If you like the app, please <br/> rate us on Appstore
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