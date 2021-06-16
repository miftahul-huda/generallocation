class DefaultRouterSetter
{
    static setDefault(router, logic)
    {
        this.setCreate(router, logic);
        this.setUpdate(router, logic);
        this.setGet(router, logic);
        this.setDelete(router, logic);
        this.setFindAll(router, logic);
        this.setFindByKeyword(router, logic);
    }

    static setCreate(router, logic)
    {
        router.post('/create', function (req, res){
            let item = req.body;
          
            logic.create(item).then(function (savedItem)
            {
              res.send(savedItem);
            }).
            catch(function (err){
              console.log("error")
              res.send(err);
            })
        })

    }

    static setUpdate(router, logic)
    {
        router.post('/update/:id', function (req, res){
            let item = req.body;
            let id = req.params.id;
          
            logic.update(id, item).then(function (savedItem)
            {
              res.send(savedItem);
            }).
            catch(function (err){
              console.log("error")
              res.send(err);
            })
        })
    }

    static setGet(router, logic)
    {
        router.get('/get/:id', function (req, res){
            let id = req.params.id;
          
            logic.get(id).then(function (item)
            {
              res.send(item);
            }).catch(function (err){
              console.log("error")
              res.send(err);
            })
        })
    }

    static setDelete(router, logic)
    {
        router.get('/delete/:id', function (req, res){
            let id = req.params.id;
            logic.delete(id).then(function (result)
            {
              res.send(result);
            }).catch(function (err){
              console.log("error")
              res.send(err);
            })
        })
    }

    static isNumeric(value) {
      return /^-?\d+$/.test(value);
    }

    static setFindAll(router, logic)
    {
        var me = this;
        router.get('', function (req, res){

            console.log("logic")
            console.log(logic)

            logic.findAll(null, null).then(function (items)
            {
              res.send(items);
            }).
            catch(function (err){
              console.log("error")
              console.log(err)
              res.send(err);
            })
        })

        router.get('/:offset/:limit', function (req, res, next){
            console.log("HEREEE")
            let offset = req.params.offset;
            let limit = req.params.limit;


            let tOffset = me.isNumeric(offset)
            console.log("tOffset + " + offset)
            console.log(tOffset)
            if(tOffset)
            {
              logic.findAll(offset, limit).then(function (items)
              {
                res.send(items);
              }).
              catch(function (err){
                console.log("error")
                console.log(err)
                res.send(err);
              })
            }
            else
              next();
        })
    }

    static setFindByKeyword(router, logic)
    {
        var me = this;
        router.get('/find/:keyword', function (req, res){

            let keyword = req.params.keyword;
            logic.findByKeyword(keyword, null, null).then(function (items)
            {
              res.send(items);
            }).
            catch(function (err){
              console.log("error")
              console.log(err)
              res.send(err);
            })
        })

        router.get('/find/:keyword/:offset/:limit', function (req, res, next){

            let keyword = req.params.keyword;
            let offset = req.params.offset;
            let limit = req.params.limit;

            let tOffset = me.isNumeric(offset)
            if(tOffset)
            {
              logic.findByKeyword(keyword, offset, limit).then(function (items)
              {
                res.send(items);
              }).
              catch(function (err){
                console.log("error")
                console.log(err)
                res.send(err);
              })
            }
            else
              next();

        })
    }
}

module.exports = DefaultRouterSetter;