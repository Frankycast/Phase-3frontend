import React, { Component } from 'react'
import ScoreRow from './ScoreRow'

export default class ScoresContainer extends Component {
    
    // renderScore=()=>{
    //     return this.props.scores.map((userScores) => { return <ScoreRow userScores={userScores}/>
    // })
    // }
    render() {
        let renderScore = this.props.scores.map((userScores) => { <ScoreRow userScores={userScores}/> })

        console.log(renderScore)
        return (
            <div>
                {renderScore}
            </div>
        )
    }
}