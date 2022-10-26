function desenharGraficos() {
  // Grafico de Pizza
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
  // ********************************************************************************************

  //Grafico de Linha
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
    height: 400,
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
  // ********************************************************************************************

  //Grafico de Colunas
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
    width: 800,
    height: 400,
  };

  var view = new google.visualization.DataView(tabela);

  var grafico = new google.visualization.ColumnChart(document.getElementById("graficoColuna"));

  grafico.draw(view, opcoes);
  // ********************************************************************************************

  //Grafico de Barras

  var dadosJson = $.ajax({
    url: 'https://gist.githubusercontent.com/GABRIELBOLDIVEIGA/9af455de652bca87db32ab19165dd8cf/raw/7e357fafbad9ec66b0d4ce00e9f200b0ad0af2e0/dados.json',
    dataType: "json", 
    async: false,
  }).responseText;

  tabela.sort([{ column: 1, desc: true }]);

  var tabela = new google.visualization.DataTable(dadosJson);
 
  var opcoes = {
    title: 'Tipos de Gastos',
    height: 400,
    width: 800,
    vAxis: { 
            gridlines: {
                    count:0, color:'transparent'
            }},
    legend: 'none',
    hAxis: { 
            gridlines: 
                {
                    color:'transparent'
                },
            format:'currency',
            textPosition:'none'
            },
    annotations: 
        {
        alwaysOutside:true
        }

};

  // var grafico = new google.visualization.ColumnChart(document.getElementById("graficoColunaSurpresa"));
  var grafico = new google.visualization.BarChart(document.getElementById("graficoBarras"));
  grafico.draw(tabela, opcoes);

  // grafico de barras com arquivo json
  var dadosJson = $.ajax({
    // url: 'dados.json',
    url: "https://gist.githubusercontent.com/GABRIELBOLDIVEIGA/3fe27dbef59a7f0fab416262b180df9b/raw/4afe752f7aacf60da1e3657d6a2fc591eb368452/dados.json",
    dataType: "json", 
    async: false,
  }).responseText;

  var tabela = new google.visualization.DataTable(dadosJson);

  tabela.sort([{ column: 1, desc: true }]);

  var opcoes = {
    title: "Usuários e Poupanças",
    width: 800,
    height: 400,
    legend: "none",
    hAxis: {
      gridlines: { color: "transparent" },
      textPosition: "none",
    },
    annotations: { alwaysOutside: true },
  };

  var grafico = new google.visualization.BarChart(document.getElementById("graficoBarrasJson"));
  grafico.draw(tabela, opcoes);
}
