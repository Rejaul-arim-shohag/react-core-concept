import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
// function App(){
//   const products = [
//     {name: "Photography  (20GB)", price: 9.99, des: "Page design and layout for print and digital media."},
//     {name: "Photoshop", price : 20.99, des: "Create motion graphics and visual effects for film, TV, video, and web."},
//     {name: "Illustrator", price : 20.99, des: "Design interactive vector animations for multiple platforms."},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."},
//     {name:"premium pro", price: 67.99, des:"audio editing and video making software"},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."},
//     {name:"Lightroom (1TB)", price:9.99, des: "Audio recording, mixing, and restoration."}
//   ]; 
//   //const product = products.map(product => product.name);
//   return(
//     <div className="App">
//       <div className="App-header">
//         <h1>Creative Cloud Plans and Pricing 777</h1>
//         {
//           products.map(pd => <Product product ={pd}></Product>)
//         }
//       </div>
//     </div>
//   )
// }
// function Product(props){
//   const productStyle={
//     width:"370px",
//     height:"250px",
//     border: "1px solid red",
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "5px"
//   }
//   return(
//     <div style={productStyle}>
//       <h2>{props.product.name}</h2>
//       <h3>US$ {props.product.price}</h3>
//       <p>{props.product.des}</p>
//     </div>
//   )
// }

//another component diclare
// function App(){
//   const students = [
//   {id : 1, name : "amia", fatherName: "Jamal uddin"},
//   {id : 2, name : "tamia", fatherName : "abu sayed"},
//   {id : 3, name : "Perbej", fatherName : "Jamal majhi"},
//   {id : 4, name : "kabir", fatherName : "majhi"},
//   {id : 5, name : "unknown", fatherName : "heidao janina"}
//   ]
//   return(
//     <div className="App">
//       <div className="App-header">
//         <p>Welcome to all of student of this class</p>
//         {
//           students.map(stdnt => <Student student={stdnt}></Student>)
//         }
//       </div>
//     </div>
//   )
// }

// function Student(props){
//   const studentStyle = {
//     color: "white",
//     background : "#032942",
//     border : "1px solid #a80f0a",
//     width : "400px",
//     borderRadius : "5px",
//     margin : "20px"
//   }
//   return(
//     <div style = {studentStyle}>
//       <h1>id : {props.student.id}</h1>
//       <h2>{props.student.name}</h2>
//       <h2>{props.student.fatherName}</h2>
//     </div>
//   )
// }

//country component diclare
function App(){
  const countrys = [
    {name :"Bangladesh", peoples : 18000000,},
    {name :"pakistan", peoples : 2848848}
  ]
  const someStyle = {
    color :"#eb170c"
  }
  return(
    <div className="App">
      <div className="App-header">
        <h2 style ={someStyle}>any information you can get form this website</h2>
        <Counter></Counter>
        <Users></Users>
        <Post></Post>
        <Photo></Photo>
        {
          countrys.map(cntr => <Country country={cntr}></Country>)
        }
      </div>
    </div>
  )
}

//set count 
function Counter(){
  const [count, setCount] = useState(0)
  //this function is not use, but this bunction work directly use button onclick property
  // const handleIncrease = () => setCount(count + 1);
  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    if(newCount <0){
      setCount(0)
    }
  }
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onMouseOver={() => setCount(count + 1)}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

function Users(){
  const[users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Daynamic Users :{users.length} </h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Post(){
  const [posts, setPost] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data))
  })
  return(
    <div>
      <h1>Daynamic posts: {posts.length} </h1>
      <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

function Photo(){
  const [photos, setPhoto] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => setPhoto(data))
  })
  return(
    <div>
      <h1>Daynamic Photos: {photos.length} </h1>
      <ul>
        {
        photos.map(photo => <div>{photo.url}</div>)
        }
      </ul>
    </div>
  )
}

// function Users(){
//   const [users, setUsers] = useState([])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => setUsers(data))
//   })
//   return(
//     <div>
//       <h2>Daynamic Users : {users.length}</h2>
//       {
//         console.log(users)
//       }
//     </div>
//   )
// }

 function Country(props){
   const ctStyle = {
     width : "500px",
     border : "1px solid red",
     borderRadius : "8px",
     margin : "20px"
   }
   return(
     <div style ={ctStyle}> 
       <h1>{props.country.name}</h1>
       <h2>{props.country.peoples}</h2>
       <p>20 core</p>
     </div>
   )
 }



// function App() {
//   const products =[
//     {name :"Photography  (20GB)", price : 9.99},
//     {name :"All Apps", price : 11.99},
//     {name :"Photoshop",price : 27.99},
//     {name :"Premiere Pro",price : 12.99}
//   ]
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>I am learning react js</h1>
//         <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Product product={products[2]}></Product>
//         <Product product={products[3]}></Product>
//         </header>
//     </div>
//   )
// }
//   function Product(props){
//    const productStyle = {
//       border:"1px solid white",
//       borderRadius: "5px",
//       backgroundColor:"red",
//       color:"white",
//       height : "300px",
//       width : "300px",
//       float : "left",
//       margin : "20px 0px"
//     }
//     console.log(props)
//     return (
//       <div style={productStyle}>
//         <h2>{props.product.name}</h2>
//         <h1>US${props.product.price}</h1>
//         <button>Buy Now</button>
//       </div>
//     )
//   }

export default App;
