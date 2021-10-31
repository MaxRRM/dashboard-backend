const { Model, DataTypes} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sexo: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  activo: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  // createdAt: {
  //   allowNull: false,
  //   type: DataTypes.DATE,
  //   field: 'create_at',
  //   defaultValue: Sequelize.NOW
  // }

}

class User extends Model {
  static associate(models) {
    this.hasMany(models.Stress, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    })

    this.hasMany(models.Gsr, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    })

    this.hasMany(models.Pulsimeter, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    })

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User};
