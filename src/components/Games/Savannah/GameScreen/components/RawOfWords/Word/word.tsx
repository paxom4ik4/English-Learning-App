import * as React from 'react';
import './word.scss';
import { Component } from 'react';

interface Props {
  word: string,
  className: string,
  onClick: (word: string, e: Event)=>void,
}

export class Word extends Component<Props> {
  onClick = (word, e) => {
    this.props.onClick && this.props.onClick(word, e);
  };

  render() {
    const { word, className } = this.props;
    return (
      <div className={className} onClick={this.onClick.bind(this, word)} data-word={word}>
        {word}
      </div>
    );
  }
}

export default Word;
