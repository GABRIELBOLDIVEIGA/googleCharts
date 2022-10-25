function desenhaPizza() {
  var tabela = new google.visualization.DataTable();
  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "valores");
  tabela.addRows([
    ["Educação", 2000],
    ["Transporte", 500],
    ["Lazer", 230],
    ["Saúde", 50],
    ["Cartão de crédito", 900],
    ["Alimentação", 260],
  ]);

  var opcoes = {
    title: "Tipos de Gastos",
    is3D: true,
    width: 800,
    height: 400,
    legend: "labeled",
    pieSliceText: "value",
    // colors: ['red', 'green', 'yellow', 'blue', 'purple', 'orange'],
    slices: {
      0: { color: "red" },
      1: { offset: 0.3, color: "pink" },
      2: { color: "green" },
      3: { offset: 0.3, color: "yellow" },
      4: { offset: 0.3 },
      5: { offset: 0.3 },
    },
  };

  var grafico = new google.visualization.PieChart(document.getElementById("graficoPizza"));
  grafico.draw(tabela, opcoes);
}

function desenhaLinha() {
  var tabela = new google.visualization.DataTable();

  tabela.addColumn("string", "Mês");
  tabela.addColumn("number", "gastos");
  tabela.addRows([
    ["jan", 800],
    ["fev", 400],
    ["mar", 1100],
    ["abr", 400],
    ["mai", 500],
    ["jun", 750],
    ["jul", 1500],
    ["ago", 650],
    ["set", 850],
    ["out", 400],
    ["nov", 1000],
    ["dez", 720],
  ]);

  var options = {
    title: "Gastos por mês",
    width: 800,
    height: 300,
    vAxis: {
      format: "currency",
      gridlines: {
        count: 5,
        color: "transparent",
      },
    },
    curveType: "function",
    legend: "none",
  };

  var graficoLinha = new google.visualization.LineChart(document.getElementById("graficoLinha"));
  graficoLinha.draw(tabela, options);
}

function desenhaColuna() {
  var tabela = google.visualization.arrayToDataTable([
    ["Mês", "Entrada", "Saída"],
    ["jan", 2500, 1000],
    ["fev", 2000, 500],
    ["mar", 3000, 1300],
    ["abr", 1500, 1700],
    ["mai", 5000, 2250],
    ["jun", 3567, 3000],
    ["jul", 3452, 1468],
    ["ago", 1833, 5250],
    ["set", 3803, 5500],
    ["out", 1800, 1000],
    ["nov", 3569, 1500],
    ["dez", 3000, 1740],
  ]);

  var opcoes = {
    title: "Entradas e Saidas",
    width: 800,
    heigth: 400,
    vAxis: {
      title: "valores",
      format: "currency",
      gridlines: { color: "transparent" },
    },
    hAxis: {
      title: "Mês",
    },
    legend: {
      position: "bottom",
    },
  };

  var view = new google.visualization.DataView(tabela);

  var grafico = new google.visualization.ColumnChart(document.getElementById("graficoColuna"));

  grafico.draw(view, opcoes);
}
