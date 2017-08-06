/**
 * Created by dllo on 17/8/6.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
router.post('/',function (req, res) {
    var username1 = req.body.username1;
    var password1 = req.body.password1;

    res.render('loginSuccess');

    //数据库操作

    var handleError = require('../handlerError');
    var options = {
        host: 'localhost',
        port:  3306,
        user: 'root',
        password: ''
    };
    var connect = mysql.createConnection(options);
    connect.connect(function (error) {
        handleError('连接',error)
    });



    var useDASQL = 'use PHP0404';
    connect.query(useDASQL,function (error) {
        handleError('使用',error)
    });



//插入数据
    console.log(username1);
    console.log(password1);
    var insertSQL = "insert into zhuce (username, password) values ("+username1+","+password1+")";
    connect.query(insertSQL,function (error) {
        handleError('插入',error)
    });

// 查询
    var selectSQL = 'select * from zhuce';
    connect.query(selectSQL,function (error,results) {

        var isSuccess = handleError('查询',error);
        if (!isSuccess){
            return
        }
        console.log(results);

    });


});
module.exports = router;













