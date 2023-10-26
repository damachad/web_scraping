const priceData = [
    {
      store: 'Continente',
      wine: 'Mateus Rosé Original',
      price: [4.00, 4.00, 4.10, 4.10, 4.10, 4.10, 4.40, 4.40, 4.40, 4.40, 4.49, 4.49],
    },
    {
      store: 'El Corte Inglés',
      wine: 'Mateus Rosé Original',
      price: [4.20, 4.20, 4.00, 4.00, 4.00, 4.00, 4.30, 4.30, 4.30, 4.30, 4.49, 4.49],
    },
    {
      store: 'Garrafeira Soares',
      wine: 'Mateus Rosé Original',
      price: [3.20, 3.20, 3.20, 3.00, 3.00, 3.00, 3.10, 3.10, 3.10, 3.29, 3.59, 3.59],
    },
    {
      store: 'Continente',
      wine: 'Mateus Rosé Sparkling',
      price: [4.00, 4.00, 4.10, 4.10, 4.10, 4.10, 4.40, 4.40, 4.40, 4.40, 4.49, 4.49],
    },
    {
      store: 'El Corte Inglés',
      wine: 'Mateus Rosé Sparkling',
      price: [4.20, 4.20, 4.00, 4.00, 4.00, 4.00, 4.30, 4.30, 4.30, 4.30, 4.49, 4.49],
    },
    {
      store: 'Garrafeira Soares',
      wine: 'Mateus Rosé Sparkling',
      price: [3.20, 3.20, 3.20, 3.00, 3.00, 3.00, 3.10, 3.10, 3.10, 3.29, 3.59, 3.59],
    },
    {
      store: 'Continente',
      wine: 'Papa Figos',
      price: [7.50, 7.50, 7.50, 7.00, 7.00, 7.00, 7.50, 7.50, 7.50, 7.99, 7.99, 7.99],
    },
    {
      store: 'El Corte Inglés',
      wine: 'Papa Figos',
      price: [7.45, 7.45, 7.45, 7.20, 7.20, 7.20, 7.60, 7.60, 7.60, 7.99, 7.99, 7.99],
    },
    {
      store: 'Garrafeira Soares',
      wine: 'Papa Figos',
      price: [7.20, 7.20, 7.20, 7.00, 7.00, 7.00, 7.10, 7.10, 7.10, 7.29, 7.29, 7.29],
    },
    {
      store: 'Continente',
      wine: 'Trinca Bolotas',
      price: [7.50, 7.50, 7.50, 7.00, 7.00, 7.00, 7.50, 7.50, 7.50, 7.99, 7.99, 7.99],
    },
    {
      store: 'El Corte Inglés',
      wine: 'Trinca Bolotas',
      price: [7.45, 7.45, 7.45, 7.20, 7.20, 7.20, 7.60, 7.60, 7.60, 7.99, 7.99, 7.99],
    },
    {
      store: 'Garrafeira Soares',
      wine: 'Trinca Bolotas',
      price: [7.20, 7.20, 7.20, 7.00, 7.00, 7.00, 7.10, 7.10, 7.10, 7.29, 7.29, 7.29],
    },
  ];

function filterData(wine) {
    return priceData.filter((item) => item.wine === wine);
  }
  
  function createChartData(wine) {
    const filteredData = filterData(wine);
    const stores = Array.from(new Set(filteredData.map((item) => item.store)));
    const labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);
  
    const datasetColors = {
      'Continente': 'rgb(255, 99, 132)',
      'El Corte Inglés': 'rgb(54, 162, 235)',
      'Garrafeira Soares': 'rgb(75, 192, 192)',
    };
  
    const datasets = stores.map((store) => {
      const storeData = filteredData.find((item) => item.store === store);
      return {
        label: store,
        data: storeData.price,
        backgroundColor: datasetColors[store],
      };
    });
    return { labels, datasets };
  }
  
// Your existing priceData, filterData, and createChartData functions

function renderChart(wine) {
  const ctx = document.getElementById('media-chart').getContext('2d');
  const chartData = createChartData(wine);

  // Check if a chart instance already exists, and if so, destroy it before creating a new one
  if (window.myChart) {
    window.myChart.destroy();
  }

  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets,
    },
    options: {
      scales: {
        x: {
          stacked: false,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

document.getElementById('wine-selector').addEventListener('change', function () {
  renderChart(this.value);
});

// Initialize the chart with a default wine
renderChart('Mateus Rosé Original');



