class ETL {

  transform(old_format) {
    let new_format = {};

    for (let score in old_format) {
      let letters = old_format[score]
      for (let i = 0; i < letters.length; i++){
        new_format[letters[i].toLowerCase()] = parseInt(score);
      }
    }
    return new_format
  }
}

module.exports = ETL