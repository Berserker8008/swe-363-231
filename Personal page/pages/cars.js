class Car {
    constructor(src, model, year, price) {
        this.src = src;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

const cars = [
    new Car("assets/gt3rs.png", "Porsche 911 GT3 RS", "2023", "$223,800"),
    new Car("assets/miata.png", "Mazda Miata Mx 5", "1995", "$14,995"),
    new Car("assets/f40.png", "Ferrari F40", "1992", "$1,017,000"),
    new Car("assets/p1.png", "McLaren P1", "2013", "$1,150,000"),
    new Car("assets/mk4.png", "Toyota Supra MK4", "1993", "$21,400")
];



const container = document.querySelector("body div");

cars.forEach(car => {
    const card = document.createElement("div");
    card.classList.add("car-card");

    const image = document.createElement("img");
    image.src = car.src;

    const info = document.createElement("div");
    info.classList.add("car-info");

    const model = document.createElement("h2");
    model.textContent = car.model;

    const year = document.createElement("p");
    year.textContent = car.year;

    const price = document.createElement("p");
    price.textContent = car.price;

    info.appendChild(model);    
    info.appendChild(year);
    info.appendChild(price);

    card.appendChild(image);
    card.append(info);

    container.appendChild(card)
});

const back = document.querySelector("button");

back.addEventListener('click', () => {
    window.location.href = 'index.html';
});