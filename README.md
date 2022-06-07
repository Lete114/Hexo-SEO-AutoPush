## 说明

每天中午 12 点推送一次网站信息到 Baidu 和 Bing，提高爬虫抓取几率

可手动点击`star`触发 Actions

## 使用

1. 安装

```bash
npm install hexo-seo-autopush --save
```

2. 配置文件
   在 hexo 的 \_config.yml 配置文件中添加以下内容

```yml
# enable: 开启/关闭 推送
# cron: 执行时间周期
# count: 每次提交最新的10篇文章，输入0或者不填写则默认为所有文章(建议是最新的10篇文章)
# date: 更新时间(updated)|创建日期(created)
# https://github.com/Lete114/hexo-seo-autopush.git
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
```

由于生成的 actions 是在`.github/workflows/HexoSeoAutoPush.yml`，点开头的文件或文件夹都会被视为隐藏文件，所以 hexo 不会将隐藏文件部署到 pages，需要新增配置`ignore_hidden`

```yml
deploy:
  type: git
  repo: https://github.com/<username>/<project>
  # example, https://github.com/hexojs/hexojs.github.io
  branch: gh-pages
  ignore_hidden: false # 忽略隐藏文件及文件夹(目录)
```

3. 安全设置
   打开你博客仓库地址如下图
   ![Secrets](https://user-images.githubusercontent.com/48512251/137736248-80c8ae8d-7f5e-40b1-81f9-4a1bb78fcd8f.png)

| Name                | Value             | 说明                                                                                                   |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ |
| baidu_token         | UlxxxxxxxxxxxxxB9 | 【必填】Value 输入百度的 token                                                                         |
| bing_apikey         | 47xxxxxxxxxxxxx91 | 【必填】Value 输入必应的 apikey                                                                        |
| google_private_key  | xxxxxxxxxxxxxxxxx | 【必填】Value 输入谷歌的 private_key （注意：填写的时候需要使用**双引号**包起来，如: `"private_key"`） |
| google_client_email | xxxxxxxxxxxxxxxxx | 【必填】Value 输入谷歌的 client_email                                                                  |

## Baidu key

打开百度站长平台，点击左侧的普通收录[https://ziyuan.baidu.com](https://ziyuan.baidu.com)
![baidu](https://user-images.githubusercontent.com/48512251/162598076-98018258-293a-49b8-8b3c-6f985c1df7e5.png)

## Bing key

1. 打开 Bing 站长平台 [https://www.bing.com/webmasters/home](https://www.bing.com/webmasters/home)
2. 点击右上角头像 旁边的齿轮，跟着下图操作
   ![bing](https://user-images.githubusercontent.com/48512251/162598122-120851b9-65c3-42ee-b847-dbc5bc06abcd.png)

## Google key

### (1) 开启Indexing API

打开[Google indexing API](https://console.developers.google.com/flows/enableapi?apiid=indexing.googleapis.com&credential=client_key)

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-开启-创建项目.jpg)

如果账号中没有项目, 点击`创建项目`, 创建完项目后继续下面的操作.

点击`下一步`, `开启`即可.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-开启-开启API.jpg)

开启完成就是这样, 感觉像是卡住了.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-开启-开启完成.jpg)
### (2) 打开凭证页面

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-进入创建页面.jpg)

### (3) 创建服务账号

点击`创建凭证`, 点击`服务账号`.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-创建服务账号.jpg)

`输入`服务账号名称, 然后直接点击`完成`, 

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-服务账号名称.jpg)

### (4) 创建凭证

点击刚刚创建的服务账号

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-服务账号详情.jpg)

点击`密钥`标签, 点击`添加密钥`, 点击`创建新密钥`.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-创建密钥2.jpg)

选择JSON格式, 点击`创建`, 然后JSON格式的密钥就会自动下载到电脑中.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-创建凭证-json密钥.jpg)

json文件内的内容, 

   > 以下信息已经过修改，并且已删除相关的申请，仅用于参考
   >
   > 其中`private_key`和`client_email`是该项目需要的, 
   > 
   > 注意在GitHub中的Secrets名为, `google_private_key`和`google_client_email`

