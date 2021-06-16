const { Model, DataTypes } = require('sequelize');

class RegencyModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDRegency: DataTypes.STRING,
            regencyName: DataTypes.STRING,
            provinceID: DataTypes.STRING
        }, 
        { sequelize, modelName: 'regency', tableName: 'regency', force: force });
    }
}

module.exports = RegencyModel;