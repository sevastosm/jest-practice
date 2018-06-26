import processUserInput from './shoppinglist';


function greeting(name) {
  name ='yo'
  console.log('Hello ' + name);
  return name
}

test('expect shoping list have 5 items ', () => {
    expect(processUserInput(greeting)).toBe('yo')
  
})

processUserInput(greeting);