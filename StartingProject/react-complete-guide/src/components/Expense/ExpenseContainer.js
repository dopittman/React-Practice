import React, { useState } from 'react'
import ExpensesFilter from "../ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import '../ComponentCSS/ExpenseContainer.css'

function ExpenseContainer (props){
    const [filteredYear, setFilteredYear] = useState("2022")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear)
      }

    return(
        <div>
            <Card className="expense-container">
                <ExpensesFilter 
                year = ''
                filterChangeHandler = {filterChangeHandler}
                selected = {filteredYear}
                />
                {props.expenses.map(expense => <ExpenseItem 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />)}

                
            </Card>
    </div>
    )
}

export default ExpenseContainer;