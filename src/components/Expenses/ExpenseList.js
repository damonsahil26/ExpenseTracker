import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = (props) => {
    let expenseContent = <p>No Expenses for this year.</p>

    if (props.filteredData.length === 0) {
        return (
            <div className='expenses-list__fallback '>{expenseContent}</div>
        );
    }

    expenseContent = props.filteredData.map((expense) => (
        <ExpenseItem title={expense.expenseTitle} amount={expense.expenseAmount} date={expense.expenseDate} key={expense.id} />
    ));


    return (
        <ul className='expenses-list '>{expenseContent}</ul>
    );
}