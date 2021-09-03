const Thumbnails = [
    {
        image: 'no way home.jpeg',
        logo: 'logos/marvel.jpg',
        title: 'SPIDER-MAN: NO WAY HOME - Official Teaser Trailer (HD)',
        info: 'Sony Pictures Entertainment • 56M views • 5 days ago',
        video: 'videos/no way home.mp4',
        views: '56M views • 5 days ago',
        likes: '2.5M',
        dislikes: '17K',
        channel: 'Sony Pictures Entertainment',
        subscriber: '5.26M subscribers',
    },
    {
        image: 'lucifer.jpeg',
        logo: 'logos/netflix.jpg',
        title: 'Lucifer | Final Season Trailer | Netflix India',
        info: 'Netflix India • 653k views • 2 weeks ago',
        video: 'videos/lucifer.mp4',
        views: '653k views • 2 weeks ago',
        likes: '196K',
        dislikes: '1.8K',
        channel: 'Netflix',
        subscriber: '21.1M subscribers',
    },
    {
        image: 'tvd.jpeg',
        logo: 'logos/tvd.jpg',
        title: 'The Vampire Diaries Season 1 Trailer',
        info: 'The Vampire Diaries • 5.3M views • 4 years ago',
        video: 'videos/tvd.mp4',
        views: '5.3M views • 4 years ago',
        likes: '196K',
        dislikes: '1.1K',
        channel: 'The Vampire Diaries',
        subscriber: '25.41M subscribers',
    },
    {
        image: 'original.jpeg',
        logo: 'logos/original.jpg',
        title: 'The Originals Season 1 Trailer',
        info: 'The Originals • 10.5M views • 5 years ago',
        video: 'videos/original.mp4',
        views: '10.5M views • 5 years ago',
        likes: '277K',
        dislikes: '1K',
        channel: 'The Originals',
        subscriber: '13.21M subscribers',
    },
    {
        image: 'shang chi.jpeg',
        logo: 'logos/marvel.jpg',
        title: "Marvel Studios' Shang-Chi and the Legend of the Ten Rings | Official Teaser",
        info: 'Marvel Entertainment • 22M views • 4 months ago',
        video: 'videos/shang chi.mp4',
        views: '22M views • 4 months ago',
        likes: '845K',
        dislikes: '18K',
        channel: 'Marvel Entertainment',
        subscriber: '16.6M subscribers',
    },
    {
        image: 'eternals.jpeg',
        logo: 'logos/marvel.jpg',
        title: "Marvel Studios' Eternals | Final Trailer",
        info: 'Marvel Entertainment • 20M views • 1 week ago',
        video: 'videos/eternals.mp4',
        views: '20M views • 1 week ago',
        likes: '68K',
        dislikes: '4K',
        channel: 'Marvel Entertainment',
        subscriber: '16.6M subscribers',
    },
    {
        image: 'carnage.jpeg',
        logo: 'logos/sony.jpg',
        title: 'VENOM: LET THERE BE CARNAGE - Official Trailer 2 (HD)',
        info: 'Sony Pictures Entertainment • 30M views • 3 week ago',
        video: 'videos/carnage.mp4',
        views: '30M views • 3 week ago',
        likes: '868K',
        dislikes: '11K',
        channel: 'Sony Pictures Entertainment',
        subscriber: '5.26M subscribers',
    },
];

let thumbnail = document.getElementsByClassName('thumbnail');
let playerSection = document.getElementById('player-section');
let video = document.getElementsByTagName('video');
let thumbnailLength = Thumbnails.length;
let playerTitle = document.getElementById('player-title');
let playerViews = document.getElementById('player-views');
let downButton = document.getElementById('downButton');
let likes = document.getElementById('likes');
let dislikes = document.getElementById('dislikes');
let download = document.getElementById('download');
let channelName = document.getElementById('channel-name');
let subscriber = document.getElementById('subscriber');
let playerLogoImage = document.getElementById('player-logo-image');
let fill = document.getElementById('fill');
let subscribe = document.getElementById('subscribe');
let playButton = document.getElementById('playButton');
let timer = document.getElementById('timer');
let close = document.getElementById('close');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let flex = document.getElementById('flex');
let listContent = document.getElementById('list-content');
let listContentThumbnail = document.getElementsByClassName('list-content-thumbnail');
let fullscreen = document.getElementById('fullscreen');
let isPlay = true;
let fullscreenMode = document.getElementById('fullscreen-mode');
let fullscreenClose = document.getElementById('fullscreen-close');
let exitFullscreen = document.getElementById('exit-fullscreen');
let fullscreenPlaybutton = document.getElementById('fullscreen-playButton');
let fullscreenBackward = document.getElementById('fullscreen-backward');
let fullscreenForward = document.getElementById('fullscreen-forward');
let input = document.getElementById('input');
let fullscreenTimer = document.getElementById('fullscreen-timer');
let fullscreenTitle = document.getElementById('fullscreen-title');
let isVisible = true;

