# Linux创建管理员用户

* 添加用户

  ```shell
  useradd username -p password
  ```

* 删除用户

  ```shell1
  userdel username
  ```

* 查看当前登陆用户

  ```shell
  users
  ```

* 查看所有用户详细信息

  ```shell
  vim /etc/passwd
  ```

  `root:x:0:0:root:/root:/bin/bash`
  对应
  `用户名:密码:Uid:Gid:描述:个人目录:默认的shell`

* 修改密码

  ```shell
  passwd username # 不加为当前用户
  ```

* 添加权限列表

  ```shell
  vim /etc/sudoers
  ```

  找到`root ALL=(ALL) ALL`
  在下边添加`username ALL=(ALL) ALL`

* 相关文件
  * \/etc\/passwd 用户信息
  * \/etc\/shadow 用户密码
  * \/etc\/group    用户组信息


