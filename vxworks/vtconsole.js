/* Console using vt100.js
 * Copyright (C) 2008, 2010  Gregor Richards
 * See mit.txt for license. */

/* TODO for UART_16550 input */
function get_isr(ch, vt) {
	vt.write(ch);
	if(10 == ch.charCodeAt(0)) {
		vt.write('--> ');
	}
}

function Console() {
    var consolediv = document.getElementById('console');
    consolediv.innerHTML = "<pre id='console_pre'></pre>";

    this.vt100 = new VT100(80, 25, "console_pre");
	this.vt100.getch_isr_ = get_isr;
	this.vt100.curs_set(1, true);
	this.vt100.noecho();
}

// clear the screen
Console.prototype.clear = function() {
    this.vt100.clear();
    this.vt100.flush();
}

// advance text a line
Console.prototype.newline = function() {
    this.vt100.write("\n");
}

// put a bell
var bell_origbg = false;
Console.prototype.bell = function() {
    if (bell_origbg === false) {
        bell_origbg = document.body.style.backgroundColor;
    }
    document.body.style.backgroundColor = "#FF0000";
    setTimeout(function() {
        document.body.style.backgroundColor = bell_origbg;
    }, 100);
}

// put a character, adjusting the cursor location as possible but not
// flushing it out
Console.prototype.putchar = function(c) {
    c = String.fromCharCode(c);

    // check for bell
    if (c == "\x07") {
        this.bell();

    } else {
        this.vt100.write(c);
    }
}

// flush the output
Console.prototype.flush = function() {
}

// write out text
Console.prototype.write = function(text) {
    // check for bell
    var i;
    for (i = 0; i < text.length; i++) {
        if (text[i] == "\x07") {
            text = text.slice(0, i) + text.slice(i+1);
            i--;
            this.bell();
        }
    }

    this.vt100.write(text);
}
