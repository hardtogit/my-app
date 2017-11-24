/**
 * Created by xiangguo .
 * time:2017/11/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import { browserHistory } from 'react-router'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <button onClick={()=>{browserHistory.goBack()}}>返回</button>
            </div>
        );
    }
}
export default TodoList