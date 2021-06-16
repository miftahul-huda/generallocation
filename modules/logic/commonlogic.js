const { Sequelize, Model, DataTypes } = require('sequelize');
const { Op } = require("sequelize");


class CommonLogic {


    static getModel()
    {
        return null;
    }

    static async create(item)
    {
        let result = this.validateCreate(item);
        if(result.success){
            try {
                let model = this.getModel();
                let newItem = await model.create(item);
                result.payload = newItem;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }

    static async findAll(offset, limit)
    {
        console.log("findAll()")
        try{
            let model = this.getModel();
            console.log("model")
            console.log(model);

            let opt = {};
            if(offset != null)
            {
                opt.offset = offset;
                opt.limit = limit;
            }
            let items  = await model.findAll(opt)
            return { success: true, payload: items }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static getSearchColumns()
    {
        return [];
    }


    static async findByKeyword(search, offset, limit)
    {
        try{

            let model = this.getModel();

            let opt = {};
            if(offset != null)
            {
                opt.offset = offset;
                opt.limit = limit;
            }



            let searchCols = [];

            console.log("Search")
            console.log(search)

            let searchColumns = this.getSearchColumns();
            searchColumns.forEach((item)=>{
                let newItem = {};
                newItem[item] = { [Op.iLike] : '%' + search + '%' }
                searchCols.push(newItem);
            })

            let where = { 
                [Op.or] : searchCols
            };

            console.log(where)

            opt.where = where;

            let items  = await model.findAll(opt)
            return { success: true, payload: items }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async get(id)
    {
        try{
            let model = this.getModel();
            let item  = await model.findByPk(id);

            return { success: true, payload: item }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static async update(id,  item)
    {
        let result = this.validate(item);
        console.log(id)
        if(result.success){
            try {
                let model = this.getModel();
                let newItem = await model.update(item, { where:  { id: id }  });
                result.payload = newItem;
                return  result;
            }
            catch(error)
            {
                throw { success: false, message: '', error: error };
            }
            
        }
        else
        {
            throw result
        }

    }

    static async delete(id)
    {
        try{
            let model = this.getModel();
            let result = await model.destroy({ where: { id: id } });
            return { success: true, payload: result }
        }
        catch (error)
        {
            throw { success: false, message: '', error: error };
        }
    }

    static validateCreate(item){
        
        return this.validate(item);
    }

    static validate(item)
    {   
        return {success :  true, message: "Succesfull"}
    }
}

module.exports = CommonLogic;