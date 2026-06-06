import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API 94',
            version: '1.0.0',
            description: 'API CON EXPRESS'
        },
        servers: [
            {
                url: 'http://localhost:4000'
            }
        ]
    },
    apis: ['./routes/*']
};

export default swaggerJSDoc(options);