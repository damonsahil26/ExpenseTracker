import './Expense.css'
import ExpenseItem from './ExpenseItem';
import { Card } from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

export const Expense = (props) => {
  const expenses = props.myExpenses;
  const [filterYearSelectedVal, setFilterYearState] = useState('2019');

  const filterYearSelected = (selectedYear) => {
    setFilterYearState(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYearSelectedVal} onFilterYearSelectedData={filterYearSelected} />
        {
          props.myExpenses.map((expense) => (
            <ExpenseItem title={expense.expenseTitle} amount={expense.expenseAmount} date={expense.expenseDate} />
          ))
        }
      </Card>
    </div>
  );
}