import './Expense.css'
import ExpenseItem from './ExpenseItem';
import {Card} from '../UI/Card';

export const Expense = (props) => {
    const expenses = props.myExpenses;
    return (
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].expenseTitle}
          amount={expenses[0].expenseAmount}
          date={expenses[0].expenseDate}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].expenseTitle}
          amount={expenses[1].expenseAmount}
          date={expenses[1].expenseDate}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].expenseTitle}
          amount={expenses[2].expenseAmount}
          date={expenses[2].expenseDate}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].expenseTitle}
          amount={expenses[3].expenseAmount}
          date={expenses[3].expenseDate}
        ></ExpenseItem>
        tem
      </Card>
    );
}