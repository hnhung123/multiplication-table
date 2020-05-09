function bangcuuchuong(start, end) {
    let content = ''
    for (i = start; i <= end; i++) {
        content += '<tr>'
        for (n = start; n <= end; n++) {
            if (n * i % 2 == 0) {
                content += `<td class="red">
                ${n} x ${i} = ${n * i}
                </td>`
            }else{
                content += `<td class="blue">
                ${n} x ${i} = ${n * i}
                </td>`
            }

        }
        content += '</tr>'
    }
    return content
}
function displayBangCuuChuong() {
    let result = bangcuuchuong(1, 10);
    return result
}

document.getElementById('multiplication-table').innerHTML = displayBangCuuChuong();