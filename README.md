## 说明
每天中午12点推送一次网站信息到Baidu和Bing，提高爬虫抓取几率


可手动点击`star`触发Actions

## 使用
1. 安装
``` bash 
npm install hexo-seo-autopush --save
``` 

2. 配置文件
在hexo _config.yml 配置文件中添加
``` yml
# enable: 开启/关闭 推送
# count: 每次提交最新的10篇文章
# https://github.com/lete114/hexo-seo-autopush.git
hexo_seo_autopush:
  baidu:
    enable: true
    count: 10
  bing:
    enable: true
    count: 10
  google:
    enable: true
    count: 10
    google_file: google_service_account.json # 谷歌服务账户
```

3. 安全设置
打开你博客仓库地址如下图
![Secrets](https://cdn.jsdelivr.net/gh/lete114/CDN2@latest/img/Hexo-SEO-AutoPush/Secrets.png)

Name | Value | 说明
--- | ------ | ------
baidu_token | UlxxxxxxxxxxB9 | 【必填】Value输入百度的token
bing_apikey  | 47xxxxxxxxxxxxx91 | 【必填】Value输入必应的apikey

## 详细
关于谷歌(Google Indexing API)请访前往 --->
https://blog.lete114.top/article/hexo-seo-autopush.html
