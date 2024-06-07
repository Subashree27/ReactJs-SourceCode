import React, {useState,useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Components/WelcomeFunctionCompPractice';
import WelcomeStudents from './Components/WelcomeClassCompPractice';
import MyForm from './Components/TaskForm';
import Information from './Components/Information';
import CountClass from './Components/CountClass';
import IfElseFunction from './Components/IfElseFunction';
import CustomerList from './Components/CustomerList';
import BankInfo from './Components/BankInfo';
import RefsDemo from './Components/RefsDemo';
import ClickCount from './Components/ClickCount';
import PostData from './Components/PostData';
import PostDatafromForm from './PostDatafromForm';
import HooksCountFun from './HooksCount';
import HooksCount from './HooksCount';
import CompA from './CompA';
import CompD from './CompD';
import CustomerAdd from './CustomerAdd';
import ProductCallbackPracts from './ProductCallbackPracts';
export const UserContext = React.createContext()
function App() {
  const product = ["product1","product2","product3","product4","product5","product6"];
  const[count,setCount]=useState(0)
  const[cart,setCart]=useState(0);

  const addtocart=useCallback(()=>{
  // console.log(cart);
  setCart(cart+1);
  },[cart]);

  
  return (
    <div className="App">
      <h1>React</h1>
      <div className="product-wrapper">
        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <h3>Cart:{cart}</h3>
          {
        product.map((p,i)=>{
          return (<ProductCallbackPracts name={p} addtocart={addtocart}/>)
        })
      }
      <ProductCallbackPracts addtocart={addtocart}/>  
</div>



      {/* <Welcome className="Ganesh" sportsname="Cricket" subject="ReactJS" month="May"></Welcome>
      <Welcome className="aslam" sportsname="Football" subject="Javascript" month="May">
        <button className="Btn" children>Click me</button>
        <div>
        <button>Submit</button>
        </div>
        
      </Welcome>
      <Welcome className="John" sportsname="Hockey" subject="Html" month="April"></Welcome>
      <WelcomeStudents className="Arul" sportsname="Hockey" subject="Bootstrap" month="January"/>
      <MyForm/>
      <Information/>
      <CountClass/>
      <IfElseFunction name='Subashree'/>
      <CustomerList/>
      <BankInfo/>
      <PostData/> */}
      {/* <ClickCount/> */}
      {/* <PostDatafromForm/> */}
      {/* <HooksCount/> */}
      {/* <CompA/> */}
      {/* <UserContext.Provider value={'Subashree'}>
        <CompD/>
      </UserContext.Provider> */}
     {/* <CustomerAdd/> */}
    </div>
  );
}

export default App;
