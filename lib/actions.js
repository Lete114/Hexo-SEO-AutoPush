module.exports = function () {
    var ymlPath = "/.github/workflows/AutoPush.yml";
    var config = this.config;
    var url = config.url;
    return {
      path: ymlPath,
      data: `
name: Auto Push
on:
  schedule:
    - cron: "0 0,10 * * *"
  watch:
    types: [started]
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: 1. 检查
        uses: actions/checkout@master
      - name: 2. 自动提交
        run: |
          ls
          curl -H 'Content-Type:text/plain' --data-binary @baidu.txt "http://data.zz.baidu.com/urls?site=${url}&token=\${{secrets.BAIDU_TOKEN}}"
          curl -X POST "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=\${{secrets.bing_apikey}}" -H "Content-Type: application/json" -H "charset: utf-8" -d @bing.json
      
  `,
    };
  };