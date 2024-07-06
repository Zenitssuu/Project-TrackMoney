
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name,setName] = useState('');
  const [datetime,setDateTime] = useState('');
  const [description,setDescription] = useState('');
  const [transaction,setTransaction] = useState([])

  const addNewTransaction = (e) => {
    e.preventDefault();
    // const url = JSON.stringify(import.meta.env.VITE_REACT_APP_API_URL);
    // console.log(url);
    const price = name.split(' ')[0];
    fetch('http://localhost:3000/api/transaction',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({price,name:name.substring(price.length+1),description,datetime})
    })
    .then((res) => 
      res.json())
    .then((res)=>{
      setDateTime('');
      setName('');
      setDescription('');
      console.log(res)
    })
    getAllTransaction();
  };

  const [totalAmount,setTotalAmount] = useState(0);
  let Amount = 0;
  const getAllTransaction = async ()=>{
    const response = await fetch('http://localhost:3000/api/transactions');
    const data = await response.json();
    console.log(data);
    setTransaction(data);
    data.forEach(currTransac => {
      Amount+= currTransac.price -'0';
    });
    setTotalAmount(Amount);
  }
  useEffect(()=>getAllTransaction,[])
  return (
    <main>
      <h1 className={"" + (totalAmount < 0 ? "red" : "green")}>{totalAmount} <span>Rs</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
           type="text" placeholder='+200 new samsung tv' />
          <input
            value={datetime}
            onChange={(e)=> setDateTime(e.target.value)}
           type="date" />
        </div>
        <div className='description'>
          <input
          value={description}
          onChange={(e)=> setDescription(e.target.value)} 
          type="text" placeholder='description'/>
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      
      <div className="transactions">
      {transaction.length > 0 && transaction.slice().reverse().map((transaction)=>(
        <div className="transaction" key={transaction._id}>
        <div className="left">
          <div className="name">{transaction.name}</div>
          <div className="new-description">{transaction.description}</div>
        </div>
        <div className="right">
          <div className={"price " + (transaction.price < 0 ? "red" : "green")}>{transaction.price}</div>
          <div className="datetime">{transaction.datetime}</div>
        </div>
      </div>
      ))}
      <p>{}</p>
      </div>
    </main>
  )
}

export default App
