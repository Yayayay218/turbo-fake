import React, {Component} from 'react'
import Logo from '../../assets/images/turbodl.net.png'

class ProPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{marginTop: '15px', textAlign: 'center'}} >
                    <div className="col-4" style={{textAlign: 'left'}}>
                        <a href="#" data-toggle="modal" data-target="#myModal"><img src={Logo}
                                                                                    alt="" style={{height: '46px'}} /></a>
                    </div>
                </div>

                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                The website that you are about to visit is not hosted by Tobify
                            </div>

                            <div className="modal-footer">
                                <a href="https://videodl.net?tokens=e9adebad-a22b-4de8-b13b-d18ce2624e4d"
                                   className="btn btn-secondary">OK</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProPage