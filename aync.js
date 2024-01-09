const posts= [
    {title:"Post One"},
    {title:"Post Two"}
];

function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            updateLastUserActivityTime();
            posts.push({title:"Post Three"});
            resolve(post);
        },1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) =>{
        const updatedTime=new Date().toString();
        resolve(`user's last activity: ${updatedTime}`)
    })
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                const updatedDeleteTime=new Date().getTime();
                resolve(`Last updated activity time ${updatedDeleteTime}`);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
async function func(){
    try{
        let createPosts=await createPost()
        console.log(createPosts)
        let updateLastActivity=await updateLastUserActivityTime()
        console.log(updateLastActivity)
        let deletePosts=await deletePost()
        console.log(deletePosts)
    
    }catch(error){
        console.log(error)
    }
}
func();