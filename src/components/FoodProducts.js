import {connect} from 'react-redux' ;

let FoodProducts =({foodblogs}) =>{
    debugger
    console.log(foodblogs + "*****JSON OBJECT")
    return(
        foodblogs
        ?
        foodblogs.map((item,index)=>{
           return( 
           <div key={index}>
               <li> {item.name}</li>
               <li> {item.type}</li>
               <li> {item.description}</li>
               <li> {item.price}</li>
            </div>
           )
        })
        :null
    )

}

const mapStateToProps = (state) =>({
  
    foodblogs : state.foodblogs //latest data received from the reducers
})

FoodProducts = connect(mapStateToProps,null) (FoodProducts);

export default FoodProducts