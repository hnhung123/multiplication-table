function bangcuuchuong() {
    let content = '<tr>'
    for (i = 1; i <= 9; i++) {
        for (n = 1; n <= 9; n++) {
            content += '<td>' + n + 'x' + i + '=' + (n * i)
        }
        content += '</td></tr>'
    }
    let x = document.getElementById('multiplication-table');
    x.innerHTML = content;
}

bangcuuchuong()