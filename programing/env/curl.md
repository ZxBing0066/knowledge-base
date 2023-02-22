## 测试延迟和下载速度

```sh
curl -w "@curl-format.txt" -o /dev/null --resolve www.ucloud.cn:443:123.59.130.67 https://www.ucloud.cn
```

curl-format.txt

```txt
    time_namelookup:  %{time_namelookup}s\n
        time_connect:  %{time_connect}s\n
     time_appconnect:  %{time_appconnect}s\n
    time_pretransfer:  %{time_pretransfer}s\n
       time_redirect:  %{time_redirect}s\n
  time_starttransfer:  %{time_starttransfer}s\n
                     ----------\n
          time_total:  %{time_total}s\n
```

* 使用`curl`下载文件
```sh
curl -O 'url' # 按照实际文件名下载
curl -o filename 'url' # 将文件下载为指定文件名
```