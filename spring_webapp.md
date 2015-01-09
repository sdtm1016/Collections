# 搭建一个 Spring Base 的 WEB 项目

## 1. POM.XML

### 基础依赖

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>${servlet.api.version}</version>
    <scope>provided</scope>
</dependency>
<!-- 日志 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>${slf4j-log4j12.version}</version>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>${junit.version}</version>
    <scope>test</scope>
</dependency>
<!-- 个人更倾向于使用 fastjson 代替 jackon -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>${fastjson.version}</version>
</dependency>
```

### Apache Commons

```xml
<!-- 必须的，其实也挺好用的 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>${commons-lang.version}</version>
</dependency>
<!-- DB Collection Pool -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-dbcp2</artifactId>
    <version>${commons-dbcp.version}</version>
</dependency>
```

### JDBC Driver

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>${mysql-connector-java.version}</version>
</dependency>
```
