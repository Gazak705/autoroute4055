const table40 = document.getElementById("a40");
const table55 = document.getElementById("a55");

for (let km = 187; km <= 210; km++) {
    const row = table40.insertRow();
    const cell = row.insertCell();
    cell.textContent = km;
}

for (let km = 180; km <= 196; km++) {
    const row = table55.insertRow();
    const cell = row.insertCell();

    if (km === 180) {
        cell.classList.add("cell-link");
        const link = document.createElement("a");
        link.href = "https://maps.app.goo.gl/axWTHwzAGyA29Bd18?g_st=ic";
        link.textContent = km;
        link.target = "_blank";
        link.setAttribute("rel", "noopener noreferrer");
        cell.appendChild(link);
    } else {
        cell.textContent = km;
    }
}
