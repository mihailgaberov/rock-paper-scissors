import gameDataJSON from '../configs/game-data.json'

export default class RockPaperScissorsApi {
  static createTrainer(trainer) {
    trainer = Object.assign({}, trainer)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(gameDataJSON.game.weapons[gameDataJSON.game.weapons.length * Math.random() << 0])
      }, 500)
    })
  }
}