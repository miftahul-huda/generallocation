const { Model, DataTypes } = require('sequelize');

class BranchModel extends Model {
    static initialize(sequelize, force=false)
    { 
        super.init({
            IDBranch: DataTypes.STRING,
            branchName: DataTypes.STRING
        }, 
        { sequelize, modelName: 'branch', tableName: 'branch', force: force });
    }
}

module.exports = BranchModel;
