import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ComponseComponent) =>{
    class Signin_Auth extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount(){
            console.log(this.props.authenticated);
            if(this.props.authenticated){
                this.context.router.push('/feature');
            }
        }

        componentWillUpdate(nextProps){
            if(nextProps.authenticated){
                this.context.router.push('/feature');
            }
        }

        render(){
            return <ComponseComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated};
    }

    return connect(mapStateToProps)(Signin_Auth);
}