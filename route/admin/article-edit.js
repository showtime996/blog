const { Article } = require('../../model/article');
require('./article');
module.exports = async(req, res) => {
    const page = req.query.page;
    // 标识 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    // 获取到地址栏中的id参数
    const { message, id } = req.query;

    let article = await Article.findOne({ _id: id });

    // 渲染用户编辑页面(修改)
    res.render('admin/article-edit', {
        message: message,
        article: article,
        link: '/admin/article-modify',
        button: '修改'
    });
}