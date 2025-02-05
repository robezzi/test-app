// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const drawChart = (canvas: HTMLCanvasElement, points:number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dataPoints = generateRandomData(50);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // ресет графика

    ctx.beginPath();
    ctx.moveTo(0, dataPoints[0]);

    // новый график
    for (let i = 1; i < dataPoints.length; i++) {
        const x = (i * canvas.width) / (dataPoints.length - 1);
        const prevX = ((i - 1) * canvas.width) / (dataPoints.length - 1);
        const midX = (prevX + x) / 2;

        ctx.quadraticCurveTo(prevX, dataPoints[i - 1], midX, (dataPoints[i - 1] + dataPoints[i]) / 2);
    }

    ctx.lineTo(canvas.width, dataPoints[dataPoints.length - 1]);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();

    // градиент
    const gradient = ctx.createLinearGradient(0, dataPoints[0], 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(45, 176, 84, 0)');

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
};
    // рандомная дата для отрисовки
const generateRandomData = (points: number) => {
    const data = [];
    let lastY = 200;

    for (let i = 0; i < points; i++) {
        lastY = Math.max(0, Math.min(400, lastY + (Math.random() - 0.5) * 50));
        data.push(lastY);
    }
    return data;
};
