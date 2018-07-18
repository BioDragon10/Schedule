import React, { Component } from 'react';
import Icon from './schedule/icon';

class Action extends Component {
    render () {
        return (
            <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
                { Icon('fas fa-plus-circle')}
                {/* fas fa-times-circle */}
            </button>
        )
    }
}

export default Action;