/**定义全局基础url*/
const global_base_url = 'http://203.195.245.219/';
/**定义全局登录url*/
const redirect_login_url = global_base_url + '/manager/view/base/login/login.html';
/**定义全局首页url*/
const redirect_index_url = global_base_url + '/manager/view/base/index/index.html';
/**定义全局跳转-redirect*/
let redirect = {
    baseURL: global_base_url,
    loginUrl: redirect_login_url,
    indexUrl: redirect_index_url
};