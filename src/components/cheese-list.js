import react from 'react';

export defauly function CheeseList(props){
  const cheeses = props.cheeses.map((cheese, index) => 
  <li key = {index}>
    {cheese}
  </li>
  );

  return (
    <div className="cheese-list-container">
      <ul className="cheese-list">
        {cheeses}
      </ul>
    </div>
  );
}