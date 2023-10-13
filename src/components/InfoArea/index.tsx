import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
import { formatCurrentMonth } from "../../helpers/dateFilters"
import { ResumeItem } from "../ResumeItem"
import * as C from "./styles"

type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
   
    const handlePrevMonth = () => { /**função das flechas */
        let [year, month] = currentMonth.split("-")
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1) /**aqui ele altera os meses no formtato correto, entre jan e dezembro e o ano tbm, volta pra tras corretamente */
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }


    const handleNextMonth = () => {/**função das flechas */
    let [year, month] = currentMonth.split("-")
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1) /**aqui ele altera os meses no formtato correto, entre jan e dezembro e o ano tbm, volta pra tras corretamente */
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
 
    return (    
        <C.Container>
            <C.MonthArea>
              <C.MonthArrow onClick={handlePrevMonth}><MdKeyboardDoubleArrowLeft/></C.MonthArrow> 
              <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
              <C.MonthArrow onClick={handleNextMonth}><MdKeyboardDoubleArrowRight/></C.MonthArrow>
            </C.MonthArea> 
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                title="Balanço" 
                value={income - expense}
                color={(income-expense) < 0 ? "red" : "green"}
                />
            </C.ResumeArea>
        </C.Container>

)

}