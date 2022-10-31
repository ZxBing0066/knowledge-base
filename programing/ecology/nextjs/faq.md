# 问题记录

## Too many connections

next.js 在开发环境下热更新 API 会导致实例重复创建，解决方案是使用 global 存储当前实例。

```ts
import mysql from 'mysql2';
import { Pool } from 'mysql2/promise';

declare global {
    var pool: Pool | undefined;
}

const pool =
    global.pool ||
    mysql
        .createPool({
            host: 'localhost',
            user: 'root',
            database: 'zp-maid',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            password: process.env.DB_PASS
        })
        .promise();

if (process.env.NODE_ENV !== 'production') global.pool = pool;
```

> 参考：
> https://dev.to/noclat/fixing-too-many-connections-errors-with-database-clients-stacking-in-dev-mode-with-next-js-3kpm
