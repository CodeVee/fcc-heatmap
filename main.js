const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';
const margin = {top: 80, right: 25, bottom: 30, left: 40},
  width = 1050 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom,

   svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


const processData = async () => {

    const res = await fetch(url);
    const data = await res.json();

    const years = data.monthlyVariance.map(x => x.year);
    const uniqueYears = [...new Set(years)]
    console.log(uniqueYears)

    const x = d3.scaleBand()
    .range([ 0, width ])
    .domain(uniqueYears)
    .padding(0.05);
  svg.append("g")
    .style("font-size", 15)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .select(".domain").remove()
}

processData();
