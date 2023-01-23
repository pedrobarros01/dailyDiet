export type MealType = {
    nome: string;
    descricao: string;
    hora: string;
    dieta: boolean;
}
export type MealCollectionType = {
    data: string;
    listaMeal: MealType[];
}