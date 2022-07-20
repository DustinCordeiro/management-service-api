const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.TEXT,
        profile_id: DataTypes.BIGINT,
        disabled_at: DataTypes.DATE,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "users",
        timestamps: true,
        underscored: false,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}

module.exports = Users;
