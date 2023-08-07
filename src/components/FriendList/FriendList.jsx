import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import {FriendListStyled} from "components/FriendList/FriendList.styled";
import React from 'react';




export const FriendList = ({ friends }) => {
    return (
      <FriendListStyled>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem  key = {id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </FriendListStyled>
    );
  };
  