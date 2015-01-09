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
<!-- Usefull and require -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>${commons-lang.version}</version>
</dependency>
<!-- DB Collection Pool (require) -->
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

### Spring etc.

```xml
<!-- Core (Require) -->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>${org.aspectj.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${spring.version}</version>
</dependency>
        <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-support</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>${spring.version}</version>
    <scope>test</scope>
</dependency>
<!-- MVC (Option) -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
</dependency>
<!-- ORM Support (Require) -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-orm</artifactId>
    <version>${spring.version}</version>
</dependency>
<!-- Security (option) -->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-web</artifactId>
    <version>${spring.security.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-config</artifactId>
    <version>${spring.security.version}</version>
</dependency>
```

### ORM

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>${mybatis.version}</version>
</dependency>
<!-- Spring support -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>${mybatis.spring.version}</version>
</dependency>
```

### Other

```xml
<dependency>
    <groupId>org.freemarker</groupId>
    <artifactId>freemarker</artifactId>
    <version>${freemarker.version}</version>
</dependency>
<dependency>
    <groupId>joda-time</groupId>
    <artifactId>joda-time</artifactId>
    <version>${joda.version}</version>
</dependency>
```
## 2. WEB-INF/web.xml

```xml
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
        classpath*:spring/context.xml
        classpath*:spring/security.xml
    </param-value>
</context-param>
<!-- spring securit start -->
<filter>
    <filter-name>springSecurityFilterChain</filter-name>
    <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
</filter>
<filter-mapping>
    <filter-name>springSecurityFilterChain</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
<!-- 过滤静态资源 -->
<servlet-mapping>
    <servlet-name>default</servlet-name>
    <url-pattern>/static/*</url-pattern>
</servlet-mapping>
<servlet>
    <servlet-name>wxuc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>${servlet_name}</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

## 3. spring/context.xml

```xml
<!-- default-autowire="byName" default-lazy-init="false" -->
<context:component-scan base-package="${base_packge_path}" />
<!-- option -->
<bean id="exceptionResolver" class="${globle_exception_handler}"/>
<!-- DataSource -->
<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">
	<property name="driverClassName" value="com.mysql.jdbc.Driver" />
	<property name="url" value="${jdbc_connection_uri}" />
	<property name="username" value="${jdbc_connection_username}" />
	<property name="password" value="${jdbc_connection_password}"/>
</bean>
<!-- SQL Session -->
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
	<property name="dataSource" ref="dataSource" />
 	<property name="configLocation" value="classpath:mybatis/mybatis-conf.xml" />
	<property name="mapperLocations" value="classpath*:mybatis/mapper/mapper-*Dao.xml" />
</bean>
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
	<property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
	<property name="basePackage" value="${dao_base_package}" />
</bean>
```

## 4. security.xml

```xml
<!-- 静态资源 -->
<http pattern="/static/**" security="none" />
<!-- 登陆界面 -->
<http pattern="/login" security="none" />
<!-- 其他需要拦截的内容 -->
<http auto-config="false" access-denied-page="/login" use-expressions="true">
	<!-- 拦截器,可以设定哪些路径需要哪些权限来访问 -->
	<intercept-url pattern="/**" access="isAuthenticated()" />
	<http-basic />
	<!-- session 管理 -->
	<session-management invalid-session-url="/login"
				session-authentication-error-url="/login"
				session-fixation-protection="migrateSession">
	</session-management>
	<!-- 登陆页面 -->
	<form-login login-page="/login" default-target-url="/dash"
				authentication-failure-url="/login"
				always-use-default-target="true" />
	<!-- 记住我 -->
	<remember-me key="${key}" />
	<!-- 注销后跳转到的页面; -->
	<logout logout-success-url="/login" delete-cookies="JSESSIONID" />
</http>
<!-- 用户权限校验服务配置 -->
<beans:bean id="authoritiesService" class="${authorities_service_refrence_path}" />

<authentication-manager erase-credentials="false">
	<authentication-provider user-service-ref="authoritiesService" />
</authentication-manager>
```

## 3. mybatis/mybatis-conf.xml

```xml
<configuration>
	<settings>
		<setting name="cacheEnabled" value="false" />
		<setting name="lazyLoadingEnabled" value="false" />
		<setting name="multipleResultSetsEnabled" value="true" />
		<setting name="useColumnLabel" value="true" />
		<setting name="useGeneratedKeys" value="true" />
		<setting name="defaultExecutorType" value="SIMPLE" />
		<setting name="defaultStatementTimeout" value="25000" />
	</settings>
	<typeAliases>
		<package name="${base_dto_package}" />
	</typeAliases>
</configuration>
```

## 4. WEB-INF/${servlet_name}-servlet.xml

```xml
<!-- 对象序列化，JSON 解析器 -->
<mvc:annotation-driven>
	<mvc:message-converters register-defaults="true" >
		<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter">
			<property name="supportedMediaTypes" value="application/json;charset=UTF-8" />
		</bean>
	</mvc:message-converters>
</mvc:annotation-driven>
<context:component-scan base-package="${base_package}" />
<mvc:interceptors>
    	<bean class="${some_interceptor}" />
</mvc:interceptors>
<bean id="freemarkerConfigurer"
	  class="org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer">
	<property name="templateLoaderPath" value="/WEB-INF/view/" />
	<property name="defaultEncoding" value="UTF-8" />
	<property name="freemarkerSettings">
		<props>
			<prop key="template_update_delay">10</prop>
			<prop key="locale">zh_CN</prop>
			<prop key="datetime_format">yyyy-MM-dd HH:mm:ss</prop>
			<prop key="date_format">yyyy-MM-dd</prop>
			<prop key="number_format">#.##</prop>
		</props>
	</property>
	<property name="freemarkerVariables">
		<props>
			<prop key="${pk}">${pv}</prop>
		</props>
	</property>
</bean>
<!-- Freemarker 解析器 -->
<bean id="viewResolver"
	  class="org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver">
	<property name="viewClass" value="org.springframework.web.servlet.view.freemarker.FreeMarkerView" />
	<property name="suffix" value=".ftl" />
	<property name="contentType" value="text/html;charset=utf-8" />
	<property name="exposeRequestAttributes" value="true" />
	<property name="exposeSessionAttributes" value="true" />
	<property name="exposeSpringMacroHelpers" value="true" />
	<property name="attributesMap">
		<map>
			<entry key="${ftl_model_name}">
				<bean class="${ftl_model_reference}" />
			</entry>
		</map>
	</property>
</bean>
<bean id="jspViewResolver"
	  class="org.springframework.web.servlet.view.InternalResourceViewResolver">
	<property name="viewClass">
		<value>org.springframework.web.servlet.view.InternalResourceView</value>
	</property>
	<property name="prefix" value="/WEB-INF/jsp/" />
	<property name="suffix" value=".jsp" />
</bean>
<bean id="${some_interceptor}" class="${some_interceptor_path}"></bean>
<aop:config>
	<aop:pointcut id="${some_pointname}" expression="${some_spel_expression}" />
	<aop:advisor advice-ref="${some_interceptor}" pointcut-ref="${some_pointname}" />
</aop:config>
```
