import List from "./List.jsx";

function App() {

    const fruits = [
        {id: 1, name: 'apple', calorie: 95},
        {id: 2, name: 'banana', calorie: 45},
        {id: 3, name: 'orange', calorie: 105},
        {id: 4, name: 'sour sop', calorie: 159},
        {id: 5, name: 'coconut', calorie: 37},
        {id: 6, name: 'pineapple', calorie: 49}
    ]

    const vegetables = [
        {id: 7, name: 'potato', calorie: 110},
        {id: 8, name: 'celery', calorie: 15},
        {id: 9, name: 'carrots', calorie: 25},
        {id: 10, name: 'corn', calorie: 63},
        {id: 11, name: 'broccoli', calorie: 50},
        {id: 12, name: 'ugu', calorie: 27}
    ]

    fruits.sort((a,b) => a.name.localeCompare(b.name))    // Alphabetical
    fruits.sort((a,b) => b.name.localeCompare(a.name))    // Reverse Alphabetical
    fruits.sort((a,b) => b.calorie - a.calorie)           // Calories desc
    fruits.sort((a,b) => a.calorie - b.calorie)           // Calories numeric asc

    const lowCalFruits = fruits.filter(fruit => fruit.calorie < 100)
    const highCalFruits = fruits.filter(fruit => fruit.calorie >= 100)

    return(
      <>
          {fruits.length > 0 && <List items={fruits} category="Fruits" />}
          {vegetables.length > 0 && <List items={vegetables} category="Veggies" />}
          <List />
      </>
    );
}

export default App
