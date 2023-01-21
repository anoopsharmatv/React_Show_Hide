import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isSecondNameVisible: false}

  showHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  showHideSecondName = () => {
    this.setState(prevState => ({
      isSecondNameVisible: !prevState.isSecondNameVisible,
    }))
  }

  showHideName = () => {
    const {isFirstNameVisible, isSecondNameVisible} = this.state
    const firstName = isFirstNameVisible ? '' : 'hide'
    const secondName = isSecondNameVisible ? '' : 'hide'
    console.log(isFirstNameVisible)
    console.log(isSecondNameVisible)
    return {fName: firstName, sName: secondName}
  }

  render() {
    const result = this.showHideName()
    const {fName, sName} = result
    const {isFirstNameVisible, isSecondNameVisible} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            <p className={`name-heading ${fName}`}>
              {isFirstNameVisible ? 'Joe' : ''}
            </p>
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideSecondName}
            >
              Show/Hide Lastname
            </button>
            <p className={`name-heading ${sName}`}>
              {isSecondNameVisible ? 'Jonas' : ''}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
