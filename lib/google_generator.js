module.exports = function (locals) {
    var urls = [].concat(locals.posts.toArray()).map(function (post) {
        return {
            "date": post.updated || post.date,
            "permalink": post.permalink
        }
    })
        .slice(0, this.config.hexo_seo_autopush.google.count)
        .map(function (post) {
            return post.permalink;
        })
        .join('\n');
    return {
        path: 'google.txt',
        data: urls
    };
};