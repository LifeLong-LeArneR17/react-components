import PropTypes from 'prop-types';
import {ProfileStyle, ImageStyle, Description, Stats, StatsItem, Name, Tag, Location, Label,Quantity} from './Profile.styled';


export const Profile = ({user,stats}) => {
    return (
            <ProfileStyle>
    <Description>
      <ImageStyle
        src="https://kartinki.pibig.info/uploads/posts/2023-04/1682111869_kartinki-pibig-info-p-kartinki-topovie-arti-vkontakte-75.jpg"
        alt="User avatar"
      />
      <Name>{user.username}</Name>
      <Tag>{user.tag}</Tag>
      <Location>{user.location}</Location>
    </Description>
  
    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </Stats>
  </ProfileStyle>)
}