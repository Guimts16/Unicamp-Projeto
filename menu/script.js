function changeTheme() {
    const cor = document.body.style.backgroundColor;
    const sidebar = document.querySelector('.sidebar');
    const a = document.querySelectorAll('.sidebar a ');
    const logo = document.getElementById('theme');
    const texts = document.querySelector(".text")
    const uni = document.getElementById("uni");
    const uni2 = document.getElementById("uni2");
    const uniStyles = document.querySelector(".logo");
    console.log(cor)
    if (cor ==  "rgb(33, 33, 33)") {
        document.body.style.backgroundColor = "#e8e8e8";
        sidebar.style.backgroundColor = "#e8e8e8";
        for ( i of a ) {
  
            i.style.color = "black";
        }
        logo.src = "assets/moon.png";
        texts.style.color = "black";
        uni.src = "assets/unicamp.png";
        uni2.src = "assets/unicamp.png";
        uniStyles.style.width = "200px  "

        } else { 
        document.body.style.backgroundColor = "#212121";
        sidebar.style.backgroundColor = "#212121";
        for ( i of a ) {
            i.style.color = "white";
        }
        logo.src = "assets/sun.png";
        texts.style.color = "white";
        uni.src = "assets/uni-branco.png";
        uni2.src = "assets/uni-branco.png";
        uniStyles.style.width = "215px"
    }

}