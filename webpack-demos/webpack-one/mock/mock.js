/**
 * Created by jianfei on 2017/3/18.
 */
    // 9.0 导入数据接口
var in_theaters=require('./in_theaters.json');

//9.1 定义一个函数返回一个对象
module.exports=function(){
    return {
        //"/v2/theaters_data":theaters_data
        in_theaters:in_theaters
    }
};