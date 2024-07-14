import React, {useState} from 'react';

function MyComponent() {

  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shippingType, setShippingType] = useState('Delivery');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingTypeChange(event) {
    setShippingType(event.target.value);
  }

  return(
    <div>
      <input onChange={handleNameChange}
             value={name}/>
      <p>Name: {name}</p>

      <input onChange={handleQuantityChange}
             value={quantity}
             type="number"/>
      <p>Quantity: {quantity}</p>

      <textarea onChange={handleCommentChange}
                value={comment}
                placeholder="Enter delivery instructions."
      />
      <p>Comment: {comment}</p>

      <select value={payment}
              onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio"
               value="Pick-up"
               checked={shippingType === 'Pick-up'}
               onChange={handleShippingTypeChange}
        />
        Pick-up
      </label>
      <label>
        <input type="radio"
               value="Delivery"
               checked={shippingType === 'Delivery'}
               onChange={handleShippingTypeChange}
        />
        Delivery
      </label>
      <p>Shipping Type: {shippingType}</p>
    </div>
  );
}

export default MyComponent;
