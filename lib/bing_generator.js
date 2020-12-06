module.exports = function (locals) {
    var arr = [];
    var urls = [].concat(locals.posts.toArray()).map(function (post) {
        return {
            "date": post.updated || post.date,
            "permalink": post.permalink
        }
    })
        .slice(0, this.config.hexo_seo_autopush.bing.count)
        .map(function (post) {
            return post.permalink;
        })
        .join('\n');
    var str = urls.split('\n');
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    var json = {
        "siteUrl": this.config.url,
        "urlList": arr
    };
    return {
        path: 'bing.json',
        data: JSON.stringify(json)
    };
};