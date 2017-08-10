import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent)=> {
    class Authentication extends Component {
        static contextTypes ={
            router: React.PropTypes.object
        }

        componentWillMount(){
            console.log(this.props.authenticated);
            if(!this.props.authenticated){
                this.context.router.push('/');
            }

        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/')
            }
        }
        render() {
            console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}
