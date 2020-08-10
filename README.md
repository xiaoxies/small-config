# small-config

###获取全局配置参数

####需运行的时候在全局设置 NODE_ENV
####small-config会根据NODE_ENV的值去配置目录查找对应的文件


```angular2
使用方式，在入口文件导入
import config from "small-config";
config.load("配置文件目录");

配置文件目录下面的文件会合并，并且必须要用一个env文件夹
```



```angular2
其他文件使用
import config from "small-config";

config.get("session.name")
```
