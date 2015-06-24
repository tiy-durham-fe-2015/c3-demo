(function () {  
  function showPie(data) {
    // Pie. Mmmmm. Pie...
    var chart = c3.generate({
      bindto: '.gender-chart', // also could just hand it an element: document.querySelector('.gender-chart'),
      data: {
        columns: data,
        type : 'pie',
        onclick: function (data, element) {
          console.log("onclick", data, element);
        },
        onmouseover: function (data, element) {
          console.log("onmouseover", data, element);
        },
        onmouseout: function (data, element) {
          console.log("onmouseout", data, element);
        }
      },
      color: {
        pattern: ['#3FBEBB', '#FF5843', '#39B54A']
      },
      // Size can be specified (in pixels)
      // size: {
      //   height: 500,
      //   width: 500
      // }
    });
  }
  
  var data = {
    male: 15,
    other: 10,
    female: 75
  };
  
  // var arr = [];
  
  // for (var key in data) {
  //   arr.push([key, data[key]]);
  // }
  
  // [['male', 15], ['other', 10], ['female', 75]]
  
  showPie(_.pairs(data));
  
  
  // // Pie. Mmmmm. Pie...
  // var chart = c3.generate({
  //   bindto: '.gender-chart', // also could just hand it an element: document.querySelector('.gender-chart'),
  //   data: {
  //     columns: [
  //       ['Other', 10],
  //       ['Male', 15],
  //       ['Female', 75],
  //     ],
  //     type : 'pie',
  //     onclick: function (data, element) {
  //       console.log("onclick", data, element);
  //     },
  //     onmouseover: function (data, element) {
  //       console.log("onmouseover", data, element);
  //     },
  //     onmouseout: function (data, element) {
  //       console.log("onmouseout", data, element);
  //     }
  //   },
  //   color: {
  //     pattern: ['#3FBEBB', '#FF5843', '#39B54A']
  //   },
  //   // Size can be specified (in pixels)
  //   // size: {
  //   //   height: 500,
  //   //   width: 500
  //   // }
  // });
 
})();

(function () {
  // Bar.
  var chart = c3.generate({
    bindto: document.querySelector('.perf-chart'),
    data: {
      columns: [
        ['Great', 30, 40, 60],
        ['Meh', 23, 9, 10],
        ['Terrible', 14, 17, 0]
      ],

      type: 'bar'
    },
    axis: {
      x: {
        tick: {
          format: function (d) {
            var labels = ['Cohort 1', 'Cohort 2', 'Cohort 3'];
            return labels[d % labels.length];
          }
        }
      }
    },
    color: {
      pattern: ['#3FBEBB', '#FF5843', '#54b241']
    }
  });

})();

(function () {
  var colorScale = d3.scale.category10();

  var chart = c3.generate({
    bindto: '.perf-chart-alt',
    data: {
      x: 'x',

      columns: [
        ['x', 'Great', 'Meh', 'Terrible'],
        ['count', 30, 23, 14]
      ],

      groups: [
        ['count']
      ],

      type: 'bar',

      color: function(inColor, data) {
        var colors = ['#3FBEBB', '#FF5843', '#54b241'];
        return colors[data.index % colors.length];
      },
    },

    axis: {
      x: {
        type: 'category'
      }
    },

    size: {
      width: 440,
      height: 440
    },

    tooltip: {
      show: false
    },

    legend: {
      show: false
    }
  });
})();

// Line... Whatevz.
(function () {
  var chart = c3.generate({
    bindto: '.likes-chart',
    data: {
      x: 'dates',
      xFormat: '%m-%d-%Y',
      columns: [
        ['dates', '1-2-1980', '1-2-1981', '1-2-1985', '1-2-1993', '1-2-1994', '1-2-2005'],
        ['Likes', 30, 200, 100, 400, 150, 250],
        ['Dislikes', 50, 20, 10, 40, 15, 25]
      ]
    },
    padding: {
      bottom: 50
    },
    axis: {
      y: {
        label: {
          text: 'Likes',
          position: 'outer-middle'
        }
      },
      x: {
        type: 'timeseries',
        label: {
          text: 'Time'
        },
        tick: {
          //format: '%m-%d-%Y',
          fit: false,
          //rotate: 75,
          format: function (e, d) {
            return new Date(e).toLocaleDateString();
          }
        }
      }
    }
  });

  // setTimeout(function () {
  //   chart.load({
  //     columns: [
  //       ['dates', '1-2-1983', '1-2-1985', '1-2-1987', '1-2-1990', '1-2-1994', '1-2-1996'],
  //       ['Likes', 30, 200, 100, 400, 150, 250],
  //       ['Dislikes', 50, 20, 10, 40, 15, 25]
  //     ]
  //   });
  // }, 1500);

})();

// Resizing
// chart.resize({height:100, width:300})

// setTimeout(function () {
//   chart.load({
//     columns: [
//       ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
//       ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
//       ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
//     ]
//   });
// }, 1500);

// setTimeout(function () {
//   chart.unload({
//     ids: 'data1'
//   });
//   chart.unload({
//     ids: 'data2'
//   });
// }, 2500);
