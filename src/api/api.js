import gameDataJSON from '../configs/game-data.json'

export default class RockPaperScissorsApi {
  static getServerChoice() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const weapons = Object.keys(gameDataJSON.game.weapons)
        const res = weapons[weapons.length * Math.random() << 0]
        resolve(res)
      }, 500)
    })
  }
}