import {processUserInput} from './callback';


function greeting(name) {
  console.log('Hello ' + name);
  return name
}

test('expect to callback ', () => {
    expect(processUserInput(greeting,'yo')).toBe('yo')
  
})
