const RegencyModel  = require( '../models/regencymodel')
const CommonLogic = require('./commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class RegencyLogic extends CommonLogic {

    static getModel()
    {
        return RegencyModel;
    }

    static getSearchColumns()
    {
        return ["regencyName", "IDRegency"];
    }

    static async findByProvince(IDProvince)
    {
        console.log("findByProvince()")
        try{
            let model = this.getModel();
            let items  = await model.findAll({
                where: {
                    provinceID: IDProvince
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

module.exports = RegencyLogic;