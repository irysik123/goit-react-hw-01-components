import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    {title && (
        <ul className={css.statList}>
            {stats.map((stat) => (
                <li className={css.item} key={stats.id} >
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}</span>
              </li>
            ))}
             </ul>
    )}
  </section>)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired
}