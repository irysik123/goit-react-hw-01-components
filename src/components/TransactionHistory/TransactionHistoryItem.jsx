import css from './TransactionHistoryItem.module.css'

export const TransactionHistoryItem = ({type,amount,currency}) => {
    return (<tr className={css.transactionItem} >
    <td className={css.typeValue}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>)
}