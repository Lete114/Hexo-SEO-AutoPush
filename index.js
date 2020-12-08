hexo.extend.generator.register("BaiduAutoPush", require("./lib/baidu_generator"));
hexo.extend.generator.register("BingAutoPush", require("./lib/bing_generator"));
hexo.extend.generator.register("GoogleAutoPush", require("./lib/google_generator"));
hexo.extend.deployer.register("GooglePush", require("./lib/google_push"));
hexo.extend.generator.register("actions", require("./lib/actions"));
