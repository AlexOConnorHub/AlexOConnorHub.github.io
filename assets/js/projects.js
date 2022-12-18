$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button-selector').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');
    /*
      Projects:
        MIPS Processor - VHDL
        https://github.com/AlexOConnorHub/8-puzzle-search
    */
    let projects_obj = [
        {
            title: 'Virtual Midi Controller',
            description: "Creates virtual MIDI device and allows user to control it with a GUI.",
            image: 'https://github.com/AlexOConnorHub/Virtual_Midi_Controller/blob/master/images/main_screen.png?raw=true',
            link: 'https://github.com/AlexOConnorHub/Virtual_Midi_Controller',
            technologies: ['Python', 'Tkinter', 'MIDI'],
            categories: ['featured'],
            demo: false,
        },
        {
            title: '8 Puzzle Search',
            description: "Searches for solution to 8 puzzle using a variety of algorithms and heuristics.",
            image: 'https://github.com/AlexOConnorHub/8-puzzle-search/blob/master/images/gui.png?raw=true',
            link: 'https://github.com/AlexOConnorHub/8-puzzle-search',
            technologies: ['Python', 'AI', 'Algorithms'],
            categories: ['featured', 'other'],
            demo: false,
        },
        {
            title: 'Python Chat Website',
            description: "Bottle web chat application.",
            image: 'assets/images/chat-site.png',
            link: 'https://github.com/AlexOConnorHub/python-website',
            technologies: ['Bottle', 'Javascript', 'Python'],
            categories: ['webdev'],
            demo: false,
        },
        {
            title: 'Go Fish Server/Firefox Extension',
            description: "Firefox extension that allows user to play Go Fish with others via a server.",
            image: 'https://github.com/AlexOConnorHub/go-fish-firefox/blob/master/icons/icon-96.png?raw=true',
            link: 'https://github.com/AlexOConnorHub/kvarteto-server',
            technologies: ['Bottle', 'Javascript', 'Python', 'Firefox'],
            categories: ['webdev'],
            demo: false,
        },
        {
            title: 'GitCTF',
            description: "Expanded a Git based CTF platform.",
            // image: 'assets/images/chat-site.png',
            link: 'https://github.com/AlexOConnorHub/GitCTF',
            technologies: ['Python', 'Git', 'Github Actions', 'Docker'],
            categories: ['featured', 'security', 'webdev'],
            demo: false,
        },
        {
            title: 'JS-Lox',
            description: "Interpreter for Lox programming language, written in Javascript.",
            // image: 'assets/images/chat-site.png',
            link: 'https://github.com/AlexOConnorHub/js-lox-1',
            technologies: ['Javascript', 'Lox'],
            categories: ['other'],
            demo: false,
        },
        {
            title: 'Z-BF',
            description: "Interpreter for Brainfuck programming language, written in Z-Lang.",
            // image: 'assets/images/chat-site.png',
            link: 'https://github.com/AlexOConnorHub/z-bf',
            technologies: ['Javascript', 'Brainfuck', 'Z-Lang'],
            categories: ['other'],
            demo: false,
        },
        {
            title: 'MIPS Processor',
            description: "MIPS processor written in VHDL.",
            // image: 'assets/images/chat-site.png',
            link: 'https://github.com/AlexOConnorHub/mips-processor',
            technologies: ['VHDL', 'MIPS'],
            categories: ['featured', 'other'],
            demo: false,
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}