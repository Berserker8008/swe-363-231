cars = 
[
    {
        src:"assets/gt3rs.png",
        model:"Porsche 911 GT3 RS",
        year:"2023",
        price:"$223,800"

    },

    {
        src:"assets/miata.png",
        model:"Mazda Miata Mx 5",
        year:"1995",
        price:"$14,995"

    },

    {
        src:"assets/f40.png",
        model:"Ferrari F40",
        year:"1992",
        price:"$1,017,000"

    },

    {
        src:"assets/p1.png",
        model:"McLaren P1",
        year:"2013",
        price:"$1,150,000"

    },

    {
        src:"assets/mk4.png",
        model:"Toyota Supra MK4",
        year:"1993",
        price:"$21,400"

    }
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