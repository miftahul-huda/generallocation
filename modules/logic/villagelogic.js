const VillageModel  = require( '../models/villagemodel')
const CommonLogic = require('./commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class VillageLogic extends CommonLogic {

    static getModel()
    {
        return VillageModel;
    }

    static getSearchColumns()
    {
        return ["villageName", "IDVillage"];
    }

    static async findByDistrict(IDDistrict)
    {
        try{
            let model = this.getModel();
            let items  = await model.findAll({
                where: {
                    districtID: IDDistrict
                }
            })
            return { success: true, payload: items }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

}

module.exports = VillageLogic;