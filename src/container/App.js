import React from 'react';
import FoodProducts from '../components/FoodProducts';
import GetFoodList from '../components/GetFoodList';
import GetPosts from '../components/GetPosts';
import Loading from '../components/Loading';

const App = () => {
  return (
    <div>
       <GetFoodList />
       <Loading />
       <br />
       <FoodProducts />      
    </div>
  );
}

export default App;
