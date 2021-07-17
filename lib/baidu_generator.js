const {sortDownDate} = require('./sort')

module.exports = function (locals) {
    const config = this.config.hexo_seo_autopush.baidu
    if(!config.enable) return
    const count = config.count // 最新文章数
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

    return {
        path: 'baidu.txt',
        data: urls
    };
};