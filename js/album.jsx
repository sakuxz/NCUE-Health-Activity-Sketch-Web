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
              })
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
                return <img key={i} data-id={i} src={e+'.jpg'} />;
              })
            }
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $("#owl-demo").owlCarousel({

      navigation: false, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

    });
  }
});

ReactDOM.render(
  <Album/>, document.querySelector(".content-wrapper"));
