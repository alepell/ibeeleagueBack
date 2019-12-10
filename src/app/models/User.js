import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        pokename1: Sequelize.STRING,
        pokename2: Sequelize.STRING,
        pokename3: Sequelize.STRING,
        pokename4: Sequelize.STRING,
        pokename5: Sequelize.STRING,
        pokename6: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default User;
