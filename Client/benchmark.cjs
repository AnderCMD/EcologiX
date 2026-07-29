const { performance } = require('perf_hooks');

const NUM_ITERATIONS = 50;
const SIMULATED_NETWORK_LATENCY_MS = 50; // typical network latency

async function simulatedNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, SIMULATED_NETWORK_LATENCY_MS));
}

async function runBenchmark() {
    console.log(`Starting benchmark with ${NUM_ITERATIONS} iterations...`);
    console.log(`Simulated network latency: ${SIMULATED_NETWORK_LATENCY_MS}ms\n`);

    // Baseline: Network Request (simulates ObtenerSensores)
    let startBaseline = performance.now();
    for (let i = 0; i < NUM_ITERATIONS; i++) {
        await simulatedNetworkRequest();
    }
    let endBaseline = performance.now();
    let baselineTime = endBaseline - startBaseline;

    // Optimized: Local State Update (simulates setSensores)
    let startOptimized = performance.now();
    for (let i = 0; i < NUM_ITERATIONS; i++) {
        // Simulate local state update overhead
        let arr = [1, 2, 3, 4, 5];
        arr = arr.filter(x => x !== 3);
    }
    let endOptimized = performance.now();
    let optimizedTime = endOptimized - startOptimized;

    console.log(`--- Results ---`);
    console.log(`Baseline (Network Request): ${baselineTime.toFixed(2)} ms`);
    console.log(`Optimized (Local State Update): ${optimizedTime.toFixed(2)} ms`);
    console.log(`Speedup: ${(baselineTime / optimizedTime).toFixed(2)}x faster\n`);
}

runBenchmark();
