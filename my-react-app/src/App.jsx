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

    return(
      <List items={fruits} category="Fruits" />
    );
}

export default App
