import 'reflect-metadata';
import {
    BaseEntity,
    Entity, PrimaryGeneratedColumn, Column,
    createConnection,
    ManyToOne,
    RelationId
} from 'typeorm'
import express from 'express'
import { Database, Resource } from '@admin-bro/typeorm'
import { validate } from 'class-validator'

import AdminBro from 'admin-bro'
import * as AdminBroExpress from '@admin-bro/express'

import { Car } from './entities/Car';
import { CarDealer } from './entities/CarDealer';
import { CarBuyer } from './entities/CarBuyer';

Resource.validate = validate;


( async () =>
{
    AdminBro.registerAdapter({ Database, Resource });

    const connection = await createConnection({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'admin-bro-test',
        entities: [
            Car,
            CarDealer,
            CarBuyer
        ],
        synchronize: true
    });

    // Applying connection to model
    Car.useConnection(connection)
    CarDealer.useConnection(connection);
    CarBuyer.useConnection(connection);

    const adminBro = new AdminBro({
        // databases: [connection],
        resources: [
            Car,
            CarDealer,
            CarBuyer
        ],
        rootPath: '/admin',
    })

    const app = express()
    const router = AdminBroExpress.buildRouter(adminBro)
    app.use(adminBro.options.rootPath, router)
    app.listen(3000)
})()
