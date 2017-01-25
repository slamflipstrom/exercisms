class Robot {
  constructor () {
    this.directions = ['north', 'east', 'south', 'west'];
    this.bearing;
    this.coordinates;
  }

  orient(currentDirection) {
    this.bearing = currentDirection;
  }

  findIndex() {
    return this.directions.indexOf(this.bearing);
  }

  turnRight() {
    let index = this.findIndex();
    if (index === 3) {
      this.bearing = this.directions[0];
    } else {
      this.bearing = this.directions[index + 1];
    }
  }

  turnLeft() {
    let index = this.findIndex();
    if (index === 0) {
      this.bearing = this.directions[3];
    } else {
      this.bearing = this.directions[index - 1];
    }
  }

  at(coordX, coordY) {
    this.coordinates = [coordX, coordY];
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1;
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1;
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1;
    } else {
      this.coordinates[0] -= 1;
    }
  }

  instructions(commands) {
    let commandMap = {
      'L': 'turnLeft',
      'R': 'turnRight',
      'A': 'advance'
    }
    let instructionArray = [];

    for(let i = 0; i < commands.length; i++) {
      instructionArray.push(commandMap[commands[i]]);
    };

    return instructionArray;
  }

  place(location) {
    this.at(location['x'], location['y']);
    this.orient(location['direction']);
  }

  evaluate(commands) {
    this.instructions(commands).forEach(instruction => {
      if (instruction === 'turnRight') {
        this.turnRight();
      } else if (instruction === 'turnLeft') {
        this.turnLeft();
      } else {
        this.advance();
      }
    });
  }
}
module.exports = Robot;