# 余争的博客

## 路程
* 俺初中到高中狂爱篮球，大学跳 Breaking 拿过一等奖，现在偶尔打个桌球爬个南山。
* 大学痴迷 C#/MFC/Asp.net 浪费太多时间，毕业爱上内核代码，痴迷了三年之后转玩数据分析，接着兴趣跑到路由器开源固件。

## 一些项目
* golang

  * [P2p穿透工具](https://github.com/jannson/koolnet)
  一个能不依赖服务器转发的远程工具。
  * [游戏加速软件](https://github.com/jannson/game-server/)
  一个能让 Xbox/PS4 网络能完美 nat2 的服务器端以及路由器端软件。此项目仅仅为配置脚本。
  * TODO 10w级别的图片相似性搜索软件
  还没有空发布，并且 Demo 也因服务器过期而木有了。 未来有空定会让这个项目重新发扬光大。

* c/c++

  * [路由器软件中心插件](https://github.com/koolshare/koolshare.github.io)
  * [路由器轻量级k/v数据库](https://github.com/koolshare/skipdbv2)
  * 用于在路由器里实现 k/v 数据库，方便写 httpd 端软件
  * [穿透DDNS]
  内网版本穿透软件，木有代码，仅在路由器端实现客户端。服务器端使用 [Ngrokd](https://github.com/koolshare/ngrok-1.7)
  * vxworks-like-kernel
  一个从0开始实现的大约6000行代码的实时内核，可在 gxemul/jsmips 虚似机上运行，有vxworks5.5系统的90%内核特性。代码量少，留下来的都是精华啊～[在线测试](http://jannson.github.io/vxworks)

  https://github.com/wenruimeng/vxworks-like-kernel 这个人发布的代码实际上是我写的。

  * [wordmaker 词语生成工具](https://github.com/jannson/wordmaker)
  能够从大文本当中训练得到当中的词语，而不需要其它任何的人工标注。基于c++，使用类似Map/Reduce的思想来处理大文本。
  * [simhash-cpp](https://github.com/jannson/simhash-cpp)
  海量数据排重与相似计算（基于别人的项目进行的二次开发）

* python
  
  * [yaha分词库](https://github.com/jannson/yaha)
  一个简单的分词库，方便用户理解代码，并对各功能进行定制。[测试地址](http://yaha.sinaapp.com/)
  * [crfseg](https://github.com/jannson/crfseg)
  一个基于crf++，条件随机场的分词工具。分词准确，并且可以得到词性信息。但也更慢些。
  * [omind](https://github.com/jannson/omind)
  很久前痴迷于思维导图的时候，实现的一个在线思维版本。[测试地址](http://omind.sinaapp.com)
  * [haysearch](https://github.com/jannson/haysearch)
  一个基于whoosh实现的电影搜索站，通过它可以了解与测试一些索引工具的原理
  * [towi CMS站](https://github.com/jannson/towi)
  基于mezzanine并可以在sinaapp云上运行的一个CMS站。[测试地址](http://towi.sinaapp.com)
  * [simhash-py](https://github.com/jannson/simhash-py)
  海量数据排重，在大量网页抓取中用处会很大。
  * [scrapy-board](https://github.com/jannson/scrapy-board)
  基于scrapy的网页爬虫，通过redis来完成分布式的列队。
  * 还有，略过...

* javascript

  * jsmips
  一个可以在浏览器中运行的mips虚拟机。为了能让vxworks-like-kernel在它上面运行，修改了UART_16550以及一点指令与中断相关的代码。[Fork别人的项目](https://github.com/isuru-c-p/jsmips)

## 期望
* 期望能有好的产品
* 认识一批有激情的朋友

## 欢迎交流
* 目前活跃于论坛 [Koolshare](http://koolshare.cn/forum.php)

