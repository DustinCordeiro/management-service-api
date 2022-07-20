const { Model, DataTypes } = require("sequelize");

class Profile extends Model {
  static init(connection) {
    super.init(
      {
        description: DataTypes.STRING,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "profiles",
        timestamps: true,
        underscored: false,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}

module.exports = Profile;
