const ReactDOM = require('react-dom');

var Album = React.createClass({displayName: "Album",
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
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "img-display"}, 
          React.createElement("div", {id: "owl-demo", className: "owl-carousel owl-theme"}, 

            
              this.state.data.photos.map(function (e,i) {
                return (
                  React.createElement("div", {key: i, className: "item"}, 
                    React.createElement("img", {src: e+'.jpg'})
                  )
                );
              })
            

          )
        ), 
        React.createElement("div", {className: "img-sider"}, 
          React.createElement("div", null, 
            React.createElement("h6", null, this.state.data.title), 
            React.createElement("h6", {className: "sec"}, React.createElement("i", {className: "camera retro icon"}), this.state.data.photos.length), 
            React.createElement("p", null, this.state.data.description)
          ), 
          React.createElement("div", {className: "photos"}, 
            
              this.state.data.photos.map(function (e,i) {
                return React.createElement("img", {key: i, "data-id": i, src: e+'.jpg'});
              })
            
          )
        )
      )
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
  React.createElement(Album, null), document.querySelector(".content-wrapper"));