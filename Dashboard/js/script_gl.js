/*const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'https://checkwines.000webhostapp.com/',
  user: 'id21448747_wines',
  password: 'wines2023Checker##',
  database: 'id21448747_wines'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

connection.query('SELECT * FROM Teste2', (err, results) => {
  if (err) {
    console.error('Erro ao executar consulta: ' + err.stack);
    return;
  }
  console.log('Resultados da consulta: ', results);
});*/

function createAreaChart(selector, data, title) {
  return new ApexCharts(document.querySelector(selector), {
    series: data,
    chart: {
      type: 'area',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: title,
      align: 'left',
      style: {
        color: '#f5f7ff',
      },
    },
    labels: ['10/10', '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10', '18/10', '19/10', '20/10', '21/10', '22/10', '23/10', '24/10'],

    fill: {
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'bottom',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Prices',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
  });
}

var data1 = [
  {
    name: 'Continente',
    data: [4.00, 4.00, 4.10, 4.10, 4.10, 4.10, 4.40, 4.40, 4.40, 4.40, 4.49, 4.49, 4.49, 4.49],
    //data: results.map((row) => row.valor),
    color: '#FF6384',
  },
  {
    name: 'El Corte Ingles',
    data: [4.20, 4.20, 4.00, 4.00, 4.00, 4.00, 4.30, 4.30, 4.30, 4.30, 4.49, 4.49, 4.49, 4.49],
    color: '#36A2EB',
  },
  {
    name: 'Garrafeira Soares',
    data: [3.20, 3.20, 3.20, 3.00, 3.00, 3.00, 3.10, 3.10, 3.10, 3.29, 3.59, 3.59, 3.59, 3.59],
    color: '#4BC0C0',
  },
];

var data2 = [
  {
    name: 'Continente',
    data: [4.00, 4.00, 4.10, 4.10, 4.10, 4.10, 4.40, 4.40, 4.40, 4.40, 4.49, 4.49, 4.49, 4.49],
    color: '#FF6384',
  },
  {
    name: 'El Corte Ingles',
    data: [4.20, 4.20, 4.00, 4.00, 4.00, 4.00, 4.30, 4.30, 4.30, 4.30, 4.49, 4.49, 4.49, 4.49],
    color: '#36A2EB',
  },
  {
    name: 'Garrafeira Soares',
    data: [3.20, 3.20, 3.20, 3.00, 3.00, 3.00, 3.10, 3.10, 3.10, 3.29, 3.59, 3.59, 3.59, 8.59],
    color: '#4BC0C0',
  },
];

var data3 = [
  {
    name: 'Continente',
    data: [7.50, 7.50, 7.50, 7.00, 7.00, 7.00, 7.50, 7.50, 7.50, 7.99, 7.99, 7.99, 7.99, 7.99],
    color: '#FF6384',
  },
  {
    name: 'El Corte Ingles',
    data: [7.45, 7.45, 7.45, 7.20, 7.20, 7.20, 7.60, 7.60, 7.60, 7.99, 7.99, 7.99, 7.99, 7.99],
    color: '#36A2EB',
  },
  {
    name: 'Garrafeira Soares',
    data: [7.00, 7.00, 7.10, 6.30, 6.30, 6.30, 6.30, 7.29, 7.29, 7.29, 7.29, 7.29, 7.29, 7.29],
    color: '#4BC0C0',
  },
];

var data4 = [
  {
    name: 'Continente',
    data: [7.50, 7.50, 7.50, 7.00, 7.00, 7.00, 7.50, 7.50, 7.50, 7.99, 7.99, 7.99, 7.99, 7.99],
    color: '#FF6384',
  },
  {
    name: 'El Corte Ingles',
    data: [7.45, 7.45, 7.45, 7.20, 7.20, 7.20, 7.60, 7.60, 7.60, 7.99, 7.99, 7.99, 7.99, 7.99],
    color: '#36A2EB',
  },
  {
    name: 'Garrafeira Soares',
    data: [7.20, 7.20, 7.20, 7.00, 7.00, 7.00, 7.10, 7.10, 7.10, 7.29, 7.29, 7.29, 7.29, 7.29],
    color: '#4BC0C0',
  },
];

var chart1 = createAreaChart('#area-chart-orig', data1, 'Mateus Rose Original');
chart1.render();
var chart2 = createAreaChart('#area-chart-spark', data2, 'Mateus Rose Sparkling');
chart2.render();
var chart3 = createAreaChart('#area-chart-papa', data3, 'Papa Figos');
chart3.render();
var chart4 = createAreaChart('#area-chart-trinca', data4, 'Trinca Bolotas');
chart4.render();

document.getElementById('chart-selector').addEventListener('change', function() {
  var selectedChart = 'area-' + this.value;

  if (this.value != 'chart-all') {
    document.getElementById('area-chart-orig').style.display = 'none';
    document.getElementById('area-chart-spark').style.display = 'none';
    document.getElementById('area-chart-papa').style.display = 'none';
    document.getElementById('area-chart-trinca').style.display = 'none';

    // Mostrar o gráfico selecionado
    document.getElementById(selectedChart).style.display = 'block';
  }
  if (this.value === 'chart-all') {
    document.getElementById('area-chart-orig').style.display = 'block';
    document.getElementById('area-chart-spark').style.display = 'block';
    document.getElementById('area-chart-papa').style.display = 'block';
    document.getElementById('area-chart-trinca').style.display = 'block';
  }
});


/*connection.end((err) => {
  if (err) {
    console.error('Erro ao encerrar a conexão: ' + err.stack);
    return;
  }
  console.log('Conexão encerrada com sucesso');
});*/