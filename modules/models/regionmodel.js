const { Model, DataTypes } = require('sequelize');

class RegionModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDregion: DataTypes.STRING,
            regionName: DataTypes.STRING,
            branchID: DataTypes.STRING
        }, 
        { sequelize, modelName: 'region', tableName: 'region', force: force });
    }
}

module.exports = RegionModel;
