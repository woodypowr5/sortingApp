
export const Constants = {
    defaults: {
        sortingAlgorithm: 'selection',
        numCells: 40,
        stepTime: 100,
        canvasWidth: 800,
        canvasHeight: 800,
        colors: 'grayscale',
        canvasId: 'demoCanvas'
    },
    speeds: [
        {
            name: 'slowest',
            stepTime: 500
        },
        {
            name: 'slow',
            stepTime: 200
        },
        {
            name: 'normal',
            stepTime: 100
        },
        {
            name: 'fast',
            stepTime: 50
        },
        {
            name: 'fastest',
            stepTime: 20
        }
    ]
};
