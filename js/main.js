document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        // Generate a random hexadecimal color code
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColor() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    }

    changeColorBtn.addEventListener('click', changeColor);
});
