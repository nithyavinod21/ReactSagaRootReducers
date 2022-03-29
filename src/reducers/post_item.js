const postItemReducer =(state={},action) =>{
    switch(action.type){
        case 'GET_POST_ITEMS':
            return{
                ...state,
                loadingPostItem:true 
            }
        case 'POST_RECEIVED':
            return{
                ...state,
                loadingPostItem:false,
                postlist:action.json
            }

         default:
             return state;
    }
}
 export default postItemReducer