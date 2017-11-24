/**
 * Created by xiangguo .
 * time:2017/11/24 0024.
 * email:413401168@qq.com.
 * use:auto...
 */
export const  Test  = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./views/mine/test').default);
    }, 'Test');
}