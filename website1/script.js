// Staggered initial load
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation for build stage complete
    setTimeout(() => {
        document.getElementById('progress-build').style.width = '100%';
    }, 1500);
});

function resetPipeline() {
    const bars = document.querySelectorAll('.progress-bar');
    const cards = document.querySelectorAll('.stage-card');
    const badges = document.querySelectorAll('.status-badge');
    
    // Reset all states
    bars.forEach(bar => bar.className = 'progress-bar'); // remove 'running'
    bars.forEach(bar => bar.style.width = '0%');
    bars.forEach(bar => bar.style.backgroundColor = ''); // clear custom danger
    badges.forEach(b => b.className = 'status-badge pending');
    
    // Simulate Build
    setTimeout(() => {
        document.getElementById('progress-build').style.width = '100%';
        document.getElementById('status-build').className = 'status-badge success';
        document.getElementById('status-build').innerText = 'DEPLOYED';
    }, 500);

    // Simulate Test Running
    setTimeout(() => {
        const testBar = document.getElementById('progress-test');
        testBar.className = 'progress-bar running';
        testBar.style.width = '80%';
        const testStatus = document.getElementById('status-test');
        testStatus.innerText = 'RUNNING';
        testStatus.className = 'status-badge progress';
    }, 1500);
}

function simulateFailure() {
    const testBar = document.getElementById('progress-test');
    const testStatus = document.getElementById('status-test');
    
    // Stop running animation
    testBar.className = 'progress-bar';
    // Small delay to visual catch
    setTimeout(() => {
        testBar.style.width = '65%';
        testBar.style.background = 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)';
        testStatus.innerText = 'FAILED: TESTS';
        testStatus.className = 'status-badge danger';
        
        // Trigger visual "glow" of failure on the card
        const testCard = document.getElementById('stage-test');
        testCard.style.borderColor = '#ef4444';
        testCard.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.2)';
    }, 100);
}