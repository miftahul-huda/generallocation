var DefaultRouterSetter = require("./defaultroutersetter");

class RegionRouterSetter extends DefaultRouterSetter
{
    static setDefault(router, logic)
    {
        super.setDefault(router, logic);

        router.get("/find/by-branch/:idbranch", (req, res)=>{
            let idbranch = req.params.idbranch;
          
            logic.findByBranch(idbranch).then(function (items)
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

module.exports = RegionRouterSetter;