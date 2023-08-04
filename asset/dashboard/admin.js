const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Thanh Toán hộ',
            'Vận chuyển hộ',
            'Đặt hàng TQ'
        ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            '#5e3d92',
            '#fdb04c',
            '#c4b9d7'
        ],
        hoverOffset: 4
    }]

},
    
});

let sidebarList = document.querySelectorAll('.sidebar-list');
for (listBtn of sidebarList) {
    
}
            



