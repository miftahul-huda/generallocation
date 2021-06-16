var DefaultRouterSetter = require("./defaultroutersetter");

class RegencyRouterSetter extends DefaultRouterSetter
{
    static setDefault(router, logic)
    {
        super.setDefault(router, logic);

        router.get("/find/by-province/:idprovince", (req, res)=>{
            let idprovince = req.params.idprovince;
          
            logic.findByProvince(idprovince).then(function (items)
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

module.exports = RegencyRouterSetter;