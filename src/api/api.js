import gameDataJSON from '../configs/game-data.json'

export default class RockPaperScissorsApi {
  static getServerChoice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(gameDataJSON.game.weapons[gameDataJSON.game.weapons.length * Math.random() << 0])
      }, 500)
    })
  }
}