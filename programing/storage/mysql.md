# MySQL

## 数据类型

## 基础语法

```sql title=建表
CREATE TABLE `job` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '任务名称',
  `desc` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '任务描述',
  `feature` int NOT NULL COMMENT '任务所属的功能',
  `files` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '任务相关文件',
  `staffs` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '参与人员',
  `menus` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '相关菜单',
  `messages` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '相关报文',
  `interapis` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '相关内部 API',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='任务表';
```

## JSON 操作

```sql title=通过 JSON_CONTAINS 查找 JSON 数组字段匹配
select * from job where JSON_CONTAINS(`staffs`, '1')
-- 在 job 表中查找满足条件：staffs 字段中的 json 数组包含元素 1 的项
```

```sql title=通过 JSON_SEARCH 查找 JSON 字段匹配
select * from block where JSON_SEARCH(`files`, 'all', '%322%', null, '$[*].name')
-- 在 block 表中查找所有（all）满足条件：files 字段的 JSON 字符 path 为 $[*].name 的值匹配 %322% 的数据
```

## 注意

-   字段名称可能会与关键字冲突，需要用反引号包裹
-   需要注意 sql 注入问题

## 工具

-   macOS Sequel Ace
