import {connect} from 'react-redux';
import {getFoodItems} from '../actions';

let GetFoodList =({getFoodItems}) =>{
   
    return(
        <div>
            <button onClick={getFoodItems} >Food Products List</button>
        </div>
    )

}
const mapDispatchToProps = {
    getFoodItems : getFoodItems
   
}


GetFoodList = connect(null,mapDispatchToProps) (GetFoodList);

export default GetFoodList
