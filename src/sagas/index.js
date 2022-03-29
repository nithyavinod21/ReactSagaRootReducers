import {takeLatest,put,all,takeEvery} from "@redux-saga/core/effects";
import axios from 'axios';

function* actionWatch(){
    yield takeLatest('GET_FOOD_ITEMS',fetchFoodList);
  //  yield takeLatest('GET_POST_ITEMS',fetchPostItems);
}

function* fetchFoodList(){
   const url='http://localhost:6700/foodbloglist';
 
   /*  const data =yield fetch(url).then(
      
        response =>{
            console.log(response.json() +"<=====FOOD RESPONSE");        
          //  response.json()
        
        });
 */

        const data =yield axios.get(url).then(resp =>  resp.data);
        debugger
        console.log("****fetchFoodList REPONSE" + data.toString());
    yield put({type:'FOODS_RECEIVED',json:data.toString()});
}

 
function* fetchPostItems(){
      const url='http://jsonplaceholder.typicode.com/posts'
   
     const data =yield fetch(url).then(response =>response.json());

    // 
 
     yield put({type:'POST_RECEIVED',json:data});
 } 
 

export default function* rootSaga(){

    yield all(
        [
            actionWatch()
        ]
    )

}
