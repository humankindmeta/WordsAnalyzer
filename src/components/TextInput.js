import React, { Component } from 'react';

import './TextInput.css';


class TextInput extends Component {
    constructor(props) {
        super(props)
        this.duplicatesArray = []
        this.duplicateValuesObj = {}

        this.state={
            title: ''
        }

    }

    countDuplicates(text) {
        if (text) {

            this.setState({
                title: 'Infographics'
            })

            this.duplicatesArray = []
            this.duplicateValuesObj = {}

            var data = this.duplicatesArray
            var outputObj = this.duplicateValuesObj
        
            data = text.target.value // get text from text form

            
            data
            .toLowerCase() // covert to lower case
            .split(/[, ]+/g) // split text into array. alternative: /\b\W+\b/g or /[,.!?;:]|\b\W+\b/g
            .forEach(x => outputObj[x] = (outputObj[x] || 0) + 1) // count word occurences
        }

    }

    printStats = (e) => {
        return
        <ul>
            {Object.keys(this.duplicateValuesObj).map(
                e => <li key={e}>"{e}" - {this.duplicateValuesObj[e]} times</li>
            )}
        </ul>
    }

    render() {
        return (
            <div>
                <textarea className="textArea" 
                    placeholder="Please enter the text to analyze repeated words" 
                    onFocus={(e) => e.target.placeholder = ""}
                    onChange={this.countDuplicates.bind(this)}
                >
                </textarea>

                <h1>{this.state.title}</h1>
                <div className="mainContainer">
                    {Object.keys(this.duplicateValuesObj).map( e => 
                        <div className="itemContainer" key={e}>
                            <div className="itemOccurenciesNumber">{this.duplicateValuesObj[e]}</div>
                            <div style={{ height: 'calc(5em + 50px * ' + this.duplicateValuesObj[e] + ')' }} className="itemBackground">
                                <div className="itemTitle">{e}</div>
                            </div>
                        </div>

                    )}
                </div>
                <ul>
                    {Object.keys(this.duplicateValuesObj).map(
                        e => <li key={e}>"{e}" - {this.duplicateValuesObj[e]} times</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TextInput