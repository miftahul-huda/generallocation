var DefaultRouterSetter = require("./defaultroutersetter");

class VillageRouterSetter extends DefaultRouterSetter
{
    static setDefault(router, logic)
    {
        super.setDefault(router, logic);

        router.get("/find/by-district/:iddistrict", (req, res)=>{
            let iddistrict = req.params.iddistrict;
          
            logic.findByDistrict(iddistrict).then(function (items)
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

module.exports = VillageRouterSetter;