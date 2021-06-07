var daysEl = document.getElementById('days');
var dateEl = document.getElementById('date');
var tasksEl = document.getElementById('tasks');
var prevEl = document.getElementById('prev');
var nextEl = document.getElementById('next');
var currentEl = document.getElementById('current');
var clear = document.getElementById('clear');


var year;
var month;
var addMonth = 0;
var month_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var tasks = {                  // attrib = date  : [newTask]
    '2020.9.20': [
        '1. Start project',
        '2. Watch your series',
    ],
    '2020.9.22': [
        '1. Design to site',
        '2. Im sure that I must to do something, but I forgot what exactly',
        '3. Note: bored',
        '4. WHY I CHOSE THIS THEME FOR PROJECT?'
    ],
    '2020.9.26': [
        '1. Help to my brother with his prjct',
        '2. Who will help me with my prjct???',
    ],
    '2020.10.1': [
        '1. Take food for fish',
        '2. Feed the fish',
        '3. Watch a movie whose title you forgot',
        '4. Feed the dog with fish',
        '5. Time to continue your project'
    ],
    '2020.10.4': [
        '1. Please, clean up your room',
        '2. and go outside, get some fresh air' 
    ], 
    '2020.10.10': [
        'SATURDAY NIGHTS ALRIGHT FOR FIGHTING',
        'GIVE A LITTLE ACTION IN'
    ], 
    '2020.10.13': [
        'PROJECT DEFENSE',
        ' ',
        'Shopping list:',
        'cookies',
        'coffee',
        'cheese',
        'tea',
        'tomatos'
    ],
    '2020.10.29': [
        '1. Feed the fish',
    ],
    '2021.2.1': [
        'A perfectly constructed month, isnt it?'
    ],
    '2020.11.13': [
        'Im sure that someone has a birthday today, but I dont remember who'
    ]
}

generate();

////////////////////////////////////// date block

function prev() {
    addMonth--;
    generate();
}

function next() {
    addMonth++;
    generate();
}

prevEl.addEventListener('click', prev);
nextEl.addEventListener('click', next);

function generate() {
    var d = new Date();
    d.setMonth(d.getMonth() + addMonth);
    year = d.getFullYear();
    month = d.getMonth();
    
    var count = (new Date(year, month + 1, 0)).getDate();
    var start = (new Date(year, month, 1)).getDay();

    if (start == 0){
        start = 7;
    }

    var today;
    
    if (addMonth == 0) {
        today = d.getDate();
    }

    dateEl.innerHTML = month_names[month] + ' ' + year;

    table(count, today, start, year, month);
}


function table(count, today, start, year, month) {
    var cell = '';
    var detdate = year + '.' + (month + 1) + '.';

    for (var i = 1; i < start; i++) {
        cell += '<div class="day other"></div>';
    }

    for (var i = 1; i <= count; i++) {  
        var classname = 'day';
        if (i == today) {
            classname += ' today';
        }
        var datecell = detdate + i;
        if (tasks[datecell]) { 
            var data = 'attrib="' + datecell + '"';
            classname += ' hastask';
        } else {
            var data = '';
        }
        cell += '<div ' + data + ' class="' + classname + '">' + i + '</div>';
    }
    daysEl.innerHTML = cell;
}


////////////////////////////////////// tasks block

function showTasks(event) {
    var days = daysEl.querySelectorAll('.day');
    var targ = event.target;
    var data = targ.getAttribute('attrib');
    for (var i = 0; i < days.length; i++) {
        days[i].classList.remove('active');
    }
    targ.classList.add('active');

    if (tasks[data]) {
        tasksEl.value = tasks[data].join('\n');
    } else {
        tasksEl.value = 'So empty here ):';
    }

    activeEl = daysEl.querySelector('.day.active');
    currentEl.innerHTML = activeEl.innerHTML + ' ' + month_names[month] + ' ' + year;
}

function updateTasks() {
    var note = tasksEl.value.trim();
    
    if (note) {
        activeEl = daysEl.querySelector('.day.active');
        activeEl.classList.add('hastask');
        var newTask = note.split('\n');
        var date = year + '.' + (month + 1) + '.' + activeEl.innerHTML;
        activeEl.setAttribute('attrib', date);
        tasks[date] = newTask;
    }
}

function clearAll(){
    tasksEl.value = 'So empty here ):';
    updateTasks();
    activeEl.classList.remove('hastask');
}


daysEl.addEventListener('click', showTasks);
tasksEl.addEventListener('keyup', updateTasks);
clear.addEventListener('click', clearAll);


//                (╯°□°)╯ ┻━━┻    DONE!!!