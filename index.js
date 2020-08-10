
let config;
const env = process.env.NODE_ENV;
class smallConfig {
    static load(path){
        path = path[path.length-1] !== '/' ? path+'/' : path;
        config=require(path + env.trim() + '.js');
        config=config.default?config.default:config;
    }
    static get(str){
        return config[str] || null;
    }
}

module.exports=smallConfig;
