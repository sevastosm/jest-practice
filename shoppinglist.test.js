import { shoppingList } from './shoppinglist';


test('expect shoping list have 5 items ', () => {
    expect(shoppingList.length).toBeLessThanOrEqual(5)
  
})


