import { connect } from 'react-redux';
import{ authActions } from '../../../store/actions';
import AuthFormComponentForm from './auth-form.component';


const mapDispatchToProps = { setUser: authActions.setUser };

export default connect(null, mapDispatchToProps)(AuthFormComponentForm);