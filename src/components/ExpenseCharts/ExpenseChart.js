import { Chart } from './Chart';

export const ExpenseChart = (props) => {
    const DataPointsArray = [
        {value:0 , label:'Jan' },
        {value:0 , label:'Feb' },
        {value:0 , label:'Mar' },
        {value:0 , label:'Apr' },
        {value:0 , label:'May' },
        {value:0 , label:'Jun' },
        {value:0 , label:'Jul' },
        {value:0 , label:'Aug' },
        {value:0 , label:'Sep' },
        {value:0 , label:'Oct' },
        {value:0 , label:'Nov' },
        {value:0 , label:'Dec' }
        ]; 

    for (const expense of props.expenses) {
        const expenseMonth = expense.expenseDate.getMonth();
        DataPointsArray[expenseMonth].value = expense.expenseAmount;
    }
    
    return (<Chart dataPoints={DataPointsArray} />);   
}