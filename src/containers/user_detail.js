import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        const {myActiveUser} = this.props
        if(!myActiveUser){
            return (
                <div>Selectionner un utilisateur </div>
            )
        }
        return (
            <div>
               <h3>Détail de {myActiveUser.name}</h3> 
        <li>Id: {myActiveUser.id}</li>
        <li>Role: {myActiveUser.role}</li>
        <li>Statut: {myActiveUser.active}</li>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        myActiveUser : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)


