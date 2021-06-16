const { Model, DataTypes } = require('sequelize');

class DistrictModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDDistrict: DataTypes.STRING,
            districtName: DataTypes.STRING,
            regencyID: DataTypes.STRING
        }, 
        { sequelize, modelName: 'district', tableName: 'district', force: force });
    }
}

module.exports = DistrictModel;