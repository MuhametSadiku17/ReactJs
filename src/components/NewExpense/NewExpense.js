import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enterdExpenseDate) => {
        const expenseData = {
            ...enterdExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
}

export default NewExpense;