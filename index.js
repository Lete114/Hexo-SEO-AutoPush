const defaultConfig = {
  baidu: { enable: true },
  bing: { enable: true },
  google: { enable: true }
}

hexo.config.hexo_seo_autopush = Object.assign(defaultConfig, hexo.config.hexo_seo_autopush)

hexo.extend.generator.register('BaiduGenerator', require('./lib/baidu_generator'))
hexo.extend.generator.register('BingGenerator', require('./lib/bing_generator'))
hexo.extend.generator.register('GoogleGenerator', require('./lib/google_generator'))
hexo.extend.generator.register('actions', require('./lib/actions'))
