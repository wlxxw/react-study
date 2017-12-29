require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
var imageDatas = require('../data/imageData.json')


imageDatas = (function genImageURL(arg){
    for (var i = 0 , j = arg.length; i < j ;i ++){
      var singleImageData = arg[i];
      singleImageData.imageURL = require('../images/'+singleImageData.filename);
      arg[i] = singleImageData;
    }
    return arg;
})(imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
  //    <div className="index">
  //      <img src={yeomanImage} alt="Yeoman Generator" />
   //     <span>hello</span>
   //     <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
   //   </div>
        <section className="stage">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
