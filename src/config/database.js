module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ibeeleague',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
