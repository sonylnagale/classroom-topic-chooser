import React from 'react'
import firebase from '../../firebase'
import { Button } from 'reactstrap'

class Chooser extends React.Component {
  constructor() {
    super()
    this.state = {
      topics: [],
      topic: null
    }

    this.choose = this.choose.bind(this)
  }

  componentDidMount() {
    const { topics } = this.state
    const { user } = this.props

    firebase.database().ref('topics').on('value', (snapshot) => {
      const list = snapshot.val()

      Object.keys(list).forEach(topic => {
        if (list[topic].student === user.profileObj.email) {
          this.setState({
            topic: list[topic].topic,
          })
        }
        if (list[topic].student === "unassigned") {
          topics.push({ id: topic, topic: list[topic].topic })
        }
      })

      if (topics.length === 0) {
        this.setState({
          error: true
        })
      }
    })
  }

  choose = () => {
    const { topics } = this.state
    const { user } = this.props

    const myTopic = topics[Math.floor(Math.random() * topics.length)]

    this.setState({
      topic: myTopic.topic
    })

    firebase.database().ref('topics').child(myTopic.id).update({
      student: user.profileObj.email,
      date: new Date()
    })
  }

  render() {
    const { topic, error } = this.state

    return (
      <>
        {(topic) ? <h2>You have chosen {topic}.</h2> : 
          (error) ? <h3 className="warning">No Topics Left. Contact your instructor</h3>
            : (!topic) ?  <Button onClick={this.choose}>Choose your topic</Button>
              : <><h2>{topic}</h2></>
        }
      </>
    )
  }

}

export default Chooser