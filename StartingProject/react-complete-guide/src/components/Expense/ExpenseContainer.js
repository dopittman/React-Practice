import React, { useState } from 'react'
import ExpensesFilter from "../ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import '../ComponentCSS/ExpenseContainer.css'

function ExpenseContainer (props){
    const [filteredYear, setFilteredYear] = useState("show-all")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
      }

    const filteredExpenses = props.expenses
    .filter(expense => filteredYear === 'show-all' ? true : expense.date.getFullYear().toString() === filteredYear)
      


    let expensesContent = <p>No Expenses Found</p>

    if( filteredExpenses.length > 0 ) {
        expensesContent = filteredExpenses.map((expense) => ( <ExpenseItem 
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
    }

    return(
        <div>
            <Card className="expense-container">
                <ExpensesFilter 
                year = ''
                filterChangeHandler = {filterChangeHandler}
                selected = {filteredYear}
                />
                {expensesContent}
                
                
            </Card>
    </div>
    )
}

export default ExpenseContainer;