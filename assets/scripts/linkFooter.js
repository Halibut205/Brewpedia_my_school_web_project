fetch("../views/templates/footer.html") //gửi GET HTML để lấy file footer.html  
    .then((response) => response.text()) //Khi yêu cầu thành công, nó nhận về một đối tượng response (phản hồi từ server). .text() chuyển đổi nội dung phản hồi thành một chuỗi văn bản (HTML).
    .then((data) => { //data chứa nội dung HTML từ footer.html
        document.getElementById("footer").innerHTML = data; //Tìm phần tử có id="footer" trong HTML và gán nội dung của footer.html vào đó.
        const link = document.createElement("link"); //Tạo một phần tử <link> mới.
        link.rel = "stylesheet"; // Xác định rằng phần tử này là một tệp CSS.
        link.href = "../css/template/footer.css"; //Đặt đường dẫn đến tệp CSS footer.css
        document.head.appendChild(link); //Chèn phần tử <link> vào <head> của tài liệu để tải CSS.
    })
    .catch((error) => console.error("Lỗi load footer:", error));//Nếu có lỗi xảy ra (chẳng hạn tệp footer.html không tồn tại hoặc bị lỗi mạng), nó sẽ hiển thị thông báo lỗi trong Console.
