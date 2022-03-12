import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    activateAutoFocus = () => {
        this.setState({editMode : true})
    }
    deactivateAutoFocus = (e) => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <textarea onBlur={this.deactivateAutoFocus}
                              onChange={this.onStatusChange}
                              autoFocus={true} value={this.state.status}/>
                    : <span onDoubleClick={this.activateAutoFocus}>{this.props.status || "There is no status yet"}
                </span>
                }
            </div>
        )
    }
}

export default ProfileStatus;