const fs = require("fs");
const path = require("path");
let config={};
const env = process.env.NODE_ENV;
class smallConfig {
    static load(path){
        path = path[path.length-1] !== '\\' ? path+'\\' : path;
        fs.readdirSync(path).forEach(file =>{   //将目录下的js配置文件合并
            if(file.indexOf(".")!==-1){
                let obj = require(path + file.trim());
                obj = obj.default ? obj.default : obj;
                config = Object.assign({},config,obj);
            }
        })
        let assign = require(`${path}env/${env.trim()}.js`);
        assign=assign.default?assign.default:assign;
        config = Object.assign({},config,assign||{});
    }
    static get(str){
        return new Function('config',`with(config){return ${str} }`)(config) || null;
    }
}


module.exports=smallConfig;
