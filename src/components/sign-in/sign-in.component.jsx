import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.components';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } =this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error){
            console.log(error);
        }

    }

    changeHandle = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }


    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' type='email' value={this.state.email} label='email' required handleChange={this.changeHandle}/>


                    <FormInput name='password' type='password' value={this.state.password} label='password' required handleChange={this.changeHandle}/>

                    <div className='buttons'>
                    <CustomButton type='submit' value='Submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > {' '}Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn
