const urlsFn = require('../utils/urls')

module.exports = function (locals) {
  const config = this.config.hexo_seo_autopush.baidu

  if (!config.enable) return

  const urls = urlsFn(locals, config.count, config.date)

  return { path: 'baidu.txt', data: urls }
}
