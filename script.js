const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const question1 = document.querySelector(".question1");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "See you on 24th of Dec";
    question1.innerHTML = "Анечка🥰";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    //"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWp1dmtvODRvcjFjNXo1ZGJ3MWdzazlwamJ3ZGN6OGV3Y2c3aGNsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x28cIQSn19Tbi/giphy.gif";
    //"https://tenor.com/view/peach-and-goma-gif-7882899598842933350.gif";
    //"https://tenor.com/view/peach-goma-peach-and-goma-peach-cat-goma-send-love-gif-26864999.gif";
    //    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    //https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-18052982838303436944

    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});