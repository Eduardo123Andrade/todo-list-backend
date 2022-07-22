import { Router } from 'express';
import SwaggerUi from 'swagger-ui-express';
import { swaggerConfig } from './../../config';


export const docRouter = Router()

docRouter.use(SwaggerUi.serve, SwaggerUi.setup(swaggerConfig))