import React from 'react';
import axios from 'axios';

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
      <div>
        <header>
          <h1>Monica's Github</h1>
        </header>
        <div>
          <p>card info</p>
          <p>followers info</p>
        </div>

      </div>
    )
  }
}

export default App;
