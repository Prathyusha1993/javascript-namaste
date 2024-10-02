import React, { useEffect } from 'react'

const index1 = () => {
    
  return (
    <div>index1</div>
  )
}

export default index1;

useEffect(() => {
//component did mount
},[]);

useEffect(() => {
//component did update
},[user])

useEffect(() => {
    return() => {} 
//component umounting
},[])

//lazy laoding:
const loadrequired = lazy(() => import('./indexxx.js'));

//array function
const arr =[1,2,3,4,5];
const doubled = arr.map((array) => array * 2)
console.log(doubled);

