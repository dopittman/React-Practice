import React, { useState } from 'react';

import '../ComponentCSS/ExpenseForm.css'

const ExpenseForm = ( props ) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
     const [userInput, setUserInput] = useState({
        Title: '',
        Amount: '',
        Date: ''
     });
    
    const titleChangeHandler = ( event ) => {
    //    setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    //  });
        setUserInput((prevState)=>{
            return {...prevState, Title: event.target.value}
        })
    }
    
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value});
        setUserInput((prevState)=>{
            return {...prevState, Amount: event.target.value}
        })
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value});
        setUserInput((prevState)=>{
            return {...prevState, Date: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput)
        setUserInput({
            Title: '',
            Amount: '',
            Date: ''
        })
        
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

            <div className="new-expense__control">
                <label>Title</label>
                <input 
                type='text' 
                value={userInput.Title} 
                onChange={titleChangeHandler}/>
            </div>
            
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type='number' 
                min='0.01' 
                step='0.01' 
                value= {userInput.Amount}
                onChange={amountChangeHandler}/>
            </div>
            
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type='date' 
                min='2022-01-01' 
                max='2022-12-31' 
                value={userInput.Date}
                onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>

    );
};

export default ExpenseForm;