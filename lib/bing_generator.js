const urlsFn = require('../utils/urls')

module.exports = function (locals) {
  const config = this.config.hexo_seo_autopush.bing

  if (!config.enable) return

  const urls = urlsFn(locals, config.count, config.date)

  const bing = { siteUrl: this.config.url, urlList: urls.split('\n') }

  return { path: 'bing.json', data: JSON.stringify(bing) }
}
