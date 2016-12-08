class ETL {

  transform(oldFormat) {
    let newFormat = {};

    for (let score in oldFormat) {
      let letters = oldFormat[score]
      for (let i = 0; i < letters.length; i++){
        newFormat[letters[i].toLowerCase()] = parseInt(score);
      }
    }
    return newFormat
  }
}

module.exports = ETL