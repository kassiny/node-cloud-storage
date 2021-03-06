import { Sequelize } from 'sequelize-typescript';

export const MARIADB_PROVIDER = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nest',
    });
    //   sequelize.addModels([Cat]);
    //   await sequelize.sync();
    return sequelize;
  },
};
