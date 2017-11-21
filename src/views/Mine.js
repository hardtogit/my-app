/**
 * Created by xiangguo .
 * time:2017/11/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import { browserHistory } from 'react-router'
class Index extends React.Component{
    render(){
        return(
            <div  style={{backgroundColor:'red',height:'300px'}} onClick={()=>{browserHistory.push('/test')}}>我的</div>

        )
    }
}
export default Index