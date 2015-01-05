## 查找文件名并搜索其内容


```shell
  # 在当前目录查找后缀为 .desktop 的切内容必须包含字符串 Prefferred Applications 文件相关内容
  find ./* -type f -name "*.desktop" | xargs grep "Preferred Applications"
```

## Apache2 加载 Rewrite mod

### 手动开启加载Rewrite

1. 执行加载Rewrite模块：

```shell
sudo a2enmod rewrite
```

2.参照上文的目录配置，做个启动链接（下次启动自动加载）：

```shell
ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load
```

执行后会在mods-available目录下创建一个快捷方式，连接到`mods-enabled`下`rewrite`模块。

3、重启 Apache：

```shell
/etc/init.d/apache2 restart
```
