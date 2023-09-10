
function save() {
    let tensach = document.getElementById('tensach').value;
    let tacgia = document.getElementById('tacgia').value;
    let theloai = document.getElementById('theloai').value;
    let nhaxuatban = document.getElementById('nhaxuatban').value;
    let vitrisach = document.getElementById('vitrisach').value;

// if () {
//     alert('thanh cong');
// } else {
//     alert('loi');
// }

    // if (_.isEmpty(save)) {

    // }
    
    if (_.isEmpty(tensach)) {
        document.getElementById('tensach-error').innerHTML = 'Vui lòng nhập tên sách';
    } else  { 
        document.getElementById('tensach-error').innerHTML = '';
    }
    if (_.isEmpty(tacgia)) {
        document.getElementById('tacgia-error').innerHTML = 'Vui lòng nhập tên tác giả';
    } else {
        document.getElementById('tacgia-error').innerHTML = '';
    }
    if (_.isEmpty(tacgia)) {
        document.getElementById('theloai-error').innerHTML = 'Vui lòng nhập thể loại';
    } else {
        document.getElementById('theloai-error').innerHTML = '';
    }
    if (_.isEmpty(tacgia)) {
        document.getElementById('nhaxuatban-error').innerHTML = 'Vui lòng nhập nhà xuất bản';
    } else {
        document.getElementById('nhaxuatban-error').innerHTML = '';
    }
    if (_.isEmpty(vitrisach)) {
        document.getElementById('vitrisach-error').innerHTML = 'Vui lòng nhập vị trí sách';
    } else {
        document.getElementById('vitrisach-error').innerHTML = '';
    }
    if (tensach && tacgia && theloai && nhaxuatban && vitrisach) {
        let thongtinsach = localStorage.getItem('thongtinsach') ?  JSON.parse(localStorage.getItem('thongtinsach')) : [];
        thongtinsach.push({
            tensach: tensach,
            tacgia: tacgia,
            theloai: theloai,
            nhaxuatban: nhaxuatban,
            vitrisach: vitrisach,
        });
        alert('đã thêm sách thành công');
     
            localStorage.setItem('thongtinsach', JSON.stringify(thongtinsach));

            this.renderListthongtinsach();
     
    }
    
}
function renderListthongtinsach() 
{
    let thongtinsach = localStorage.getItem('thongtinsach') ?  JSON.parse(localStorage.getItem('thongtinsach')) : [];
     
    // if (thongtinsach.length === 0) {
    //     document.getElementById('list-thu-vien').style.display = 'none';
    //     return false;
        
    // } 

    document.getElementById('list-thu-vien').style.display = 'block';

    let tableContent = `<tr>
        <td width='20'>#</td>
        <td>Sách</td>
        <td>Tác giả</td>
        <td>Thể loại</td>
        <td>Nhà xuất bản</td>
        <td>Vị trí sách</td>
        <td>Hành động</td></tr>`;

        thongtinsach.forEach((thongtinsach, index) => {
            let thongtinsachid = index;
            index++;
            tableContent +=    `<tr>
            <td>${index}</td>
            <td>${thongtinsach.tensach}</td>
            <td>${thongtinsach.tacgia}</td>
            <td>${thongtinsach.theloai}</td>
            <td>${thongtinsach.nhaxuatban}</td>
            <td>${thongtinsach.vitrisach}</td>
            <td>
            <a href='#'>sửa</a> | <a href='#'onClick='daletesach(${thongtinsachid})'>xóa</a> 
            </td>
            </tr>`;
         })
        
         document.getElementById('sach-thu-vien').innerHTML = tableContent;
        //  let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
        //  books.push(tensach);
        //  localStorage.setItem('books', JSON.stringify(books));
        //  createNotification('Thêm sách thành công', 'Sách đã được thêm vào thư viện');
         
}


function daletesach(id) {
    let thongtinsach = localStorage.getItem('thongtinsach') ?  JSON.parse(localStorage.getItem('thongtinsach')) : [];
    thongtinsach.splice(id, 1);
    localStorage.setItem('thongtinsach', JSON.stringify(thongtinsach));
    renderListthongtinsach(); 
}


 // sản phẩm của Ngô Minh Trí 10b7 // 
 