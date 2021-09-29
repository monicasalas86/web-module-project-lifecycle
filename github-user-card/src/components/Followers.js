import React from 'react';

class Followers extends React.Component {
    render (){
        return(
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img src={this.props.follower.avatar_url} alt={this.props.follower.login}/>
                </div>
                <div className='bioContainer'>
                    {this.props.follower.name && <p>Name: {this.props.follower.name}</p>}
                    {this.props.follower.location && <p>Name: {this.props.follower.location}</p>}
                    {this.props.follower.html_url && <p>Name: {this.props.follower.html_url}</p>}
                </div>
            </div>
        )
    }
}

export default Followers;