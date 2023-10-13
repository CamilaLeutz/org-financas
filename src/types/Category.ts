export type Category = {
    [tag: string]: { /*aqui o type esta aceitando qualquer string como nome da categoria das despesas dinamicamente */
        title: string;
        color: string;
        expense: boolean;
    }
}