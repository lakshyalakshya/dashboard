// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "country": "USA",
  "visits": 998
}, {
  "country": "China",
  "visits": -882
}, {
  "country": "Japan",
  "visits": -809
}, {
  "country": "Germany",
  "visits": 322
}, {
  "country": "UK",
  "visits": 422
}, {
  "country": "France",
  "visits": -314
}, {
  "country": "India",
  "visits": -984
}, {
  "country": "Spain",
  "visits": -711
}, {
  "country": "Netherlands",
  "visits": 665
}, {
  "country": "Russia",
  "visits": 580
}, {
  "country": "South Korea",
  "visits": -443
}, {
  "country": "Canada",
  "visits": 441
}, {
  "country": "Brazil",
  "visits": -395
}];

// Create axes

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.labels.template.rotation = -60;
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.minGridDistance = 40;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.name = "Visits";

var columnTemplate = series.columns.template;
columnTemplate.tooltipText = "{categoryX}: [bold]{valueY}[/]";
columnTemplate.fillOpacity = .8;
columnTemplate.strokeOpacity = 0;
columnTemplate.fill = am4core.color("red");