## 查找文件名并搜索其内容

```shell
  # 在当前目录查找后缀为 .desktop 的切内容必须包含字符串 Prefferred Applications 文件相关内容
  find ./* -type f -name "*.desktop" | xargs grep "Preferred Applications"
```
