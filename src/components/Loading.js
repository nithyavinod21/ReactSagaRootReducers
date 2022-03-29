import imgsrc from '../logo.svg';
import {connect} from 'react-redux';
let Loading =({loadingFoodItem}) =>{
    return(
        loadingFoodItem
        ?
        <div>
            <h1>Loading...</h1>
            <img src={imgsrc} alt="Loader" height="100" width="100" />
        </div>
        :null

    )
    
}

const mapStateToProps =(state) =>({
    loadingFoodItem:state.loadingFoodItem
})

Loading = connect(mapStateToProps,null)(Loading);

export default Loading;