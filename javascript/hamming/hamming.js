class Hamming {

  constructor(strand1, strand2){
    this.strand1 = strand1;
    this.strand2 = strand2;
  }

  compute(strand1, strand2){

    let a = strand1.split(", ")
    let b = strand2.split(", ")
    let max = (a.length < b.length ) ? a.length : b.length
    console.log({a});
    console.log({max});
  }

}

module.exports = Hamming;

let test1 = 'A, C, T, G'
let test2 = 'A, G, A, G'

var hamming = new Hamming();

hamming.compute(test1, test2);