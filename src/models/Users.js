const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.TEXT,
        profile_id: DataTypes.BIGINT,
        disabled_at: DataTypes.DATE,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "users",
        timestamps: true,
        underscored: false,
      }
    );
  }
}

module.exports = Profile;
