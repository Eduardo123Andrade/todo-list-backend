import swaggerJSDoc from "swagger-jsdoc";

const ROOT_PATH = "./src/docs/**"

export const options = {
    definition: {
        openapi: '3.0.1',
        info: {
            version: '1.0.0',
            title: 'Documentação da API',
            description: 'Documentação dos endpoints',
            termsOfService: '',
            contact: {
                name: 'Eduardo Andrade',
                email: 'eduardo.andrade1111@gmail.com',
            },
            servers: [
                {
                    url: 'http://localhost:3000/v1/',
                    description: 'Local server'
                },
            ],
        }
    },
    apis: [
        `${ROOT_PATH}/*.router.yaml`,
        `${ROOT_PATH}/*.component.yaml`,
        `${ROOT_PATH}/*.definitions.yaml`
    ]
}

export const swaggerConfig = swaggerJSDoc(options);

