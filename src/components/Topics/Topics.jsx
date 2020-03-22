import React from 'react'
import firebase from '../../firebase'
import { Table, Input, Button } from 'reactstrap'
import { CSVDownload } from "react-csv";

import './Topics.css'

class Topics extends React.Component {
  constructor() {
    super()

    this.state = {
      topics: null,
      data: []
    }

    this.saveTopic = this.saveTopic.bind(this)
  }

  componentDidMount() {
    firebase.database().ref('topics').on('value', (snapshot) => {
      const data = []

      const values = snapshot.val()

      Object.keys(values).forEach((topic) => {
        data.push({ topic:  values[topic].topic, student: values[topic].student, date: values[topic].date})
      })

      this.setState({
        topics: values,
        data: data
      })
    })
  }

  saveTopic = () => {
    firebase.database().ref('topics').push({
      topic: document.querySelector('#topicEntry').value,
      student: 'unassigned',
      date: 'unclaimed',
    })
  }

  deleteTopic = (event) => {
    firebase.database().ref('topics/' + event.target.dataset.id).remove()
  }

  download = () => {
    this.setState({ download: true })
  }

  render() {
    const { topics, download, data } = this.state

    const items = []

    if (topics !== null) {
      Object.keys(topics).forEach((topic) => {
        items.push(<tr key={topic}><td>{topics[topic].topic}</td><td>{topics[topic].student}</td><td>{topics[topic].date}</td><td><Button data-id={topic} onClick={this.deleteTopic}>Delete</Button></td></tr>)
      })
    }

    items.push(<tr key="last"><td colSpan="4"><Input name="topic" id="topicEntry" /> <Button onClick={this.saveTopic}>Save New Topic</Button></td></tr>)

    return (
      <>
        <h2>Topics</h2>

        <Table hover>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Student</th>
              <th>Date</th>
              <th></th>
            </tr>
            {items}
          </thead>
          <tbody>


          </tbody>
        </Table>
        <Button onClick={this.download}>Download Data</Button>
        {download && <CSVDownload data={data} />}
      </>
    )
  }
}

export default Topics