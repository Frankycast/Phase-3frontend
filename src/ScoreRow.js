import React, { Component } from 'react'

export default class ScoreRow extends Component {
    
    render() {
        console.log(this.props.userScores)
        return (
                <div>
                {this.props.userScores}
                </div>
        )
    }
}
