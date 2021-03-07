import React, { Component } from 'react'
import ServiceTitle from './ServiceTitle'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialYoutube} from 'react-icons/ti'


export default class Footer extends Component {
    state = {
        name:"",
        email:"",
        phone:"",
        message:""
    }
    render() {
        return (
            <section className='footer'>
                <ServiceTitle title='Contact Us'/>
                <div className='footer-content'>
                    <div className= 'rs-info'>
                        <div>
                            <span>Address:</span> Cua Dai Beach, Au Co Street, Hoi An City, Quang Nam, Viet Nam
                        </div>
                        <div>
                            <span>Email:</span> info@koiresortspa.com.vn
                        </div>
                        <div>
                            <span>Phone:</span> +84 235 3914777
                        </div>
                        <div>
                            <span>Fax:</span> +84 235 3914778
                        </div>
                        <hr/>
                        <div className='social'>
                            <h3>Follow Us</h3>
                            <span><TiSocialFacebook/></span>
                            <span><TiSocialInstagram/></span>
                            <span><TiSocialTwitter/></span>
                            <span><TiSocialYoutube/></span>
                        </div>
                    </div>
                    <div className='contact'>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <button type="submit" className="btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <hr/>
                <h6>Coppy Right 2021 - Koi Resort</h6>
            </section>
           
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
      }
}
