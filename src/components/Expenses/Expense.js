import './Expense.css'
import { Card } from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import {ExpenseList} from './ExpenseList';
import { ExpenseChart } from '../ExpenseCharts/ExpenseChart';

export const Expense = (props) => {
  const [filterYearSelectedVal, setFilterYearState] = useState('2022');

  const filterYearSelected = (selectedYear) => {
    setFilterYearState(selectedYear);
  }

  const filterExpenses = expense => {
    return expense.expenseDate.getFullYear().toString() === filterYearSelectedVal
  }

  const filteredExpenseData = props.myExpenses.filter(filterExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYearSelectedVal} onFilterYearSelectedData={filterYearSelected} />
        <ExpenseChart expenses={filteredExpenseData} />
        <ExpenseList filteredData={filteredExpenseData} />
      </Card>
    </div>
  );
}