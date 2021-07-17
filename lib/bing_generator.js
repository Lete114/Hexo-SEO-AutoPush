const {sortDownDate} = require('./sort')

module.exports = function (locals) {
    const config = this.config.hexo_seo_autopush.bing
    if(!config.enable) return
    const count = config.count
    const date = config.date=='created'?'date':'updated' // 日期
    let posts = [].concat(locals.posts.toArray())
    let urls = posts.map((post) => {
        return {
            "date": post[date].format('yyyy-MM-DD HH:mm:ss'),// 格式化日期
            "permalink": post.permalink
        }
    })
    let sort_urls = sortDownDate(urls,'date') // 降序排列如期
    urls = sort_urls.slice(0, count).map((post) => post.permalink).join('\n');

    let arr = []
    urls.split('\n').forEach(item => {
        arr.push(item)
    });
    const bing = {
        "siteUrl": this.config.url,
        "urlList": arr
    };
    return {
        path: 'bing.json',
        data: JSON.stringify(bing)
    };
};