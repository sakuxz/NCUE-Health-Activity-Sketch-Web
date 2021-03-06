const React = require('react');
const ReactDOM = require('react-dom');

var Album = React.createClass({
  getInitialState: function() {
    const url = './images/activity/'+location.hash.split('-')[0].replace('#','');
    let photos = [];
    for (var i = 0; i < location.hash.split('-')[1]; i++) {
      photos.push(url+'/'+i);
    }
    return {
      data: {
        title: location.hash.split('-')[2],
        description:"大專院校推動健康促進學校實施計畫",
        photos,
      }
    };
  },
  render: function() {
    return (
      <div className="container">
        <div className="img-display">
          <div id="owl-demo" className="owl-carousel owl-theme">

            {
              this.state.data.photos.map(function (e,i) {
                return (
                  <div key={i} className="item">
                    <img className="owl-lazy" data-src={e+'.jpg'} />
                  </div>
                );
              }.bind(this))
            }

          </div>
        </div>
        <button className="ui icon button toggle-sider close" onClick={this.toggleSider}>
          <i className="ellipsis vertical icon"></i>
        </button>
        <div className="img-sider close">
          <div>
            <h6>{this.state.data.title}</h6>
            <h6 className="sec"><i className="camera retro icon"></i>{this.state.data.photos.length}</h6>
            <p>{this.state.data.description}</p>
          </div>
          <div className="photos">
            {
              this.state.data.photos.map(function (e,i) {
                return <img key={i} data-id={i} src={e+'_sm.jpg'} data-idx={i} onClick={this.setImgPos} />;
              }.bind(this))
            }
          </div>
        </div>
      </div>
    );
  },
  toggleSider: function () {
    $('.toggle-sider, .img-sider').toggleClass('close');
  },
  setImgPos: function (e) {
    $("#owl-demo").trigger('to.owl.carousel',[$(e.currentTarget).data("idx"),350]);
    $(".photos img").removeClass("act");
    $(e.currentTarget).addClass("act");
  },
  componentDidMount: function(){
    $('.photos img:first-child').addClass("act");
    $("#owl-demo").owlCarousel({
      items: 1,
      lazyLoad: true,
    });

    $("#owl-demo").on('changed.owl.carousel',function (e) {
      var index = e.item.index;
      console.log(index);
      $(".photos img").removeClass("act");
      $(".photos img:nth-child("+(index+1)+")").addClass("act");
    });
  }
});

ReactDOM.render(
  <Album/>, document.querySelector(".content-wrapper"));
