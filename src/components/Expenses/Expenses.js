import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import  ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    }
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
                {props.expenses.map(expense => {
                    return (
                        <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })}
            </Card>
        </div>
        
    );
}

export default Expenses;