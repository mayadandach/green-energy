function preloader() {
    const imagesList = [
            "./img/light.jpg",
            "./img/car.jpg",
            "./img/solar.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

const icons = document.querySelectorAll('#buttons button');
let container = document.getElementById('content');
let pages = [
    {
        headingContent: 'Energy Saving Light Bulbs',
			bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna massa, ultrices a ligula a, auctor mattis massa. Pellentesque in dapibus purus, vitae posuere mi. Integer vel fermentum lectus, sit amet pretium dolor. Fusce tincidunt metus at metus iaculis ultrices. Vestibulum condimentum lacinia enim maximus consectetur. Integer a ornare mi. Curabitur finibus, nulla quis bibendum fermentum, metus lacus condimentum quam, vel ultricies leo quam et odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit venenatis ex in maximus. Pellentesque malesuada eget arcu vitae consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ut vestibulum risus. Proin ullamcorper aliquet elit id rutrum. Aenean ligula.',
			imgUrl: './img/light.jpg',
			imgAlt: 'Content 1 alternative text'
    },
    {
        headingContent: 'Affordable Electric Cars',
			bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante erat, efficitur eget egestas et, efficitur sed augue. Suspendisse fringilla accumsan blandit. Suspendisse erat sem, varius eu placerat at, congue ut orci. Donec suscipit libero tincidunt, dapibus ipsum vel, euismod urna. Phasellus nisi orci, rutrum eget est a, gravida aliquam libero. Nunc tincidunt tortor ac sodales lobortis. Proin faucibus, eros id viverra tristique, nunc dui lacinia nunc, vitae luctus augue neque tristique orci. Donec ac urna metus. Aenean nec sodales sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae tortor vulputate, aliquet felis quis, ultricies est. Donec consequat efficitur venenatis. Mauris pellentesque velit a tincidunt fermentum.',
			imgUrl: './img/car.jpg',
			imgAlt: 'Content 2 alternative text'
        
    },
    {
       headingContent: 'Switching to Solar Energy',
			bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, augue vitae eleifend molestie, diam eros fringilla metus, vel feugiat lectus enim sollicitudin ipsum. Nullam non placerat nibh, eu lacinia nisl. Proin in ante pulvinar, egestas eros et, ultricies risus. Curabitur ut tristique urna, a mattis nulla. Pellentesque sollicitudin vehicula purus, eu aliquet erat ornare in. Praesent ut sem nec turpis sodales molestie ut sed enim. Etiam vel feugiat erat. Nam elementum neque euismod eros viverra lobortis. In gravida, dui sit amet rhoncus scelerisque, elit diam convallis turpis, vitae bibendum lacus eros eget neque. Morbi fermentum sagittis odio, eu tincidunt dui dictum ut. Quisque quis.',
			imgUrl: './img/solar.jpg',
			imgAlt: 'Content 3 alternative text'
        
    }
];

container.innerHTML = `<h2>${pages[0].headingContent}</h2>
     <img class="thumb" src="${pages[0].imgUrl}" alt="${pages[0].imgAlt}">
     <p>${pages[0].bodyText}</p>`;


function handleSelection(e){
    for (let i=0; i < icons.length; i++){
        if(icons[i].hasAttribute("id")){
            icons[i].removeAttribute("id");
        }
    }
    let btn = e.target;
    btn.setAttribute("id", "active");
    
    for(let b =0; b<icons.length; b++){
        if(icons[b].hasAttribute("id")){
            container.innerHTML = `
                <h2>${pages[b].headingContent}</h2>
                <img class="thumb" src="${pages[b].imgUrl}" alt="${pages[b].imgAlt}">
             <p>${pages[b].bodyText}</p>`;
        }
    };
    
};

for (let p = 0; p < icons.length; p++){
    icons[p].addEventListener("click", handleSelection);
}








