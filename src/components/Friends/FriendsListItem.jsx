import css from './FriendsListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    const getOnlineStatus = status => {
    let userStatus = ""
    if(status !== true) {
        userStatus = "online"
    } else {
        userStatus = "offline"
    }
    return userStatus
} 
    return (
        <li className={css.item}>
          <span className={`${css.status} ${css[getOnlineStatus(isOnline)]}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}