/**
 * Created by xiangguo .
 * time:2017/11/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import {observer } from 'mobx-react'
@observer
class Index extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div  style={{backgroundColor:'blue',height:'300px'}}>发现 </div>

        )
    }
}
export default Index