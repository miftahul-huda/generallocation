const { Model, DataTypes } = require('sequelize');

class ProvinceModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDProvince: DataTypes.STRING,
            provinceName: DataTypes.STRING
        }, 
        { sequelize, modelName: 'province', tableName: 'province', force: force });
    }
}

module.exports = ProvinceModel;