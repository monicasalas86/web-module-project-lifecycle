import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <div className='cardContainer'>
                <div className='imgContainer'>
                    <img src={this.props.myCard.avatar_url} alt={this.props.myCard.login}/>
                </div>
                <div className='bioContainer'>
                    <p>Name: {this.props.myCard.name}</p>
                    <p>Location: {this.props.myCard.location}</p>
                    <p>Profile: {this.props.myCard.html_url}</p>
                </div>
            </div>
        )
    }
}

export default Card;