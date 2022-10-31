import { expenses } from './components/Expenses/ExpensesArray';
import { Expense } from './components/Expenses/Expense';
import { NewExpense } from './components/NewExpense/NewExpense';

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expense myExpenses={expenses} />
    </div>
  );
}

export default App;
