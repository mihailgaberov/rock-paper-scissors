import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getServerChoiceAction } from '../actions/gameActions'
import { getServerChoice } from "../selectors/game"
import StyledMainContainer from './styled-components/StyledMainContainer'
import Game from './Game'
import GameControls from './GameControls'
import Modes from './Modes'
import gameDataJSON from '../configs/game-data.json'
import Score from "./Score"

const weapons = Object.keys(gameDataJSON.game.weapons)
const modes = Object.keys(gameDataJSON.game.modes)
const weaponsData = gameDataJSON.game.weapons
const modesData = gameDataJSON.game.modes

const initialState = {
  mode: modes[0],
  player1: {
    loading: false,
    weapon: null,
    score: 0
  },
  player2: {
    loading: false,
    weapon: null,
    score: 0
  },
  winner: null
}

class App extends Component {
  state = initialState

  pickWeapon = () => {
    return weapons[weapons.length * Math.random() << 0]
  }

  getWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) return 0

    return weaponsData[weapon2].wins.some(wins => wins === weapon1) ? 1 : 2
  }

  play = (weapon) => {
    const weapon1 = weapon || this.pickWeapon()
    const weapon2 = this.pickWeapon()

    this.setState({
      player1: {
        ...this.state.player1,
        weapon: weapon1,
        loading: false
      },
      player2: {
        ...this.state.player2,
        weapon: weapon2,
        loading: true
      }
    })

    setTimeout(() => {
      this.setScore()
    }, 300)
  }

  playRemote = (weapon) => {
    this.props.getServerChoice()
    const weapon1 = weapon || this.pickWeapon()
    const weapon2 = this.props.serverChoice || this.pickWeapon()

    this.setState({
      player1: {
        ...this.state.player1,
        weapon: weapon1,
        loading: true
      },
      player2: {
        ...this.state.player2,
        weapon: weapon2,
        loading: true
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)

    this.setScore()
  }

  setScore = () => {
    const winner = this.getWinner(this.state.player1.weapon, this.state.player2.weapon)

    this.setState({
      player1: {
        ...this.state.player1,
        ...((winner === 1) ? {score: this.state.player1.score + 1} : {}),
        loading: false
      },
      player2: {
        ...this.state.player2,
        ...((winner === 2) ? {score: this.state.player2.score + 1} : {}),
        loading: false
      },
      winner
    })
  }

  restart = () => {
    this.setState({
      player1: {
        ...this.state.player1,
        weapon: initialState.player1.weapon
      },
      player2: {
        ...this.state.player2,
        weapon: initialState.player2.weapon
      },
      winner: initialState.winner
    })
  }

  reset = () => {
    this.setState(initialState)
  }

  toggleMode = () => {
    const mode = this.state.mode
    this.reset()
    this.setState({mode: mode === modes[0] ? modes[1] : modes[0]})
  }

  render() {
    const {player1, player2} = modesData[this.state.mode]
    const loading = (this.state.player1.loading || this.state.player2.loading)

    return (
      <StyledMainContainer>
        <header>
          <h1>Rock, Scissors, Paper</h1>
        </header>
        <Modes onClickHandler={this.toggleMode}
               label={modesData[this.state.mode].label}/>

        <Game player1={{...this.state.player1, label: player1}}
              player2={{...this.state.player2, label: player2}}/>

        {this.state.winner === null && !loading && (
          <GameControls onClickWeapon={weapon => {
            this.state.mode === modes[1] ? this.playRemote(weapon) : this.play(weapon)
          }}
                        weapons={Object.keys(gameDataJSON.game.weapons)}/>
        )}

        {(this.state.winner !== null || loading) && (
          <Score player1={player1}
                 player2={player2}
                 winner={this.state.winner}
                 loading={loading}
                 onClickPlay={this.restart}/>
        )}
      </StyledMainContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    serverChoice: getServerChoice(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getServerChoice: () => dispatch(getServerChoiceAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
