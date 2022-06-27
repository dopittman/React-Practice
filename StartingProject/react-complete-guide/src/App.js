import ExpenseContainer from './components/Expense/ExpenseContainer';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';

function App() {
  const expenses = [
    {id: "a1", title:"Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
    {id: "a2", title:"Food", amount: 160.45, date: new Date(2021, 2, 28)},
    {id: "a3", title:"Fuel", amount: 95.13, date: new Date(2021, 2, 28)},
    {id: "a4", title:"Misc.", amount: 184.34, date: new Date(2021, 2, 28)}
  ];

  return (
    <div className="App">
      <header className="App-header">
    <NewExpense />
    <ExpenseContainer 
    expenses = {expenses}/>
      </header>
    </div>
  );
}

export default App;
