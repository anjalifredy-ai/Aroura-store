const APK_FILE = "./aurora-store-4-8-4.apk";

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

    downloadBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Preparing...';

    setTimeout(() => {

        const a = document.createElement("a");
        a.href = APK_FILE;
        a.download = "RemonStore.apk";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showToast("Download Started 🚀");

        downloadBtn.innerHTML =
        '<i class="fa-solid fa-download"></i> Download Now';

    },1000);

});

function copyHash(){

const hash =
`8a1ed9aa09631290da91cb793e0517b0f20dc70239ac94ae6682cd94f91a4bad`;

navigator.clipboard.writeText(hash);

showToast("SHA-256 Copied ✅");

}

function showToast(message){

const toast = document.createElement("div");

toast.innerText = message;

toast.style.position="fixed";
toast.style.bottom="25px";
toast.style.left="50%";
toast.style.transform="translateX(-50%)";
toast.style.padding="15px 25px";
toast.style.background="#8b5cf6";
toast.style.color="#fff";
toast.style.borderRadius="50px";
toast.style.fontWeight="600";
toast.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";
toast.style.zIndex="9999";
toast.style.opacity="0";
toast.style.transition=".35s";

document.body.appendChild(toast);

setTimeout(()=>{
toast.style.opacity="1";
toast.style.bottom="40px";
},50);

setTimeout(()=>{
toast.style.opacity="0";
toast.style.bottom="20px";

setTimeout(()=>{
toast.remove();
},350);

},2500);

}

window.addEventListener("scroll",()=>{

document.querySelectorAll(".card,.download-card,.hero-box")
.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-80){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}else{

card.style.opacity=".2";
card.style.transform="translateY(40px)";

}

});

});

window.dispatchEvent(new Event("scroll"));
