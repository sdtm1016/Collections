# `Vagrant` 使用笔记

## 常用的 Box：

- [Official Ubuntu Server 14.04 LTS (Trusty Tahr)](https://vagrantcloud.com/ubuntu/boxes/trusty64)

```shell
  vagrant init ubuntu/trusty64
```

- [CentOS 6.5 x64 Server](https://vagrantcloud.com/chef/boxes/centos-6.5)

```shell
  vagrant init chef/centos-6.5
```

## 启动、初始化 Box （虚拟机）

```shell
  vagrant up
```

## 停止 Box

```shell
  vagrant halt
```

## 重新载入配置

```shell
  vagrant reload
```
