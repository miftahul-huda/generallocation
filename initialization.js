const ProvinceModel  = require( './modules/models/provincemodel')
const RegencyModel  = require( './modules/models/regencymodel')
const DistrictModel  = require( './modules/models/districtmodel')
const VillageModel  = require( './modules/models/villagemodel')
const BranchModel  = require( './modules/models/branchmodel')
const RegionModel  = require( './modules/models/regionmodel')

const { Sequelize, Model, DataTypes } = require('sequelize');
const process = require('process');




const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.DBENGINE  ,
    logging: false
});


class Initialization {
    static async initializeDatabase(){

        let force = false;

        ProvinceModel.initialize(sequelize, force);
        RegencyModel.initialize(sequelize, force);
        DistrictModel.initialize(sequelize, force);
        VillageModel.initialize(sequelize, force);
        BranchModel.initialize(sequelize, force);
        RegionModel.initialize(sequelize, force);

        await sequelize.sync();

        //ApplicationModel.belongsToMany(UserModel, { through: UserApplicationModel } )
    }
}

module.exports = Initialization



