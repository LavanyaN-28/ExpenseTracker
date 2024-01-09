const posts=[
  {title:"Post One",body:"This is post one"},
  {title: "Post Two",body:"This is post two"}
];

function getPosts(){
  setTimeout(() => {
    let output="";
    posts.forEach((post,index)=> {
      output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML=output
  },1000)
}

function createPost(post){
  return new Promise((resolve,reject)=>{
    updateLastUserActivityTime()
    .then((updatedLastActivityTime) => {
      console.log("User's last activity time updated:", updatedLastActivityTime);
    })
    .catch((error) => {
      console.error('Error updating last activity time:', error);
    });
  });

}

function updateLastUserActivityTime(){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      const updatedLastActivityTime=new Date().toLocaleTimeString();
      resolve(updatedLastActivityTime)
    },1000)
  })
}

function deletePost(){
  return new Promise((resolve,reject)=>{
    setTimeout( () => {
      if(posts.length > 0){
          const poppedElement  = posts.pop();
          resolve(poppedElement);
      } else {
          reject("ERROR: ARRAY IS EMPTY")
      }
  }, 1000)
})
}

const updateActivityTimePromise = updateLastUserActivityTime();

  Promise.all([createPost, updateLastUserActivityTime])
    .then(([_, updatedLastActivityupTime]) => {
      // Retrieve all the posts and last activity time here
      const allPosts = getPosts();
      console.log('All posts:', allPosts);
      console.log('Last activity time:', updatedLastActivityupTime);

      // Call deletePost to delete the last post
      return deletePost();
    })
    .then(() => {
      // Retrieve all the posts again after deletion
      const remainingPosts = getPosts();
      console.log('Remaining posts:', remainingPosts);
    })
    .catch((error) => {
      // Handle any errors that occurred during the update, post creation, or deletion
      console.error('Error updating last activity time, creating post, or deleting post:', error);
    });