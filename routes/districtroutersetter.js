var DefaultRouterSetter = require("./defaultroutersetter");

class DistrictRouteSetter extends DefaultRouterSetter
{
    static setDefault(router, logic)
    {
        super.setDefault(router, logic);

        router.get("/find/by-regency/:idreg", (req, res)=>{
            let idreg = req.params.idreg;
          
            logic.findByRegency(idreg).then(function (items)
            {
              res.send(items);
            }).
            catch(function (err){
              console.log("error")
              res.send(err);
            })
        })

    }
}

module.exports = DistrictRouteSetter;