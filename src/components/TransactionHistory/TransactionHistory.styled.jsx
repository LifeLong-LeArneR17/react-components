import styled from 'styled-components';

export const Table = styled.table ` 
    border-collapse: collapse;
    margin: 20px auto;

`

export const Th =styled.th `
     padding: 10px;
    border: 1px solid #2a2a2a;
`

export const Td =styled.td `
     padding: 10px;
    border: 1px solid #2a2a2a;
`


export const Tr =styled.tr `
      text-align: left;
      &:nth-child(even) {
        background-color: #b6e7e5;
      }
`