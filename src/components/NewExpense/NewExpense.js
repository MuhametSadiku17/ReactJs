import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const [openForm, setOpenForm] = useState(false);

    const saveExpenseDateHandler = (enterdExpenseDate) => {
        const expenseData = {
            ...enterdExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setOpenForm(false);
    }

    const addNewExpenseHandler = () => {
        setOpenForm(true);
    }

    return <div className="new-expense">
        {openForm ? <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} setOpenForm={setOpenForm} /> : <button onClick={addNewExpenseHandler}>Add New Expense</button>}
    </div>
}

export default NewExpense;