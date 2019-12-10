module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename5: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pokename6: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
