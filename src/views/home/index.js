/**
 * Created by xiangguo .
 * time:2017/11/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import {connect} from  'react-redux'
class Index extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
     return(
           <div  style={{backgroundColor:'red',height:'500px'}}>首页{this.props.num} <span onClick={()=>{this.props.add}}>+1</span> </div>

     )
    }
}
const mapStateToProps=(state,ownProps )=>{
   return{num:state.num}
}
const mapDispatchToProps=(dispatch)=>({
    add(){
        dispatch({
            type:'ADD'
        })
    },
})
export default connect (mapStateToProps,mapDispatchToProps)(Index)