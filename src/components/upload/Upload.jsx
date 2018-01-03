import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Upload Your Flick</h3>
                <hr/>

                <div className="col-sm-12">
                    <div>
                        <button className="button is-primary">
                        <span className="icon is-medium" style={{paddingRight: 10 }}> <i className="fa fa-upload"></i> </span>
                        Upload Video
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;