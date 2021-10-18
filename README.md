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
# cron: 执行时间周期
# count: 每次提交最新的10篇文章
# date: 更新时间(updated)|创建日期(created)
# https://github.com/lete114/hexo-seo-autopush.git
hexo_seo_autopush:
  cron: 0 4 * * *
  baidu:
    enable: true
    date: created 
    count: 10
  bing:
    enable: true
    date: created 
    count: 10
  google:
    enable: true
    date: created 
    count: 10
    google_file: google_service_account.json # 谷歌服务账户
```

3. 安全设置
打开你博客仓库地址如下图
![Secrets](https://user-images.githubusercontent.com/48512251/137736248-80c8ae8d-7f5e-40b1-81f9-4a1bb78fcd8f.png)

Name | Value | 说明
--- | ------ | ------
baidu_token | UlxxxxxxxxxxB9 | 【必填】Value输入百度的token
bing_apikey  | 47xxxxxxxxxxxxx91 | 【必填】Value输入必应的apikey

## 详细
关于谷歌(Google Indexing API)请访前往 --->
https://blog.lete114.top/article/hexo-seo-autopush.html
