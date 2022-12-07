# mysql2

-   MySql2 是 nodejs 生态中用于操作 mysql 的包
-   官方文档不全面，需要结合 mysql 第一版本的包的文档

## 连接池

### 创建连接池

```js
mysql
    .createPool({
        host: 'localhost',
        user: 'user',
        database: 'db-name',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        password: process.env.DB_PASS
    })
    .promise();
```

通过 `.promise` 将连接池中的操作设置为 `Promise` 类型。

### 从连接池中获取连接使用

```js
const connection = await pool.getConnection();
connection.query('SELECT 1 + 1 AS solution');
connection.release();
```

用完后需要释放连接，否则连接池中的连接数会一直增加。

### 直接使用连接池

```js
await pool.query('SELECT 1 + 1 AS solution');
```

## 创建连接

```js
const connection = mysql.createConnection({
    host: 'localhost',
    ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca.crt')
    }
});
```

## query 和 execute

-   最大的区别是 execute 会对 sql 进行预处理，防止 sql 注入，query 需要手动处理
-   API 上有些许差异

## 批量插入

```js title=query
const sql = 'INSERT INTO `table` (`name`, `age`) VALUES ?';
const values = [
    ['name1', 1],
    ['name2', 2]
];
await connection.query(sql, [values]);
```

## 事务

```js
const connection = await pool.getConnection();
await connection.beginTransaction();
try {
    await connection.query('DELETE FROM posts');
    await connection.query('INSERT INTO posts SET title = ?', 'Hello MySQL');
    await connection.commit();
} catch (err) {
    await connection.rollback();
    throw err;
} finally {
    connection.release();
}
```
