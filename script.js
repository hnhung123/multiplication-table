function bangcuuchuong(start, end) {
    let content = ''
    for (i = start; i <= end; i++) {
        content += '<tr>'
        for (n = start; n <= end; n++) {
            content += `<td>
             ${n} x ${i} = ${n * i}
             </td>`
        }
        content += '</tr>'
    }
    return content
}
function displayBangCuuChuong(){
    let result = bangcuuchuong(1,10);
    return result
}

document.getElementById('multiplication-table').innerHTML = displayBangCuuChuong() ;