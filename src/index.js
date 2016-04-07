import React from 'react';

export default class Video extends React.Component {
  constructor(args) {
    super(args);
    this.handleLoadIframe = this.handleLoadIframe.bind(this);
    this.state = {
      showIframe: false,
    };
  }

  handleLoadIframe() {
    this.setState({ showIframe: true });
  }

  render() {
    const { vid, className } = this.props;
    let iFrame = (
      <div className="video__player-preview">
        <img
          src={`\/\/i.ytimg.com/vi/${ vid }/hqdefault.jpg`}
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
          src={`\/\/www.youtube.com/embed/${ vid }?autoplay=1&
          autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0`}
        />
      );
    }

    return (
      <div className={`video__container ${ className }`}>
        <div className="video__player" onClick={this.handleLoadIframe}>
          {iFrame}
        </div>
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  Video.propTypes = {
    vid: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
  };
}
