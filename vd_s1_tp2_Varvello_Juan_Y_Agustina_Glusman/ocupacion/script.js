d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let ocupacionSeleccionada = "default"; // valor por defecto
  
  updateChart();

  d3.select("#ocupacion-selector").on("change", () => {
    ocupacionSeleccionada = d3.select("#ocupacion-selector").property("value");
    updateChart();
  });

  function updateChart() {
    let dataFiltrada = data;
    if (ocupacionSeleccionada !== "default") {
      dataFiltrada = data.filter((d) => d.ocupacion === ocupacionSeleccionada);
    }
    let chart = Plot.plot({
      marks: [Plot.dot(dataFiltrada, { x: "ocupacion", y: "nacionalidad", fill: "ocupacion" })],
      grid: true,
      line: true,
      nice: true,
      width: 900,
      height: 350,
      marginLeft: 130,
    });

    d3.select("#chart").html("");
    d3.select("#chart").append(() => chart);
  }
});
