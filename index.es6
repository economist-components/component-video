import React from 'react';

export default class Video extends React.Component {
  static get propTypes() {
    return {
      vid: React.PropTypes.string,
    };
  }
  static get defaultProps() {
    return {
      vid: '-1SoMokmKhI',
    };
  }

  constructor() {
    super();
    this.state = { showIframe: false };
  }
  loadIframe() {
    this.setState({ showIframe: true });
  }

  render() {
    let iFrame;
    if (this.state.showIframe) {
      iFrame = (
        <iframe className="Video--iframe" frameBorder="0"
        src={`\/\/www.youtube.com/embed/${this.props.vid}?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&
        controls=1&showinfo=0`} />
      );
    } else {
      iFrame = (
        <div className="Video--player-preview"><img src={`\/\/i.ytimg.com/vi/${this.props.vid}/hqdefault.jpg`}
        className="Video--thumb" /><div className="Video--play-button" /></div>
      );
    }
    return (
      <div className="Video--container">
        <div className="Video--player" onClick={this.loadIframe.bind(this)}>
          {iFrame}
        </div>
      </div>
    );
  }
}
