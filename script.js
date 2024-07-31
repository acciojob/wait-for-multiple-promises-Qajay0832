//your JS code here. If required.
let tbody = document.getElementById('output')
function createPromise(id) {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 3) + 1;
        setTimeout(() => resolve({ id, time }), time * 1000);
    });
}
// tbody.innerHTML='<tr>aaa</tr>'

let loadingRow = document.createElement('tr');
let loading = document.createElement('td');

loading.innerHTML = "Loading..."
loadingRow.appendChild(loading)
loadingRow.setAttribute('id', 'loading');
tbody.appendChild(loadingRow);


const promises = [createPromise(1), createPromise(2), createPromise(3)];
Promise.all(promises).then(results => {
    // Remove the loading row
    const loadingRow = document.getElementById('loading');
    loadingRow.parentNode.removeChild(loadingRow);

    // Calculate total time
    const totalTime = results.reduce((acc, result) => acc + result.time, 0);

    // Get table body
    const tbody = document.querySelector('tbody');

    // Add rows for each promise
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>promises - ${result.id}</td>
                    <td>${result.time}</td>
                `;
        tbody.appendChild(row);
    });
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            `;
    tbody.appendChild(totalRow);
})
