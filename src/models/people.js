const PeopleModel = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    occupation: DataTypes.STRING,
    birthDate: DataTypes.DATE
  })
  return People
}

module.exports = PeopleModel