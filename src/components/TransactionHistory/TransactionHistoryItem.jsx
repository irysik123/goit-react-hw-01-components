import css from './TransactionHistoryItem.module.css'
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (<tr className={css.transactionItem} >
    <td className={css.typeValue}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>)
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}