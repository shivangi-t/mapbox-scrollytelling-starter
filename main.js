mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFuZ2ktdCIsImEiOiJjamR5aXA3YzkwenozMzNvNnF5MjhzdjF6In0.GpaDJ7tHYevNZkTt533Swg';

var chapters = {
    'part-1': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [72.83333,18.96667],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [77.123767,28.653458],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-4': {
        center: [77.59796,12.96991],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-5': {
        center: [78.46667,17.36667],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-6': {
        center: [72.58,23.03],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-7': {
        center: [80.27,13.09],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-8': {
        center: [88.33778,22.54111],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-9': {
        center: [72.83,21.17],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-10': {
        center: [73.84778,18.52361],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-11': {
        center: [75.86667,26.91667],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-12': {
        center: [80.91583,26.86056],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-13': {
        center: [80.33111,26.4725],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-14': {
        center: [79.08306,21.15389],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-15': {
        center: [83.25,17.7],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-16': {
        center: [75.84722,22.72056],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-17': {
        center: [72.97,19.2],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-18': {
        center: [77.41667,23.25],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-19': {
        center: [77.41667,23.25],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-20': {
        center: [85.14139,25.61],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-21': {
        center: [73.2,22.3],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-22': {
        center: [77.41667,28.66667],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-23': {
        center: [75.84861,30.90833],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-24': {
        center: [76.96667,11],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-25': {
        center: [78.02,27.18],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-26': {
        center: [78.11939,9.91966],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
    'part-27': {
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/shivangi-t/cjdzwcem3a8dv2smonqw0985u',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
