Redis 默认没有用户名密码，需要手动设置，可单密码，早期版本只支持单密码，更早期不支持密码

纯内存存储，需要持久化需要启用持久化策略，意外 down 会丢失数据

## redis modules

下载：https://app.redislabs.com/#/rlec-downloads

自行构建：https://github.com/RedisJSON/RedisJSON

module 命令清单：https://redis.io/commands/?group=json

### 启用

修改 redis 配置文件

mac 默认地址为：/usr/local/etc/redis.conf

添加 loadmodule 指令

### redisJSON

ERR new objects must be created at the root

必须给顶级对象初始化

. 和 $ 都为顶层 path

ERR Path '$.timelines.branch-manage' does not exist

redisClient.json.get(`maid:feature`, { path: `$.timelines.${req.query.pid}` }))

需要使用 $ 开头来获取才不报错，方案来自：https://github.com/RedisJSON/RedisJSON/issues/74#issuecomment-1028730936

https://redis.io/docs/stack/json/path/#redisjson-path
