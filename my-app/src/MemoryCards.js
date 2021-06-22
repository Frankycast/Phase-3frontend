import React, { Component } from 'react'

export default class memoryCards extends Component {
    render() {
        return (
            <div class="memory-card">
                <img class="front-face" src="img goes here" alt="React"></img>
                <img class="back-face" src="back img goes here" alt="Memory Game"></img>
            </div>
        )
    }
}
