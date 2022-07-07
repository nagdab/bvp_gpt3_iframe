// gsap.registerPlugin(ScrollTrigger);

function setupTypewriter(t) {
	    var HTML = t.innerHTML;

	    t.innerHTML = "";

	    var cursorPosition = 0,
	        tag = "",
	        writingTag = false,
	        tagOpen = false,
	        typeSpeed = 20,
        tempTypeSpeed = 20;

	    var type = function() {
        
	        if (writingTag === true) {
	            tag += HTML[cursorPosition];
	        }

	        if (HTML[cursorPosition] === "<") {
	            tempTypeSpeed = 0;
	            if (tagOpen) {
	                tagOpen = false;
	                writingTag = true;
	            } else {
	                tag = "";
	                tagOpen = true;
	                writingTag = true;
	                tag += HTML[cursorPosition];
	            }
	        }
	        if (!writingTag && tagOpen) {
	            tag.innerHTML += HTML[cursorPosition];
	        }
	        if (!writingTag && !tagOpen) {
	            if (HTML[cursorPosition] === " ") {
	                tempTypeSpeed = 0;
	            }
	            else {
	                tempTypeSpeed = (typeSpeed);
	            }
	            t.innerHTML += HTML[cursorPosition];
	        }
	        if (writingTag === true && HTML[cursorPosition] === ">") {
	            tempTypeSpeed = (typeSpeed);
	            writingTag = false;
	            if (tagOpen) {
	                var newSpan = document.createElement("span");
	                t.appendChild(newSpan);
	                newSpan.innerHTML = tag;
	                tag = newSpan.firstChild;
	            }
	        }

	        cursorPosition += 1;
	        if (cursorPosition < HTML.length - 1) {
	            setTimeout(type, tempTypeSpeed);
	        }

	    };

	    return {
	        type: type
	    };
	}

var typer = document.getElementById('typewriter1');

typewriter1 = setupTypewriter(typer);

// typewriter1.type();

var typer = document.getElementById('typewriter2');

typewriter2 = setupTypewriter(typewriter2);

// typewriter2.type();

var typer = document.getElementById('typewriter3');

typewriter3 = setupTypewriter(typewriter3);

// function type_all() {
// 	typewriter1.type();
// 	typewriter2.type();
// 	typewriter3.type();
// }

let typewriter_map = new Map([
	[document.querySelector("#typewriter1"), typewriter1],
	[document.querySelector("#typewriter2"), typewriter2],
	[document.querySelector("#typewriter3"), typewriter3],
])

var observer1 = new IntersectionObserver(function(entries) {
	console.log(entries);
	entries.forEach(function(entry){
		if (entry.isIntersecting) {
			typewriter_map.get(entry.target).type();
		}
	});
}, { threshold: [0.2] });

observer1.observe(document.querySelector("#typewriter1"));
observer1.observe(document.querySelector("#typewriter2"))
observer1.observe(document.querySelector("#typewriter3"))

// console.log(observer1.takeRecords());


// var observer2 = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true) {
// 		typewriter2.type();
// 		console.log('Element is fully visible in screen');
// 	}
// }, { threshold: [0.2] });

// observer2.observe(document.querySelector("#typerwriter2"));

// var observer3 = new IntersectionObserver(function(entries) {
// 	if(entries[0].isIntersecting === true) {
// 		typewriter3.type();
// 		console.log('Element is fully visible in screen');
// 	}
// }, { threshold: [0.2] });

// observer3.observe(document.querySelector("#typerwriter3"));
