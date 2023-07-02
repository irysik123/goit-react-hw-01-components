import css from './TransactionHistoryItem.module.css'

export const TransactionHistoryItem = ({type,amount,currency}) => {
    return (<tr>
    <td className={css.typeValue}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>)
}