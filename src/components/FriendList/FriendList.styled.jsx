import styled from 'styled-components';
import clsx from 'clsx';

export const FriendListStyled = styled.ul`
margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column/* Добавлено свойство flex-wrap */
`;

export const Item = styled.li`
  display: flex;
  width: 400px;
  height: 100px;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  border: 1px solid red;
  background-color: darkcyan;
`;

export const Status = styled.span`
width: 80px;
  height:80px;
  background-color: ${({status}) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;






export const Avatar = styled.img`
  width: 100px;
`;

export const Name = styled.p`
  font-size: 40px;
`;
