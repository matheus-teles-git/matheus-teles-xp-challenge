const swaggerConfig = {
  definition : {
    openapi: "3.0.1",
    info: {
      title: "homebroker_api",
      description: "API simulação de operações de compra e venda de ativos financeiros",
      version: "1.0"
    },
    servers: [{
      url: "http://localhost:3000",
      description: "servidor local"
    }]
  },
  apis: ["./src/routes/user.routes.ts"]

}

export default swaggerConfig;