window.onload = () => {

    // when page gets load it creates the playable videos 
    for (let i = 0; i < thumbnailLength; i++) {
        createVideos(i);        //to create videos 
        Thumnails(i);           //to add functionality of onclick
    }

    ListContent();
    ListContentThumnail();

    // to start the timer once the page gets load  
    let interval = setInterval(() => {
        fill.style.width = `${(video[0].currentTime / video[0].duration) * 100}%`;
        if (fill.style.width == '100%') {
            playButton.className = 'fas fa-play';
            isPlay = false;
        }
        timer.innerHTML = `${Math.floor(video[0].currentTime / 60)}:${addZero(Math.floor(video[0].currentTime % 60))} / ${Math.floor(video[0].duration / 60)}:${addZero(Math.floor(video[0].duration % 60))}`;
        fullscreenTimer.innerHTML = `${Math.floor(video[1].currentTime / 60)}:${addZero(Math.floor(video[1].currentTime % 60))} / ${Math.floor(video[1].duration / 60)}:${addZero(Math.floor(video[1].duration % 60))}`;
        input.value = (video[1].currentTime / video[1].duration) * 100;
        if (video[1].currentTime == video[1].duration) {
            fullscreenPlaybutton.className = 'fas fa-play';
            isPlay = false;
        }
    }, 1000);
}

function ThumbnailsFunction(value) {
    video[0].src = Thumbnails[value].video;
    video[0].play();
    playerTitle.innerHTML = Thumbnails[value].title;
    playerViews.innerHTML = Thumbnails[value].views;
    likes.innerHTML = Thumbnails[value].likes;
    dislikes.innerHTML = Thumbnails[value].dislikes;
    download.href = Thumbnails[value].video;
    channelName.innerHTML = Thumbnails[value].channel;
    subscriber.innerHTML = Thumbnails[value].subscriber;
    playButton.className = 'fas fa-pause';
    isPlay = true;
    playerLogoImage.src = Thumbnails[value].logo;
    fullscreenTitle.innerHTML = Thumbnails[value].title;
}

// this gives the functionality to the players thumbnails 
function ListContentThumnail() {
    for (let index = 0; index < thumbnailLength; index++) {
        listContentThumbnail[index].addEventListener('click', () => {
            ThumbnailsFunction(index);
        });
    }
}
// to show the play options when player gets started 
function ListContent() {
    for (let i = 0; i < thumbnailLength; i++) {
        let content = document.createElement('div');
        content.innerHTML = `
                         <div class="list-content-thumbnail">   
                             <img src="thumbnail/${Thumbnails[i].image}">
                         </div>
                         <div class="data">
                             <div class="logo">
                                 <img src="${Thumbnails[i].logo}">
                             </div>
                             <div class="text">
                                 <div>${Thumbnails[i].title}</div>
                                 <div>${Thumbnails[i].info}</div>
                             </div>
                             <div class="dots">
                                 <i class="fa fa-ellipsis-v"></i>
                             </div>
                         </div>`;
        listContent.appendChild(content);
    }
}
// to create videos when screen gets load 
function createVideos(value) {
    let article = document.getElementById('article');
    let section = document.createElement('section');
    section.innerHTML = `<div class="thumbnail">
                             <img src="thumbnail/${Thumbnails[value].image}">
                         </div>
                         <div class="data">
                             <div class="logo">
                                 <img src="${Thumbnails[value].logo}">
                             </div>
                             <div class="text">
                                 <div>${Thumbnails[value].title}</div>
                                 <div>${Thumbnails[value].info}</div>
                             </div>
                             <div class="dots">
                                 <i class="fa fa-ellipsis-v"></i>
                             </div>
                         </div>`;
    article.appendChild(section);
}
// to give the functionality to the videos content 
function Thumnails(i) {
    thumbnail[i].addEventListener('click', () => {
        playerSection.style.display = 'block';
        ThumbnailsFunction(i);      //hold controls statement
        TimeOut();      //to hide the controls automatically after 2.5sec
    });
}

// to show/hide play and pause button 

function VideoHideAndDisplay(value) {
    playButton.style.display = value;
    forward.style.display = value;
    backward.style.display = value;
    close.style.display = value;
    timer.style.display = value;
    fullscreen.style.display = value;
}

