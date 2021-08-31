import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHanlder = () => {
        setTitle('Updated!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} ILS</div>
            </div>
            <button onClick={clickHanlder}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;