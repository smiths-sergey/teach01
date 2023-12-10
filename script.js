class Card {
    static visibleArr = ['none', 'flex'];
    static h2Arr = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Laboriosam quam adipisci porro saepe, eligendi harum ea quis cumque rem voluptatem!',
    ];
    static pArr = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab veniam magni tempora error dolore deserunt animi suscipit natus id nostrum eius eum voluptates eligendi obcaecati amet veritatis, deleniti est!',
        'Nulla adipisci nisi impedit amet tenetur laudantium quo doloribus error! Quae, eligendi accusamus perferendis ducimus nostrum nemo magnam magni, in natus assumenda officiis quidem repellat totam ea nobis illo fugit aut quaerat unde explicabo, numquam doloremque qui cum.',
    ];

    static imgArr = [
        'img/01.jpeg',
        'img/02.jpg',
    ]

    #isVisible = false;
    #pToggleStatus = false;
    #h2ToggleStatus = false;
    #imgToggleStatus = false;

    #cardEl;
    #pEl;
    #h2El;
    #imgEl;

    constructor(parentEl) {
        const textBlock = document.createElement('div');

        this.#h2El = document.createElement('h2');
        this.#h2El.textContent = Card.h2Arr[+this.#h2ToggleStatus];
        this.#h2El.onclick = () => this.toggleH2();

        this.#pEl = document.createElement('p');
        this.#pEl.textContent = Card.pArr[+this.#pToggleStatus];
        this.#pEl.onclick = () => this.toggleP();

        textBlock.append(this.#h2El);
        textBlock.append(document.createElement('hr'));
        textBlock.append(this.#pEl);

        parentEl.append(textBlock);

        this.#imgEl = document.createElement('img');
        this.#imgEl.src = Card.imgArr[+this.#imgToggleStatus];
        this.#imgEl.onclick = () => this.toggleImg();
        parentEl.append(this.#imgEl);
        this.#cardEl = parentEl;
        this.#cardEl.style.display = Card.visibleArr[+this.#isVisible];

    }

    toggleVisible() {
        this.#isVisible = !this.#isVisible;
        this.#cardEl.style.display = Card.visibleArr[+this.#isVisible];
        return this.#isVisible;
    }

    toggleH2() {
        this.#h2ToggleStatus = !this.#h2ToggleStatus;
        this.#h2El.textContent = Card.h2Arr[+this.#h2ToggleStatus];
    }

    toggleP() {
        this.#pToggleStatus = !this.#pToggleStatus;
        this.#pEl.textContent = Card.pArr[+this.#pToggleStatus];

    }

    toggleImg() {
        this.#imgToggleStatus = !this.#imgToggleStatus;
        this.#imgEl.src = Card.imgArr[+this.#imgToggleStatus];
    }

}

const buttonTextArr = [
    'Показать контент',
    'Скрыть контент'
]
const cardEl = document.querySelector('#card');
const button = document.querySelector('#button');
const card = new Card(cardEl);
button.onclick = () => {
    button.textContent = buttonTextArr[+card.toggleVisible()];
}





