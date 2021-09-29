import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Followers from './components/Followers';
import './components/Styling.css';

class App extends React.Component {
  state = {
    myCard: '',
    followersCards: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/monicasalas86')
      .then(res => {
        // console.log(res.data);
        this.setState({
          ...this.state,
          myCard: res.data
        })
        axios.get(res.data['followers_url'])
          .then(res => {
            res.data.forEach(user => {
              axios.get(user.url)
                .then(res => {
                  this.setState({
                    ...this.state,
                    followersCards: [...this.state.followersCards, res.data]
                  })
                })
            })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div className='pageContainer'>
        <header>
          <h1>Monica's Github</h1>
        </header>
        <div>
          <Card myCard={this.state.myCard}/>
        </div>
        <div className='followersCard'>
          {
            this.state.followersCards.map(item => {
              return <Followers key={item.id} followers={item}/>
            })
          }
        </div>

      </div>
    )
  }
}

export default App;