video[0].addEventListener('click', () => {
    flex.style.display = 'block';
    VideoHideAndDisplay('inline');
    TimeOut();
});
flex.addEventListener('click', () => {
    flex.style.display = 'none';
    VideoHideAndDisplay('none');
});

// to stop and close the player 
downButton.addEventListener('click', () => {
    playerSection.style.display = 'none';
    video[0].pause();
});
close.addEventListener('click', () => {
    playerSection.style.display = 'none';
    video[0].pause();
});

// to add zero in timer of player 
function addZero(value) {
    if (value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

// to skip 10 seconds of videos 
forward.addEventListener('click', () => {
    video[0].currentTime += 10;
    TimeOut();
});
backward.addEventListener('click', () => {
    video[0].currentTime -= 10;
    TimeOut();
});

// to play and pause video 
playButton.addEventListener('click', () => {
    if (isPlay) {
        video[0].pause();
        playButton.className = 'fas fa-play';
        isPlay = false;
    } else {
        video[0].play();
        playButton.className = 'fas fa-pause';
        isPlay = true;
    }
    TimeOut();
});

// fullscreen button goes here 
fullscreen.addEventListener('click', () => {
    video[0].pause();
    playButton.className = 'fas fa-play';
    fullscreenMode.style.display = 'flex';
    video[1].src = video[0].src;
    video[1].currentTime = video[0].currentTime;
    video[1].play();
    fullscreenPlaybutton.className = 'fas fa-pause';
    isPlay = true;
    FullscreenTimeout();
})

// to subscribe the channels 
subscribe.addEventListener('click', () => {
    if (subscribe.innerHTML == 'SUBSCRIBE') {
        subscribe.innerHTML = 'SUBSCRIBED';
        subscribe.style.color = 'rgba(255,255,255,0.4)';
    } else {
        subscribe.innerHTML = 'SUBSCRIBE';
        subscribe.style.color = 'red';
    }
});

// fullscreen mode goes here 

// function to close fullscreen mode 
function CloseFullscreen() {
    fullscreenMode.style.display = 'none';
    video[1].pause();
    fullscreenPlaybutton.className = 'fas fa-play'
    video[0].currentTime = video[1].currentTime;
    video[0].play();
    playButton.className = 'fas fa-pause';
    isPlay = true;
    flex.style.display = 'block';
    VideoHideAndDisplay('inline');
    TimeOut();
}
// adding event listener in closing buttons 
exitFullscreen.addEventListener('click', CloseFullscreen);
fullscreenClose.addEventListener('click', CloseFullscreen);
// play pause function for fullscreen goes here 
fullscreenPlaybutton.addEventListener('click', () => {
    if (isPlay) {
        video[1].pause();
        fullscreenPlaybutton.className = 'fas fa-play';
        isPlay = false;
    } else {
        video[1].play();
        fullscreenPlaybutton.className = 'fas fa-pause';
        isPlay = true;
    }
    FullscreenTimeout();
});
//forward and backward button in fullscreen goes here 
fullscreenForward.addEventListener('click', () => {
    video[1].currentTime += 10;
    FullscreenTimeout();
});
fullscreenBackward.addEventListener('click', () => {
    video[1].currentTime -= 10;
    FullscreenTimeout();
});
// input range goes here 
input.addEventListener('change', () => {
    video[1].currentTime = (input.value * video[1].duration) / 100;
    FullscreenTimeout();
});
//video controls fullscreen show/hide features 
function VideoFullscreenControl(value) {
    fullscreenBackward.style.display = value;
    fullscreenForward.style.display = value;
    fullscreenPlaybutton.style.display = value;
    fullscreenTimer.style.display = value;
    fullscreenClose.style.display = value;
    exitFullscreen.style.display = value;
    input.style.display = value;
    fullscreenTitle.style.display = value;
    isVisible = true;
}
video[1].addEventListener('click', () => {
    if (isVisible) {
        VideoFullscreenControl('none');
        isVisible = false;
    } else {
        VideoFullscreenControl('block');
        isVisible = true;
        FullscreenTimeout();
    }
});

let SetTimeOut = '';

function TimeOut() {
    if (SetTimeOut != '') {
        clearTimeout(SetTimeOut);
    }
    SetTimeOut = setTimeout(() => {
        flex.style.display = 'none';
        VideoHideAndDisplay('none');
    }, 2500);
}

let fullscreenTimeout = '';

function FullscreenTimeout() {
    if (fullscreenTimeout != '') {
        clearTimeout(fullscreenTimeout);
    }
    fullscreenTimeout = setTimeout(() => {
        VideoFullscreenControl('none');
        isVisible = false;
    }, 2500);
}