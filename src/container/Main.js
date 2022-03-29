import React from 'react';

import GetPosts from '../components/GetPosts';
import Loading from '../components/Loading';
import PostItemsLists from '../components/PostItemsLists';

const Main = () => {
  return (
    <div>
       <GetPosts />
       <Loading />
       <br />
       <PostItemsLists />      
    </div>
  );
}

export default Main;
