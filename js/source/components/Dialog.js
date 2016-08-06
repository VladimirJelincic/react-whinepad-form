/**
 * Created by Vladimir on 06/08/16.
 */
import Button from './Button';
import React,{Component,PropTypes} from 'react';

class Dialog extends Component {


    componentWillUnmount() {
        document.body.classList.remove('DialogModalOpen');
    }
    componentDidMount(){
        if(this.props.modal){
            document.body.classList.add('DialogModalOpen');
        }
    }

}

Dialog.propTypes={
    header: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    modal: PropTypes.bool,
    onAction: PropTypes.func,
    hasCancel: PropTypes.bool,
};

Dialog.defaultProps={
    confirmLabel: 'ok',
    modal: false,
    onAction: ()=>{},
    hasCancel: true,
}

export default Dialog