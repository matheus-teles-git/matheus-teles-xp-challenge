'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Assets',
  [
    {
      id: 1,
      quantity: 1000,
      ticker: 'VALE3',
      value: 68.68,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      quantity: 1000,
      ticker: 'PETR4',
      value: 29.07,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 3,
      quantity: 1000,
      ticker: 'ITUB4',
      value: 23.69,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 4,
      quantity: 1000,
      ticker: 'MGLU3',
      value: 2.79,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 5,
      quantity: 1000,
      ticker: 'BBDC4',
      value: 17.25,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 6,
      quantity: 1000,
      ticker: 'BBAS3',
      value: 34.6,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 7,
      quantity: 1000,
      ticker: 'B3SA3',
      value: 10.16,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 8,
      quantity: 1000,
      ticker: 'PRIO3',
      value: 22.34,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 9,
      quantity: 1000,
      ticker: 'PETR3',
      value: 31.59,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 10,
      quantity: 1000,
      ticker: 'ABEV3',
      value: 14.5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 11,
      quantity: 1000,
      ticker: 'ELET3',
      value: 44.25,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 12,
      quantity: 1000,
      ticker: 'RENT3',
      value: 54.34,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 13,
      quantity: 1000,
      ticker: 'ENEV3',
      value: 14.49,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 14,
      quantity: 1000,
      ticker: 'MRFG3',
      value: 12.69,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 15,
      quantity: 1000,
      ticker: 'SUZB3',
      value: 46.08,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 16,
      quantity: 1000,
      ticker: 'LREN3',
      value: 24.88,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 17,
      quantity: 1000,
      ticker: 'AMER3',
      value: 16.29,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 18,
      quantity: 1000,
      ticker: 'HYPE3',
      value: 40.5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 19,
      quantity: 1000,
      ticker: 'HAPV3',
      value: 5.75,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 20,
      quantity: 1000,
      ticker: 'GGBR4',
      value: 24.00,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 21,
      quantity: 1000,
      ticker: 'WEGE3',
      value: 26.94,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 22,
      quantity: 1000,
      ticker: 'USIM5',
      value: 8.7,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 23,
      quantity: 1000,
      ticker: 'ITSA4',
      value: 8.62,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 24,
      quantity: 1000,
      ticker: 'JBSS3',
      value: 29.32,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 25,
      quantity: 1000,
      ticker: 'VIIA3',
      value: 2.31,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 26,
      quantity: 1000,
      ticker: 'AZUL4',
      value: 12.48,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 27,
      quantity: 1000,
      ticker: 'CSNA3',
      value: 14.35,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 28,
      quantity: 1000,
      ticker: 'RRRP3',
      value: 30.33,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 29,
      quantity: 1000,
      ticker: 'VBBR3',
      value: 16.16,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 30,
      quantity: 1000,
      ticker: 'EMBR3',
      value: 12.18,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 31,
      quantity: 1000,
      ticker: 'GOLL4',
      value: 8.37,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 32,
      quantity: 1000,
      ticker: 'BRFS3',
      value: 14.87,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 33,
      quantity: 1000,
      ticker: 'TOTS3',
      value: 24.57,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 34,
      quantity: 1000,
      ticker: 'YDUQ3',
      value: 13.85,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 35,
      quantity: 1000,
      ticker: 'RDOR3',
      value: 27.05,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 36,
      quantity: 1000,
      ticker: 'RAIL3',
      value: 15.87,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 37,
      quantity: 1000,
      ticker: 'ELET6',
      value: 45.23,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 38,
      quantity: 1000,
      ticker: 'NTCO3',
      value: 15.9,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 39,
      quantity: 1000,
      ticker: 'CIEL3',
      value: 4.11,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 40,
      quantity: 1000,
      ticker: 'PETZ3',
      value: 9.82,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 41,
      quantity: 1000,
      ticker: 'RADL3',
      value: 20.23,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 42,
      quantity: 1000,
      ticker: 'BBSE3',
      value: 26.95,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 43,
      quantity: 1000,
      ticker: 'BEEF3',
      value: 13.64,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 44,
      quantity: 1000,
      ticker: 'CVCB3',
      value: 6.54,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 45,
      quantity: 1000,
      ticker: 'CSAN3',
      value: 17.46,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 46,
      quantity: 1000,
      ticker: 'BBDC3',
      value: 14.31,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 47,
      quantity: 1000,
      ticker: 'ALPA4',
      value: 19.57,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 48,
      quantity: 1000,
      ticker: 'SLCE3',
      value: 41.32,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 49,
      quantity: 1000,
      ticker: 'COGN3',
      value: 2.34,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 50,
      quantity: 1000,
      ticker: 'ENBR3',
      value: 20.88,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 51,
      quantity: 1000,
      ticker: 'EQTL3',
      value: 22.62,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 52,
      quantity: 1000,
      ticker: 'CCRO3',
      value: 12.02,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 53,
      quantity: 1000,
      ticker: 'MULT3',
      value: 23.86,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 54,
      quantity: 1000,
      ticker: 'BRAP4',
      value: 22.52,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 55,
      quantity: 1000,
      ticker: 'EGIE3',
      value: 41.84,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 56,
      quantity: 1000,
      ticker: 'TIMS3',
      value: 13.06,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 57,
      quantity: 1000,
      ticker: 'VIVT3',
      value: 47.5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 58,
      quantity: 1000,
      ticker: 'LWSA3',
      value: 5.74,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 59,
      quantity: 1000,
      ticker: 'MRVE3',
      value: 9.1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 60,
      quantity: 1000,
      ticker: 'CASH3',
      value: 1.05,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 61,
      quantity: 1000,
      ticker: 'CYRE3',
      value: 12.18,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 62,
      quantity: 1000,
      ticker: 'SBSP3',
      value: 42.6,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 63,
      quantity: 1000,
      ticker: 'EZTC3',
      value: 15.12,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 64,
      quantity: 1000,
      ticker: 'ASAI3',
      value: 15.49,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 65,
      quantity: 1000,
      ticker: 'CPFE3',
      value: 31.7,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 66,
      quantity: 1000,
      ticker: 'CMIG4',
      value: 10.4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 67,
      quantity: 1000,
      ticker: 'CRFB3',
      value: 17.06,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 68,
      quantity: 1000,
      ticker: 'UGPA3',
      value: 12,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 69,
      quantity: 1000,
      ticker: 'CPLE6',
      value: 6.82,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 70,
      quantity: 1000,
      ticker: 'BRKM5',
      value: 34.44,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 71,
      quantity: 1000,
      ticker: 'FLRY3',
      value: 15.31,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 72,
      quantity: 1000,
      ticker: 'GOAU4',
      value: 9.93,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 73,
      quantity: 1000,
      ticker: 'PCAR3',
      value: 16.38,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 74,
      quantity: 1000,
      ticker: 'DXCO3',
      value: 9.17,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 75,
      quantity: 1000,
      ticker: 'BRML3',
      value: 7.59,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 76,
      quantity: 1000,
      ticker: 'SOMA3',
      value: 9.38,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 77,
      quantity: 1000,
      ticker: 'IRBR3',
      value: 2.15,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 78,
      quantity: 1000,
      ticker: 'QUAL3',
      value: 10.37,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 79,
      quantity: 1000,
      ticker: 'CMIN3',
      value: 3.42,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 80,
      quantity: 1000,
      ticker: 'BPAN4',
      value: 6.42,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 81,
      quantity: 1000,
      ticker: 'JHSF3',
      value: 5.76,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 82,
      quantity: 1000,
      ticker: 'ECOR3',
      value: 5.28,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 83,
      quantity: 1000,
      ticker: 'POSI3',
      value: 5.92,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]
  , {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Assets', null, {}),



};
