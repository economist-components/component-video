import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Video from '..';

chai.should();
const defaultVideo = 'SZ305__0e7U';
describe('Video', () => {
  it('is compatible with React.Component', () => {
    Video.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Video vid={defaultVideo} />).should.equal(true);
  });

  describe('Renders', () => {
    it('default image placeholder', () => {
      const video = TestUtils.renderIntoDocument(
        <Video vid={defaultVideo} />
      );
      const videoThumbNode = TestUtils.findRenderedDOMComponentWithClass(video, 'video__thumb');
      videoThumbNode.src.should.equal('http://i.ytimg.com/vi/SZ305__0e7U/hqdefault.jpg');
    });

    it('the video after interaction', () => {
      const video = TestUtils.renderIntoDocument(
        <Video vid={defaultVideo} />
      );
      const videoNode = TestUtils.findRenderedDOMComponentWithClass(video, 'video__player');
      TestUtils.Simulate.click(videoNode);
      const videoiFrame = TestUtils.findRenderedDOMComponentWithClass(video, 'video__iframe');
      videoiFrame.src.should.contain('http://www.youtube.com/embed/SZ305__0e7U');
    });
  });
});
