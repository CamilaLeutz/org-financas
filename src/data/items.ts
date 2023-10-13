import { Item } from "../types/Item"

export const items: Item[ ] = [
    { date: new Date(2023, 9, 2), category: "food", title: "McDonalds", value: 35.25}, /*no java array as contagens começam em 0 então pra trabalhar com mes sempre um a menos do que vc quer, exemplo aqui quero mes de outubro preciso colocar o n9 pq a contagem é sempre em 0, e a data em ingles é sempre de tras pra frente */
    { date: new Date(2023, 9, 4), category: "food", title: "CantinhoDoVale", value: 47.25},
    { date: new Date(2023, 9, 10), category: "rent", title: "Aluguel", value: 2474.25},
    { date: new Date(2023, 9, 10), category: "salary", title: "DevClub", value: 5000}
]

