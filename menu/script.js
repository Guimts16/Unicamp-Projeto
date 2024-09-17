function changeTheme() {
    const cor = document.body.style.backgroundColor;
    const sidebar = document.querySelector('.sidebar');
    const a = document.querySelectorAll('.sidebar a ');
    const logo = document.getElementById('theme');
    const texts = document.querySelector(".text")
    const uni = document.getElementById("uni");
    const uni2 = document.getElementById("uni2");
    const uniStyles = document.querySelector(".logo");

    if (cor ==  "black") {
        document.body.style.backgroundColor = "white";
        sidebar.style.backgroundColor = "white";
        for ( i of a ) {
  
            i.style.color = "black";
        }
        logo.src = "assets/moon.png";
        texts.style.color = "black";
        uni.src = "assets/unicamp.png";
        
        uni2.src = "assets/unicamp.png";
        uniStyles.style.width = "200px"

        } else { 
        document.body.style.backgroundColor = "black";
        sidebar.style.backgroundColor = "black";
        for ( i of a ) {
            i.style.color = "white";
        }
        logo.src = "assets/sun.png";
        texts.style.color = "white";
        uni.src = "assets/unicamp-branco.png";
        uni2.src = "assets/unicamp-branco.png";
        uniStyles.style.width = "230px"
    }

}