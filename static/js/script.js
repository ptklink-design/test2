document.addEventListener('DOMContentLoaded', function() {
    // 智慧燈控制
    const lightStatusEl = document.getElementById('light-status');
    const toggleLightBtn = document.getElementById('toggle-light-btn');
    let isLightOn = false;

    toggleLightBtn.addEventListener('click', () => {
        isLightOn = !isLightOn;
        if (isLightOn) {
            lightStatusEl.textContent = '開';
            lightStatusEl.className = 'status-on';
        } else {
            lightStatusEl.textContent = '關';
            lightStatusEl.className = 'status-off';
        }
    });

    // 智慧門鎖控制
    const lockStatusEl = document.getElementById('lock-status');
    const toggleLockBtn = document.getElementById('toggle-lock-btn');
    let isLocked = true;

    toggleLockBtn.addEventListener('click', () => {
        isLocked = !isLocked;
        if (isLocked) {
            lockStatusEl.textContent = '已上鎖';
            lockStatusEl.className = 'status-locked';
            toggleLockBtn.textContent = '解鎖';
        } else {
            lockStatusEl.textContent = '已解鎖';
            lockStatusEl.className = 'status-unlocked';
            toggleLockBtn.textContent = '上鎖';
        }
    });

    // 模擬溫度感測器數據更新
    const temperatureEl = document.getElementById('temperature');
    setInterval(() => {
        // 產生一個 -0.5 到 0.5 之間的隨機數
        const tempChange = (Math.random() - 0.5);
        let currentTemp = parseFloat(temperatureEl.textContent);
        // 更新溫度，並格式化到小數點後一位
        temperatureEl.textContent = (currentTemp + tempChange).toFixed(1);
    }, 3000); // 每3秒更新一次
});
