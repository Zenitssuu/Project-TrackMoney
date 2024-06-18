
import { useState } from 'react'
import './App.css'

function App() {

  const [name,setName] = useState('');
  const [dateTime,setDateTime] = useState('');
  const [description,setDescription] = useState('');

  const addNewTransaction = () => {};

  return (
    <main>
      <h1>$400 <span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
           type="text" placeholder='+200 new samsung tv' />
          <input
            value={dateTime}
            onChange={(e)=> setDateTime(e.target.value)}
           type="datetime-local" />
        </div>
        <div
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
         className='description'>
          <input type="text" placeholder='description'/>
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung tv</div>
            <div className="new-description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red"> -$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">New project</div>
            <div className="new-description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$800</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
