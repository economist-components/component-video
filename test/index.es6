import React from 'react';
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
});
