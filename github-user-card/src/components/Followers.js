import React from 'react';
import './Styling.css';

class Followers extends React.Component {
    render (){
        return(
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img src={this.props.follower.avatar_url} alt={this.props.follower.login}/>
                </div>
                <div className='bioContainer'>
                    <p>Name: {this.props.follower.name}</p>
                    <p>Name: {this.props.follower.location}</p>
                    <p>Name: {this.props.follower.html_url}</p>
                </div>
            </div>
        )
    }
}

export default Followers;