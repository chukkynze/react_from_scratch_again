function List(props) {

  const itemList = props.items;

  const fruits = [
    {id: 1, name: 'apple', calorie: 95},
    {id: 2, name: 'banana', calorie: 45},
    {id: 3, name: 'orange', calorie: 105},
    {id: 4, name: 'sour sop', calorie: 159},
    {id: 5, name: 'coconut', calorie: 37},
    {id: 6, name: 'pineapple', calorie: 49}
  ]
  fruits.sort((a,b) => a.name.localeCompare(b.name))    // Alphabetical
  fruits.sort((a,b) => b.name.localeCompare(a.name))    // Reverse Alphabetical
  fruits.sort((a,b) => a.calorie - b.calorie)           // Calories numeric asc
  fruits.sort((a,b) => b.calorie - a.calorie)           // Calories desc
  const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100)
  const highCalFruits = fruits.filter(fruit => fruit.calorie >= 100)

  // const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
  // const listItems = highCalFruits.map(fruit => <li key={fruit.id}>
  const listItems = fruits.map(fruit => <li key={fruit.id}>
    {fruit.name}: <b>{fruit.calorie} </b>
  </li>)

  return(<ol>{listItems}</ol>)
}

export default List;
