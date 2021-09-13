import React, { Component } from 'react'
import ScoreRow from './ScoreRow'

export default class ScoresContainer extends Component {

    state={
        id: this.props.id,
        scores: this.props.scores
    }

    // componentDidMount(){
    //     fetch("http://localhost:9393/scores")
    //       .then(res => res.json())
    //       .then(pokemonArr => {
    //         this.setState({
    //           pokemons: pokemonArr
    //         })
    //       })
    //   }
    
    // renderScore=()=>{
    //     return this.props.scores.map((userScores) => { return <ScoreRow userScores={userScores}/>
    // })
    // }
    render() {
        let renderScore = this.props.scores.map((userScores) => { <ScoreRow userScores={userScores}/> })

        console.log(renderScore)
        return (
            <div>
                Score table
            </div>
        )
    }
}