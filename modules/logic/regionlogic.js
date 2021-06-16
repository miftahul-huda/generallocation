const RegionModel  = require( '../models/regionmodel')
const CommonLogic = require('./commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class RegionLogic extends CommonLogic {

    static getModel()
    {
        return RegionModel;
    }

    static getSearchColumns()
    {
        return ["regionName", "IDRegion"];
    }

    static async findByBranch(IDBranch)
    {
        try{
            let model = this.getModel();
            let items  = await model.findAll({
                where: {
                    branchID: IDBranch
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

module.exports = RegionLogic;