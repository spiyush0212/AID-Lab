// // Carosuel Buttons
var slider = tns({
    "container": '.my-slider',
    "items": 2,
    "responsive": {
        750: {
            items: 3
        }
    },
    "slideBy": "page",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "autoplay": false,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "navPosition": "bottom"
});

// // Scrolling Navbar
const navbarScroll = document.getElementById('navbar-scroll');
window.addEventListener("scroll", function (e) {
    var y = window.scrollY;
    navbarScroll.style.display = (this.oldScroll > this.scrollY && y >= 700) ? "initial" : "none";
    this.oldScroll = this.scrollY;
});

// Projects

var accEdu = [
    {
        idx: '1',
        title: 'Story Box',
        summary: `Independent Multi-modal\n\Interactive Storytelling for\n\Children with Visual Impairment`,
        img: 'imgs/projects/storybox.jpg'
    },
    {
        idx: '2',
        title: 'Accessible Learning',
        summary: `Exploring the Design of XR\n\Enabled Accessible Learning\n\Experiences`,
        img: 'imgs/projects/xr.jpg'
    }
]

var accWeb = [
    {
        idx: '3',
        title: 'Accessible App',
        summary: `Accessible Bus Information\n\system and app for users with\n\sensory impairments`,
        img: 'imgs/projects/bus.jpg'
    },
    {
        idx: '4',
        title: 'Safety App',
        summary: `Teaching life skills to blind\n\students using spatial sound.It\n\caters to the problem through a\n\role-playing game.`,
        img: 'imgs/projects/safetyapp.png'
    }
]

var accInfo = [
    {
        idx: '5',
        title: 'Healthier Workstation',
        summary: `A healthier & space efficient\n\workstation that caters to one’s\n\physical & mental health.`,
        img: 'imgs/projects/workstation.jpg'
    }
]

var contain = document.querySelector('.my-slider');

var accEduBtn = document.querySelector('.accEdu');
var accWebBtn = document.querySelector('.accWeb');
var accInfoBtn = document.querySelector('.accInfo');

function fill(project) {
    var projectDiv = document.createElement('div');
    projectDiv.classList.add("col-6", "col-md-4", "text-center", "d-flex", "justify-content-center", "align-items-center");
    projectDiv.setAttribute("data-bs-toggle", "modal");
    projectDiv.setAttribute("data-bs-target", `#exampleModal${project.idx}`);

    var innerDiv = document.createElement('div');
    innerDiv.classList.add("card", "h-100");
    innerDiv.style.width = "18rem";

    var img = document.createElement('img');
    img.src = project.img;
    img.classList.add("card-img-top", "p-3");

    var inDiv = document.createElement('div');
    inDiv.classList.add("card-body");

    var h5 = document.createElement('h5');
    h5.classList.add("card-title");
    h5.innerText = project.title;

    var p = document.createElement('p');
    p.classList.add("card-text", "d-none", "d-md-block");
    p.id = "card-text";
    p.innerText = project.summary;

    inDiv.appendChild(h5);
    inDiv.appendChild(p);

    innerDiv.appendChild(img);
    innerDiv.appendChild(inDiv);

    projectDiv.appendChild(innerDiv);

    contain.append(projectDiv);
    console.log(projectDiv);
}

window.onload = function () {
    document.querySelector('.accEdu').click();
}

accEduBtn.addEventListener('click', () => {
    contain.innerHTML = ``;

    accEdu.forEach(project => {
        fill(project);
    });
});

accWebBtn.addEventListener('click', () => {
    contain.innerHTML = ``;

    accWeb.forEach(project => {
        fill(project);
    });
});

accInfoBtn.addEventListener('click', () => {
    contain.innerHTML = ``;

    accInfo.forEach(project => {
        fill(project);
    });
});
