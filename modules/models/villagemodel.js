const { Model, DataTypes } = require('sequelize');

class VillageModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDVillage: DataTypes.STRING,
            villageName: DataTypes.STRING,
            districtID: DataTypes.STRING
        }, 
        { sequelize, modelName: 'village', tableName: 'village', force: force });
    }
}

module.exports = VillageModel;