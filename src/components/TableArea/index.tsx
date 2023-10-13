/* eslint-disable @typescript-eslint/no-unused-vars */
import { Item } from "../../types/Item"
import { TableItem } from "../TableItem"

import * as C from "./styles"


type Props = {
    list: Item[]
}
export const TableArea = ({ list }: Props) => {
return (
    <C.Table>
        <thead>
            <tr>
                <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                <C.TableHeadColumn>Título</C.TableHeadColumn>
                <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {list.map((item, index) => ( /**percorrendo a lista e me mostrando na tela qual delas estão no mesmo mês */
               <TableItem key={index} item={item}/>
            ))}


        
        </tbody>
    </C.Table>
)
}