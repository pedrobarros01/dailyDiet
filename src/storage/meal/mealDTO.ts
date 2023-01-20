export type Meal = {
    nome: string;
    descricao: string;
    hora: string;
    dieta: boolean;
}
export type MealCollection = {
    data: string;
    listaMeal: Meal[];
}