const BranchModel  = require( '../models/branchmodel')
const CommonLogic = require('../logic/commonlogic')
const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class BranchLogic extends CommonLogic {

    static getModel()
    {
        return BranchModel;
    }

    static getSearchColumns()
    {
        return ["branchName", "IDBranch"];
    }

}

module.exports = BranchLogic;