```json
{
  "type": "service_account",
  "project_id": "elated-guild-298003",
  "private_key_id": "cf58d669c0e8c8e082b2c403ade5e2548078e384",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEAJw89yeylRrA\nB+bzOAfQQNgOCABIwEKCy5mMxWSaiXy2RktyCJWjMR2Pgz770NJgClQHPJjsFn0c\nukHufpnuiX3VPlimLANPCRFdU/qp+yiaw4quIhYF1UZJkhmhL30anghUcvi+r9hQ\nw+RwcKrgA4EUzqUJaPdvjtzSoo315PPGfR91ASD5S8gE02yVI8igtYMX7v2x1JYR\n7PwHJwOVemiM9lot8ilvoUbV4BU0vSlwFoxKMJAbEXTmJjEKQi9992rcMW0GzXO8\ncHldUUtURXkt3VFjYTH27KhHiTkTXw+uZRBu1rkubDJkS8lGIWN7Fc/r4HMMCVTu\nXPS6HbJ/AgMBAAECggEANSS7OBaFd3jRL3cVCiZLjA5A5pEJzq/+eKtOn2oYDISx\nwVRO+YTVWdGj47kg1zM4D11NikbGaeDxHFxuKwW9o/04lpyYebneTcw2Hpl6EiOs\nz0WssOlCEmPQ8nrAI0GWiKSHuqoPwtg37TIoGsqZsjKRCby759DDokZYnm3/0sc+\niEllT0ZyBZhGDzyguVLEdCIR2P02q/hQzLyd6ejWGGwZebImbGoILhmuOjVrco0p\nV0JbrrNskjM5Epe7w+CpGftEASJ7Dxa8oj0qIT6cyAipra2AZAGnG9jrLcWpJuhu\nvNeDIFnTfpNEac+khXZZE2++MIQfTX9wGJc8tox2vQKBgQD6yiNvAL7sxExiy6ER\ntLtFQ3bvmMpKRFGvFOyPOtMbmjZ3D1GEtNNKGH4v1TI+tncEy7Q5Dm7nWwpi8yvL\nbh8xKghelAc/CU1nw0xDEDCkMbAwpFg5A5ZDImy3LZsQh0kNXniIMy1vMSt5yLKS\n80gXQKGCxG8t3rP8Qd/2a55g1QKBgQDIExP1nG9sHJaigmitEUwr0Ow6Shqr56Me\nd7995gaV1oLWWCQzrXt/viWkb1W5ZGIxzcWNWz99m4CbvqfewRr598Eenald0csN\nVcIEk+0C+6KqA+jU9Tfs2zow/C7JuKULP2N++o0EoSz/ngokP7f1yLOYbr507v/R\n0cLElQBQAwKBgAbxDWYHKUG4dTzO0hiBXiWepm4fVooTtgcYlyunvywmapeFDwaT\nUr3cS7HbPtbJiiXR1Z02rw8sT+9JN88brzVXKoAjrMer5D6ZA0Vf71i8H1pZUi/R\nz5jwHP48/uvIMtdx4/gxInLPc5qdWYQDw90Q5ueNtF4aqfSzhhV2CR45AoGBAJN9\nPOF6iMjx6jmyWOf8MGK8iOgPaMoA4Ea9j/SHdaNPlvPb1hQid0AcNDObv14Dmj+M\nqW0jLxKxZ4VobufPAsvyz/J51zjKRx11cqldQwNH7QnYB/O1MZzxn1wtC3C5JTG9\ncONSYFJhXoKxRliigEI3ye089jnNVdifAS1ZiflxAoGBANTX1fEMEeNuYU0v3rtd\n5CkPZg4TNZ+y2MGl5xR1LdIgrJ8c9xKoW4rpp7SsOIvHpWX494f90D7o9uFEGSQ4\nyQK53jVzJ0ekGV5BdPF3n3/2j2VEqFLHi7LL4CJSxr6ci7OfBoHOGE8odhevQCCK\njnFzEin0QsBEgIC73fBh6XcH\n-----END PRIVATE KEY-----\n",
  "client_email": "googleindexing@elated-guild-298003.iam.gserviceaccount.com",
  "client_id": "103034240916368863393",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/googleindexing%40elated-guild-298003.iam.gserviceaccount.com"
}
```

### (5) 为服务账号授权

打开[谷歌站长](https://search.google.com/search-console), `选择`需要设置的网站, 点击`设置`, 点击`用户和权限`, 点击`添加用户`.

电子邮箱地址: json文件中的client_email字段

权限: 选择`拥有者`, 选择`完整`GitHub执行时会报权限错误.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-开启-站长授权.jpg)

### (6) GitHub填入secrets

google_private_key: json文件中的private_key字段, 填入时要带双引号
google_client_email: json文件中的client_email字段, 填入时不带双引号

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-GitHub-secrets.jpg)

### (7) 官网说明

由于谷歌常更新页面, 所以如果以上操作出现问题, 可参考官方教程, 不过官方教程也不是完成100%跟页面同步的.

[使用 Indexing API 的前提条件  |  Google Developers](https://developers.google.com/search/apis/indexing-api/v3/prereqs?hl=zh_CN)

## 验证

取消Star, 再点击Star, 触发自动提交.

### GitHub Action结果

点击Actions, 查看执行情况.

如果返回更新内容, 就说明成功了.

```text
# 百度的
{"remain":2990,"success":10}
# 必应的
{"d":null}
# 谷歌的
Google response: {...}
```

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-测试.jpg)

### 百度页面结果

打开[百度站长](https://ziyuan.baidu.com/linksubmit/), 选择对应站点, 选择普通收录中的数据反馈.

看到当日API提交有值, 说明成功了. 但是这个页面好像有延迟, 不是GitHub Action那么指定完这个页面就能刷出来结果.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/百度站点提交结果.jpg)

### 必应页面结果

打开[Home - Bing Webmaster Tools](https://www.bing.com/webmasters/), `URL提交`标签

有提交信息说明成功了.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/必应站点提交结果.jpg)

### 谷歌页面结果

在[Google Cloud Platform](https://console.cloud.google.com/apis/dashboard) 中查看. 

错误率只要不是100%, 就说明成功了.

![](https://img-res.oss-cn-beijing.aliyuncs.com/img/谷歌IndexingAPI-测试2.jpg)


