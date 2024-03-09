const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset:true
})
scrollReveal.reveal(
    ".sobre-imagem,.sobre-textos",{
        interval: 100
    }
)