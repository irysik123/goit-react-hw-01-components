import { TransactionHistoryValues } from './TransactionHistoryValues';
import css from './Transactionhistory.module.css';
import PropTypes from 'prop-types';

export const Transactionhistory = items => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableValues}>
        {items.map(item => (
          <TransactionHistoryValues key={item.id} type={item.type} currency={item.currency} amount={item.amount}/>
        ))}
      </tbody>
    </table>
  );
};

Transactionhistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            key:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired
    })
    )
}
