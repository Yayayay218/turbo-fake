import React, { Component } from 'react'
import Star from '../../assets/images/star-icon.svg'
import axios from 'axios'

class HowTo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initWebView: 1
    }
  }

  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>

        <div className="row">
          <div className="col-12">
            <button
              style={{ marginTop: '100px' }}
              className="btn btn-rate-it"
              onClick={() => window.location.href = 'https://www.youtube.com/watch?v=iVMtTjVrlNw&feature=youtu.be'}
            >
              How
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default HowTo