// ESEMPIO DI ALIAS
// export type Product = {
//     title: string;
//     category: string;
//     // Aggiungi altre proprietà personalizzate...
// };


export type Product = {
    title: string;
    category: string;
    brand?: string;
    price: number;
    quantity?: number;
    status: 'available' | 'not available'
};