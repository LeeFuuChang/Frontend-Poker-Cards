const CARD_REF = [
    [
        1, 
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 1, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        1
    ],
    [
        1, 
        0, 1, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 1, 0,
        1
    ],
    [
        1, 
        0, 1, 0,
        0, 0, 0,
        0, 0, 0,
        0, 1, 0,
        0, 0, 0,
        0, 0, 0,
        0, 1, 0,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
        0, 1, 0,
        0, 0, 0,
        0, 0, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 1, 0,
        0, 0, 0,
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 1, 0,
        0, 0, 0,
        1, 0, 1,
        0, 0, 0,
        0, 1, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 0, 0,
        1, 0, 1,
        0, 1, 0,
        1, 0, 1,
        0, 0, 0,
        1, 0, 1,
        1
    ],
    [
        1, 
        1, 0, 1,
        0, 1, 0,
        1, 0, 1,
        0, 0, 0,
        1, 0, 1,
        0, 1, 0,
        1, 0, 1,
        1
    ]
];

function render(){
    document.querySelectorAll('.card[data-suit="heart"] img').forEach(img => {
        img.src = "https://www.svgrepo.com/show/2767/heart.svg";
    });

    document.querySelectorAll('.card[data-suit="spade"] img').forEach(img => {
        img.src = "https://www.svgrepo.com/show/364857/spade-fill.svg";
    });

    document.querySelectorAll('.card[data-suit="club"] img').forEach(img => {
        img.src = "https://www.svgrepo.com/show/364387/club-fill.svg";
    });

    document.querySelectorAll('.card[data-suit="diamond"] img').forEach(img => {
        img.src = "https://www.svgrepo.com/show/69107/diamond.svg";
    });


    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let i = parseInt(card.dataset.value);
        card.querySelectorAll(".number").forEach(number => {
            number.innerText = i;
        });
        let imgs = card.querySelectorAll("img");
        for(let j=0; j<imgs.length; j++){
            imgs[j].style.opacity = CARD_REF[i-1][j];
        };
    });
};

window.onload = render;