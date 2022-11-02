import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'
import { useState } from 'react'

export const NewExpense = (props) => {
    const [editFormRequired, setEditFormRequired] = useState(false);

    const addNewExpenseHandler = () => {
        setEditFormRequired(true);
    }

    const onSubmitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onSubmitExpenseData(expenseData);
    }

    const setExpenseEditCanceled = (editFormCanceled) =>{
       editFormCanceled === true ? setEditFormRequired(false) : setEditFormRequired(true); 
    }

    let editFormRequiredState = <button type='button' onClick={addNewExpenseHandler}>Add New Expense</button>

    if (editFormRequired === true) {
        editFormRequiredState = <ExpenseForm editFormCanceled={setExpenseEditCanceled} onSubmitExpenseData={onSubmitExpenseDataHandler} />
    }

    return (
        <div className='new-expense'>
            {editFormRequiredState}
        </div>
    )
}

