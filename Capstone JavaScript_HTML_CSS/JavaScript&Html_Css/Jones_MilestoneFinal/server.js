'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bcrypt = require('bcrypt');

const  jwt =  require('jsonwebtoken');
const cookiePaser =  require('cookie-parser');

const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 3000 /// Seconds

const mysql = require('mysql2');
const { Console } = require('console');

const con = mysql.createConnection({

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!");
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cookiePaser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/home.html"));
});

//Get All the player rewards
app.get('/getplayerreward', function(req,res){
    var sqlsel = 'select * from PlayerRewards';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

//Get All the Active 
app.get('/getactive', function(req,res){
    var sqlsel = 'select * from Active';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

//------------------------------------------------------------------How Tee Times function

//Get All the Tee Times rewards
app.get('/getteetime', function(req,res){
    var sqlsel = 'select * from TeeTimes';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

app.get('/getteeprice/', function (req,res){
    var tid  = req.query.teepricedj;
   // var tprice = req.query.playerbirthdaydj;

   
   if (tid > 0){
    var typeaddonvar = tid;
    }
    else{
    
    var typeaddonvar = '%%';
        }


    var sqlsel = 'Select dbTeeTimePricedj from TeeTimes'+
    ' where dbTeeTimeIDdj = ?';

    var inserts = [typeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});



app.get('/getplre', function(req,res){
    var sqlsel = 'select * from PlayerRewards';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});


//Get All the User Types
app.get('/getusertype', function(req,res){
    var sqlsel = 'select * from UserType';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});



//Get All the purchases Types
app.get('/getpurchasetypes', function(req,res){
    var sqlsel = 'select * from PurchaseType';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});





//Get All the Players
app.get('/getplayer', function(req,res){
    var sqlsel = 'Select Player.*, PlayerRewards.dbPlayerRewardNamedj'+
    ' from Player inner join PlayerRewards'+
    ' on PlayerRewards.dbPlayerRewardsIDdj  = Player.dbPlayerRewardsdj ';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});



//Get All the User
app.get('/getuser', function(req,res){
    var sqlsel = 'select * from User';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

//Get All the Product Types
app.get('/getproducttypes', function(req,res){
    var sqlsel = 'select * from ProductType';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

//Get the Inventory Section
app.get('/getinventorysection', function(req,res){
    var sqlsel = 'select * from InventorySection';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});


//Get the product
app.get('/getproducts', function(req,res){
    var sqlsel = 'select * from Product';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});



//Get the purchases
app.get('/getpurchase', function(req,res){
    var sqlsel = 'select * from Purchase';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});


//Get the reservations
app.get('/getreservation', function(req,res){
    var sqlsel = 'select * from Reservation';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});

//Get the inventory
app.get('/getreservation', function(req,res){
    var sqlsel = 'select * from Reservation';
    var sql = mysql.format(sqlsel);

  con.query(sql, function(err, data) { 
      if(err) {
          console.error(err);         
          process.exit(1);
        }
        res.send(JSON.stringify(data));
   });
});



//----------------------------------------------------------------------------------All the inserts to the data base 

app.post('/player', function (req, res) {
    var pname = req.body.playername;
    var pbirthday = req.body.playerbirthday;
    var ppw = req.body.playerpw;
    var pemail = req.body.playeremail;
    var pphone = req.body.playerphone;
    var pnotes = req.body.playernotes;
    var prewards = req.body.playerrewards;
    var pactive = req.body.playeractive;
    console.log(pname + "-" + pbirthday + "-" + pemail+"-"+pphone+"-"+pnotes+"-"+prewards+"-"+pactive);
    console.log('pw' + ppw);

    var saltRounds = 10;
    var theHashedPW = '';

    bcrypt.hash(ppw, saltRounds, function(err, hashedPassword){
            if (err){
                console.log("Bad");
                return;
            }else{
                theHashedPW = hashedPassword;
                console.log("Password 1: "+ theHashedPW);
            

                var sqlins = "INSERT INTO Player (dbPlayerNamedj, dbPlayerBirthdaydj, dbPlayerEmaildj,"
                 + " dbPlayerPhonedj, dbPlayerNotesdj, dbPlayerRewardsdj, dbPlayerActivedj, dbPlayerPassworddj) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

                var inserts = [pname, pbirthday, pemail, pphone, pnotes, prewards, pactive,  theHashedPW];

                var sql = mysql.format(sqlins, inserts);

                con.execute(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect('insertplayer.html');
                    res.end();
                });
            }

    });
});


app.post('/user', function (req, res) {

    var uname = req.body.username;
    var ubirthday = req.body.userbirthday;
    var upw = req.body.userpw;
    var uphone = req.body.userphone;
    var uemail = req.body.useremail;
    var ustart = req.body.userstartdate;
    var uend = req.body.userenddate;
    var utypes = req.body.usertypes;
    var uactive = req.body.useractive;
    console.log(uname + "-" + ubirthday + "-" + uphone+"-"+uemail+"-"+utypes+"-"+ustart+"-"+uend+"-"+uactive);
    console.log('pw' + upw);

    var saltRounds = 10;
    var theHashedPW = '';

    bcrypt.hash(upw, saltRounds, function(err, hashedPassword){
            if (err){
                console.log("Bad");
                return;
            }else{
                theHashedPW = hashedPassword;
                console.log("Password 1: "+ theHashedPW);
            

                var sqlins = "INSERT INTO User (dbUserNamedj, dbUserBirthdaydj, dbUserPhonedj,"
                 + " dbUserEmaildj, dbUserStartDatedj, dbUserEndDatedj, dbUserTypedj,dbUserActivedj, dbUserPassworddj) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";

                var inserts = [uname, ubirthday, uphone, uemail, ustart, uend,utypes, uactive, theHashedPW];

                var sql = mysql.format(sqlins, inserts);

                con.execute(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect('insertuser.html');
                    res.end();
                });
            }

    });
});



app.post('/product', function (req, res) {



    var pnamedj = req.body.productnamedj;
    var ppricedj = req.body.productpricedj;
    var pvenderdj = req.body.productvenderdj;
    var ptypedj = req.body.producttypedj;
    var pactive =  req.body.productactive;


    console.log(pnamedj + "-" + ppricedj + "-" + pvenderdj+"-"+ptypedj+"-"+pactive);


                var sqlins = "INSERT INTO Product (dbProductNamedj, dbProductPricedj, dbProductVenderdj,"
                 + " dbProductActivedj, dbProductTypedj) VALUES (?, ?, ?, ?, ?)";

                var inserts = [pnamedj, ppricedj, pvenderdj, pactive, ptypedj];

                var sql = mysql.format(sqlins, inserts);

                con.execute(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect('insertuser.html');
                    res.end();
                });
            

});


app.post('/purchase', function (req, res) {

    var ptotaldj = req.body.purchasetotaldj;
    var pdatedj = req.body.purchasedatetimedj;
    var puserdj = req.body.purchaseuserdj;
    var pplayerdj = req.body.purchaseplayerdj;
    var ptypedj = req.body.purchasetypedj;
    var pactive = req.body.purchaseactive;



    console.log(ptotaldj + "-" + pdatedj + "-" + puserdj+"-"+pplayerdj+"-"+ptypedj+"-"+pactive);

            

                var sqlins = "INSERT INTO Purchase (dbPurchaseTotaldj, dbPurchaseDateTimedj, dbPurchaseUserdj, dbPurchasePlayerdj, "
                 + " dbPurchaseActivedj, dbPurchaseTypedj) VALUES (?, ?, ?, ?, ? ,?)";

                var inserts = [ptotaldj, pdatedj, puserdj,pplayerdj,pactive, ptypedj];

                var sql = mysql.format(sqlins, inserts);

                con.execute(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect('insertuser.html');
                    res.end();
                });
            

});


app.post('/inventory', function (req, res) {

   var inamedj = req.body.inventorynamedj;
    var idesdj = req.body.inventorydescriptiondj;
    var iamountdj = req.body.inventoryamountdj;
    var isectiondj = req.body.inventorysectiondj;
    var iproductdj = req.body.inventoryproductdj;
    var iactive =  req.body.inventoryactive;

    console.log(idesdj + "-" + iamountdj + "-" +isectiondj+"-"+iproductdj+"-"+inamedj+"-"+iactive);


                var sqlins = "INSERT INTO Inventory (dbInventoryDescriptiondj, dbInvetoryAmountdj, dbInventorySectiondj, dbInventoryProductdj, "
                 + " dbInventoryNameddj, dbInventoryActivedj ) VALUES (?,?, ?, ?, ?,?)";

                var inserts = [idesdj, iamountdj,isectiondj, iproductdj, inamedj, iactive];

                var sql = mysql.format(sqlins, inserts);

                con.execute(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                    res.redirect('insertuser.html');
                    res.end();
                });
});

app.post('/reservation', function (req, res) {

    var rname = req.body.reservationnamedj;
     var ramount = req.body.reservationplayeramountdj;
     var rdate = req.body.reservationdatetimedj;
     var rplayer = req.body.reservationplayerdj;
     var rnotes = req.body.reservationnotesdj;
     var ractive = req.body.reservationactive;
     var rteetime = req.body.reservationteetime;


      var priceSql = 'Select dbTeeTimePricedj from TeeTimes'+
     ' where dbTeeTimeIDdj = ?';
     var sqlPrice = mysql.format(priceSql, rteetime);

     if (rteetime >9  && rteetime <0){
        var rprice = 30.00;

     }
     
   
     if (rteetime >8  && rteetime <16){
        var rprice = 45.00;

     }


     if (rteetime >15  && rteetime <45){
        var rprice = 50.00;

     }
     
     if (rteetime >44  && rteetime <67){
        var rprice = 60.00;

     }
     
     if (rteetime >66 ){
        var rprice = 70.00;

     }

     console.log(ramount + "-" + rdate + "-" + rprice+"-"+rplayer+"-"+rnotes);
 
 
                 var sqlins = "INSERT INTO Reservation (dbReservationPlayerAmountdj, dbReservationDateTimedj, dbReservationPricedj, dbReservationPlayerdj, "
                  + " dbReservationNotesdj, dbReservationNamedj, dbReservationActivedj,dbReservationTimedj) VALUES (?, ?, ?, ?, ?, ?, ?,?)";
 
                 var inserts = [ramount, rdate, rprice,rplayer, rnotes, rname ,ractive,rteetime];
 
                 var sql = mysql.format(sqlins, inserts);
 
                 con.execute(sql, function (err, result) {
                     if (err) throw err;
                     console.log("1 record inserted");
                     res.redirect('insertuser.html');
                     res.end();
                 });
 });



//---------------------------------------------------------------------------------Searches

app.get('/getpla/', function (req,res){
    var pnamedj  = req.query.playernamedj;
    var pbirthdaydj = req.query.playerbirthdaydj;
    var pemaildj = req.query.playeremaildj;
    var pphonedj = req.query.playerphonedj;
    var pnotesdj = req.query.playernotesdj;
    var prewardsdj = req.query.playerrewardsdj;
    var pactive = req.query.playeractive;
    console.log("Par:"+pnamedj );
    console.log("Type:"+prewardsdj);
    console.log("Active :"+pactive);


    if (prewardsdj > 0){
        var typeaddon = 'and dbPlayerRewardsdj	 = ?';
        var typeaddonvar = prewardsdj;
    }
    else{
        
        var typeaddon = 'and dbPlayerRewardsdj like ?';
        var typeaddonvar = '%%';
    }

    
    if (pactive < 2){
        var activeaddon = 'and dbPlayerActivedj	 = ?';
        var activeaddonvar = pactive;
    }
    else{
        
        var activeaddon = 'and dbPlayerActivedj like ?';
        var activeaddonvar = '%%';
    }


    var sqlsel = 'Select Player.*, PlayerRewards.dbPlayerRewardNamedj, Active.StatusName from Player'+
    ' inner join PlayerRewards on PlayerRewards.dbPlayerRewardsIDdj  = Player.dbPlayerRewardsdj '+
    ' inner join Active on Active.Statusid  = Player.dbPlayerActivedj '+
    ' where dbPlayerNamedj like ? and dbPlayerBirthdaydj like ? and dbPlayerEmaildj like ? and dbPlayerPhonedj like ? and dbPlayerNotesdj like ?'
      + typeaddon + activeaddon;

    var inserts = ['%' + pnamedj + '%', '%' + pbirthdaydj + '%', '%' + pemaildj + '%', '%' + pphonedj + '%', '%' + pnotesdj + '%', typeaddonvar,activeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});

app.get('/getus/', function (req,res){

    var unamedj  = req.query.usernamedj;
    var ubirthdaydj = req.query.userbirthdaydj;
    var uphonedj = req.query.userphonedj;
    var uemaildj= req.query.useremaildj;
    var ustartdj = req.query.userstartdatedj;
    var uenddj = req.query.userenddatedj;
    var utypedj = req.query.usertypedj;
    var uactive = req.query.useractive;

    console.log("Type:"+utypedj);


    if (utypedj > 0){
        var typeaddon = 'and dbUserTypedj = ?';
        var typeaddonvar = utypedj;
    }
    else{
        
        var typeaddon = 'and dbUserTypedj like ?';
        var typeaddonvar = '%%';
    }
    if (uactive < 2){
        var activeaddon = 'and dbUserActivedj	 = ?';
        var activeaddonvar = uactive;
    }
    else{
        
        var activeaddon = 'and dbUserActivedj like ?';
        var activeaddonvar = '%%';
    }

    var sqlsel = 'Select User.*, UserType.dbUserTypeNamedj, Active.StatusName from UserType '+
                    'inner join User on User.dbUserTypedj  = UserType.dbUserTypeIDdj  '+
                    ' inner join Active on Active.Statusid  = User.dbUserActivedj '+
    ' where dbUserNamedj like ? and dbUserBirthdaydj like ? and dbUserPhonedj like ? and dbUserEmaildj like ? and dbUserStartDatedj like ? and dbUserEndDatedj like ?'
      + typeaddon + activeaddon

    var inserts = ['%' + unamedj + '%', '%' + ubirthdaydj + '%', '%' + uphonedj + '%', '%' + uemaildj + '%', '%' + ustartdj + '%',  '%' + uenddj + '%', typeaddonvar, activeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});


app.get('/getpro', function (req,res){
    var pnamedj  = req.query.productnamedj;
    var ppricedj = req.query.productpricedj;
    var pvenderdj = req.query.productvenderdj;
    var ptypedj= req.query.producttypedj;
    var pactive = req.query.productactive;

    console.log("Type:"+ptypedj);


    if (ptypedj > 0){
        var typeaddon = 'and dbProductTypedj = ?';
        var typeaddonvar = ptypedj;
    }
    else{
        
        var typeaddon = 'and dbProductTypedj like ?';
        var typeaddonvar = '%%';
    }
    
    if (pactive < 2){
        var activeaddon = 'and dbProductActivedj	 = ?';
        var activeaddonvar = pactive;
    }
    else{
        
        var activeaddon = 'and dbProductActivedj like ?';
        var activeaddonvar = '%%';
    }

    var sqlsel = 'Select Product.*, ProductType.dbProductTypeNamedj, Active.StatusName from Product'+
    ' inner join ProductType on ProductType.dbProductTypeIDdj =  Product.dbProductTypedj '+
    ' inner join Active on Active.Statusid  = Product.dbProductActivedj '+
    ' where dbProductNamedj like ? and dbProductPricedj like ? and dbProductVenderdj like ? '
      + typeaddon + activeaddon;

    var inserts = ['%' + pnamedj + '%', '%' + ppricedj + '%', '%' + pvenderdj + '%', typeaddonvar, activeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});



app.get('/getpur/', function (req,res){

    var ptotaldj  = req.query.purchasetotaldj;
    var pdatedj = req.query.purchasedatetimedj;
    var puserdj = req.query.purchaseuserdj;
    var pplayerdj= req.query.purchaseplayerdj;
    var ptypedj = req.query.purchasetypedj;
    var pactive = req.query.purchaseactive;
;

    console.log("Type:"+ptypedj);
    console.log("User:"+puserdj);
    console.log("Player:"+pplayerdj);


    if (puserdj > 0){
        var typeaddonuser = 'and dbPurchaseUserdj = ?';
        var typeaddonvaruser = puserdj;
    }
     else {
        
        var typeaddonuser = 'and dbPurchaseUserdj like ?';
        var typeaddonvaruser = '%%';
    }

    if (pplayerdj > 0){
        var typeaddonplayer = 'and dbPurchasePlayerdj = ?';
        var typeaddonvarplayer = pplayerdj;
    }
    else {
        
        var typeaddonplayer = 'and dbPurchasePlayerdj like ?';
        var typeaddonvarplayer = '%%';
    }

    if (ptypedj > 0){
        var typeaddontype = ' and dbPurchaseTypedj = ? ';
        var typeaddonvartype = ptypedj;
    }
    else {
        
        var typeaddontype = ' and dbPurchaseTypedj like ?';
        var typeaddonvartype = '%%';
    }


    if (pactive < 2){
        var activeaddon = 'and dbPurchaseActivedj	 = ?';
        var activeaddonvar = pactive;
    }
    else{
        
        var activeaddon = 'and dbPurchaseActivedj like ?';
        var activeaddonvar = '%%';
    }

//Note need to add other inner joins
    var sqlsel = 'Select Purchase.*, PurchaseType.dbPurchaseTypeNamedj, User.dbUserNamedj, Player.dbPlayerNamedj, Active.StatusName from Purchase'+
                    ' inner join PurchaseType on PurchaseType.dbPurchaseTypeIDdj  = Purchase.dbPurchaseTypedj '+
                    ' inner join User on User.dbUserIDdj = Purchase.dbPurchaseUserdj'+
                    ' inner join Player on Player.dbPlayerIDdj = Purchase.dbPurchasePlayerdj '+
                    ' inner join Active on Active.Statusid  = Purchase.dbPurchaseActivedj '+
    ' where dbPurchaseTotaldj like ? and dbPurchaseDateTimedj like ? '
      + typeaddonuser + typeaddonplayer +typeaddontype +activeaddon;

    var inserts = ['%' + ptotaldj + '%', '%' + pdatedj + '%',typeaddonvaruser, typeaddonvarplayer, typeaddonvartype,activeaddonvar ];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});


app.get('/getinventory', function (req,res){

    var inamedj  = req.query.inventorynamedj;
    var idesdj = req.query.inventorydescriptiondj;
    var iamountdj = req.query.inventoryamountdj;
    var isectiondj = req.query.inventorysectiondj;
    var iproductdj = req.query.inventoryproductdj;
    var iactive = req.query.inventoryactive;

   // console.log("Section:"+inventorysection);
   // console.log("Procuct:"+inventoryproduct);
    console.log("Type:"+isectiondj);


    if (isectiondj > 0){
        var typeaddontype = 'and dbInventorySectiondj = ?';
        var typeaddonvartype = isectiondj;
    }
     else if(isectiondj <= 0){
        
        var typeaddontype = 'and dbInventorySectiondj like ?';
        var typeaddonvartype = '%%';
    }

    if (iproductdj > 0){
        var typeaddonproduct = 'and dbInventoryProductdj = ?';
        var typeaddonvarproduct = iproductdj;
    }
    else if(iproductdj <= 0){
        
        var typeaddonproduct = 'and dbInventoryProductdj like ?';
        var typeaddonvarproduct = '%%';
    }

    
    if (iactive < 2){
        var activeaddon = 'and dbInventoryActivedj	 = ?';
        var activeaddonvar = iactive;
    }
    else{
        
        var activeaddon = 'and dbInventoryActivedj like ?';
        var activeaddonvar = '%%';
    }

//Note need to add other inner joins
    var sqlsel = 'Select Inventory.*,InventorySection.dbInventorySectionNamedj, Product.dbProductNamedj, Active.StatusName from Inventory'+
                    '  inner join InventorySection on InventorySection.dbInventorySectionIDdj  = Inventory.dbInventorySectiondj '+
                    '  inner join Product on Product.dbProductIDdj   = Inventory.dbInventoryProductdj '+   
                    ' inner join Active on Active.Statusid  = Inventory.dbInventoryActivedj '+              
    ' where dbInventoryDescriptiondj like ? and dbInvetoryAmountdj like ? and  dbInventoryNameddj like ?'+ typeaddontype +typeaddonproduct +activeaddon;

    var inserts = ['%' + idesdj + '%', '%' + iamountdj + '%',  '%' + inamedj + '%', typeaddonvartype, typeaddonvarproduct,activeaddonvar ];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});

app.get('/getres/', function (req,res){

    var rnamedj = req.query.reservationnamedj;
    var ramountdj  = req.query.reservationplayeramountdj;
    var rdatedj = req.query.reservationdatetimedj;
    var rpricedj = req.query.reservationpricedj;
    var rnotesdj = req.query.reservationnotesdj;
    var rplayerdj = req.query.reservationplayerdj;
    var ractive = req.query.reservationactive;
    var rteetime = req.query.reservationteetime;


    if (rplayerdj > 0){
        var typeaddon = 'and dbReservationPlayerdj = ?';
        var typeaddonvar = rplayerdj;
    }
    else{
        
        var typeaddon = 'and dbReservationPlayerdj like ?';
        var typeaddonvar = '%%';
    }
   // dbPlayerNamedj
    
   if (ractive < 2){
    var activeaddon = 'and dbReservationActivedj = ?';
    var activeaddonvar = ractive;
    }
    else{
    
    var activeaddon = 'and dbReservationActivedj like ?';
    var activeaddonvar = '%%';
    }

    if (rteetime > 0){
        var teeaddon = 'and dbReservationTimedj	 = ?';
        var teeaddonvar = rteetime;
        }
        else{
        
        var teeaddon = 'and dbReservationTimedj like ?';
        var teeaddonvar = '%%';
        }
    var sqlsel = 'Select Reservation.*,'+
    ' Player.dbPlayerNamedj, Active.StatusName, TeeTimes.dbTeeTimeNumberdj, TeeTimes.dbTeeTimePricedj from Reservation'+
    ' inner join Player on Player.dbPlayerIDdj  = Reservation.dbReservationPlayerdj'+
    ' inner join Active on Active.Statusid  = Reservation.dbReservationActivedj '+  
    ' inner join TeeTimes on TeeTimes.dbTeeTimeIDdj   = Reservation.dbReservationTimedj '+ 
    ' where dbReservationNamedj like ? and dbReservationPlayerAmountdj like ? and dbReservationDateTimedj like ? and dbReservationPricedj like ? and dbReservationNotesdj like ?' +typeaddon + activeaddon + teeaddon;

    var inserts = ['%' + rnamedj + '%','%' + ramountdj + '%', '%' + rdatedj + '%', '%' + rpricedj + '%', '%' + rnotesdj + '%', typeaddonvar, activeaddonvar, teeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});

//----------------------------------------------------------------------------------Updates the Pages


//----------------------------------------------------Player Update


app.get('/getsinglepla', function (req, res){
    var pkey = req.query.upplakey;

    var sqlsel = 'select * from Player where dbPlayerIDdj  = ?';
    var inserts = [pkey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('/upsinpla', function(req,res){

    var uppid = req.body.upplayerid;
    var  uppname = req.body.upplayername;
    var uppirthday = req.body.upplayerbirthday;
    var uppemail = req.body.upplayeremail;
    var uppphone = req.body.upplayerphone;
    var uppnote = req.body.upplayernotes;
    var upprewards = req.body.upplayerrewards;

    var sqlins = "UPDATE Player SET dbPlayerNamedj = ?, dbPlayerBirthdaydj = ?, dbPlayerPhonedj = ? "+
        " dbPlayerEmaildj = ?, dbPlayerRewardsdj = ?, dbPlayerNotesdj = ? "+
        " WHERE dbPlayerIDdj  = ?";
        
    var inserts = [uppname, uppirthday, uppphone, uppemail,  upprewards, uppnote, uppid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});



//----------------------------------------------------User Update
app.get('/getsingleuse', function (req, res){
    var ukey = req.query.upusekey;

    var sqlsel = 'select * from User where dbUserIDdj  = ?';
    var inserts = [ukey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('updateuse', function(req,res){

    var pid = req.body.upplayerid;
    var  pname = req.body.upplayername;
    var pirthday = req.body.upplayerbirthday;
    var pemail = req.body.upplayeremail;
    var pphone = req.body.upplayerphone;
    var pnote = req.body.upplayernotes;
    var prewards = req.body.upplayerrewards;

    var sqlins = "UPDATE Player SET dbPlayerNamedj = ?, dbPlayerBirthdaydj = ?, dbPlayerPhonedj = ? "+
        " dbPlayerEmaildj = ?, dbPlayerRewardsdj = ?, dbPlayerNotesdj = ? "+
        " WHERE dbPlayerIDdj  = ?";
        
    var inserts = [pname, pirthday, pphone, pemail, prewards, pnote, pid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});



//----------------------------------------------------Prodcut Update

app.get('/getproid', function (req,res){
    var piddj  = req.query.productid;
    var pnamedj  = req.query.productnamedj;
    var ppricedj = req.query.productpricedj;
    var pvenderdj = req.query.productvenderdj;
    var ptypedj= req.query.producttypedj;

    console.log("Type:"+ptypedj);


    if (ptypedj > 0){
        var typeaddon = 'and dbProductTypedj = ?';
        var typeaddonvar = ptypedj;
    }
    else{
        
        var typeaddon = 'and dbProductTypedj like ?';
        var typeaddonvar = '%%';
    }


    var sqlsel = 'Select Product.*, ProductType.dbProductTypeNamedj'+
                    ' from ProductType inner join Product'+
                    ' on ProductType.dbProductTypeIDdj    =  Product.dbProductTypedj '+
    ' where dbProductIDdj  like ? and dbProductNamedj like ? and dbProductPricedj like ? and dbProductVenderdj like ? '
      + typeaddon;

    var inserts = ['%' + piddj + '%', '%' + pnamedj + '%', '%' + ppricedj + '%', '%' + pvenderdj + '%', typeaddonvar];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});

app.get('/getsinglepro', function (req, res){
    var pkey = req.query.upprokey;

    var sqlsel = 'select * from Product where dbProductIDdj   = ?';
    var inserts = [pkey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('updateproduct/', function(req,res){

    var pkey = req.body.upproductkey;
    var pid = req.body.upproductid;
    var  pname = req.body.upproductname;
    var pprice = req.body.upproductprice;
    var pvender = req.body.upproductvender;
    var ptype = req.body.upproducttype;

    var sqlins = "UPDATE Product SET "+
    "  dbProductNamedj = ?, dbProductPricedj = ?, dbProductVenderdj = ?  dbProductTypedj = ?,  "+
        " WHERE dbProductIDdj  = ?";
        
    var inserts = [ pname, pprice, pvender, ptype, pid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});

//----------------------------------------------------Purchase Update
app.get('/getsinglepur', function (req, res){
    var pkey = req.query.uppurkey;

    var sqlsel = 'select * from Purchase where dbPurchaseIDdj = ?';
    var inserts = [pkey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('updatepur', function(req,res){

    var pid = req.body.upplayerid;
    var  pname = req.body.upplayername;
    var pirthday = req.body.upplayerbirthday;
    var pemail = req.body.upplayeremail;
    var pphone = req.body.upplayerphone;
    var pnote = req.body.upplayernotes;
    var prewards = req.body.upplayerrewards;

    var sqlins = "UPDATE Player SET dbPlayerNamedj = ?, dbPlayerBirthdaydj = ?, dbPlayerPhonedj = ? "+
        " dbPlayerEmaildj = ?, dbPlayerRewardsdj = ?, dbPlayerNotesdj = ? "+
        " WHERE dbPlayerIDdj  = ?";
        
    var inserts = [pname, pirthday, pphone, pemail, prewards, pnote, pid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});



//----------------------------------------------------Inventory Update
app.get('/getsingleinv', function (req, res){
    var ikey = req.query.upinvenkey;

    var sqlsel = 'select * from Inventory where dbInventoryIDdj   = ?';
    var inserts = [ikey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('/updatesingleinv', function(req,res){

    var pid = req.body.upplayerid;
    var  pname = req.body.upplayername;
    var pirthday = req.body.upplayerbirthday;
    var pemail = req.body.upplayeremail;
    var pphone = req.body.upplayerphone;
    var pnote = req.body.upplayernotes;
    var prewards = req.body.upplayerrewards;

    var sqlins = "UPDATE Player SET dbPlayerNamedj = ?, dbPlayerBirthdaydj = ?, dbPlayerPhonedj = ? "+
        " dbPlayerEmaildj = ?, dbPlayerRewardsdj = ?, dbPlayerNotesdj = ? "+
        " WHERE dbPlayerIDdj  = ?";
        
    var inserts = [pname, pirthday, pphone, pemail, prewards, pnote, pid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});




//----------------------------------------------------Reservation Update
app.get('/getsingleres', function (req, res){
    var rkey = req.query.upreskey;

    var sqlsel = 'select * from Reservation where dbReservationIDdj   = ?';
    var inserts = [rkey];

    var sql = mysql.format(sqlsel, inserts);

    con.query(sql, function (err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }

        res.send(JSON.stringify(data));
    });
});

app.get('updateres', function(req,res){

    var rkey = upreservationkey;
    var  rid = upreservationid;
    var rname = upreservationname;
    var ramount = upreservationplayeramount;
    var rdate =  upreservationdatetime;
    var rnotes =  upreservationnotes;
    var rprice = upreservationprice;
    var rplayer =  upreservationplayer;

    var sqlins = "UPDATE Reservation SET dbReservationNamedj = ?, dbReservationPlayerAmountdj = ?, dbReservationDateTimedj = ? "+
        " dbReservationNotesdj = ?, dbReservationPricedj = ?, dbReservationPlayerdj = ? "+
        " WHERE dbReservationIDdj   = ?";
        
    var inserts = [rname, ramount, rdate, rnotes, rprice, rplayer, rid];

    var sql = mysql.format(sqlins, inserts);

    console.log(sql);

    con.execute(sql, function (err, result){
        if(err) throw err;

        console.log("1 record update");

        res.end();
    });
});


app.get('/getres/', function (req,res){

    var rnamedj = req.query.reservationnamedj;
    var ramountdj  = req.query.reservationplayeramountdj;
    var rdatedj = req.query.reservationdatetimedj;
    var rpricedj = req.query.reservationpricedj;
    var rnotesdj = req.query.reservationnotesdj;
    var rplayerdj = req.query.reservationplayerdj;


    if (rplayerdj > 0){
        var typeaddon = 'and dbReservationPlayerdj = ?';
        var typeaddonvar = rplayerdj;
    }
    else{
        
        var typeaddon = 'and dbReservationPlayerdj like ?';
        var typeaddonvar = '%%';
    }
   // dbPlayerNamedj

    var sqlsel = 'Select Reservation.*,'+
    ' Player.dbPlayerNamedj  from Player'+
    ' inner join Reservation on Player.dbPlayerIDdj  = Reservation.dbReservationPlayerdj'+
    ' where dbReservationNamedj like ? and dbReservationPlayerAmountdj like ? and dbReservationDateTimedj like ? and dbReservationPricedj like ? and dbReservationNotesdj like ?' +typeaddon;

    var inserts = ['%' + rnamedj + '%','%' + ramountdj + '%', '%' + rdatedj + '%', '%' + rpricedj + '%', '%' + rnotesdj + '%', typeaddonvar ];

    var sql = mysql.format(sqlsel, inserts);

    console.log(sql);

    con.query(sql, function (err,data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        res.send(JSON.stringify(data));
    });
});

//------------------------------------------------------------------------------------------Log out
app.get('/getloggedout/', function (req, res) {
    res.cookie('token', 2, { maxAge: 0 })
    res.send({ redirect: '/backend/index.html'});
});


app.get('/getloggedouthome/', function (req, res) {
    res.cookie('token', 2, { maxAge: 0 })
    res.send({ redirect: '/home.html'});
});

//---------------------------------------------------------------------------------Login

app.get('/getloguser', function(req, res){
    var viewpage = 0;
    var datahold = [];
    const validtoken = req.cookies.token    
    console.log('token new: '+ validtoken);
    var payload;

    if(!validtoken){
        viewpage = 0;
        console.log("NVT");
    }else{
        try{
            payload =jwt.verify(validtoken, jwtKey);
            console.log('payload new: ', payload.userkey);
            viewpage = payload.userkey;
             
            var sqlsel = 'select * from User where dbUserIDdj  = ?';
            var inserts = [viewpage];

            var sql = mysql.format(sqlsel, inserts);

            con.query(sql, function(err, data){
                if (err){
                    console.error(err);
                    process.exit(1);
                }
                console.log("Show 1 "+data);
                datahold = data;

                res.send(JSON.stringify(data));
            });
        }
        catch (e){
            if (e instanceof jwt.JsonWebTokenError){
                viewpage = 0;
                console.log("NVT2");
            }
            viewpage = 0;
            console.log("NVT3");
        }
    }

});



app.get('/getlogplayer', function(req, res){
    var viewpage = 0;
    var datahold = [];
    const validtoken = req.cookies.token    
    console.log('token new: '+ validtoken);
    var payload;

    if(!validtoken){
        viewpage = 0;
        console.log("NVT");
    }else{
        try{
            payload =jwt.verify(validtoken, jwtKey);
            console.log('payload new: ', payload.playerkey);
            viewpage = payload.playerkey;
             
            var sqlsel = 'select * from Player where dbPlayerIDdj   = ?';
            var inserts = [viewpage];

            var sql = mysql.format(sqlsel, inserts);

            con.query(sql, function(err, data){
                if (err){
                    console.error(err);
                    process.exit(1);
                }
                console.log("Show 1 "+data);
                datahold = data;

                res.send(JSON.stringify(data));
            });
        }
        catch (e){
            if (e instanceof jwt.JsonWebTokenError){
                viewpage = 0;
                console.log("NVT2");
            }
            viewpage = 0;
            console.log("NVT3");
        }
    }

});

//--------------------------------------------------------------------------------User
app.post('/loginuser', function(req,res){
    var uemail = req.body.useremail;
    var upw = req.body.userpw;

    var sqlsel  = "select * from User where dbUserEmaildj = ?";

    var inserts = [uemail];

    var sql = mysql.format(sqlsel, inserts);

    console.log("SQL: "+sql);

    con.query(sql, function (err, data){
        if (data.length > 0){
                var userkey = data[0].dbUserIDdj;
                console.log("IDd"+data[0].dbUserIDdj) ;
                console.log("User Name correct!0");
                console.log(data[0].dbUserPassworddj);

                bcrypt.compare(upw, data[0].dbUserPassworddj, function(err, passwordCorrect){
                    if(err){
                        throw err
                    }
                    else if(!passwordCorrect){
                        console.log("Password Incorrect");
                    }
                    else{
                        console.log("Password correct");
                        const token = jwt.sign({userkey}, jwtKey, {
                            algorithm: 'HS256',
                            expiresIn: jwtExpirySeconds 
                        });

                        res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000});
                        res.send({redirect:'/backend/landing.html'});
                    }
                });
        }else{
            console.log("Incorrect email or password.");
           // window.alert("Incorrect email or password.");
        }
    });
});


//---------------------------------------------------------------------------------Player

app.post('/loginplayer', function(req,res){
    var pemail = req.body.playeremail;
    var ppw = req.body.playerpw;

    var sqlsel  = "select * from Player where dbPlayerEmaildj = ?";

    var inserts = [pemail];

    var sql = mysql.format(sqlsel, inserts);

    console.log("SQL: "+sql);

    con.query(sql, function (err, data){
        if (data.length > 0){
                console.log("Player Name correct!");
                var playerkey =data[0].dbPlayerIDdj ;
                console.log(data[0].dbPlayerPassworddj);

                bcrypt.compare(ppw, data[0].dbPlayerPassworddj, function(err, passwordCorrect){
                    if(err){
                        throw err
                    }
                    else if(!passwordCorrect){
                        console.log("Password Incorrect");   
                             window.alert("Password Incorrect");  
                    }
                    else{
                        console.log("Password correct");
                        const token = jwt.sign({ playerkey}, jwtKey, {
                            algorithm: 'HS256',
                            expiresIn: jwtExpirySeconds 
                        });

                        res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000});
                        res.send({redirect:'insertreservation.html'});
                    }
                });
        }else{
            console.log("Incorrect email or password.");
           // window.alert("Incorrect email or password.");
           window.alert("Incorrect email or password.");
        }
    });
});




