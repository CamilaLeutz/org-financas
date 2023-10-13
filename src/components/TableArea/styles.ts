/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 7px #DB7093;
    margin-top: 20px;
    border-radius: 10px;
`
export const TableHeadColumn = styled.th<{ width?: number }>` /*tipando as props no styled-components (colocando um ? ao lado da props torna ela opcional e nao obrigatoria) */
    width: ${props => props.width ? `${props.width}px` : "auto"}; /*se tiver width em px, deixar como esta, se não, colocar no automatico */
   padding: 10px 0;
    text-align: left;

`