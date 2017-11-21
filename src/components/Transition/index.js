/**
 * Created by xiangguo .
 * time:2017/11/21 0021.
 * email:413401168@qq.com.
 * use:auto...
 */
import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './index.less'
class Index extends React.Component{
    constructor(porps){
        super(porps)
        this.state={
            pathnamePath:'',
            actionType:'',
            transitionGroup:''
        }
    }
    componentWillReceiveProps(nextProps){
        const rootUrl=['/product', '/find', '/mine', '/home'];
        const{
            location:{
                action,
                pathname,
            }
        }=nextProps

        console.log(pathname+","+action)
        if(action=='POP'){
            this.setState({
                transitionGroup: 'swap-right',
                pathnamePath:pathname
            })
        }else{
            if(rootUrl.indexOf(pathname)!=-1){
                this.setState({
                    transitionGroup: '',
                    pathnamePath:pathname
                })
            }else{
                this.setState({
                    transitionGroup: 'swap-left',
                    pathnamePath:pathname
                })
            }

        }

    }
    render(){
        const{
         children,
         location:{
             pathname
        }
        }=this.props
        return(
            <CSSTransitionGroup
                transitionName={this.state.transitionGroup}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                style={{position:'absolute',left:'0px',top:'0px',height:'100%',width:'100%'}}
            >
                {React.cloneElement(children || <div />, { key: pathname })}
            </CSSTransitionGroup>
        )
    }
}
export default Index