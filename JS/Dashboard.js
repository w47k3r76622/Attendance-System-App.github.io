/*----------------CHARTS----------*/
/*----------------Bar Chart----------*/
var barChartOptions = {
    series: [{
    data: [1,2,3,4]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    },
  },
  colors: [
    "#EB455F",
    "#f5b74f",
    "#2B3467",
    "#cc3c43",
    "#246dec",
    "#FCFFE7",
    "#367952",
    "#f5b74f",
    "lightgreen"
  ],
  plotOptions: {
    bar: {
      distributed:true,  
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%'
    }
  },
  dataLabels: {
    enabled: false
  },
  legends:{
    show:false,
  },
  xaxis: {
    categories: ['8-9', '9-10', '10-11', '11-12', '12-1', '1-2', '2-3',
      '3-4', '4-5'
    ],
  },
  yaxis: {
    title: "Time",
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  /*----------------Area Chart----------*/

var areaChartOptions = {
    series: [{
      name: 'Attendance rate',
      data: [31, 40, 28, 51, 42,95, 100]
    }, {
      name: 'Days',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'Attendance rate',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Days',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  };
  
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

