function calcSI() {
    const p = parseFloat(document.getElementById('p').value);
    const r = parseFloat(document.getElementById('r').value);
    const t = parseFloat(document.getElementById('t').value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        document.getElementById('result').innerHTML = "<span style='color:red'>Fill all fields</span>";
        return;
    }

    const si = (p * r * t) / 100;
    document.getElementById('result').innerHTML = `Interest: <strong>${si.toFixed(2)}</strong>`;
}