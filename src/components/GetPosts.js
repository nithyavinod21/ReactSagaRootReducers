import {connect} from 'react-redux';
import {getPostItems} from '../actions';

let GetPosts =({getPostItems}) =>{
    return(
        <div>
            <button onClick={getPostItems} >Display POST Items</button>
        </div>
    )

}
const mapDispatchToProps = {
    getPostItems : getPostItems
}


GetPosts = connect(null,mapDispatchToProps) (GetPosts);

export default GetPosts
