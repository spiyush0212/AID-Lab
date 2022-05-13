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

var all = [
    {
        idx: '1',
        title: 'Story Box',
        summary: `Independent Multi-modal\nInteractive Storytelling for\nChildren with Visual Impairment`,
        img: 'imgs/projects/storybox.jpg'
    },
    {
        idx: '2',
        title: 'Accessible Learning',
        summary: `Exploring the Design of XR\nEnabled Accessible Learning\nExperiences`,
        img: 'imgs/projects/xr.jpg'
    },
    {
        idx: '3',
        title: 'Accessible App',
        summary: `Accessible Bus Information\nsystem and app for users with\nsensory impairments`,
        img: 'imgs/projects/bus.jpg'
    },
    {
        idx: '4',
        title: 'Safety App',
        summary: `Teaching life skills to blind\nstudents using spatial sound.It\ncaters to the problem through a\nrole-playing game.`,
        img: 'imgs/projects/safetyapp.png'
    },
    {
        idx: '5',
        title: 'Healthier Workstation',
        summary: `A healthier & space efficient\nworkstation that caters to one’s\nphysical & mental health.`,
        img: 'imgs/projects/workstation.jpg'
    },
    {
        idx: '6',
        title: 'E-Vision',
        summary: `E-Vision is a low-cost multiline\nbraille display that enables\naccess to quality and affordable\neducation for the visually challenged.`,
        img: 'imgs/projects/braille.jpg'
    },
    {
        idx: '7',
        title: 'Chartr',
        summary: `It is a GUI design that improves\n the bus ticketing system for\nnon native language speakers`,
        img: 'imgs/projects/charts.png'
    }
]

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
        summary: `Teaching life skills to blind\n\students using spatial sound.It\n\caters to the problem through a\nrole-playing game.`,
        img: 'imgs/projects/safetyapp.png'
    },
    {
        idx: '7',
        title: 'Chartr',
        summary: `It is a GUI design that improves\n the bus ticketing system for\nnon native language speakers`,
        img: 'imgs/projects/charts.png'
    }
]

var accInfo = [
    {
        idx: '5',
        title: 'Healthier Workstation',
        summary: `A healthier & space efficient\n\workstation that caters to one’s\n\physical & mental health.`,
        img: 'imgs/projects/workstation.jpg'
    },
    {
        idx: '6',
        title: 'E-Vision',
        summary: `E-Vision is a low-cost multiline\nbraille display that enables\naccess to quality and affordable\neducation for the visually challenged.`,
        img: 'imgs/projects/braille.jpg'
    }
]

var contain = document.querySelector('.my-slider');

var allBtn = document.querySelector('#allProjects');
var accEduBtn = document.querySelector('.accEdu');
var accWebBtn = document.querySelector('.accWeb');
var accInfoBtn = document.querySelector('.accInfo');

function fill(project) {
    var projectDiv = document.createElement('div');
    projectDiv.classList.add("col-6", "my-2", "col-md-4", "text-center", "d-flex", "justify-content-center", "align-items-center");
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
    document.querySelector('.accWeb').click();
}

allBtn.addEventListener('click', () => {
    contain.innerHTML = ``;
    all.forEach(project => {
        fill(project);
    });
});

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
