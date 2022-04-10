const urlsFn = require('../utils/urls')

module.exports = function (locals) {
  const config = this.config.hexo_seo_autopush.google

  if (!config.enable) return

  return { path: 'google.txt', data: urlsFn(locals, config.count, config.date) }
}
