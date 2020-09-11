function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  //remove letter user doesn't want
  collection = collection.filter(letter => !(options.excludeCharacters.includes(letter)))

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  //random choose letter from filtered collection
  let password = ''
  for (let i = 0; i < options.length; i++) {
    const index = Math.floor(Math.random() * collection.length)
    password += collection[index]
  }

  //return generated password
  return password
}

module.exports = generatePassword