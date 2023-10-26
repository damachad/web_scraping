document.addEventListener("DOMContentLoaded", function () {
  // Initialize the promo chart
  renderPromoChart(promotionData);

  // Add event listeners for wine and month selectors
  document.getElementById("wine-selector").addEventListener("change", updatePromoChart);
  document.getElementById("month-selector").addEventListener("change", updatePromoChart);
});

const promotionData = {
  labels: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  datasets: [
    {
      label: 'Promoções Durante 12 Meses',
      data: [
        [0, 5, 0, 10, 7, 2, 3, 5, 4, 1, 5, 9], // Mateus Rosé Original
        [0, 0, 0, 1, 4, 4, 2, 8, 6 , 10, 10, 10], // Mateus Rosé Sparkling
        [9, 4, 6, 1, 4, 4, 2, 2, 6 , 10, 10, 10], // Papa Figos
        [1, 3, 0, 1, 4, 4, 2, 4, 6 , 8, 8, 8]  // Trinca Bolotas
      ],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 2,
      fill: false,
    },
  ],
};

let promoChart;

function renderPromoChart(data) {
  if (promoChart) {
    promoChart.destroy();
  }

  const wine = document.getElementById("wine-selector").value;
  const wineIndex = ['Mateus Rosé Original', 'Mateus Rosé Sparkling', 'Papa Figos', 'Trinca Bolotas'].indexOf(wine);

  const ctx = document.getElementById('promo-chart').getContext('2d');
  promoChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Promoções',
          data: data.datasets[0].data[wineIndex],
          borderColor: data.datasets[0].borderColor[wineIndex],
          borderWidth: data.datasets[0].borderWidth,
          fill: data.datasets[0].fill,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 40,
        },
      },
    },
  });
}

function updatePromoChart() {
  renderPromoChart(promotionData);
}
