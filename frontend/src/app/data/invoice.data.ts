import { Invoice } from '../model/Invoice';

export const invoiceData: Invoice = {
  id: '001',
  company: {
    ruc: '1792285747001',
    name: 'Clear minds consultores',
    address: {
      city: 'Quito',
      principalStreet: 'Juan Pablo Sanz',
      secondaryStreet: 'Iñaquito',
      code: 'N-57',
    },
  },
  customer: {
    id: '0850070111',
    name: 'Didier',
    surname: 'Guania',
    address: {
      city: 'Esmeraldas',
      principalStreet: 'Av Eloy',
      secondaryStreet: 'Piedrahita',
      code: 'Niputaidea',
    },
  },
  items: [
    {
      id: 100,
      product: {
        id: 500,
        name: 'Papitas fritas Ruffles',
        price: 0.5,
        description: 'Son ricas papas',
        category: {
          id: 1,
          name: 'Snacks',
        },
      },
      quantity: 23,
    },
    {
      id: 101,
      product: {
        id: 580,
        name: 'KAchitos',
        price: 0.3,
        description: 'Son ricos palitos de maiz con sal',
        category: {
          id: 1,
          name: 'Snacks',
        },
      },
      quantity: 100,
    },
    {
      id: 102,
      product: {
        id: 540,
        name: 'Doritos',
        price: 0.6,
        description: 'Son ricos cortes de maiz con sabor a queso',
        category: {
          id: 1,
          name: 'Snacks',
        },
      },
      quantity: 50,
    },
  ],
};
