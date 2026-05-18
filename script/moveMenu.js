function moveMenu() {
            let subHeader = document.getElementById("sub-header");
            let imgSeta = document.getElementById("imgSeta");

            if (subHeader.style.height === "30px") {
                subHeader.style.height = "0px";
                subHeader.style.transition = "1s";
                subHeader.style.overflow = "hidden";
                imgSeta.style.transform = "rotate(180deg)";
                imgSeta.style.transition = "1s";
            } else {
                subHeader.style.height = "30px";
                subHeader.style.transition = "1s";
                imgSeta.style.transform = "rotate(0deg)";
                imgSeta.style.transition = "1s";
            }

        }