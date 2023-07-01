import css from './TransactionHistoryValues.module.css'

export const TransactionHistoryValues = ({type,amount,currency}) => {
    return (<tr>
    <td className={css.typeValue}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>)
}