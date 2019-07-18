const web3 = require('./web3');
function postdb2(assetid,data){
    data = {
        user_id: 'raah',
        asset_id:'ma',
        date: 'ka',
        act: "sell",
        price: 5000,
        desc: "property"
    }
web3.setDataBC(data ,(result) =>{
        if(result == err){
            var data = {
                status: "error",
                message: "couldn't add to blockchain"
            }
            return res.JSON(data);
        }
        console.log("we need: " + JSON.stringify(result));
        // callback(result);
        let blockHash = result.blockHash;
        let blockNumber = result.blockNumber;
        let transactionHash = result.transactionHash;
        let gasUsed = result.gasUsed;
        let contract = result.contract;
        pool.connect();
        pool.query("INSERT INTO invoiced(blockhash,contract,trxhash,assetid,multihash,created,doctype,price,gasused,blocknumber)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
        [blockHash,contract,transactionHash,_assetid,content,new Date(),'LAND DOCS',_price,gasUsed,blockNumber],
        (err,res) =>{
            if(err){
                console.log(err)
            } else {
                console.log('finally' + JSON.stringify(res));
                
                
            }
        })
    })
}
exports.postdb2 = postdb2;