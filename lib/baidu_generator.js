module.exports = function (locals) {
    var urls = [].concat(locals.posts.toArray()).map(function (post) {
        return {
            "date": post.updated || post.date,
            "permalink": post.permalink
        }
    })
        .slice(0, this.config.hexo_seo_autopush.baidu.count)
        .map(function (post) {
            return post.permalink;
        })
        .join('\n');
    return {
        path: 'baidu.txt',
        data: urls
    };
};