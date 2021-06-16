const ProvinceModel  = require( '../models/provincemodel')
const CommonLogic = require('../logic/commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class ProvinceLogic extends CommonLogic {

    static getModel()
    {
        return ProvinceModel;
    }

    static getSearchColumns()
    {
        return ["provinceName", "IDProvince"];
    }

}

module.exports = ProvinceLogic;