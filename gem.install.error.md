gem install 出错

解决该问题的方法是将 gem 仓库改为淘宝的镜像。

```
$ gem sources --remove https://rubygems.org/ 
$ gem sources -a http://ruby.taobao.org/ 
