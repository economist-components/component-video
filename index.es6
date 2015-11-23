import React from 'react';

export default class Video extends React.Component {
  static propTypes = {
    vid: React.PropTypes.string.isRequired,
  }

  constructor(args) {
    super(args);
    this.loadIframe = this.loadIframe.bind(this);
  }

  state = {
    showIframe: false,
  }

  loadIframe() {
    this.setState({ showIframe: true });
  }

  render() {
    const { vid } = this.props;
    let iFrame = (
      <div className="video__player-preview">
        <img
          src={`\/\/i.ytimg.com/vi/${vid}/hqdefault.jpg`}
          className="video__thumb"
        />
        <div className="video__play-button" />
      </div>
    );
    if (this.state.showIframe) {
      iFrame = (
        <iframe
          className="video__iframe"
          frameBorder="0"
          src={`\/\/www.youtube.com/embed/${vid}?autoplay=1&
          autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0`}
        />
      );
    }

    return (
      <div className="video__container">
        <div className="video__player" onClick={this.loadIframe}>
          {iFrame}
        </div>
      </div>
    );
  }
}
