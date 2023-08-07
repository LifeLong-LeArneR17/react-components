import PropTypes from 'prop-types';
import { Item,Status,Avatar,Name} from "components/FriendList/FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return ( 
<Item>
  <Status status={isOnline ? "online" : "offline"} />
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</Item>
        )
}