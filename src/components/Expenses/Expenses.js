/*import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props)
 {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => 
    setFilteredYear(selectedYear);

    const filteredExpenses = props.items.filter(
      (expense) => {return expense.getFullYear().toString() === filteredYear}
    );

    let expenseContent = <p>No Expenses found!</p>;
    
    if (filteredExpenses.length > 0)
     {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
  
    return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />

          {expensesContent}
        </Card>
      </div>
    );
}


export default Expenses;*/

/*{props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */
      import React, { useState } from 'react';

      import ExpenseItem from './ExpenseItem';
      import Card from '../UI/Card';
      import ExpensesFilter from './ExpenseFilter';
      import './Expenses.css';
      
      const Expenses = (props) => {
        const [filteredYear, setFilteredYear] = useState('2019');
      
        const filterChangeHandler = (selectedYear) => {
          setFilteredYear(selectedYear);
        };
      
        const filteredExpenses = props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });
      
        let expensesContent = <p>No expenses found.</p>;
      
        if (filteredExpenses.length > 0) {
          expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ));
        }
      
        return (
          <div>
            <Card className='expenses'>
              <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
              />
              {expensesContent}
            </Card>
          </div>
        );
      };
      
      export default Expenses;