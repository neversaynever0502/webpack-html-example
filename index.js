const random = require('random')

function generate_random(){
  return random.int(0, 100)
}


module.exports = generate_random