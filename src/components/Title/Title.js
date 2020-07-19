import React from 'react';

import './Title.css';

export default class Title extends React.Component {

    render() {
        return (
            <div className="Middle3">
                <div>
                    <span id="big">{this.props.title}</span><br />
                    <span id="small">{this.props.title}</span>
                </div>
                <span id="middle">{this.props.subTitle}</span>
            </div>
        )
    }
}