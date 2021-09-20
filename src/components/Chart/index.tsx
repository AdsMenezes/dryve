import { Line } from 'react-chartjs-2'
import { TextAlign, TooltipYAlignment } from 'chart.js'

import Card from '../Card'

export default function Chart() {
  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx?.createLinearGradient(0, 30, 0, 250)
    gradient?.addColorStop(0, 'rgba(153, 205, 255, 0.6)')
    gradient?.addColorStop(1, 'rgba(234, 249, 255, 1)')

    return {
      labels: [
        '08/Dez',
        '09/Dez',
        '10/Dez',
        '11/Dez',
        '12/Dez',
        '13/Dez',
        '14/Dez',
        '15/Dez',
        '16/Dez',
        '17/Dez',
        '18/Dez',
        '19/Dez',
        '20/Dez',
        '21/Dez',
      ],
      datasets: [
        {
          label: 'Leads (últimos 30 dias)',
          data: [46, 43, 41, 39, 36, 41, 50, 40, 30, 41, 25, 40, 45, 43],
          fill: true,
          backgroundColor: gradient,
          borderColor: 'rgba(0, 101, 255, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 2,
          hoverBorderWidth: 4,
        },
      ],
    }
  }

  const options = {
    scales: {
      y: {
        grace: 5,
        grid: {
          color: 'rgba(187, 189, 200, 0.2)',
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'rgba(29, 44, 75, 1)',
        titleFont: { size: 14 },
        bodyColor: 'rgba(163, 163, 163, 1)',
        bodyFont: { size: 12 },
        borderWidth: 2,
        borderColor: 'rgba(187, 189, 200, 0.3)',
        displayColors: false,
        usePointStyle: true,
        titleSpacing: 0,
        titleAlign: 'center' as TextAlign,
        yAlign: 'bottom' as TooltipYAlignment,
        callbacks: {
          title: function (context: any) {
            return context[0].raw
          },
          label: function (context: any) {
            return context.label
          },
        },
      },
    },
  }

  return (
    <Card title="Leads (últimos 30 dias)">
      <Line data={data} options={options} height={70} />
    </Card>
  )
}
