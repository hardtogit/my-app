/**
 * Created by xiangguo .
 * time:2017/11/29 0029.
 * email:413401168@qq.com.
 * use:auto...
 */
const defaultState = {
    num:24
};
const reducer = (state = defaultState, action) => {
    alert('ss')
    switch (action.type) {
        case 'ADD':
            return state.num + 1;
        default:
            return state;
    }
};

export default reducer