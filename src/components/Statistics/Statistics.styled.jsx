import styled from 'styled-components';
const  GenerateColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }




export const StatisticsStyle = styled.section`
  width: 400px;
  margin: 0 auto;
  background-color: aliceblue;
  margin-top: 100px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  border-right: 1px solid #8fbc8f;
  background-color: ${GenerateColor};
`;

export const Label = styled.span`
  font-size: 15px;
  color: grey;
  text-align: center;
  margin-top: 5px;
`;

export const Percentage = styled.span`
  font-size: 15px;
  color: black;
  text-align: center;
`;
