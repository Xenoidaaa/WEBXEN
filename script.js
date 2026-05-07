function loadNavbar() {
    const isInsideFolder = window.location.pathname.includes('/semester/') ||
                           window.location.pathname.includes('/profile/') ||
                           window.location.pathname.includes('/materi/');
    
    const path = isInsideFolder ? '../navbar.html' : 'navbar.html';

    fetch(path)
    .then(Response => {
        if (!Response.ok) throw new Error('Navbar tidak ditemukan di:' + path);
        return Response.text();
    })
    .then(data => {
        const container = document.getElementById('sidebar-container');
        if (container) {
            container.innerHTML = data;
        }
    })
    .catch( error => console.error('gagal membuat navbar:', error));
    
    /*fetch('/navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('File navbar tidak ditemukan');
        return response.text();
    })
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Gagal membuat navbar:', error);
        if (window.location.pathname.includes('/semester/')) {
            fetch('../navbar.html').then(r => r.text()).then(d => {
                document.getElementById('sidebar-container').innerHTML = d;
            });
        }
    });*/
}

    

window.onload = loadNavbar;

function openMenu() {
    document.getElementById("side-menu").style.width = "300px";
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}



/*function updateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateString = now.toLocaleDateString('id-ID', options);

    document.getElementById('clock').textContent = `${hours}: ${minutes}:${seconds}`;
    document.getElementById('date').textContent = dateString;

    if(clockElement && dateElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = dateString;
    }
}
    setInterval(updateTime, 1000);

    updateTime();*/
