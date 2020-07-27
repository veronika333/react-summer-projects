import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initList = [1,2,3,4,5,6]

function App() {
 const [list, setList] = useState(initList);
 const [draggable, setDraggable] = useState(null);
function onDragStartHandler(e, index){
setDraggable(list[index]);
e.dataTransfer.effectAllowed = "move";
e.dataTransfer.setData('text/html', e.target.parentNode);
e.dataTransfer.setDragImage(e.target.parentNode, 20,20);
}

function dragOverHandle(index){
  const draggedOverItem = list[index];
  if(draggable === draggedOverItem) {
    return;
  }
  const numbers = list.filter(number => number !== draggable);
numbers.splice(index, 0, draggable);
setList(numbers);
}

  return (
    <div className="App">
     <div>
       <h1>Draggable List</h1>
       <h2>Drag a number and change its position</h2>
<ul>{
  list.map((item, index) =>
    <li key={index} onDragOver={()=>dragOverHandle(index)} className="li-style">
     <div draggable onDragStart={(e) => onDragStartHandler(e, index)}>
        {item}
      </div> 
    </li>
  )}
</ul>
     </div>
    </div>
  );
}

export default App;
