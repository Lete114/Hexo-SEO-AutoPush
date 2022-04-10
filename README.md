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
```

3. 安全设置
   打开你博客仓库地址如下图
   ![Secrets](https://user-images.githubusercontent.com/48512251/137736248-80c8ae8d-7f5e-40b1-81f9-4a1bb78fcd8f.png)

| Name         | Value             | 说明                                                                                                   |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------ |
| baidu_token  | UlxxxxxxxxxxxxxB9 | 【必填】Value 输入百度的 token                                                                         |
| bing_apikey  | 47xxxxxxxxxxxxx91 | 【必填】Value 输入必应的 apikey                                                                        |
| private_key  | xxxxxxxxxxxxxxxxx | 【必填】Value 输入谷歌的 private_key （注意：填写的时候需要使用**双引号**包起来，如: `"private_key"`） |
| client_email | xxxxxxxxxxxxxxxxx | 【必填】Value 输入谷歌的 client_email                                                                  |

## Baidu key

打开百度站长平台，点击左侧的普通收录[https://ziyuan.baidu.com](https://ziyuan.baidu.com)
![baidu](https://user-images.githubusercontent.com/48512251/162598076-98018258-293a-49b8-8b3c-6f985c1df7e5.png)

## Bing key

1. 打开 Bing 站长平台 [https://www.bing.com/webmasters/home](https://www.bing.com/webmasters/home)
2. 点击右上角头像 旁边的齿轮，跟着下图操作
   ![bing](https://user-images.githubusercontent.com/48512251/162598122-120851b9-65c3-42ee-b847-dbc5bc06abcd.png)

## Google key

1. 打开 Google indexing API[官网](https://console.developers.google.com/flows/enableapi?apiid=indexing.googleapis.com&credential=client_key)
2. 选择创建项目，点击继续
3. 点击转到凭据页面
4. 跟着如下图片步骤
   ![GoogleProof](https://user-images.githubusercontent.com/48512251/162598190-f30eeaa2-aeeb-4a95-bea5-111b0114cb1f.png)
   ![GoogleAddProof](https://user-images.githubusercontent.com/48512251/162598203-3cc53fd6-a488-44b0-ae11-ed9fad3a5844.png)
   ![GoogleNone](https://user-images.githubusercontent.com/48512251/162598217-7fa7facb-8cce-4da3-8fec-01a4a07e204d.png)
   ![GoogleKey](https://user-images.githubusercontent.com/48512251/162598232-4f0cc998-98d4-4652-92cd-4575dd253642.png)
   json 文件内的内容
   > 以下信息已经过修改，并且已删除相关的申请，仅用于参考
   >
   > 其中`private_key`和`client_email`是该项目需要的

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

5. 打开[谷歌站长平台](https://search.google.com/search-console)
   ![GoogleAddUser](https://user-images.githubusercontent.com/48512251/162598242-b9ff8405-ecf5-403e-968b-c40b9ec129de.png)
   ![GoogleAddEmail](https://user-images.githubusercontent.com/48512251/162598241-671bbf31-de97-4a04-866b-9cdfeea2f4e5.png)
