// Simulate real-time data updates
setInterval(() => {
    // 1. Update Gauges
    const gauges = document.querySelectorAll('.gauge-fill-h');
    const cpuVal = document.querySelector('.metric-card:nth-child(1) .val');
    const memVal = document.querySelector('.metric-card:nth-child(2) .val');

    // Simulating CPU flutter (60-70%)
    const newCpu = Math.floor(Math.random() * 10) + 60;
    gauges[0].style.height = newCpu + '%';
    cpuVal.innerText = newCpu;

    // Simulating Memory creeping (84-88%)
    const newMem = Math.floor(Math.random() * 4) + 84;
    gauges[1].style.height = newMem + '%';
    memVal.innerText = newMem;

    // 2. Simulate Disk Activity Graph
    const diskBars = document.querySelectorAll('.disk-graph .bar');
    diskBars.forEach(bar => {
        // Exclude the last success bar for visual consistency
        if(!bar.classList.contains('success')) {
            const newHeight = Math.floor(Math.random() * 30) + 5;
            bar.style.height = newHeight + '%';
        }
    });

}, 2500);