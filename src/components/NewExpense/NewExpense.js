import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'

export const NewExpense = (props) => {
    const onSubmitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onSubmitExpenseData(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler} />
        </div>
    )
}

