const React = require('react');
const ReactDOM = require('react-dom');

var Album = React.createClass({
  getInitialState: function() {
    return {
      data: {
        title: "菸害防治講座",
        description:"vcxvxvxcvxcvxcvxcvccv",
        photos:["a","b","c","e"]
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
                    <img src={e+'.jpg'} />
                  </div>
                );
              }.bind(this))
            }

          </div>
        </div>
        <div className="img-sider">
          <div>
            <h6>{this.state.data.title}</h6>
            <h6 className="sec"><i className="camera retro icon"></i>{this.state.data.photos.length}</h6>
            <p>{this.state.data.description}</p>
          </div>
          <div className="photos">
            {
              this.state.data.photos.map(function (e,i) {
                return <img key={i} data-id={i} src={e+'.jpg'} data-idx={i} onClick={this.setImgPos} />;
              }.bind(this))
            }
          </div>
        </div>
      </div>
    );
  },
  setImgPos:function (e) {
    $("#owl-demo").trigger('to.owl.carousel',[$(e.currentTarget).data("idx"),350]);
    $(".photos img").removeClass("act");
    $(e.currentTarget).addClass("act");
  },
  componentDidMount: function(){
    $("#owl-demo").owlCarousel({
      items: 1,
      onChanged: function(e) {
        console.log(e);
      }
    });

    $("#owl-demo").on('changed.owl.carousel',function (e) {
      //console.log(event);
    });
  }
});

ReactDOM.render(
  <Album/>, document.querySelector(".content-wrapper"));
