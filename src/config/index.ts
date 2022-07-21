import { corsConfig } from './cors.config';
import { dbConfig, environmentKeys } from './env.config';
import ormConfig from './orm.config';
import { jwtStrategy } from './passport.config';
import { swaggerConfig } from './swagger.config';


export {
    swaggerConfig,
    corsConfig,
    dbConfig,
    environmentKeys,
    ormConfig,
    jwtStrategy
};

