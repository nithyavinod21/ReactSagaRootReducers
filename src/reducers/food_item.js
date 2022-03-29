const foodItemReducer =(state={},action) =>{
    switch(action.type){
        case 'GET_FOOD_ITEMS':
            return{
                ...state,
                loadingFoodItem:true 
            }
        case 'FOODS_RECEIVED':
            return{
                ...state,
                loadingFoodItem:false,
                foodblogs:action.json
            }

         default:
             return state;
    }
}
 export default foodItemReducer