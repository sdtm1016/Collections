# Grunt 项目搭建

## 1. npm init

```shell
  npm init # 其余的信息按需输入即可
```

## 2. install dependencies

这里安装依赖有两种方法：

- 其一：手动编辑 `package.json` 文件；
- 其二：使用 `npm install` 命令；

```shell
  npm install grunt --save-dev  # 可以替换成你需要的其他的依赖
  npm install grunt-contrib-uglify --save-dev
```

## 3. 创建 Gruntfile.js

`Grunt` 官方的一个例子：

```javacript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```
