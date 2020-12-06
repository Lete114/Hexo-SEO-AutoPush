module.exports = function () {
  var ymlPath = "/.github/workflows/AutoPush.yml";
  var config = this.config;
  if (config.hexo_seo_autopush.baidu.enable) var baidu_curl = "curl -H 'Content-Type:text/plain' --data-binary @baidu.txt 'http://data.zz.baidu.com/urls?site=" + config.url + "&token=\${{secrets.baidu_token}}'"; else baidu_curl = "";
  if (config.hexo_seo_autopush.bing.enable) var bing_curl = "curl -X POST 'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=\${{secrets.bing_apikey}}' -H 'Content-Type: application/json' -H 'charset: utf-8' -d @bing.json"; else bing_curl = "";
  return {
    path: ymlPath,
    data: `
name: Auto Push
on:
  schedule:
    - cron: "0 12 * * *"
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