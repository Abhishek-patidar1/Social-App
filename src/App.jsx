// import React, { useState } from 'react';
// import Todo  from './Todo';

// const App =() => {

//      const [inputList, setInputList] = useState("");

//      const[Items , setItems] = useState([]);

//      const itemEvent = (event) => {
//        setInputList(event.target.value)
//      }

//       const listOfItem =() => {
//              setItems((oldItems) => {
//             return  [...oldItems,inputList];
//              })
//              setInputList('');
//       }
//       const deleteItem = (id) =>{
//         console.log('deleted')
//         setItems((oldItems) => {
//           return oldItems.filter((arr, index)=>{
//            return index!==id;
//           })
//         })
//       }
//      return (
//      <>
//    <div className='main_div'> 
//   <div className='center_div'>
//    <br></br>
//    <h1> ToDO List</h1>
//    <br></br>
//    <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent} />
//    <button onClick={listOfItem}> + </button>
//    <ol>

//        { Items.map((itemval, index) => {
//          return  <Todo  key={index} id={index} text ={itemval} onSelect={deleteItem}> </Todo>
        
//      })}
//    </ol>
//   </div>
//    </div>
//      </>
//      )
// }
// export default App;