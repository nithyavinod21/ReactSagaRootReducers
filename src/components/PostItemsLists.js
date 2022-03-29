import {connect} from 'react-redux' ;

let PostItemsLists =({postlist}) =>{

    return(
        postlist
        ?
        postlist.map((item,index)=>{
           return( 
           <div key={index}>
               <li> {item.title}</li>
              
            </div>
           )
        })
        :null
    )

}

const mapStateToProps = (state) =>({
  
    postlist : state.postlist //latest data received from the reducers
})

PostItemsLists = connect(mapStateToProps,null) (PostItemsLists);

export default PostItemsLists