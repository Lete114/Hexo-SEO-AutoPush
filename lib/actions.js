module.exports = function () {
  const config = this.config.hexo_seo_autopush // 获取配置信息
  // 判断是否启用
  if (!config.baidu.enable || !config.bing.enable) return

  const ymlPath = ".github/workflows/AutoPush.yml";
  const cron = config.cron || "0 4 * * *" // 执行周期
  const config_url = this.config.url;// 获取博客地址||注：我并没有使用for_url()方法(Hexo5.0后没有root了)

  let baidu_curl, bing_curl = "" // 初始化变量
  // baidu
  if (config.baidu.enable) baidu_curl = "curl -H 'Content-Type:text/plain' --data-binary @baidu.txt 'http://data.zz.baidu.com/urls?site=" + config_url + "&token=\${{secrets.baidu_token}}'";
  else baidu_curl = "";
  // bing
  if (config.bing.enable) bing_curl = "curl -X POST 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=\${{secrets.bing_apikey}}' -H 'Content-Type: application/json' -H 'charset: utf-8' -d @bing.json";
  else bing_curl = "";

  return {
    path: ymlPath,
    data: `
name: SEO Auto Push
on:
  schedule:
    - cron: ${cron}
  watch:
    types: [started]
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: 1. 检擦url文件
        uses: actions/checkout@master
      - name: 2. 自动提交
        run: |
          ${baidu_curl}
          ${bing_curl}
  `,
  };
};