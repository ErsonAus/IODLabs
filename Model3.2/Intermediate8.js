const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221199')

const phoneBookDEF = new Map([
  ['David', '0411223344'],
  ['Emma', '0422334455'],
  ['Frank', '0433445566']
])

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`)
  })
}

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

printPhoneBook(phoneBook)