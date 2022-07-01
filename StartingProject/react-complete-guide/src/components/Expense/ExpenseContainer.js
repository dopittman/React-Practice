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

      const filteredExpenses = props.expenses.filter(expense => {
        if (filteredYear === "show-all") {
            return true;
        } else {
            return expense.date.getFullYear().toString() === filteredYear;
        }
      });

    return(
        <div>
            <Card className="expense-container">
                <ExpensesFilter 
                year = ''
                filterChangeHandler = {filterChangeHandler}
                selected = {filteredYear}
                />
                {filteredExpenses.map((expense) => ( <ExpenseItem 
                key = {expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                ))}
            </Card>
    </div>
    )
}

export default ExpenseContainer;