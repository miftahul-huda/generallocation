const DistrictModel  = require( '../models/districtmodel')
const CommonLogic = require('./commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class DistrictLogic extends CommonLogic {

    static getModel()
    {
        return DistrictModel;
    }

    static getSearchColumns()
    {
        return ["districtName", "IDDistrict"];
    }

    static async findByRegency(IDRegency)
    {
        try{
            let model = this.getModel();
            let items  = await model.findAll({
                where: {
                    regencyID: IDRegency
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

module.exports = DistrictLogic;