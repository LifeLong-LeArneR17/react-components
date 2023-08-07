
import PropTypes from 'prop-types';
import {StatisticsStyle, Title, StatList, Item, Label, Percentage} from "./Statistics.styled";

export const Statistics = ({data, title}) => {
    return ( 
      <StatisticsStyle>
           {title ? <Title>{title}</Title> : null}
        <StatList>
          {data.map((item) => (
            <Item key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}</Percentage>
            </Item>
          ))}
        </StatList>
      </StatisticsStyle>
    )
}
