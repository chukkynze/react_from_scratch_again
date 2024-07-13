import PropTypes from "prop-types";

function List(props) {

  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => <li key={item.id}>
    {item.name}: <b>{item.calorie} </b>
  </li>)

  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    calorie: PropTypes.number,
  })),
  category: PropTypes.string,
}

List.defaultProps = {
  category: "Category",
  items: [],
}

export default List;
