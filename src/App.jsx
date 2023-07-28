import { useState } from "react"
import "./style.css" 

export default function App() {
  const [newItem, setNewItem] = useState("");
  // setNewItem("Item 1");
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>
        <button type="button" className="btn">Add</button>
      </form>

      <h1>To do list</h1>
      <div className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item1
          </label>
          <button className="btn btn-danger">DELETE</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn btn-danger">DELETE</button>
        </li>
      </div>
    </>
  )
}