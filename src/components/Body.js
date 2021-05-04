import axios from 'axios';
import { 
  useEffect,
  useState
} from 'react';

import './Body.css';

const Body = () => {

  const [items, setItems] = useState([]);
  const itemsList = items.map((item) => (
    <div className='col-md-4'>
      <p>{item.strMeal}</p>
      <img
        alt='food'
        className='img-fluid'
        src={item.strMealThumb}
      />
      <p>{item.idMeal}</p>
    </div>
  ));

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => {
      console.log(res.data);
      setItems(res.data.meals);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='row w-100'>
        {itemsList}
      </div>
    </div>
  );
}

export default Body;
