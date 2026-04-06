let allData = [
    { name: "Alienware Gaming Laptop", cat: "gaming", img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "A high-performance machine with top-tier graphics and RGB lighting." },
    { name: "Razer DeathAdder Mouse", cat: "gaming", img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Ergonomic gaming mouse with ultra-fast responsiveness." },
    { name: "Atomic Habits & Focus Books", cat: "study", img: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Build good habits and break bad ones with proven frameworks." },
    { name: "Minimalist LED Desk Lamp", cat: "study", img: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Eye-caring warm light with adjustable brightness for deep work." },
    { name: "Sony WH-1000XM5 Headphones", cat: "music", img: "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Industry-leading noise cancellation and premium sound." },
    { name: "Bose SoundLink Speakers", cat: "music", img: "https://images.pexels.com/photos/3736826/pexels-photo-3736826.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Deep, crisp, and clear audio with Bluetooth portability." },
    { name: "Bowflex Adjustable Dumbbells", cat: "fitness", img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Space-saving dumbbells with easily adjustable weights." },
    { name: "Premium Non-Slip Yoga Mat", cat: "fitness", img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=300", desc: "Extra thick and textured surface for comfortable workouts." }
];

let favorites = [];

function recommend() {
    let category = document.getElementById("category").value;
    let search = document.getElementById("search").value.toLowerCase();
    let result = document.getElementById("result");

    result.innerHTML = "";

    let filtered = allData.filter(item => {
        return (category === "all" || item.cat === category) &&
            item.name.toLowerCase().includes(search);
    });

    filtered.forEach(item => {
        let originalIndex = allData.indexOf(item);
        result.innerHTML += `
        <div class="card">
            <div class="img-container">
                <img src="${item.img}">
                <div class="desc-overlay">${item.desc}</div>
            </div>
            <h3>${item.name}</h3>
            <br>
            <button class="btn" onclick="addFav(${originalIndex})">&#10084;&#65039; Add</button>
        </div>
        `;
    });
}

function addFav(index) {
    let item = allData[index];
    if (!favorites.includes(item)) {
        favorites.push(item);
        showFav();
    }
}

function showFav() {
    let favDiv = document.getElementById("favorites");
    favDiv.innerHTML = "";

    favorites.forEach(item => {
        favDiv.innerHTML += `
        <div class="card fav">
            <div class="img-container">
                <img src="${item.img}">
                <div class="desc-overlay">${item.desc}</div>
            </div>
            <h3>${item.name}</h3>
        </div>
        `;
    });
}

// Run the recommend function initially to display all items on page load
recommend();

// Automatically update results as the user types or changes the category
document.getElementById('search').addEventListener('input', recommend);
document.getElementById('category').addEventListener('change', recommend);
