import { expenses } from './components/Expenses/ExpensesArray';
import { Expense } from './components/Expenses/Expense';
import { NewExpense } from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {
  const [expensesList, setExpenseItem] = useState(expenses);

  const onSubmitExpenseDataHandler = (enteredExpenseData) => {
    setExpenseItem((prevState) =>{
      return [enteredExpenseData , ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onSubmitExpenseData={onSubmitExpenseDataHandler} />
      <Expense myExpenses={expensesList} />
    </div>
  );
}

export default App;
