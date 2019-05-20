const signinHandler = (req, res,db, bcrypt) => {
    // bcrypt.compare("ram123", '$2a$10$GMzPyUl.MrdBx2ACFLy4vOz55Yuo4SIVBI0HeB9aVAmmMc/vJgY8i', function(err, res) {
    //     console.log('first ', res);
    //  });
    //  bcrypt.compare("veggies", '$2a$10$GMzPyUl.MrdBx2ACFLy4vOz55Yuo4SIVBI0HeB9aVAmmMc/vJgY8i', function(err, res) {
    //     console.log('second ', res);                
    //  });
/*  if(req.body.email === database('users').email && req.body.password === database('users').password){
    res.json(database.users[0]);
} else {
    res.status(400).json('error logged in');
}
})
*/
db.select('email', 'hash').from('login')
.where('email', '=', req.body.email)
.then(data => {
    const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
    //console.log(isValid);
    if(isValid){
        return db.select('*').from('users')
        .where('email','=',req.body.email)
        .then(user =>{
            //console.log(user);
            res.json(user[0])
        })
        .catch(err => res.status(400).json('unable to get user'))
    } else {
        res.status(400).json('Wrong Credentials')
    }
})
.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
    signinHandler: signinHandler
}