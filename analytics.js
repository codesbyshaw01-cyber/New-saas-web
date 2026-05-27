const menu = document.querySelector(".menu")
const container1 = document.querySelector(".container1")
menu.addEventListener("click", () => {
    container1.style.display = 'flex'
    container1.style.transform = 'translateX(0)'
})
const close = document.querySelector(".close")
close.addEventListener("click", () => {
    container1.style.display = 'none'
    container1.style.transform = 'translate(400px)'
})
const ctx = document.getElementById("mygraph")
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['May 1', 'May 8', 'May 15', 'May 22', 'May 29'],
        datasets: [
        {
            label: 'Revenue',
            data: [0, 100, 300, 700, 900],
            borderColor: '#A94CE7',
            fill: true,
            tension: 0.4,
            backgroundColor: 'rgba(245, 230, 255, 0.3)',
            pointBackgroundColor: '#A94CE7',
            pointRadius: 3,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
            y: {
                grid: {
                    color: 'rgba(148,163,184,0.1)'
                },
                ticks: {
                    color: '#94A3B8'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#94A3B8'
                }
            }
        }
    }
})
const pie = document.getElementById('mypie')
new Chart(pie, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Referral', 'Organic', 'Website', 'Others'],
        datasets: [{
            data: ['40','25','20','10','5' ],
            backgroundColor:['#4C1D95','#6D28D9','#6366F1','#8B5CF6','#C4B5FD'],
            borderWidth:0
            
            
        }]
    },
    options:{
        cutout:'40%',
        responsive:true,
        plugins:{
            legend:{
                labels:{
                    color:'#64748B'
                }
            }
        }
    }
})