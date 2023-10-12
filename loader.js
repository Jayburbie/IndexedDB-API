// This function will load a script and return a promise that resolves when the script has loaded.
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

// Use the loadScript function to load the scripts in the desired order.
async function loadScriptsInOrder() {
    await loadScript('dbSetup.js');
    await loadScript('dbOperations.js');
}

// Initiate the script loading process.
loadScriptsInOrder();
