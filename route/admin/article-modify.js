const { Article } = require('../../model/article');

module.exports = async(req, res, next) => {
    // 接收客户端传递过来的请求参数
    const { title, cover, content } = req.body;
    // 即将要修改的用户id
    const id = req.query.id;


    // res.send('密码比对成功');
    // 将用户信息更新到数据库中
    await Article.updateOne({ _id: id }, {
        title: title,
        cover: cover,
        content: content
    });

    // 将页面重定向到用户列表页面 
    res.redirect('/admin/article');


    // 密码比对
    // res.send(user);
}