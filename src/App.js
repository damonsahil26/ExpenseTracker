import { expenses } from './components/Expenses/ExpensesArray';
import { Expense } from './components/Expenses/Expense';
import { NewExpense } from './components/NewExpense/NewExpense';

const App = () => {
  const onSubmitExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  }

  return (
    <div>
      <NewExpense onSubmitExpenseData={onSubmitExpenseDataHandler} />
      <Expense myExpenses={expenses} />
    </div>
  );
}

export default App;
