## 嘀嗒拼车基于rocketmq-tools 4.0.0版本开发的一个RocketMQ console

#### 为了方便阅读，增加一些说明
* 0.采用的是spring + bootstrap + angularjs
* 1.MQAdminExtImpl是我们的实现类，里面使用threadLocal保存了一个DefaultMQAdminExt的实例，通过切面MQAdminAspect来进行的实例化和start、shutdown.
* 2.自定义了注解@JsonBody，实现了个JsonBodyExceptionResolver和JsonBodyReturnValueProcessor。分别处理了controller里的异常，以及对正常结果进行封装
* 3.Controller和Service一一对应，和基本实现了文章里说的东西（没有实现ConfigController）

#### 这个console目前存在的几个问题点
* 中英文混搭，没有国际化
* 没有使用springboot 使用的话会更精简些
* UI不够易用美观，前端功能完成度不高 
* 模块和代码需要进一步优化，功能需要完善

##### 例如
* 按时间消息主题查消息不准确漏查问题
* 删除主题后仍然能继续消费
* 生产者列表无法查询，只能topic和groupName进行查询，不够易用
* 重置消息offset 在线可以知道操作结果 离线的不能
* 新建topic和consumer时候把cluster的概念屏蔽了
* 新建了consumer的时候 没有消费过在消费者列表查不到
* Config相关的功能没有（namesvr/broker）

##### Q&A
* 缺少rocketmq-tools包如何解决？  
下载rocketmq源代码打包安装，源码下载地址：  
[https://github.com/apache/incubator-rocketmq](https://github.com/apache/incubator-rocketmq)  
下载后执行命令 `mvn install`  

* 国际化如何处理？  
国际化首先需要增加导入一个js文件然后定义国际化的相应变量，本项目文件在/src/i18n/文件夹下，然后页面上使用angular-translate的过滤器处理需要国际化的文本，使用方法非常简单直接{{ TRANSLATION_ID | translate }}即可，更详细的说明可以参考如下链接：  
[https://angular-translate.github.io/docs/zh-cn/#/guide/](https://angular-translate.github.io/docs/zh-cn/#/guide/)  
