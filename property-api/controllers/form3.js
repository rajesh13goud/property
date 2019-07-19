const web3 = require("./web3");
function postdb2(assetid,content, callback) {
  const { Pool } = require("pg");
  // const log = require('./signin');

  const pool = new Pool({
    user: "property",
    host: "localhost",
    database: "property",
    password: "rajesh123",
    port: 5432
  });
  pool.connect();
  pool.query(
    "SELECT assetid, ownerid, entered,price from asset WHERE assetid = ($1)",
    [assetid],
    (err, res) => {
      if (err) {
        console.warn(err);
      } else {
        // console.log("uffeeeeeeeee", res["rows"][0]['ownerid']);
        console.log("rajahaja");
      }
      let data = {
        user_id: res["rows"][0]["ownerid"],
        asset_id: res["rows"][0]["assetid"],
        date: res["rows"][0]["entered"],
        act: "sell",
        price: res["rows"][0]["price"],
        desc: "property"
      };
      console.log("data getting into bcn1 " + JSON.stringify(data));

      web3.setDataBC(data, result => {
        const pool = new Pool({
          user: "property",
          host: "localhost",
          database: "property",
          password: "rajesh123",
          port: 5432
        });
        if (result == err) {
          var data = {
            status: "error",
            message: "couldn't add to blockchain"
          };
          return res.JSON(data);
        }
        console.log("we need: " + JSON.stringify(result));
        let blockHash = result.blockHash;
        let blockNumber = result.blockNumber;
        let transactionHash = result.transactionHash;
        let gasUsed = result.gasUsed;
        let contract = result.contract;
        pool.connect();
        pool.query("INSERT INTO invoiced(blockhash,contract,trxhash,assetid,multihash,created,doctype,gasused,blocknumber)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [blockHash,contract,transactionHash,assetid,content,new Date(),'LAND DOCS',gasUsed,blockNumber],
        (err,res) =>{
            if(err){
                console.log(err)
            } else {
                console.log('finally' + JSON.stringify(res));
                
                
            }
        })
      });
    }
  );
}
exports.postdb2 = postdb2;
