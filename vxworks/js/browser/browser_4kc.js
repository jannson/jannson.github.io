 // ./common/OctetBuffer.js:0
 // ./common/OctetBuffer.js:1
 // ./common/OctetBuffer.js:2
function OctetBuffer ( size ) { // ./common/OctetBuffer.js:3
 // ./common/OctetBuffer.js:4
 // ./common/OctetBuffer.js:5
 // ./common/OctetBuffer.js:6
 // ./common/OctetBuffer.js:7
    if(size < 0){ // ./common/OctetBuffer.js:8
        throw ("invalid OctetBuffer size") // ./common/OctetBuffer.js:9
    } // ./common/OctetBuffer.js:10
 // ./common/OctetBuffer.js:11
    this.data = new Array(Math.floor(size/4)); // ./common/OctetBuffer.js:12
    this.size = size; // ./common/OctetBuffer.js:13
 // ./common/OctetBuffer.js:14
    this.getSize = function () { return this.size; } // ./common/OctetBuffer.js:15
 // ./common/OctetBuffer.js:16
 // ./common/OctetBuffer.js:17
    this.getUInt16BE = function(n) { // ./common/OctetBuffer.js:18
        return this.getByte(n) * 256 + // ./common/OctetBuffer.js:19
               this.getByte(n+1); // ./common/OctetBuffer.js:20
    } // ./common/OctetBuffer.js:21
 // ./common/OctetBuffer.js:22
    this.putUInt16BE = function (n,val) { // ./common/OctetBuffer.js:23
        this.putByte( n+1 ,  val &  0xff ); // ./common/OctetBuffer.js:24
        this.putByte( n, (val & 0xff00) >>> 8); // ./common/OctetBuffer.js:25
    } // ./common/OctetBuffer.js:26
 // ./common/OctetBuffer.js:27
 // ./common/OctetBuffer.js:28
    this.getUInt32BE = function (n) { // ./common/OctetBuffer.js:29
 // ./common/OctetBuffer.js:30
        var i = n&3; // ./common/OctetBuffer.js:31
        if(i == 0){ // ./common/OctetBuffer.js:32
             return this.data[n>>2] >>> 0; // ./common/OctetBuffer.js:33
        } // ./common/OctetBuffer.js:34
 // ./common/OctetBuffer.js:35
        return this.getByte(n+3) + // ./common/OctetBuffer.js:36
               this.getByte(n+2) * 256 + // ./common/OctetBuffer.js:37
               this.getByte(n+1) * 65536 + // ./common/OctetBuffer.js:38
               this.getByte(n)   * 16777216; // ./common/OctetBuffer.js:39
    } // ./common/OctetBuffer.js:40
 // ./common/OctetBuffer.js:41
 // ./common/OctetBuffer.js:42
 // ./common/OctetBuffer.js:43
    this.getUInt32LE = function(n) { // ./common/OctetBuffer.js:44
        return this.getByte(n+3) * 16777216 + // ./common/OctetBuffer.js:45
               this.getByte(n+2) * 65536 + // ./common/OctetBuffer.js:46
               this.getByte(n+1) * 256 + // ./common/OctetBuffer.js:47
               this.getByte(n); // ./common/OctetBuffer.js:48
    } // ./common/OctetBuffer.js:49
 // ./common/OctetBuffer.js:50
    this.putUInt32LE = function (n,val) { // ./common/OctetBuffer.js:51
 // ./common/OctetBuffer.js:52
        this.putByte( n ,  val &  0xff ); // ./common/OctetBuffer.js:53
        this.putByte( n+1, (val & 0xff00) >>> 8); // ./common/OctetBuffer.js:54
        this.putByte( n+2, (val & 0xff0000) >>> 16); // ./common/OctetBuffer.js:55
        this.putByte( n+3, (val & 0xff000000) >>> 24); // ./common/OctetBuffer.js:56
 // ./common/OctetBuffer.js:57
    } // ./common/OctetBuffer.js:58
 // ./common/OctetBuffer.js:59
    this.putUInt32BE = function (n,val) { // ./common/OctetBuffer.js:60
        var i = n&3; //mod 4 // ./common/OctetBuffer.js:61
        if(i == 0){ // ./common/OctetBuffer.js:62
            this.data[n>>2] = (val&(0xffffffff)) >>> 0; // ./common/OctetBuffer.js:63
            return; // ./common/OctetBuffer.js:64
        } // ./common/OctetBuffer.js:65
 // ./common/OctetBuffer.js:66
        this.putByte( n+3 , val & 0xff); // ./common/OctetBuffer.js:67
        this.putByte( n+2, (val & 0xff00) >>> 8); // ./common/OctetBuffer.js:68
        this.putByte( n+1, (val & 0xff0000) >>> 16); // ./common/OctetBuffer.js:69
        this.putByte( n+0, (val & 0xff000000) >>> 24); // ./common/OctetBuffer.js:70
 // ./common/OctetBuffer.js:71
    } // ./common/OctetBuffer.js:72
 // ./common/OctetBuffer.js:73
 // ./common/OctetBuffer.js:74
    this.getByte = function (n) { // ./common/OctetBuffer.js:75
        var mod4 = n&3; // ./common/OctetBuffer.js:76
        var idx =  (n - (mod4)) >> 2; // ./common/OctetBuffer.js:77
        var shiftAmount = (3 - mod4 ) << 3; // ./common/OctetBuffer.js:78
        return ( this.data[idx] & ( 0xff << shiftAmount ) ) >>> shiftAmount; // ./common/OctetBuffer.js:79
    } // ./common/OctetBuffer.js:80
 // ./common/OctetBuffer.js:81
    this.putByte = function (n,b) { // ./common/OctetBuffer.js:82
        var mod4 = n&3; // ./common/OctetBuffer.js:83
        var idx =  (n - mod4) >> 2; // ./common/OctetBuffer.js:84
        var shiftAmount = (3 - (mod4) ) << 3; // ./common/OctetBuffer.js:85
        this.data[idx] = ( (this.data[idx] & ~(0xff << shiftAmount)) | ( b << shiftAmount ) ); // ./common/OctetBuffer.js:86
    } // ./common/OctetBuffer.js:87
 // ./common/OctetBuffer.js:88
    this.toString = function () { // ./common/OctetBuffer.js:89
        ret = '' // ./common/OctetBuffer.js:90
        for(var i = 0; i < this.size ; i++){ // ./common/OctetBuffer.js:91
            ret += "0x"+this.getByte(i).toString(16) +" "; // ./common/OctetBuffer.js:92
        } // ./common/OctetBuffer.js:93
        return ret; // ./common/OctetBuffer.js:94
    } // ./common/OctetBuffer.js:95
 // ./common/OctetBuffer.js:96
} // ./common/OctetBuffer.js:97
 // ./common/OctetBuffer.js:98
 // ./common/OctetBuffer.js:99
LOG_LEVEL = 1 // ./browser/browser_log.js:0
 // ./browser/browser_log.js:1
web_console = null;
function terminal(output) // ./browser/browser_log.js:2
{ // ./browser/browser_log.js:3
	for(var i = 0; i < output.length; i++) {
		web_console.putchar(output.charCodeAt(i));
	}
} // ./browser/browser_log.js:5
 // ./browser/browser_log.js:6
 // ./browser/browser_log.js:7
function DEBUG (m) { // ./browser/browser_log.js:8
    if(LOG_LEVEL <= 0){ // ./browser/browser_log.js:9
        terminal("DEBUG: " + m + "\n"); // ./browser/browser_log.js:10
    } // ./browser/browser_log.js:11
} // ./browser/browser_log.js:12
 // ./browser/browser_log.js:13
function INFO(m) { // ./browser/browser_log.js:14
    if(LOG_LEVEL <= 1){ // ./browser/browser_log.js:15
        terminal("INFO: " + m + "\n"); // ./browser/browser_log.js:16
    } // ./browser/browser_log.js:17
} // ./browser/browser_log.js:18
 // ./browser/browser_log.js:19
function WARN(m) { // ./browser/browser_log.js:20
    if(LOG_LEVEL <= 2){ // ./browser/browser_log.js:21
        terminal("WARN: " + m + "\n"); // ./browser/browser_log.js:22
    } // ./browser/browser_log.js:23
} // ./browser/browser_log.js:24
 // ./browser/browser_log.js:25
function ERROR(m) { // ./browser/browser_log.js:26
    if(LOG_LEVEL <= 3){ // ./browser/browser_log.js:27
        terminal("ERROR: " + m + "\n"); // ./browser/browser_log.js:28
    } // ./browser/browser_log.js:29
} // ./browser/browser_log.js:30
 // ./common/autogen/doOp.autogen:0
	function doOp(op) { // ./common/autogen/doOp.autogen:1
 // ./common/autogen/doOp.autogen:2
 // ./common/autogen/doOp.autogen:3
/* 0b11111100000000000000000000000000 */ // ./common/autogen/doOp.autogen:4
switch((op & 0xfc000000) >>> 0) // ./common/autogen/doOp.autogen:5
{ // ./common/autogen/doOp.autogen:6
 // ./common/autogen/doOp.autogen:7
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:8
 // ./common/autogen/doOp.autogen:9
 // ./common/autogen/doOp.autogen:10
/* 0b111111 */ // ./common/autogen/doOp.autogen:11
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:12
{ // ./common/autogen/doOp.autogen:13
 // ./common/autogen/doOp.autogen:14
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:15
						this.SLL(op); // ./common/autogen/doOp.autogen:16
						return; // ./common/autogen/doOp.autogen:17
 // ./common/autogen/doOp.autogen:18
 // ./common/autogen/doOp.autogen:19
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:20
						this.b(op); // ./common/autogen/doOp.autogen:21
						return; // ./common/autogen/doOp.autogen:22
 // ./common/autogen/doOp.autogen:23
 // ./common/autogen/doOp.autogen:24
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:25
						this.SRL(op); // ./common/autogen/doOp.autogen:26
						return; // ./common/autogen/doOp.autogen:27
 // ./common/autogen/doOp.autogen:28
 // ./common/autogen/doOp.autogen:29
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:30
						this.SRA(op); // ./common/autogen/doOp.autogen:31
						return; // ./common/autogen/doOp.autogen:32
 // ./common/autogen/doOp.autogen:33
 // ./common/autogen/doOp.autogen:34
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:35
						this.SLLV(op); // ./common/autogen/doOp.autogen:36
						return; // ./common/autogen/doOp.autogen:37
 // ./common/autogen/doOp.autogen:38
 // ./common/autogen/doOp.autogen:39
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:40
						this.a(op); // ./common/autogen/doOp.autogen:41
						return; // ./common/autogen/doOp.autogen:42
 // ./common/autogen/doOp.autogen:43
 // ./common/autogen/doOp.autogen:44
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:45
						this.SRLV(op); // ./common/autogen/doOp.autogen:46
						return; // ./common/autogen/doOp.autogen:47
 // ./common/autogen/doOp.autogen:48
 // ./common/autogen/doOp.autogen:49
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:50
						this.SRAV(op); // ./common/autogen/doOp.autogen:51
						return; // ./common/autogen/doOp.autogen:52
 // ./common/autogen/doOp.autogen:53
 // ./common/autogen/doOp.autogen:54
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:55
						this.JR(op); // ./common/autogen/doOp.autogen:56
						return; // ./common/autogen/doOp.autogen:57
 // ./common/autogen/doOp.autogen:58
 // ./common/autogen/doOp.autogen:59
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:60
						this.JALR(op); // ./common/autogen/doOp.autogen:61
						return; // ./common/autogen/doOp.autogen:62
 // ./common/autogen/doOp.autogen:63
 // ./common/autogen/doOp.autogen:64
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:65
						this.MOVZ(op); // ./common/autogen/doOp.autogen:66
						return; // ./common/autogen/doOp.autogen:67
 // ./common/autogen/doOp.autogen:68
 // ./common/autogen/doOp.autogen:69
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:70
						this.MOVN(op); // ./common/autogen/doOp.autogen:71
						return; // ./common/autogen/doOp.autogen:72
 // ./common/autogen/doOp.autogen:73
 // ./common/autogen/doOp.autogen:74
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:75
						this.SYSCALL(op); // ./common/autogen/doOp.autogen:76
						return; // ./common/autogen/doOp.autogen:77
 // ./common/autogen/doOp.autogen:78
 // ./common/autogen/doOp.autogen:79
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:80
						this.BREAK(op); // ./common/autogen/doOp.autogen:81
						return; // ./common/autogen/doOp.autogen:82
 // ./common/autogen/doOp.autogen:83
 // ./common/autogen/doOp.autogen:84
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:85
						this.a(op); // ./common/autogen/doOp.autogen:86
						return; // ./common/autogen/doOp.autogen:87
 // ./common/autogen/doOp.autogen:88
 // ./common/autogen/doOp.autogen:89
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:90
						this.SYNC(op); // ./common/autogen/doOp.autogen:91
						return; // ./common/autogen/doOp.autogen:92
 // ./common/autogen/doOp.autogen:93
 // ./common/autogen/doOp.autogen:94
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:95
						this.MFHI(op); // ./common/autogen/doOp.autogen:96
						return; // ./common/autogen/doOp.autogen:97
 // ./common/autogen/doOp.autogen:98
 // ./common/autogen/doOp.autogen:99
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:100
						this.MTHI(op); // ./common/autogen/doOp.autogen:101
						return; // ./common/autogen/doOp.autogen:102
 // ./common/autogen/doOp.autogen:103
 // ./common/autogen/doOp.autogen:104
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:105
						this.MFLO(op); // ./common/autogen/doOp.autogen:106
						return; // ./common/autogen/doOp.autogen:107
 // ./common/autogen/doOp.autogen:108
 // ./common/autogen/doOp.autogen:109
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:110
						this.MTLO(op); // ./common/autogen/doOp.autogen:111
						return; // ./common/autogen/doOp.autogen:112
 // ./common/autogen/doOp.autogen:113
 // ./common/autogen/doOp.autogen:114
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:115
						this.a(op); // ./common/autogen/doOp.autogen:116
						return; // ./common/autogen/doOp.autogen:117
 // ./common/autogen/doOp.autogen:118
 // ./common/autogen/doOp.autogen:119
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:120
						this.a(op); // ./common/autogen/doOp.autogen:121
						return; // ./common/autogen/doOp.autogen:122
 // ./common/autogen/doOp.autogen:123
 // ./common/autogen/doOp.autogen:124
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:125
						this.a(op); // ./common/autogen/doOp.autogen:126
						return; // ./common/autogen/doOp.autogen:127
 // ./common/autogen/doOp.autogen:128
 // ./common/autogen/doOp.autogen:129
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:130
						this.a(op); // ./common/autogen/doOp.autogen:131
						return; // ./common/autogen/doOp.autogen:132
 // ./common/autogen/doOp.autogen:133
 // ./common/autogen/doOp.autogen:134
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:135
						this.MULT(op); // ./common/autogen/doOp.autogen:136
						return; // ./common/autogen/doOp.autogen:137
 // ./common/autogen/doOp.autogen:138
 // ./common/autogen/doOp.autogen:139
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:140
						this.MULTU(op); // ./common/autogen/doOp.autogen:141
						return; // ./common/autogen/doOp.autogen:142
 // ./common/autogen/doOp.autogen:143
 // ./common/autogen/doOp.autogen:144
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:145
						this.DIV(op); // ./common/autogen/doOp.autogen:146
						return; // ./common/autogen/doOp.autogen:147
 // ./common/autogen/doOp.autogen:148
 // ./common/autogen/doOp.autogen:149
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:150
						this.DIVU(op); // ./common/autogen/doOp.autogen:151
						return; // ./common/autogen/doOp.autogen:152
 // ./common/autogen/doOp.autogen:153
 // ./common/autogen/doOp.autogen:154
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:155
						this.a(op); // ./common/autogen/doOp.autogen:156
						return; // ./common/autogen/doOp.autogen:157
 // ./common/autogen/doOp.autogen:158
 // ./common/autogen/doOp.autogen:159
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:160
						this.a(op); // ./common/autogen/doOp.autogen:161
						return; // ./common/autogen/doOp.autogen:162
 // ./common/autogen/doOp.autogen:163
 // ./common/autogen/doOp.autogen:164
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:165
						this.a(op); // ./common/autogen/doOp.autogen:166
						return; // ./common/autogen/doOp.autogen:167
 // ./common/autogen/doOp.autogen:168
 // ./common/autogen/doOp.autogen:169
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:170
						this.a(op); // ./common/autogen/doOp.autogen:171
						return; // ./common/autogen/doOp.autogen:172
 // ./common/autogen/doOp.autogen:173
 // ./common/autogen/doOp.autogen:174
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:175
						this.ADD(op); // ./common/autogen/doOp.autogen:176
						return; // ./common/autogen/doOp.autogen:177
 // ./common/autogen/doOp.autogen:178
 // ./common/autogen/doOp.autogen:179
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:180
						this.ADDU(op); // ./common/autogen/doOp.autogen:181
						return; // ./common/autogen/doOp.autogen:182
 // ./common/autogen/doOp.autogen:183
 // ./common/autogen/doOp.autogen:184
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:185
						this.SUB(op); // ./common/autogen/doOp.autogen:186
						return; // ./common/autogen/doOp.autogen:187
 // ./common/autogen/doOp.autogen:188
 // ./common/autogen/doOp.autogen:189
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:190
						this.SUBU(op); // ./common/autogen/doOp.autogen:191
						return; // ./common/autogen/doOp.autogen:192
 // ./common/autogen/doOp.autogen:193
 // ./common/autogen/doOp.autogen:194
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:195
						this.AND(op); // ./common/autogen/doOp.autogen:196
						return; // ./common/autogen/doOp.autogen:197
 // ./common/autogen/doOp.autogen:198
 // ./common/autogen/doOp.autogen:199
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:200
						this.OR(op); // ./common/autogen/doOp.autogen:201
						return; // ./common/autogen/doOp.autogen:202
 // ./common/autogen/doOp.autogen:203
 // ./common/autogen/doOp.autogen:204
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:205
						this.XOR(op); // ./common/autogen/doOp.autogen:206
						return; // ./common/autogen/doOp.autogen:207
 // ./common/autogen/doOp.autogen:208
 // ./common/autogen/doOp.autogen:209
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:210
						this.NOR(op); // ./common/autogen/doOp.autogen:211
						return; // ./common/autogen/doOp.autogen:212
 // ./common/autogen/doOp.autogen:213
 // ./common/autogen/doOp.autogen:214
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:215
						this.a(op); // ./common/autogen/doOp.autogen:216
						return; // ./common/autogen/doOp.autogen:217
 // ./common/autogen/doOp.autogen:218
 // ./common/autogen/doOp.autogen:219
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:220
						this.a(op); // ./common/autogen/doOp.autogen:221
						return; // ./common/autogen/doOp.autogen:222
 // ./common/autogen/doOp.autogen:223
 // ./common/autogen/doOp.autogen:224
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:225
						this.SLT(op); // ./common/autogen/doOp.autogen:226
						return; // ./common/autogen/doOp.autogen:227
 // ./common/autogen/doOp.autogen:228
 // ./common/autogen/doOp.autogen:229
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:230
						this.SLTU(op); // ./common/autogen/doOp.autogen:231
						return; // ./common/autogen/doOp.autogen:232
 // ./common/autogen/doOp.autogen:233
 // ./common/autogen/doOp.autogen:234
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:235
						this.a(op); // ./common/autogen/doOp.autogen:236
						return; // ./common/autogen/doOp.autogen:237
 // ./common/autogen/doOp.autogen:238
 // ./common/autogen/doOp.autogen:239
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:240
						this.a(op); // ./common/autogen/doOp.autogen:241
						return; // ./common/autogen/doOp.autogen:242
 // ./common/autogen/doOp.autogen:243
 // ./common/autogen/doOp.autogen:244
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:245
						this.a(op); // ./common/autogen/doOp.autogen:246
						return; // ./common/autogen/doOp.autogen:247
 // ./common/autogen/doOp.autogen:248
 // ./common/autogen/doOp.autogen:249
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:250
						this.a(op); // ./common/autogen/doOp.autogen:251
						return; // ./common/autogen/doOp.autogen:252
 // ./common/autogen/doOp.autogen:253
 // ./common/autogen/doOp.autogen:254
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:255
						this.TGE(op); // ./common/autogen/doOp.autogen:256
						return; // ./common/autogen/doOp.autogen:257
 // ./common/autogen/doOp.autogen:258
 // ./common/autogen/doOp.autogen:259
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:260
						this.TGEU(op); // ./common/autogen/doOp.autogen:261
						return; // ./common/autogen/doOp.autogen:262
 // ./common/autogen/doOp.autogen:263
 // ./common/autogen/doOp.autogen:264
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:265
						this.TLT(op); // ./common/autogen/doOp.autogen:266
						return; // ./common/autogen/doOp.autogen:267
 // ./common/autogen/doOp.autogen:268
 // ./common/autogen/doOp.autogen:269
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:270
						this.TLTU(op); // ./common/autogen/doOp.autogen:271
						return; // ./common/autogen/doOp.autogen:272
 // ./common/autogen/doOp.autogen:273
 // ./common/autogen/doOp.autogen:274
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:275
						this.TEQ(op); // ./common/autogen/doOp.autogen:276
						return; // ./common/autogen/doOp.autogen:277
 // ./common/autogen/doOp.autogen:278
 // ./common/autogen/doOp.autogen:279
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:280
						this.a(op); // ./common/autogen/doOp.autogen:281
						return; // ./common/autogen/doOp.autogen:282
 // ./common/autogen/doOp.autogen:283
 // ./common/autogen/doOp.autogen:284
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:285
						this.TNE(op); // ./common/autogen/doOp.autogen:286
						return; // ./common/autogen/doOp.autogen:287
 // ./common/autogen/doOp.autogen:288
 // ./common/autogen/doOp.autogen:289
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:290
						this.a(op); // ./common/autogen/doOp.autogen:291
						return; // ./common/autogen/doOp.autogen:292
 // ./common/autogen/doOp.autogen:293
 // ./common/autogen/doOp.autogen:294
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:295
						this.a(op); // ./common/autogen/doOp.autogen:296
						return; // ./common/autogen/doOp.autogen:297
 // ./common/autogen/doOp.autogen:298
 // ./common/autogen/doOp.autogen:299
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:300
						this.a(op); // ./common/autogen/doOp.autogen:301
						return; // ./common/autogen/doOp.autogen:302
 // ./common/autogen/doOp.autogen:303
 // ./common/autogen/doOp.autogen:304
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:305
						this.a(op); // ./common/autogen/doOp.autogen:306
						return; // ./common/autogen/doOp.autogen:307
 // ./common/autogen/doOp.autogen:308
 // ./common/autogen/doOp.autogen:309
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:310
						this.a(op); // ./common/autogen/doOp.autogen:311
						return; // ./common/autogen/doOp.autogen:312
 // ./common/autogen/doOp.autogen:313
 // ./common/autogen/doOp.autogen:314
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:315
						this.a(op); // ./common/autogen/doOp.autogen:316
						return; // ./common/autogen/doOp.autogen:317
 // ./common/autogen/doOp.autogen:318
 // ./common/autogen/doOp.autogen:319
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:320
						this.a(op); // ./common/autogen/doOp.autogen:321
						return; // ./common/autogen/doOp.autogen:322
 // ./common/autogen/doOp.autogen:323
 // ./common/autogen/doOp.autogen:324
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:325
						this.a(op); // ./common/autogen/doOp.autogen:326
						return; // ./common/autogen/doOp.autogen:327
 // ./common/autogen/doOp.autogen:328
 // ./common/autogen/doOp.autogen:329
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:330
						this.a(op); // ./common/autogen/doOp.autogen:331
						return; // ./common/autogen/doOp.autogen:332
 // ./common/autogen/doOp.autogen:333
 // ./common/autogen/doOp.autogen:334
	default: // ./common/autogen/doOp.autogen:335
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:336
} // ./common/autogen/doOp.autogen:337
 // ./common/autogen/doOp.autogen:338
; // ./common/autogen/doOp.autogen:339
						return; // ./common/autogen/doOp.autogen:340
 // ./common/autogen/doOp.autogen:341
 // ./common/autogen/doOp.autogen:342
					case 0x4000000: /*0b100000000000000000000000000*/ // ./common/autogen/doOp.autogen:343
 // ./common/autogen/doOp.autogen:344
 // ./common/autogen/doOp.autogen:345
/* 0b111110000000000000000 */ // ./common/autogen/doOp.autogen:346
switch((op & 0x1f0000) >>> 0) // ./common/autogen/doOp.autogen:347
{ // ./common/autogen/doOp.autogen:348
 // ./common/autogen/doOp.autogen:349
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:350
						this.BLTZ(op); // ./common/autogen/doOp.autogen:351
						return; // ./common/autogen/doOp.autogen:352
 // ./common/autogen/doOp.autogen:353
 // ./common/autogen/doOp.autogen:354
					case 0x10000: /*0b10000000000000000*/ // ./common/autogen/doOp.autogen:355
						this.BGEZ(op); // ./common/autogen/doOp.autogen:356
						return; // ./common/autogen/doOp.autogen:357
 // ./common/autogen/doOp.autogen:358
 // ./common/autogen/doOp.autogen:359
					case 0x20000: /*0b100000000000000000*/ // ./common/autogen/doOp.autogen:360
						this.BLTZL(op); // ./common/autogen/doOp.autogen:361
						return; // ./common/autogen/doOp.autogen:362
 // ./common/autogen/doOp.autogen:363
 // ./common/autogen/doOp.autogen:364
					case 0x30000: /*0b110000000000000000*/ // ./common/autogen/doOp.autogen:365
						this.BGEZL(op); // ./common/autogen/doOp.autogen:366
						return; // ./common/autogen/doOp.autogen:367
 // ./common/autogen/doOp.autogen:368
 // ./common/autogen/doOp.autogen:369
					case 0x40000: /*0b1000000000000000000*/ // ./common/autogen/doOp.autogen:370
						this.a(op); // ./common/autogen/doOp.autogen:371
						return; // ./common/autogen/doOp.autogen:372
 // ./common/autogen/doOp.autogen:373
 // ./common/autogen/doOp.autogen:374
					case 0x50000: /*0b1010000000000000000*/ // ./common/autogen/doOp.autogen:375
						this.a(op); // ./common/autogen/doOp.autogen:376
						return; // ./common/autogen/doOp.autogen:377
 // ./common/autogen/doOp.autogen:378
 // ./common/autogen/doOp.autogen:379
					case 0x60000: /*0b1100000000000000000*/ // ./common/autogen/doOp.autogen:380
						this.a(op); // ./common/autogen/doOp.autogen:381
						return; // ./common/autogen/doOp.autogen:382
 // ./common/autogen/doOp.autogen:383
 // ./common/autogen/doOp.autogen:384
					case 0x70000: /*0b1110000000000000000*/ // ./common/autogen/doOp.autogen:385
						this.a(op); // ./common/autogen/doOp.autogen:386
						return; // ./common/autogen/doOp.autogen:387
 // ./common/autogen/doOp.autogen:388
 // ./common/autogen/doOp.autogen:389
					case 0x80000: /*0b10000000000000000000*/ // ./common/autogen/doOp.autogen:390
						this.TGEI(op); // ./common/autogen/doOp.autogen:391
						return; // ./common/autogen/doOp.autogen:392
 // ./common/autogen/doOp.autogen:393
 // ./common/autogen/doOp.autogen:394
					case 0x90000: /*0b10010000000000000000*/ // ./common/autogen/doOp.autogen:395
						this.TGEIU(op); // ./common/autogen/doOp.autogen:396
						return; // ./common/autogen/doOp.autogen:397
 // ./common/autogen/doOp.autogen:398
 // ./common/autogen/doOp.autogen:399
					case 0xa0000: /*0b10100000000000000000*/ // ./common/autogen/doOp.autogen:400
						this.TLTI(op); // ./common/autogen/doOp.autogen:401
						return; // ./common/autogen/doOp.autogen:402
 // ./common/autogen/doOp.autogen:403
 // ./common/autogen/doOp.autogen:404
					case 0xb0000: /*0b10110000000000000000*/ // ./common/autogen/doOp.autogen:405
						this.TLTIU(op); // ./common/autogen/doOp.autogen:406
						return; // ./common/autogen/doOp.autogen:407
 // ./common/autogen/doOp.autogen:408
 // ./common/autogen/doOp.autogen:409
					case 0xc0000: /*0b11000000000000000000*/ // ./common/autogen/doOp.autogen:410
						this.TEQI(op); // ./common/autogen/doOp.autogen:411
						return; // ./common/autogen/doOp.autogen:412
 // ./common/autogen/doOp.autogen:413
 // ./common/autogen/doOp.autogen:414
					case 0xd0000: /*0b11010000000000000000*/ // ./common/autogen/doOp.autogen:415
						this.a(op); // ./common/autogen/doOp.autogen:416
						return; // ./common/autogen/doOp.autogen:417
 // ./common/autogen/doOp.autogen:418
 // ./common/autogen/doOp.autogen:419
					case 0xe0000: /*0b11100000000000000000*/ // ./common/autogen/doOp.autogen:420
						this.TNEI(op); // ./common/autogen/doOp.autogen:421
						return; // ./common/autogen/doOp.autogen:422
 // ./common/autogen/doOp.autogen:423
 // ./common/autogen/doOp.autogen:424
					case 0xf0000: /*0b11110000000000000000*/ // ./common/autogen/doOp.autogen:425
						this.a(op); // ./common/autogen/doOp.autogen:426
						return; // ./common/autogen/doOp.autogen:427
 // ./common/autogen/doOp.autogen:428
 // ./common/autogen/doOp.autogen:429
					case 0x100000: /*0b100000000000000000000*/ // ./common/autogen/doOp.autogen:430
						this.BLTZAL(op); // ./common/autogen/doOp.autogen:431
						return; // ./common/autogen/doOp.autogen:432
 // ./common/autogen/doOp.autogen:433
 // ./common/autogen/doOp.autogen:434
					case 0x110000: /*0b100010000000000000000*/ // ./common/autogen/doOp.autogen:435
						this.BGEZAL(op); // ./common/autogen/doOp.autogen:436
						return; // ./common/autogen/doOp.autogen:437
 // ./common/autogen/doOp.autogen:438
 // ./common/autogen/doOp.autogen:439
					case 0x120000: /*0b100100000000000000000*/ // ./common/autogen/doOp.autogen:440
						this.BLTZALL(op); // ./common/autogen/doOp.autogen:441
						return; // ./common/autogen/doOp.autogen:442
 // ./common/autogen/doOp.autogen:443
 // ./common/autogen/doOp.autogen:444
					case 0x130000: /*0b100110000000000000000*/ // ./common/autogen/doOp.autogen:445
						this.BGEZALL(op); // ./common/autogen/doOp.autogen:446
						return; // ./common/autogen/doOp.autogen:447
 // ./common/autogen/doOp.autogen:448
 // ./common/autogen/doOp.autogen:449
					case 0x140000: /*0b101000000000000000000*/ // ./common/autogen/doOp.autogen:450
						this.a(op); // ./common/autogen/doOp.autogen:451
						return; // ./common/autogen/doOp.autogen:452
 // ./common/autogen/doOp.autogen:453
 // ./common/autogen/doOp.autogen:454
					case 0x150000: /*0b101010000000000000000*/ // ./common/autogen/doOp.autogen:455
						this.a(op); // ./common/autogen/doOp.autogen:456
						return; // ./common/autogen/doOp.autogen:457
 // ./common/autogen/doOp.autogen:458
 // ./common/autogen/doOp.autogen:459
					case 0x160000: /*0b101100000000000000000*/ // ./common/autogen/doOp.autogen:460
						this.a(op); // ./common/autogen/doOp.autogen:461
						return; // ./common/autogen/doOp.autogen:462
 // ./common/autogen/doOp.autogen:463
 // ./common/autogen/doOp.autogen:464
					case 0x170000: /*0b101110000000000000000*/ // ./common/autogen/doOp.autogen:465
						this.a(op); // ./common/autogen/doOp.autogen:466
						return; // ./common/autogen/doOp.autogen:467
 // ./common/autogen/doOp.autogen:468
 // ./common/autogen/doOp.autogen:469
					case 0x180000: /*0b110000000000000000000*/ // ./common/autogen/doOp.autogen:470
						this.a(op); // ./common/autogen/doOp.autogen:471
						return; // ./common/autogen/doOp.autogen:472
 // ./common/autogen/doOp.autogen:473
 // ./common/autogen/doOp.autogen:474
					case 0x190000: /*0b110010000000000000000*/ // ./common/autogen/doOp.autogen:475
						this.a(op); // ./common/autogen/doOp.autogen:476
						return; // ./common/autogen/doOp.autogen:477
 // ./common/autogen/doOp.autogen:478
 // ./common/autogen/doOp.autogen:479
					case 0x1a0000: /*0b110100000000000000000*/ // ./common/autogen/doOp.autogen:480
						this.a(op); // ./common/autogen/doOp.autogen:481
						return; // ./common/autogen/doOp.autogen:482
 // ./common/autogen/doOp.autogen:483
 // ./common/autogen/doOp.autogen:484
					case 0x1b0000: /*0b110110000000000000000*/ // ./common/autogen/doOp.autogen:485
						this.a(op); // ./common/autogen/doOp.autogen:486
						return; // ./common/autogen/doOp.autogen:487
 // ./common/autogen/doOp.autogen:488
 // ./common/autogen/doOp.autogen:489
					case 0x1c0000: /*0b111000000000000000000*/ // ./common/autogen/doOp.autogen:490
						this.a(op); // ./common/autogen/doOp.autogen:491
						return; // ./common/autogen/doOp.autogen:492
 // ./common/autogen/doOp.autogen:493
 // ./common/autogen/doOp.autogen:494
					case 0x1d0000: /*0b111010000000000000000*/ // ./common/autogen/doOp.autogen:495
						this.a(op); // ./common/autogen/doOp.autogen:496
						return; // ./common/autogen/doOp.autogen:497
 // ./common/autogen/doOp.autogen:498
 // ./common/autogen/doOp.autogen:499
					case 0x1e0000: /*0b111100000000000000000*/ // ./common/autogen/doOp.autogen:500
						this.a(op); // ./common/autogen/doOp.autogen:501
						return; // ./common/autogen/doOp.autogen:502
 // ./common/autogen/doOp.autogen:503
 // ./common/autogen/doOp.autogen:504
					case 0x1f0000: /*0b111110000000000000000*/ // ./common/autogen/doOp.autogen:505
						this.a(op); // ./common/autogen/doOp.autogen:506
						return; // ./common/autogen/doOp.autogen:507
 // ./common/autogen/doOp.autogen:508
 // ./common/autogen/doOp.autogen:509
	default: // ./common/autogen/doOp.autogen:510
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:511
} // ./common/autogen/doOp.autogen:512
 // ./common/autogen/doOp.autogen:513
; // ./common/autogen/doOp.autogen:514
						return; // ./common/autogen/doOp.autogen:515
 // ./common/autogen/doOp.autogen:516
 // ./common/autogen/doOp.autogen:517
					case 0x8000000: /*0b1000000000000000000000000000*/ // ./common/autogen/doOp.autogen:518
						this.J(op); // ./common/autogen/doOp.autogen:519
						return; // ./common/autogen/doOp.autogen:520
 // ./common/autogen/doOp.autogen:521
 // ./common/autogen/doOp.autogen:522
					case 0xc000000: /*0b1100000000000000000000000000*/ // ./common/autogen/doOp.autogen:523
						this.JAL(op); // ./common/autogen/doOp.autogen:524
						return; // ./common/autogen/doOp.autogen:525
 // ./common/autogen/doOp.autogen:526
 // ./common/autogen/doOp.autogen:527
					case 0x10000000: /*0b10000000000000000000000000000*/ // ./common/autogen/doOp.autogen:528
						this.BEQ(op); // ./common/autogen/doOp.autogen:529
						return; // ./common/autogen/doOp.autogen:530
 // ./common/autogen/doOp.autogen:531
 // ./common/autogen/doOp.autogen:532
					case 0x14000000: /*0b10100000000000000000000000000*/ // ./common/autogen/doOp.autogen:533
						this.BNE(op); // ./common/autogen/doOp.autogen:534
						return; // ./common/autogen/doOp.autogen:535
 // ./common/autogen/doOp.autogen:536
 // ./common/autogen/doOp.autogen:537
					case 0x18000000: /*0b11000000000000000000000000000*/ // ./common/autogen/doOp.autogen:538
						this.BLEZ(op); // ./common/autogen/doOp.autogen:539
						return; // ./common/autogen/doOp.autogen:540
 // ./common/autogen/doOp.autogen:541
 // ./common/autogen/doOp.autogen:542
					case 0x1c000000: /*0b11100000000000000000000000000*/ // ./common/autogen/doOp.autogen:543
						this.BGTZ(op); // ./common/autogen/doOp.autogen:544
						return; // ./common/autogen/doOp.autogen:545
 // ./common/autogen/doOp.autogen:546
 // ./common/autogen/doOp.autogen:547
					case 0x20000000: /*0b100000000000000000000000000000*/ // ./common/autogen/doOp.autogen:548
						this.ADDI(op); // ./common/autogen/doOp.autogen:549
						return; // ./common/autogen/doOp.autogen:550
 // ./common/autogen/doOp.autogen:551
 // ./common/autogen/doOp.autogen:552
					case 0x24000000: /*0b100100000000000000000000000000*/ // ./common/autogen/doOp.autogen:553
						this.ADDIU(op); // ./common/autogen/doOp.autogen:554
						return; // ./common/autogen/doOp.autogen:555
 // ./common/autogen/doOp.autogen:556
 // ./common/autogen/doOp.autogen:557
					case 0x28000000: /*0b101000000000000000000000000000*/ // ./common/autogen/doOp.autogen:558
						this.SLTI(op); // ./common/autogen/doOp.autogen:559
						return; // ./common/autogen/doOp.autogen:560
 // ./common/autogen/doOp.autogen:561
 // ./common/autogen/doOp.autogen:562
					case 0x2c000000: /*0b101100000000000000000000000000*/ // ./common/autogen/doOp.autogen:563
						this.SLTIU(op); // ./common/autogen/doOp.autogen:564
						return; // ./common/autogen/doOp.autogen:565
 // ./common/autogen/doOp.autogen:566
 // ./common/autogen/doOp.autogen:567
					case 0x30000000: /*0b110000000000000000000000000000*/ // ./common/autogen/doOp.autogen:568
						this.ANDI(op); // ./common/autogen/doOp.autogen:569
						return; // ./common/autogen/doOp.autogen:570
 // ./common/autogen/doOp.autogen:571
 // ./common/autogen/doOp.autogen:572
					case 0x34000000: /*0b110100000000000000000000000000*/ // ./common/autogen/doOp.autogen:573
						this.ORI(op); // ./common/autogen/doOp.autogen:574
						return; // ./common/autogen/doOp.autogen:575
 // ./common/autogen/doOp.autogen:576
 // ./common/autogen/doOp.autogen:577
					case 0x38000000: /*0b111000000000000000000000000000*/ // ./common/autogen/doOp.autogen:578
						this.XORI(op); // ./common/autogen/doOp.autogen:579
						return; // ./common/autogen/doOp.autogen:580
 // ./common/autogen/doOp.autogen:581
 // ./common/autogen/doOp.autogen:582
					case 0x3c000000: /*0b111100000000000000000000000000*/ // ./common/autogen/doOp.autogen:583
						this.LUI(op); // ./common/autogen/doOp.autogen:584
						return; // ./common/autogen/doOp.autogen:585
 // ./common/autogen/doOp.autogen:586
 // ./common/autogen/doOp.autogen:587
					case 0x40000000: /*0b1000000000000000000000000000000*/ // ./common/autogen/doOp.autogen:588
 // ./common/autogen/doOp.autogen:589
 // ./common/autogen/doOp.autogen:590
/* 0b11111000000000000000000000 */ // ./common/autogen/doOp.autogen:591
switch((op & 0x3e00000) >>> 0) // ./common/autogen/doOp.autogen:592
{ // ./common/autogen/doOp.autogen:593
 // ./common/autogen/doOp.autogen:594
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:595
						this.MFC0(op); // ./common/autogen/doOp.autogen:596
						return; // ./common/autogen/doOp.autogen:597
 // ./common/autogen/doOp.autogen:598
 // ./common/autogen/doOp.autogen:599
					case 0x200000: /*0b1000000000000000000000*/ // ./common/autogen/doOp.autogen:600
						this.a(op); // ./common/autogen/doOp.autogen:601
						return; // ./common/autogen/doOp.autogen:602
 // ./common/autogen/doOp.autogen:603
 // ./common/autogen/doOp.autogen:604
					case 0x400000: /*0b10000000000000000000000*/ // ./common/autogen/doOp.autogen:605
						this.a(op); // ./common/autogen/doOp.autogen:606
						return; // ./common/autogen/doOp.autogen:607
 // ./common/autogen/doOp.autogen:608
 // ./common/autogen/doOp.autogen:609
					case 0x600000: /*0b11000000000000000000000*/ // ./common/autogen/doOp.autogen:610
						this.a(op); // ./common/autogen/doOp.autogen:611
						return; // ./common/autogen/doOp.autogen:612
 // ./common/autogen/doOp.autogen:613
 // ./common/autogen/doOp.autogen:614
					case 0x800000: /*0b100000000000000000000000*/ // ./common/autogen/doOp.autogen:615
						this.MTC0(op); // ./common/autogen/doOp.autogen:616
						return; // ./common/autogen/doOp.autogen:617
 // ./common/autogen/doOp.autogen:618
 // ./common/autogen/doOp.autogen:619
					case 0xa00000: /*0b101000000000000000000000*/ // ./common/autogen/doOp.autogen:620
						this.a(op); // ./common/autogen/doOp.autogen:621
						return; // ./common/autogen/doOp.autogen:622
 // ./common/autogen/doOp.autogen:623
 // ./common/autogen/doOp.autogen:624
					case 0xc00000: /*0b110000000000000000000000*/ // ./common/autogen/doOp.autogen:625
						this.a(op); // ./common/autogen/doOp.autogen:626
						return; // ./common/autogen/doOp.autogen:627
 // ./common/autogen/doOp.autogen:628
 // ./common/autogen/doOp.autogen:629
					case 0xe00000: /*0b111000000000000000000000*/ // ./common/autogen/doOp.autogen:630
						this.a(op); // ./common/autogen/doOp.autogen:631
						return; // ./common/autogen/doOp.autogen:632
 // ./common/autogen/doOp.autogen:633
 // ./common/autogen/doOp.autogen:634
					case 0x1000000: /*0b1000000000000000000000000*/ // ./common/autogen/doOp.autogen:635
						this.a(op); // ./common/autogen/doOp.autogen:636
						return; // ./common/autogen/doOp.autogen:637
 // ./common/autogen/doOp.autogen:638
 // ./common/autogen/doOp.autogen:639
					case 0x1200000: /*0b1001000000000000000000000*/ // ./common/autogen/doOp.autogen:640
						this.a(op); // ./common/autogen/doOp.autogen:641
						return; // ./common/autogen/doOp.autogen:642
 // ./common/autogen/doOp.autogen:643
 // ./common/autogen/doOp.autogen:644
					case 0x1400000: /*0b1010000000000000000000000*/ // ./common/autogen/doOp.autogen:645
						this.a(op); // ./common/autogen/doOp.autogen:646
						return; // ./common/autogen/doOp.autogen:647
 // ./common/autogen/doOp.autogen:648
 // ./common/autogen/doOp.autogen:649
					case 0x1600000: /*0b1011000000000000000000000*/ // ./common/autogen/doOp.autogen:650
						this.a(op); // ./common/autogen/doOp.autogen:651
						return; // ./common/autogen/doOp.autogen:652
 // ./common/autogen/doOp.autogen:653
 // ./common/autogen/doOp.autogen:654
					case 0x1800000: /*0b1100000000000000000000000*/ // ./common/autogen/doOp.autogen:655
						this.a(op); // ./common/autogen/doOp.autogen:656
						return; // ./common/autogen/doOp.autogen:657
 // ./common/autogen/doOp.autogen:658
 // ./common/autogen/doOp.autogen:659
					case 0x1a00000: /*0b1101000000000000000000000*/ // ./common/autogen/doOp.autogen:660
						this.a(op); // ./common/autogen/doOp.autogen:661
						return; // ./common/autogen/doOp.autogen:662
 // ./common/autogen/doOp.autogen:663
 // ./common/autogen/doOp.autogen:664
					case 0x1c00000: /*0b1110000000000000000000000*/ // ./common/autogen/doOp.autogen:665
						this.a(op); // ./common/autogen/doOp.autogen:666
						return; // ./common/autogen/doOp.autogen:667
 // ./common/autogen/doOp.autogen:668
 // ./common/autogen/doOp.autogen:669
					case 0x1e00000: /*0b1111000000000000000000000*/ // ./common/autogen/doOp.autogen:670
						this.a(op); // ./common/autogen/doOp.autogen:671
						return; // ./common/autogen/doOp.autogen:672
 // ./common/autogen/doOp.autogen:673
 // ./common/autogen/doOp.autogen:674
					case 0x2000000: /*0b10000000000000000000000000*/ // ./common/autogen/doOp.autogen:675
 // ./common/autogen/doOp.autogen:676
 // ./common/autogen/doOp.autogen:677
/* 0b111111 */ // ./common/autogen/doOp.autogen:678
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:679
{ // ./common/autogen/doOp.autogen:680
 // ./common/autogen/doOp.autogen:681
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:682
						this.a(op); // ./common/autogen/doOp.autogen:683
						return; // ./common/autogen/doOp.autogen:684
 // ./common/autogen/doOp.autogen:685
 // ./common/autogen/doOp.autogen:686
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:687
						this.TLBR(op); // ./common/autogen/doOp.autogen:688
						return; // ./common/autogen/doOp.autogen:689
 // ./common/autogen/doOp.autogen:690
 // ./common/autogen/doOp.autogen:691
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:692
						this.TLBWI(op); // ./common/autogen/doOp.autogen:693
						return; // ./common/autogen/doOp.autogen:694
 // ./common/autogen/doOp.autogen:695
 // ./common/autogen/doOp.autogen:696
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:697
						this.a(op); // ./common/autogen/doOp.autogen:698
						return; // ./common/autogen/doOp.autogen:699
 // ./common/autogen/doOp.autogen:700
 // ./common/autogen/doOp.autogen:701
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:702
						this.a(op); // ./common/autogen/doOp.autogen:703
						return; // ./common/autogen/doOp.autogen:704
 // ./common/autogen/doOp.autogen:705
 // ./common/autogen/doOp.autogen:706
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:707
						this.a(op); // ./common/autogen/doOp.autogen:708
						return; // ./common/autogen/doOp.autogen:709
 // ./common/autogen/doOp.autogen:710
 // ./common/autogen/doOp.autogen:711
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:712
						this.TLBWR(op); // ./common/autogen/doOp.autogen:713
						return; // ./common/autogen/doOp.autogen:714
 // ./common/autogen/doOp.autogen:715
 // ./common/autogen/doOp.autogen:716
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:717
						this.a(op); // ./common/autogen/doOp.autogen:718
						return; // ./common/autogen/doOp.autogen:719
 // ./common/autogen/doOp.autogen:720
 // ./common/autogen/doOp.autogen:721
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:722
						this.TLBP(op); // ./common/autogen/doOp.autogen:723
						return; // ./common/autogen/doOp.autogen:724
 // ./common/autogen/doOp.autogen:725
 // ./common/autogen/doOp.autogen:726
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:727
						this.a(op); // ./common/autogen/doOp.autogen:728
						return; // ./common/autogen/doOp.autogen:729
 // ./common/autogen/doOp.autogen:730
 // ./common/autogen/doOp.autogen:731
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:732
						this.a(op); // ./common/autogen/doOp.autogen:733
						return; // ./common/autogen/doOp.autogen:734
 // ./common/autogen/doOp.autogen:735
 // ./common/autogen/doOp.autogen:736
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:737
						this.a(op); // ./common/autogen/doOp.autogen:738
						return; // ./common/autogen/doOp.autogen:739
 // ./common/autogen/doOp.autogen:740
 // ./common/autogen/doOp.autogen:741
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:742
						this.a(op); // ./common/autogen/doOp.autogen:743
						return; // ./common/autogen/doOp.autogen:744
 // ./common/autogen/doOp.autogen:745
 // ./common/autogen/doOp.autogen:746
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:747
						this.a(op); // ./common/autogen/doOp.autogen:748
						return; // ./common/autogen/doOp.autogen:749
 // ./common/autogen/doOp.autogen:750
 // ./common/autogen/doOp.autogen:751
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:752
						this.a(op); // ./common/autogen/doOp.autogen:753
						return; // ./common/autogen/doOp.autogen:754
 // ./common/autogen/doOp.autogen:755
 // ./common/autogen/doOp.autogen:756
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:757
						this.a(op); // ./common/autogen/doOp.autogen:758
						return; // ./common/autogen/doOp.autogen:759
 // ./common/autogen/doOp.autogen:760
 // ./common/autogen/doOp.autogen:761
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:762
						this.a(op); // ./common/autogen/doOp.autogen:763
						return; // ./common/autogen/doOp.autogen:764
 // ./common/autogen/doOp.autogen:765
 // ./common/autogen/doOp.autogen:766
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:767
						this.a(op); // ./common/autogen/doOp.autogen:768
						return; // ./common/autogen/doOp.autogen:769
 // ./common/autogen/doOp.autogen:770
 // ./common/autogen/doOp.autogen:771
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:772
						this.a(op); // ./common/autogen/doOp.autogen:773
						return; // ./common/autogen/doOp.autogen:774
 // ./common/autogen/doOp.autogen:775
 // ./common/autogen/doOp.autogen:776
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:777
						this.a(op); // ./common/autogen/doOp.autogen:778
						return; // ./common/autogen/doOp.autogen:779
 // ./common/autogen/doOp.autogen:780
 // ./common/autogen/doOp.autogen:781
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:782
						this.a(op); // ./common/autogen/doOp.autogen:783
						return; // ./common/autogen/doOp.autogen:784
 // ./common/autogen/doOp.autogen:785
 // ./common/autogen/doOp.autogen:786
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:787
						this.a(op); // ./common/autogen/doOp.autogen:788
						return; // ./common/autogen/doOp.autogen:789
 // ./common/autogen/doOp.autogen:790
 // ./common/autogen/doOp.autogen:791
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:792
						this.a(op); // ./common/autogen/doOp.autogen:793
						return; // ./common/autogen/doOp.autogen:794
 // ./common/autogen/doOp.autogen:795
 // ./common/autogen/doOp.autogen:796
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:797
						this.a(op); // ./common/autogen/doOp.autogen:798
						return; // ./common/autogen/doOp.autogen:799
 // ./common/autogen/doOp.autogen:800
 // ./common/autogen/doOp.autogen:801
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:802
						this.ERET(op); // ./common/autogen/doOp.autogen:803
						return; // ./common/autogen/doOp.autogen:804
 // ./common/autogen/doOp.autogen:805
 // ./common/autogen/doOp.autogen:806
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:807
						this.a(op); // ./common/autogen/doOp.autogen:808
						return; // ./common/autogen/doOp.autogen:809
 // ./common/autogen/doOp.autogen:810
 // ./common/autogen/doOp.autogen:811
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:812
						this.a(op); // ./common/autogen/doOp.autogen:813
						return; // ./common/autogen/doOp.autogen:814
 // ./common/autogen/doOp.autogen:815
 // ./common/autogen/doOp.autogen:816
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:817
						this.a(op); // ./common/autogen/doOp.autogen:818
						return; // ./common/autogen/doOp.autogen:819
 // ./common/autogen/doOp.autogen:820
 // ./common/autogen/doOp.autogen:821
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:822
						this.a(op); // ./common/autogen/doOp.autogen:823
						return; // ./common/autogen/doOp.autogen:824
 // ./common/autogen/doOp.autogen:825
 // ./common/autogen/doOp.autogen:826
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:827
						this.a(op); // ./common/autogen/doOp.autogen:828
						return; // ./common/autogen/doOp.autogen:829
 // ./common/autogen/doOp.autogen:830
 // ./common/autogen/doOp.autogen:831
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:832
						this.a(op); // ./common/autogen/doOp.autogen:833
						return; // ./common/autogen/doOp.autogen:834
 // ./common/autogen/doOp.autogen:835
 // ./common/autogen/doOp.autogen:836
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:837
						this.DERET(op); // ./common/autogen/doOp.autogen:838
						return; // ./common/autogen/doOp.autogen:839
 // ./common/autogen/doOp.autogen:840
 // ./common/autogen/doOp.autogen:841
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:842
						this.WAIT(op); // ./common/autogen/doOp.autogen:843
						return; // ./common/autogen/doOp.autogen:844
 // ./common/autogen/doOp.autogen:845
 // ./common/autogen/doOp.autogen:846
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:847
						this.a(op); // ./common/autogen/doOp.autogen:848
						return; // ./common/autogen/doOp.autogen:849
 // ./common/autogen/doOp.autogen:850
 // ./common/autogen/doOp.autogen:851
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:852
						this.a(op); // ./common/autogen/doOp.autogen:853
						return; // ./common/autogen/doOp.autogen:854
 // ./common/autogen/doOp.autogen:855
 // ./common/autogen/doOp.autogen:856
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:857
						this.a(op); // ./common/autogen/doOp.autogen:858
						return; // ./common/autogen/doOp.autogen:859
 // ./common/autogen/doOp.autogen:860
 // ./common/autogen/doOp.autogen:861
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:862
						this.a(op); // ./common/autogen/doOp.autogen:863
						return; // ./common/autogen/doOp.autogen:864
 // ./common/autogen/doOp.autogen:865
 // ./common/autogen/doOp.autogen:866
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:867
						this.a(op); // ./common/autogen/doOp.autogen:868
						return; // ./common/autogen/doOp.autogen:869
 // ./common/autogen/doOp.autogen:870
 // ./common/autogen/doOp.autogen:871
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:872
						this.a(op); // ./common/autogen/doOp.autogen:873
						return; // ./common/autogen/doOp.autogen:874
 // ./common/autogen/doOp.autogen:875
 // ./common/autogen/doOp.autogen:876
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:877
						this.a(op); // ./common/autogen/doOp.autogen:878
						return; // ./common/autogen/doOp.autogen:879
 // ./common/autogen/doOp.autogen:880
 // ./common/autogen/doOp.autogen:881
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:882
						this.a(op); // ./common/autogen/doOp.autogen:883
						return; // ./common/autogen/doOp.autogen:884
 // ./common/autogen/doOp.autogen:885
 // ./common/autogen/doOp.autogen:886
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:887
						this.a(op); // ./common/autogen/doOp.autogen:888
						return; // ./common/autogen/doOp.autogen:889
 // ./common/autogen/doOp.autogen:890
 // ./common/autogen/doOp.autogen:891
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:892
						this.a(op); // ./common/autogen/doOp.autogen:893
						return; // ./common/autogen/doOp.autogen:894
 // ./common/autogen/doOp.autogen:895
 // ./common/autogen/doOp.autogen:896
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:897
						this.a(op); // ./common/autogen/doOp.autogen:898
						return; // ./common/autogen/doOp.autogen:899
 // ./common/autogen/doOp.autogen:900
 // ./common/autogen/doOp.autogen:901
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:902
						this.a(op); // ./common/autogen/doOp.autogen:903
						return; // ./common/autogen/doOp.autogen:904
 // ./common/autogen/doOp.autogen:905
 // ./common/autogen/doOp.autogen:906
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:907
						this.a(op); // ./common/autogen/doOp.autogen:908
						return; // ./common/autogen/doOp.autogen:909
 // ./common/autogen/doOp.autogen:910
 // ./common/autogen/doOp.autogen:911
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:912
						this.a(op); // ./common/autogen/doOp.autogen:913
						return; // ./common/autogen/doOp.autogen:914
 // ./common/autogen/doOp.autogen:915
 // ./common/autogen/doOp.autogen:916
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:917
						this.a(op); // ./common/autogen/doOp.autogen:918
						return; // ./common/autogen/doOp.autogen:919
 // ./common/autogen/doOp.autogen:920
 // ./common/autogen/doOp.autogen:921
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:922
						this.a(op); // ./common/autogen/doOp.autogen:923
						return; // ./common/autogen/doOp.autogen:924
 // ./common/autogen/doOp.autogen:925
 // ./common/autogen/doOp.autogen:926
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:927
						this.a(op); // ./common/autogen/doOp.autogen:928
						return; // ./common/autogen/doOp.autogen:929
 // ./common/autogen/doOp.autogen:930
 // ./common/autogen/doOp.autogen:931
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:932
						this.a(op); // ./common/autogen/doOp.autogen:933
						return; // ./common/autogen/doOp.autogen:934
 // ./common/autogen/doOp.autogen:935
 // ./common/autogen/doOp.autogen:936
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:937
						this.a(op); // ./common/autogen/doOp.autogen:938
						return; // ./common/autogen/doOp.autogen:939
 // ./common/autogen/doOp.autogen:940
 // ./common/autogen/doOp.autogen:941
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:942
						this.a(op); // ./common/autogen/doOp.autogen:943
						return; // ./common/autogen/doOp.autogen:944
 // ./common/autogen/doOp.autogen:945
 // ./common/autogen/doOp.autogen:946
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:947
						this.a(op); // ./common/autogen/doOp.autogen:948
						return; // ./common/autogen/doOp.autogen:949
 // ./common/autogen/doOp.autogen:950
 // ./common/autogen/doOp.autogen:951
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:952
						this.a(op); // ./common/autogen/doOp.autogen:953
						return; // ./common/autogen/doOp.autogen:954
 // ./common/autogen/doOp.autogen:955
 // ./common/autogen/doOp.autogen:956
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:957
						this.a(op); // ./common/autogen/doOp.autogen:958
						return; // ./common/autogen/doOp.autogen:959
 // ./common/autogen/doOp.autogen:960
 // ./common/autogen/doOp.autogen:961
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:962
						this.a(op); // ./common/autogen/doOp.autogen:963
						return; // ./common/autogen/doOp.autogen:964
 // ./common/autogen/doOp.autogen:965
 // ./common/autogen/doOp.autogen:966
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:967
						this.a(op); // ./common/autogen/doOp.autogen:968
						return; // ./common/autogen/doOp.autogen:969
 // ./common/autogen/doOp.autogen:970
 // ./common/autogen/doOp.autogen:971
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:972
						this.a(op); // ./common/autogen/doOp.autogen:973
						return; // ./common/autogen/doOp.autogen:974
 // ./common/autogen/doOp.autogen:975
 // ./common/autogen/doOp.autogen:976
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:977
						this.a(op); // ./common/autogen/doOp.autogen:978
						return; // ./common/autogen/doOp.autogen:979
 // ./common/autogen/doOp.autogen:980
 // ./common/autogen/doOp.autogen:981
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:982
						this.a(op); // ./common/autogen/doOp.autogen:983
						return; // ./common/autogen/doOp.autogen:984
 // ./common/autogen/doOp.autogen:985
 // ./common/autogen/doOp.autogen:986
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:987
						this.a(op); // ./common/autogen/doOp.autogen:988
						return; // ./common/autogen/doOp.autogen:989
 // ./common/autogen/doOp.autogen:990
 // ./common/autogen/doOp.autogen:991
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:992
						this.a(op); // ./common/autogen/doOp.autogen:993
						return; // ./common/autogen/doOp.autogen:994
 // ./common/autogen/doOp.autogen:995
 // ./common/autogen/doOp.autogen:996
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:997
						this.a(op); // ./common/autogen/doOp.autogen:998
						return; // ./common/autogen/doOp.autogen:999
 // ./common/autogen/doOp.autogen:1000
 // ./common/autogen/doOp.autogen:1001
	default: // ./common/autogen/doOp.autogen:1002
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:1003
} // ./common/autogen/doOp.autogen:1004
 // ./common/autogen/doOp.autogen:1005
; // ./common/autogen/doOp.autogen:1006
						return; // ./common/autogen/doOp.autogen:1007
 // ./common/autogen/doOp.autogen:1008
 // ./common/autogen/doOp.autogen:1009
					case 0x2200000: /*0b10001000000000000000000000*/ // ./common/autogen/doOp.autogen:1010
 // ./common/autogen/doOp.autogen:1011
 // ./common/autogen/doOp.autogen:1012
/* 0b111111 */ // ./common/autogen/doOp.autogen:1013
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:1014
{ // ./common/autogen/doOp.autogen:1015
 // ./common/autogen/doOp.autogen:1016
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:1017
						this.a(op); // ./common/autogen/doOp.autogen:1018
						return; // ./common/autogen/doOp.autogen:1019
 // ./common/autogen/doOp.autogen:1020
 // ./common/autogen/doOp.autogen:1021
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:1022
						this.TLBR(op); // ./common/autogen/doOp.autogen:1023
						return; // ./common/autogen/doOp.autogen:1024
 // ./common/autogen/doOp.autogen:1025
 // ./common/autogen/doOp.autogen:1026
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:1027
						this.TLBWI(op); // ./common/autogen/doOp.autogen:1028
						return; // ./common/autogen/doOp.autogen:1029
 // ./common/autogen/doOp.autogen:1030
 // ./common/autogen/doOp.autogen:1031
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:1032
						this.a(op); // ./common/autogen/doOp.autogen:1033
						return; // ./common/autogen/doOp.autogen:1034
 // ./common/autogen/doOp.autogen:1035
 // ./common/autogen/doOp.autogen:1036
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:1037
						this.a(op); // ./common/autogen/doOp.autogen:1038
						return; // ./common/autogen/doOp.autogen:1039
 // ./common/autogen/doOp.autogen:1040
 // ./common/autogen/doOp.autogen:1041
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:1042
						this.a(op); // ./common/autogen/doOp.autogen:1043
						return; // ./common/autogen/doOp.autogen:1044
 // ./common/autogen/doOp.autogen:1045
 // ./common/autogen/doOp.autogen:1046
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:1047
						this.TLBWR(op); // ./common/autogen/doOp.autogen:1048
						return; // ./common/autogen/doOp.autogen:1049
 // ./common/autogen/doOp.autogen:1050
 // ./common/autogen/doOp.autogen:1051
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:1052
						this.a(op); // ./common/autogen/doOp.autogen:1053
						return; // ./common/autogen/doOp.autogen:1054
 // ./common/autogen/doOp.autogen:1055
 // ./common/autogen/doOp.autogen:1056
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:1057
						this.TLBP(op); // ./common/autogen/doOp.autogen:1058
						return; // ./common/autogen/doOp.autogen:1059
 // ./common/autogen/doOp.autogen:1060
 // ./common/autogen/doOp.autogen:1061
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:1062
						this.a(op); // ./common/autogen/doOp.autogen:1063
						return; // ./common/autogen/doOp.autogen:1064
 // ./common/autogen/doOp.autogen:1065
 // ./common/autogen/doOp.autogen:1066
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:1067
						this.a(op); // ./common/autogen/doOp.autogen:1068
						return; // ./common/autogen/doOp.autogen:1069
 // ./common/autogen/doOp.autogen:1070
 // ./common/autogen/doOp.autogen:1071
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:1072
						this.a(op); // ./common/autogen/doOp.autogen:1073
						return; // ./common/autogen/doOp.autogen:1074
 // ./common/autogen/doOp.autogen:1075
 // ./common/autogen/doOp.autogen:1076
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:1077
						this.a(op); // ./common/autogen/doOp.autogen:1078
						return; // ./common/autogen/doOp.autogen:1079
 // ./common/autogen/doOp.autogen:1080
 // ./common/autogen/doOp.autogen:1081
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:1082
						this.a(op); // ./common/autogen/doOp.autogen:1083
						return; // ./common/autogen/doOp.autogen:1084
 // ./common/autogen/doOp.autogen:1085
 // ./common/autogen/doOp.autogen:1086
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:1087
						this.a(op); // ./common/autogen/doOp.autogen:1088
						return; // ./common/autogen/doOp.autogen:1089
 // ./common/autogen/doOp.autogen:1090
 // ./common/autogen/doOp.autogen:1091
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:1092
						this.a(op); // ./common/autogen/doOp.autogen:1093
						return; // ./common/autogen/doOp.autogen:1094
 // ./common/autogen/doOp.autogen:1095
 // ./common/autogen/doOp.autogen:1096
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:1097
						this.a(op); // ./common/autogen/doOp.autogen:1098
						return; // ./common/autogen/doOp.autogen:1099
 // ./common/autogen/doOp.autogen:1100
 // ./common/autogen/doOp.autogen:1101
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:1102
						this.a(op); // ./common/autogen/doOp.autogen:1103
						return; // ./common/autogen/doOp.autogen:1104
 // ./common/autogen/doOp.autogen:1105
 // ./common/autogen/doOp.autogen:1106
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:1107
						this.a(op); // ./common/autogen/doOp.autogen:1108
						return; // ./common/autogen/doOp.autogen:1109
 // ./common/autogen/doOp.autogen:1110
 // ./common/autogen/doOp.autogen:1111
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:1112
						this.a(op); // ./common/autogen/doOp.autogen:1113
						return; // ./common/autogen/doOp.autogen:1114
 // ./common/autogen/doOp.autogen:1115
 // ./common/autogen/doOp.autogen:1116
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:1117
						this.a(op); // ./common/autogen/doOp.autogen:1118
						return; // ./common/autogen/doOp.autogen:1119
 // ./common/autogen/doOp.autogen:1120
 // ./common/autogen/doOp.autogen:1121
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:1122
						this.a(op); // ./common/autogen/doOp.autogen:1123
						return; // ./common/autogen/doOp.autogen:1124
 // ./common/autogen/doOp.autogen:1125
 // ./common/autogen/doOp.autogen:1126
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:1127
						this.a(op); // ./common/autogen/doOp.autogen:1128
						return; // ./common/autogen/doOp.autogen:1129
 // ./common/autogen/doOp.autogen:1130
 // ./common/autogen/doOp.autogen:1131
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:1132
						this.a(op); // ./common/autogen/doOp.autogen:1133
						return; // ./common/autogen/doOp.autogen:1134
 // ./common/autogen/doOp.autogen:1135
 // ./common/autogen/doOp.autogen:1136
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:1137
						this.ERET(op); // ./common/autogen/doOp.autogen:1138
						return; // ./common/autogen/doOp.autogen:1139
 // ./common/autogen/doOp.autogen:1140
 // ./common/autogen/doOp.autogen:1141
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:1142
						this.a(op); // ./common/autogen/doOp.autogen:1143
						return; // ./common/autogen/doOp.autogen:1144
 // ./common/autogen/doOp.autogen:1145
 // ./common/autogen/doOp.autogen:1146
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:1147
						this.a(op); // ./common/autogen/doOp.autogen:1148
						return; // ./common/autogen/doOp.autogen:1149
 // ./common/autogen/doOp.autogen:1150
 // ./common/autogen/doOp.autogen:1151
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:1152
						this.a(op); // ./common/autogen/doOp.autogen:1153
						return; // ./common/autogen/doOp.autogen:1154
 // ./common/autogen/doOp.autogen:1155
 // ./common/autogen/doOp.autogen:1156
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:1157
						this.a(op); // ./common/autogen/doOp.autogen:1158
						return; // ./common/autogen/doOp.autogen:1159
 // ./common/autogen/doOp.autogen:1160
 // ./common/autogen/doOp.autogen:1161
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:1162
						this.a(op); // ./common/autogen/doOp.autogen:1163
						return; // ./common/autogen/doOp.autogen:1164
 // ./common/autogen/doOp.autogen:1165
 // ./common/autogen/doOp.autogen:1166
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:1167
						this.a(op); // ./common/autogen/doOp.autogen:1168
						return; // ./common/autogen/doOp.autogen:1169
 // ./common/autogen/doOp.autogen:1170
 // ./common/autogen/doOp.autogen:1171
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:1172
						this.DERET(op); // ./common/autogen/doOp.autogen:1173
						return; // ./common/autogen/doOp.autogen:1174
 // ./common/autogen/doOp.autogen:1175
 // ./common/autogen/doOp.autogen:1176
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:1177
						this.WAIT(op); // ./common/autogen/doOp.autogen:1178
						return; // ./common/autogen/doOp.autogen:1179
 // ./common/autogen/doOp.autogen:1180
 // ./common/autogen/doOp.autogen:1181
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:1182
						this.a(op); // ./common/autogen/doOp.autogen:1183
						return; // ./common/autogen/doOp.autogen:1184
 // ./common/autogen/doOp.autogen:1185
 // ./common/autogen/doOp.autogen:1186
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:1187
						this.a(op); // ./common/autogen/doOp.autogen:1188
						return; // ./common/autogen/doOp.autogen:1189
 // ./common/autogen/doOp.autogen:1190
 // ./common/autogen/doOp.autogen:1191
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:1192
						this.a(op); // ./common/autogen/doOp.autogen:1193
						return; // ./common/autogen/doOp.autogen:1194
 // ./common/autogen/doOp.autogen:1195
 // ./common/autogen/doOp.autogen:1196
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:1197
						this.a(op); // ./common/autogen/doOp.autogen:1198
						return; // ./common/autogen/doOp.autogen:1199
 // ./common/autogen/doOp.autogen:1200
 // ./common/autogen/doOp.autogen:1201
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:1202
						this.a(op); // ./common/autogen/doOp.autogen:1203
						return; // ./common/autogen/doOp.autogen:1204
 // ./common/autogen/doOp.autogen:1205
 // ./common/autogen/doOp.autogen:1206
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:1207
						this.a(op); // ./common/autogen/doOp.autogen:1208
						return; // ./common/autogen/doOp.autogen:1209
 // ./common/autogen/doOp.autogen:1210
 // ./common/autogen/doOp.autogen:1211
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:1212
						this.a(op); // ./common/autogen/doOp.autogen:1213
						return; // ./common/autogen/doOp.autogen:1214
 // ./common/autogen/doOp.autogen:1215
 // ./common/autogen/doOp.autogen:1216
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:1217
						this.a(op); // ./common/autogen/doOp.autogen:1218
						return; // ./common/autogen/doOp.autogen:1219
 // ./common/autogen/doOp.autogen:1220
 // ./common/autogen/doOp.autogen:1221
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:1222
						this.a(op); // ./common/autogen/doOp.autogen:1223
						return; // ./common/autogen/doOp.autogen:1224
 // ./common/autogen/doOp.autogen:1225
 // ./common/autogen/doOp.autogen:1226
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:1227
						this.a(op); // ./common/autogen/doOp.autogen:1228
						return; // ./common/autogen/doOp.autogen:1229
 // ./common/autogen/doOp.autogen:1230
 // ./common/autogen/doOp.autogen:1231
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:1232
						this.a(op); // ./common/autogen/doOp.autogen:1233
						return; // ./common/autogen/doOp.autogen:1234
 // ./common/autogen/doOp.autogen:1235
 // ./common/autogen/doOp.autogen:1236
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:1237
						this.a(op); // ./common/autogen/doOp.autogen:1238
						return; // ./common/autogen/doOp.autogen:1239
 // ./common/autogen/doOp.autogen:1240
 // ./common/autogen/doOp.autogen:1241
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:1242
						this.a(op); // ./common/autogen/doOp.autogen:1243
						return; // ./common/autogen/doOp.autogen:1244
 // ./common/autogen/doOp.autogen:1245
 // ./common/autogen/doOp.autogen:1246
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:1247
						this.a(op); // ./common/autogen/doOp.autogen:1248
						return; // ./common/autogen/doOp.autogen:1249
 // ./common/autogen/doOp.autogen:1250
 // ./common/autogen/doOp.autogen:1251
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:1252
						this.a(op); // ./common/autogen/doOp.autogen:1253
						return; // ./common/autogen/doOp.autogen:1254
 // ./common/autogen/doOp.autogen:1255
 // ./common/autogen/doOp.autogen:1256
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:1257
						this.a(op); // ./common/autogen/doOp.autogen:1258
						return; // ./common/autogen/doOp.autogen:1259
 // ./common/autogen/doOp.autogen:1260
 // ./common/autogen/doOp.autogen:1261
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:1262
						this.a(op); // ./common/autogen/doOp.autogen:1263
						return; // ./common/autogen/doOp.autogen:1264
 // ./common/autogen/doOp.autogen:1265
 // ./common/autogen/doOp.autogen:1266
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:1267
						this.a(op); // ./common/autogen/doOp.autogen:1268
						return; // ./common/autogen/doOp.autogen:1269
 // ./common/autogen/doOp.autogen:1270
 // ./common/autogen/doOp.autogen:1271
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:1272
						this.a(op); // ./common/autogen/doOp.autogen:1273
						return; // ./common/autogen/doOp.autogen:1274
 // ./common/autogen/doOp.autogen:1275
 // ./common/autogen/doOp.autogen:1276
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:1277
						this.a(op); // ./common/autogen/doOp.autogen:1278
						return; // ./common/autogen/doOp.autogen:1279
 // ./common/autogen/doOp.autogen:1280
 // ./common/autogen/doOp.autogen:1281
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:1282
						this.a(op); // ./common/autogen/doOp.autogen:1283
						return; // ./common/autogen/doOp.autogen:1284
 // ./common/autogen/doOp.autogen:1285
 // ./common/autogen/doOp.autogen:1286
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:1287
						this.a(op); // ./common/autogen/doOp.autogen:1288
						return; // ./common/autogen/doOp.autogen:1289
 // ./common/autogen/doOp.autogen:1290
 // ./common/autogen/doOp.autogen:1291
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:1292
						this.a(op); // ./common/autogen/doOp.autogen:1293
						return; // ./common/autogen/doOp.autogen:1294
 // ./common/autogen/doOp.autogen:1295
 // ./common/autogen/doOp.autogen:1296
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:1297
						this.a(op); // ./common/autogen/doOp.autogen:1298
						return; // ./common/autogen/doOp.autogen:1299
 // ./common/autogen/doOp.autogen:1300
 // ./common/autogen/doOp.autogen:1301
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:1302
						this.a(op); // ./common/autogen/doOp.autogen:1303
						return; // ./common/autogen/doOp.autogen:1304
 // ./common/autogen/doOp.autogen:1305
 // ./common/autogen/doOp.autogen:1306
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:1307
						this.a(op); // ./common/autogen/doOp.autogen:1308
						return; // ./common/autogen/doOp.autogen:1309
 // ./common/autogen/doOp.autogen:1310
 // ./common/autogen/doOp.autogen:1311
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:1312
						this.a(op); // ./common/autogen/doOp.autogen:1313
						return; // ./common/autogen/doOp.autogen:1314
 // ./common/autogen/doOp.autogen:1315
 // ./common/autogen/doOp.autogen:1316
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:1317
						this.a(op); // ./common/autogen/doOp.autogen:1318
						return; // ./common/autogen/doOp.autogen:1319
 // ./common/autogen/doOp.autogen:1320
 // ./common/autogen/doOp.autogen:1321
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:1322
						this.a(op); // ./common/autogen/doOp.autogen:1323
						return; // ./common/autogen/doOp.autogen:1324
 // ./common/autogen/doOp.autogen:1325
 // ./common/autogen/doOp.autogen:1326
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:1327
						this.a(op); // ./common/autogen/doOp.autogen:1328
						return; // ./common/autogen/doOp.autogen:1329
 // ./common/autogen/doOp.autogen:1330
 // ./common/autogen/doOp.autogen:1331
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:1332
						this.a(op); // ./common/autogen/doOp.autogen:1333
						return; // ./common/autogen/doOp.autogen:1334
 // ./common/autogen/doOp.autogen:1335
 // ./common/autogen/doOp.autogen:1336
	default: // ./common/autogen/doOp.autogen:1337
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:1338
} // ./common/autogen/doOp.autogen:1339
 // ./common/autogen/doOp.autogen:1340
; // ./common/autogen/doOp.autogen:1341
						return; // ./common/autogen/doOp.autogen:1342
 // ./common/autogen/doOp.autogen:1343
 // ./common/autogen/doOp.autogen:1344
					case 0x2400000: /*0b10010000000000000000000000*/ // ./common/autogen/doOp.autogen:1345
 // ./common/autogen/doOp.autogen:1346
 // ./common/autogen/doOp.autogen:1347
/* 0b111111 */ // ./common/autogen/doOp.autogen:1348
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:1349
{ // ./common/autogen/doOp.autogen:1350
 // ./common/autogen/doOp.autogen:1351
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:1352
						this.a(op); // ./common/autogen/doOp.autogen:1353
						return; // ./common/autogen/doOp.autogen:1354
 // ./common/autogen/doOp.autogen:1355
 // ./common/autogen/doOp.autogen:1356
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:1357
						this.TLBR(op); // ./common/autogen/doOp.autogen:1358
						return; // ./common/autogen/doOp.autogen:1359
 // ./common/autogen/doOp.autogen:1360
 // ./common/autogen/doOp.autogen:1361
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:1362
						this.TLBWI(op); // ./common/autogen/doOp.autogen:1363
						return; // ./common/autogen/doOp.autogen:1364
 // ./common/autogen/doOp.autogen:1365
 // ./common/autogen/doOp.autogen:1366
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:1367
						this.a(op); // ./common/autogen/doOp.autogen:1368
						return; // ./common/autogen/doOp.autogen:1369
 // ./common/autogen/doOp.autogen:1370
 // ./common/autogen/doOp.autogen:1371
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:1372
						this.a(op); // ./common/autogen/doOp.autogen:1373
						return; // ./common/autogen/doOp.autogen:1374
 // ./common/autogen/doOp.autogen:1375
 // ./common/autogen/doOp.autogen:1376
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:1377
						this.a(op); // ./common/autogen/doOp.autogen:1378
						return; // ./common/autogen/doOp.autogen:1379
 // ./common/autogen/doOp.autogen:1380
 // ./common/autogen/doOp.autogen:1381
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:1382
						this.TLBWR(op); // ./common/autogen/doOp.autogen:1383
						return; // ./common/autogen/doOp.autogen:1384
 // ./common/autogen/doOp.autogen:1385
 // ./common/autogen/doOp.autogen:1386
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:1387
						this.a(op); // ./common/autogen/doOp.autogen:1388
						return; // ./common/autogen/doOp.autogen:1389
 // ./common/autogen/doOp.autogen:1390
 // ./common/autogen/doOp.autogen:1391
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:1392
						this.TLBP(op); // ./common/autogen/doOp.autogen:1393
						return; // ./common/autogen/doOp.autogen:1394
 // ./common/autogen/doOp.autogen:1395
 // ./common/autogen/doOp.autogen:1396
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:1397
						this.a(op); // ./common/autogen/doOp.autogen:1398
						return; // ./common/autogen/doOp.autogen:1399
 // ./common/autogen/doOp.autogen:1400
 // ./common/autogen/doOp.autogen:1401
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:1402
						this.a(op); // ./common/autogen/doOp.autogen:1403
						return; // ./common/autogen/doOp.autogen:1404
 // ./common/autogen/doOp.autogen:1405
 // ./common/autogen/doOp.autogen:1406
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:1407
						this.a(op); // ./common/autogen/doOp.autogen:1408
						return; // ./common/autogen/doOp.autogen:1409
 // ./common/autogen/doOp.autogen:1410
 // ./common/autogen/doOp.autogen:1411
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:1412
						this.a(op); // ./common/autogen/doOp.autogen:1413
						return; // ./common/autogen/doOp.autogen:1414
 // ./common/autogen/doOp.autogen:1415
 // ./common/autogen/doOp.autogen:1416
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:1417
						this.a(op); // ./common/autogen/doOp.autogen:1418
						return; // ./common/autogen/doOp.autogen:1419
 // ./common/autogen/doOp.autogen:1420
 // ./common/autogen/doOp.autogen:1421
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:1422
						this.a(op); // ./common/autogen/doOp.autogen:1423
						return; // ./common/autogen/doOp.autogen:1424
 // ./common/autogen/doOp.autogen:1425
 // ./common/autogen/doOp.autogen:1426
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:1427
						this.a(op); // ./common/autogen/doOp.autogen:1428
						return; // ./common/autogen/doOp.autogen:1429
 // ./common/autogen/doOp.autogen:1430
 // ./common/autogen/doOp.autogen:1431
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:1432
						this.a(op); // ./common/autogen/doOp.autogen:1433
						return; // ./common/autogen/doOp.autogen:1434
 // ./common/autogen/doOp.autogen:1435
 // ./common/autogen/doOp.autogen:1436
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:1437
						this.a(op); // ./common/autogen/doOp.autogen:1438
						return; // ./common/autogen/doOp.autogen:1439
 // ./common/autogen/doOp.autogen:1440
 // ./common/autogen/doOp.autogen:1441
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:1442
						this.a(op); // ./common/autogen/doOp.autogen:1443
						return; // ./common/autogen/doOp.autogen:1444
 // ./common/autogen/doOp.autogen:1445
 // ./common/autogen/doOp.autogen:1446
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:1447
						this.a(op); // ./common/autogen/doOp.autogen:1448
						return; // ./common/autogen/doOp.autogen:1449
 // ./common/autogen/doOp.autogen:1450
 // ./common/autogen/doOp.autogen:1451
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:1452
						this.a(op); // ./common/autogen/doOp.autogen:1453
						return; // ./common/autogen/doOp.autogen:1454
 // ./common/autogen/doOp.autogen:1455
 // ./common/autogen/doOp.autogen:1456
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:1457
						this.a(op); // ./common/autogen/doOp.autogen:1458
						return; // ./common/autogen/doOp.autogen:1459
 // ./common/autogen/doOp.autogen:1460
 // ./common/autogen/doOp.autogen:1461
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:1462
						this.a(op); // ./common/autogen/doOp.autogen:1463
						return; // ./common/autogen/doOp.autogen:1464
 // ./common/autogen/doOp.autogen:1465
 // ./common/autogen/doOp.autogen:1466
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:1467
						this.a(op); // ./common/autogen/doOp.autogen:1468
						return; // ./common/autogen/doOp.autogen:1469
 // ./common/autogen/doOp.autogen:1470
 // ./common/autogen/doOp.autogen:1471
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:1472
						this.ERET(op); // ./common/autogen/doOp.autogen:1473
						return; // ./common/autogen/doOp.autogen:1474
 // ./common/autogen/doOp.autogen:1475
 // ./common/autogen/doOp.autogen:1476
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:1477
						this.a(op); // ./common/autogen/doOp.autogen:1478
						return; // ./common/autogen/doOp.autogen:1479
 // ./common/autogen/doOp.autogen:1480
 // ./common/autogen/doOp.autogen:1481
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:1482
						this.a(op); // ./common/autogen/doOp.autogen:1483
						return; // ./common/autogen/doOp.autogen:1484
 // ./common/autogen/doOp.autogen:1485
 // ./common/autogen/doOp.autogen:1486
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:1487
						this.a(op); // ./common/autogen/doOp.autogen:1488
						return; // ./common/autogen/doOp.autogen:1489
 // ./common/autogen/doOp.autogen:1490
 // ./common/autogen/doOp.autogen:1491
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:1492
						this.a(op); // ./common/autogen/doOp.autogen:1493
						return; // ./common/autogen/doOp.autogen:1494
 // ./common/autogen/doOp.autogen:1495
 // ./common/autogen/doOp.autogen:1496
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:1497
						this.a(op); // ./common/autogen/doOp.autogen:1498
						return; // ./common/autogen/doOp.autogen:1499
 // ./common/autogen/doOp.autogen:1500
 // ./common/autogen/doOp.autogen:1501
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:1502
						this.a(op); // ./common/autogen/doOp.autogen:1503
						return; // ./common/autogen/doOp.autogen:1504
 // ./common/autogen/doOp.autogen:1505
 // ./common/autogen/doOp.autogen:1506
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:1507
						this.DERET(op); // ./common/autogen/doOp.autogen:1508
						return; // ./common/autogen/doOp.autogen:1509
 // ./common/autogen/doOp.autogen:1510
 // ./common/autogen/doOp.autogen:1511
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:1512
						this.WAIT(op); // ./common/autogen/doOp.autogen:1513
						return; // ./common/autogen/doOp.autogen:1514
 // ./common/autogen/doOp.autogen:1515
 // ./common/autogen/doOp.autogen:1516
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:1517
						this.a(op); // ./common/autogen/doOp.autogen:1518
						return; // ./common/autogen/doOp.autogen:1519
 // ./common/autogen/doOp.autogen:1520
 // ./common/autogen/doOp.autogen:1521
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:1522
						this.a(op); // ./common/autogen/doOp.autogen:1523
						return; // ./common/autogen/doOp.autogen:1524
 // ./common/autogen/doOp.autogen:1525
 // ./common/autogen/doOp.autogen:1526
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:1527
						this.a(op); // ./common/autogen/doOp.autogen:1528
						return; // ./common/autogen/doOp.autogen:1529
 // ./common/autogen/doOp.autogen:1530
 // ./common/autogen/doOp.autogen:1531
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:1532
						this.a(op); // ./common/autogen/doOp.autogen:1533
						return; // ./common/autogen/doOp.autogen:1534
 // ./common/autogen/doOp.autogen:1535
 // ./common/autogen/doOp.autogen:1536
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:1537
						this.a(op); // ./common/autogen/doOp.autogen:1538
						return; // ./common/autogen/doOp.autogen:1539
 // ./common/autogen/doOp.autogen:1540
 // ./common/autogen/doOp.autogen:1541
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:1542
						this.a(op); // ./common/autogen/doOp.autogen:1543
						return; // ./common/autogen/doOp.autogen:1544
 // ./common/autogen/doOp.autogen:1545
 // ./common/autogen/doOp.autogen:1546
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:1547
						this.a(op); // ./common/autogen/doOp.autogen:1548
						return; // ./common/autogen/doOp.autogen:1549
 // ./common/autogen/doOp.autogen:1550
 // ./common/autogen/doOp.autogen:1551
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:1552
						this.a(op); // ./common/autogen/doOp.autogen:1553
						return; // ./common/autogen/doOp.autogen:1554
 // ./common/autogen/doOp.autogen:1555
 // ./common/autogen/doOp.autogen:1556
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:1557
						this.a(op); // ./common/autogen/doOp.autogen:1558
						return; // ./common/autogen/doOp.autogen:1559
 // ./common/autogen/doOp.autogen:1560
 // ./common/autogen/doOp.autogen:1561
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:1562
						this.a(op); // ./common/autogen/doOp.autogen:1563
						return; // ./common/autogen/doOp.autogen:1564
 // ./common/autogen/doOp.autogen:1565
 // ./common/autogen/doOp.autogen:1566
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:1567
						this.a(op); // ./common/autogen/doOp.autogen:1568
						return; // ./common/autogen/doOp.autogen:1569
 // ./common/autogen/doOp.autogen:1570
 // ./common/autogen/doOp.autogen:1571
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:1572
						this.a(op); // ./common/autogen/doOp.autogen:1573
						return; // ./common/autogen/doOp.autogen:1574
 // ./common/autogen/doOp.autogen:1575
 // ./common/autogen/doOp.autogen:1576
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:1577
						this.a(op); // ./common/autogen/doOp.autogen:1578
						return; // ./common/autogen/doOp.autogen:1579
 // ./common/autogen/doOp.autogen:1580
 // ./common/autogen/doOp.autogen:1581
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:1582
						this.a(op); // ./common/autogen/doOp.autogen:1583
						return; // ./common/autogen/doOp.autogen:1584
 // ./common/autogen/doOp.autogen:1585
 // ./common/autogen/doOp.autogen:1586
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:1587
						this.a(op); // ./common/autogen/doOp.autogen:1588
						return; // ./common/autogen/doOp.autogen:1589
 // ./common/autogen/doOp.autogen:1590
 // ./common/autogen/doOp.autogen:1591
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:1592
						this.a(op); // ./common/autogen/doOp.autogen:1593
						return; // ./common/autogen/doOp.autogen:1594
 // ./common/autogen/doOp.autogen:1595
 // ./common/autogen/doOp.autogen:1596
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:1597
						this.a(op); // ./common/autogen/doOp.autogen:1598
						return; // ./common/autogen/doOp.autogen:1599
 // ./common/autogen/doOp.autogen:1600
 // ./common/autogen/doOp.autogen:1601
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:1602
						this.a(op); // ./common/autogen/doOp.autogen:1603
						return; // ./common/autogen/doOp.autogen:1604
 // ./common/autogen/doOp.autogen:1605
 // ./common/autogen/doOp.autogen:1606
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:1607
						this.a(op); // ./common/autogen/doOp.autogen:1608
						return; // ./common/autogen/doOp.autogen:1609
 // ./common/autogen/doOp.autogen:1610
 // ./common/autogen/doOp.autogen:1611
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:1612
						this.a(op); // ./common/autogen/doOp.autogen:1613
						return; // ./common/autogen/doOp.autogen:1614
 // ./common/autogen/doOp.autogen:1615
 // ./common/autogen/doOp.autogen:1616
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:1617
						this.a(op); // ./common/autogen/doOp.autogen:1618
						return; // ./common/autogen/doOp.autogen:1619
 // ./common/autogen/doOp.autogen:1620
 // ./common/autogen/doOp.autogen:1621
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:1622
						this.a(op); // ./common/autogen/doOp.autogen:1623
						return; // ./common/autogen/doOp.autogen:1624
 // ./common/autogen/doOp.autogen:1625
 // ./common/autogen/doOp.autogen:1626
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:1627
						this.a(op); // ./common/autogen/doOp.autogen:1628
						return; // ./common/autogen/doOp.autogen:1629
 // ./common/autogen/doOp.autogen:1630
 // ./common/autogen/doOp.autogen:1631
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:1632
						this.a(op); // ./common/autogen/doOp.autogen:1633
						return; // ./common/autogen/doOp.autogen:1634
 // ./common/autogen/doOp.autogen:1635
 // ./common/autogen/doOp.autogen:1636
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:1637
						this.a(op); // ./common/autogen/doOp.autogen:1638
						return; // ./common/autogen/doOp.autogen:1639
 // ./common/autogen/doOp.autogen:1640
 // ./common/autogen/doOp.autogen:1641
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:1642
						this.a(op); // ./common/autogen/doOp.autogen:1643
						return; // ./common/autogen/doOp.autogen:1644
 // ./common/autogen/doOp.autogen:1645
 // ./common/autogen/doOp.autogen:1646
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:1647
						this.a(op); // ./common/autogen/doOp.autogen:1648
						return; // ./common/autogen/doOp.autogen:1649
 // ./common/autogen/doOp.autogen:1650
 // ./common/autogen/doOp.autogen:1651
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:1652
						this.a(op); // ./common/autogen/doOp.autogen:1653
						return; // ./common/autogen/doOp.autogen:1654
 // ./common/autogen/doOp.autogen:1655
 // ./common/autogen/doOp.autogen:1656
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:1657
						this.a(op); // ./common/autogen/doOp.autogen:1658
						return; // ./common/autogen/doOp.autogen:1659
 // ./common/autogen/doOp.autogen:1660
 // ./common/autogen/doOp.autogen:1661
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:1662
						this.a(op); // ./common/autogen/doOp.autogen:1663
						return; // ./common/autogen/doOp.autogen:1664
 // ./common/autogen/doOp.autogen:1665
 // ./common/autogen/doOp.autogen:1666
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:1667
						this.a(op); // ./common/autogen/doOp.autogen:1668
						return; // ./common/autogen/doOp.autogen:1669
 // ./common/autogen/doOp.autogen:1670
 // ./common/autogen/doOp.autogen:1671
	default: // ./common/autogen/doOp.autogen:1672
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:1673
} // ./common/autogen/doOp.autogen:1674
 // ./common/autogen/doOp.autogen:1675
; // ./common/autogen/doOp.autogen:1676
						return; // ./common/autogen/doOp.autogen:1677
 // ./common/autogen/doOp.autogen:1678
 // ./common/autogen/doOp.autogen:1679
					case 0x2600000: /*0b10011000000000000000000000*/ // ./common/autogen/doOp.autogen:1680
 // ./common/autogen/doOp.autogen:1681
 // ./common/autogen/doOp.autogen:1682
/* 0b111111 */ // ./common/autogen/doOp.autogen:1683
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:1684
{ // ./common/autogen/doOp.autogen:1685
 // ./common/autogen/doOp.autogen:1686
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:1687
						this.a(op); // ./common/autogen/doOp.autogen:1688
						return; // ./common/autogen/doOp.autogen:1689
 // ./common/autogen/doOp.autogen:1690
 // ./common/autogen/doOp.autogen:1691
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:1692
						this.TLBR(op); // ./common/autogen/doOp.autogen:1693
						return; // ./common/autogen/doOp.autogen:1694
 // ./common/autogen/doOp.autogen:1695
 // ./common/autogen/doOp.autogen:1696
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:1697
						this.TLBWI(op); // ./common/autogen/doOp.autogen:1698
						return; // ./common/autogen/doOp.autogen:1699
 // ./common/autogen/doOp.autogen:1700
 // ./common/autogen/doOp.autogen:1701
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:1702
						this.a(op); // ./common/autogen/doOp.autogen:1703
						return; // ./common/autogen/doOp.autogen:1704
 // ./common/autogen/doOp.autogen:1705
 // ./common/autogen/doOp.autogen:1706
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:1707
						this.a(op); // ./common/autogen/doOp.autogen:1708
						return; // ./common/autogen/doOp.autogen:1709
 // ./common/autogen/doOp.autogen:1710
 // ./common/autogen/doOp.autogen:1711
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:1712
						this.a(op); // ./common/autogen/doOp.autogen:1713
						return; // ./common/autogen/doOp.autogen:1714
 // ./common/autogen/doOp.autogen:1715
 // ./common/autogen/doOp.autogen:1716
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:1717
						this.TLBWR(op); // ./common/autogen/doOp.autogen:1718
						return; // ./common/autogen/doOp.autogen:1719
 // ./common/autogen/doOp.autogen:1720
 // ./common/autogen/doOp.autogen:1721
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:1722
						this.a(op); // ./common/autogen/doOp.autogen:1723
						return; // ./common/autogen/doOp.autogen:1724
 // ./common/autogen/doOp.autogen:1725
 // ./common/autogen/doOp.autogen:1726
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:1727
						this.TLBP(op); // ./common/autogen/doOp.autogen:1728
						return; // ./common/autogen/doOp.autogen:1729
 // ./common/autogen/doOp.autogen:1730
 // ./common/autogen/doOp.autogen:1731
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:1732
						this.a(op); // ./common/autogen/doOp.autogen:1733
						return; // ./common/autogen/doOp.autogen:1734
 // ./common/autogen/doOp.autogen:1735
 // ./common/autogen/doOp.autogen:1736
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:1737
						this.a(op); // ./common/autogen/doOp.autogen:1738
						return; // ./common/autogen/doOp.autogen:1739
 // ./common/autogen/doOp.autogen:1740
 // ./common/autogen/doOp.autogen:1741
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:1742
						this.a(op); // ./common/autogen/doOp.autogen:1743
						return; // ./common/autogen/doOp.autogen:1744
 // ./common/autogen/doOp.autogen:1745
 // ./common/autogen/doOp.autogen:1746
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:1747
						this.a(op); // ./common/autogen/doOp.autogen:1748
						return; // ./common/autogen/doOp.autogen:1749
 // ./common/autogen/doOp.autogen:1750
 // ./common/autogen/doOp.autogen:1751
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:1752
						this.a(op); // ./common/autogen/doOp.autogen:1753
						return; // ./common/autogen/doOp.autogen:1754
 // ./common/autogen/doOp.autogen:1755
 // ./common/autogen/doOp.autogen:1756
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:1757
						this.a(op); // ./common/autogen/doOp.autogen:1758
						return; // ./common/autogen/doOp.autogen:1759
 // ./common/autogen/doOp.autogen:1760
 // ./common/autogen/doOp.autogen:1761
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:1762
						this.a(op); // ./common/autogen/doOp.autogen:1763
						return; // ./common/autogen/doOp.autogen:1764
 // ./common/autogen/doOp.autogen:1765
 // ./common/autogen/doOp.autogen:1766
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:1767
						this.a(op); // ./common/autogen/doOp.autogen:1768
						return; // ./common/autogen/doOp.autogen:1769
 // ./common/autogen/doOp.autogen:1770
 // ./common/autogen/doOp.autogen:1771
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:1772
						this.a(op); // ./common/autogen/doOp.autogen:1773
						return; // ./common/autogen/doOp.autogen:1774
 // ./common/autogen/doOp.autogen:1775
 // ./common/autogen/doOp.autogen:1776
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:1777
						this.a(op); // ./common/autogen/doOp.autogen:1778
						return; // ./common/autogen/doOp.autogen:1779
 // ./common/autogen/doOp.autogen:1780
 // ./common/autogen/doOp.autogen:1781
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:1782
						this.a(op); // ./common/autogen/doOp.autogen:1783
						return; // ./common/autogen/doOp.autogen:1784
 // ./common/autogen/doOp.autogen:1785
 // ./common/autogen/doOp.autogen:1786
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:1787
						this.a(op); // ./common/autogen/doOp.autogen:1788
						return; // ./common/autogen/doOp.autogen:1789
 // ./common/autogen/doOp.autogen:1790
 // ./common/autogen/doOp.autogen:1791
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:1792
						this.a(op); // ./common/autogen/doOp.autogen:1793
						return; // ./common/autogen/doOp.autogen:1794
 // ./common/autogen/doOp.autogen:1795
 // ./common/autogen/doOp.autogen:1796
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:1797
						this.a(op); // ./common/autogen/doOp.autogen:1798
						return; // ./common/autogen/doOp.autogen:1799
 // ./common/autogen/doOp.autogen:1800
 // ./common/autogen/doOp.autogen:1801
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:1802
						this.a(op); // ./common/autogen/doOp.autogen:1803
						return; // ./common/autogen/doOp.autogen:1804
 // ./common/autogen/doOp.autogen:1805
 // ./common/autogen/doOp.autogen:1806
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:1807
						this.ERET(op); // ./common/autogen/doOp.autogen:1808
						return; // ./common/autogen/doOp.autogen:1809
 // ./common/autogen/doOp.autogen:1810
 // ./common/autogen/doOp.autogen:1811
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:1812
						this.a(op); // ./common/autogen/doOp.autogen:1813
						return; // ./common/autogen/doOp.autogen:1814
 // ./common/autogen/doOp.autogen:1815
 // ./common/autogen/doOp.autogen:1816
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:1817
						this.a(op); // ./common/autogen/doOp.autogen:1818
						return; // ./common/autogen/doOp.autogen:1819
 // ./common/autogen/doOp.autogen:1820
 // ./common/autogen/doOp.autogen:1821
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:1822
						this.a(op); // ./common/autogen/doOp.autogen:1823
						return; // ./common/autogen/doOp.autogen:1824
 // ./common/autogen/doOp.autogen:1825
 // ./common/autogen/doOp.autogen:1826
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:1827
						this.a(op); // ./common/autogen/doOp.autogen:1828
						return; // ./common/autogen/doOp.autogen:1829
 // ./common/autogen/doOp.autogen:1830
 // ./common/autogen/doOp.autogen:1831
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:1832
						this.a(op); // ./common/autogen/doOp.autogen:1833
						return; // ./common/autogen/doOp.autogen:1834
 // ./common/autogen/doOp.autogen:1835
 // ./common/autogen/doOp.autogen:1836
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:1837
						this.a(op); // ./common/autogen/doOp.autogen:1838
						return; // ./common/autogen/doOp.autogen:1839
 // ./common/autogen/doOp.autogen:1840
 // ./common/autogen/doOp.autogen:1841
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:1842
						this.DERET(op); // ./common/autogen/doOp.autogen:1843
						return; // ./common/autogen/doOp.autogen:1844
 // ./common/autogen/doOp.autogen:1845
 // ./common/autogen/doOp.autogen:1846
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:1847
						this.WAIT(op); // ./common/autogen/doOp.autogen:1848
						return; // ./common/autogen/doOp.autogen:1849
 // ./common/autogen/doOp.autogen:1850
 // ./common/autogen/doOp.autogen:1851
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:1852
						this.a(op); // ./common/autogen/doOp.autogen:1853
						return; // ./common/autogen/doOp.autogen:1854
 // ./common/autogen/doOp.autogen:1855
 // ./common/autogen/doOp.autogen:1856
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:1857
						this.a(op); // ./common/autogen/doOp.autogen:1858
						return; // ./common/autogen/doOp.autogen:1859
 // ./common/autogen/doOp.autogen:1860
 // ./common/autogen/doOp.autogen:1861
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:1862
						this.a(op); // ./common/autogen/doOp.autogen:1863
						return; // ./common/autogen/doOp.autogen:1864
 // ./common/autogen/doOp.autogen:1865
 // ./common/autogen/doOp.autogen:1866
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:1867
						this.a(op); // ./common/autogen/doOp.autogen:1868
						return; // ./common/autogen/doOp.autogen:1869
 // ./common/autogen/doOp.autogen:1870
 // ./common/autogen/doOp.autogen:1871
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:1872
						this.a(op); // ./common/autogen/doOp.autogen:1873
						return; // ./common/autogen/doOp.autogen:1874
 // ./common/autogen/doOp.autogen:1875
 // ./common/autogen/doOp.autogen:1876
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:1877
						this.a(op); // ./common/autogen/doOp.autogen:1878
						return; // ./common/autogen/doOp.autogen:1879
 // ./common/autogen/doOp.autogen:1880
 // ./common/autogen/doOp.autogen:1881
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:1882
						this.a(op); // ./common/autogen/doOp.autogen:1883
						return; // ./common/autogen/doOp.autogen:1884
 // ./common/autogen/doOp.autogen:1885
 // ./common/autogen/doOp.autogen:1886
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:1887
						this.a(op); // ./common/autogen/doOp.autogen:1888
						return; // ./common/autogen/doOp.autogen:1889
 // ./common/autogen/doOp.autogen:1890
 // ./common/autogen/doOp.autogen:1891
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:1892
						this.a(op); // ./common/autogen/doOp.autogen:1893
						return; // ./common/autogen/doOp.autogen:1894
 // ./common/autogen/doOp.autogen:1895
 // ./common/autogen/doOp.autogen:1896
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:1897
						this.a(op); // ./common/autogen/doOp.autogen:1898
						return; // ./common/autogen/doOp.autogen:1899
 // ./common/autogen/doOp.autogen:1900
 // ./common/autogen/doOp.autogen:1901
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:1902
						this.a(op); // ./common/autogen/doOp.autogen:1903
						return; // ./common/autogen/doOp.autogen:1904
 // ./common/autogen/doOp.autogen:1905
 // ./common/autogen/doOp.autogen:1906
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:1907
						this.a(op); // ./common/autogen/doOp.autogen:1908
						return; // ./common/autogen/doOp.autogen:1909
 // ./common/autogen/doOp.autogen:1910
 // ./common/autogen/doOp.autogen:1911
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:1912
						this.a(op); // ./common/autogen/doOp.autogen:1913
						return; // ./common/autogen/doOp.autogen:1914
 // ./common/autogen/doOp.autogen:1915
 // ./common/autogen/doOp.autogen:1916
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:1917
						this.a(op); // ./common/autogen/doOp.autogen:1918
						return; // ./common/autogen/doOp.autogen:1919
 // ./common/autogen/doOp.autogen:1920
 // ./common/autogen/doOp.autogen:1921
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:1922
						this.a(op); // ./common/autogen/doOp.autogen:1923
						return; // ./common/autogen/doOp.autogen:1924
 // ./common/autogen/doOp.autogen:1925
 // ./common/autogen/doOp.autogen:1926
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:1927
						this.a(op); // ./common/autogen/doOp.autogen:1928
						return; // ./common/autogen/doOp.autogen:1929
 // ./common/autogen/doOp.autogen:1930
 // ./common/autogen/doOp.autogen:1931
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:1932
						this.a(op); // ./common/autogen/doOp.autogen:1933
						return; // ./common/autogen/doOp.autogen:1934
 // ./common/autogen/doOp.autogen:1935
 // ./common/autogen/doOp.autogen:1936
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:1937
						this.a(op); // ./common/autogen/doOp.autogen:1938
						return; // ./common/autogen/doOp.autogen:1939
 // ./common/autogen/doOp.autogen:1940
 // ./common/autogen/doOp.autogen:1941
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:1942
						this.a(op); // ./common/autogen/doOp.autogen:1943
						return; // ./common/autogen/doOp.autogen:1944
 // ./common/autogen/doOp.autogen:1945
 // ./common/autogen/doOp.autogen:1946
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:1947
						this.a(op); // ./common/autogen/doOp.autogen:1948
						return; // ./common/autogen/doOp.autogen:1949
 // ./common/autogen/doOp.autogen:1950
 // ./common/autogen/doOp.autogen:1951
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:1952
						this.a(op); // ./common/autogen/doOp.autogen:1953
						return; // ./common/autogen/doOp.autogen:1954
 // ./common/autogen/doOp.autogen:1955
 // ./common/autogen/doOp.autogen:1956
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:1957
						this.a(op); // ./common/autogen/doOp.autogen:1958
						return; // ./common/autogen/doOp.autogen:1959
 // ./common/autogen/doOp.autogen:1960
 // ./common/autogen/doOp.autogen:1961
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:1962
						this.a(op); // ./common/autogen/doOp.autogen:1963
						return; // ./common/autogen/doOp.autogen:1964
 // ./common/autogen/doOp.autogen:1965
 // ./common/autogen/doOp.autogen:1966
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:1967
						this.a(op); // ./common/autogen/doOp.autogen:1968
						return; // ./common/autogen/doOp.autogen:1969
 // ./common/autogen/doOp.autogen:1970
 // ./common/autogen/doOp.autogen:1971
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:1972
						this.a(op); // ./common/autogen/doOp.autogen:1973
						return; // ./common/autogen/doOp.autogen:1974
 // ./common/autogen/doOp.autogen:1975
 // ./common/autogen/doOp.autogen:1976
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:1977
						this.a(op); // ./common/autogen/doOp.autogen:1978
						return; // ./common/autogen/doOp.autogen:1979
 // ./common/autogen/doOp.autogen:1980
 // ./common/autogen/doOp.autogen:1981
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:1982
						this.a(op); // ./common/autogen/doOp.autogen:1983
						return; // ./common/autogen/doOp.autogen:1984
 // ./common/autogen/doOp.autogen:1985
 // ./common/autogen/doOp.autogen:1986
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:1987
						this.a(op); // ./common/autogen/doOp.autogen:1988
						return; // ./common/autogen/doOp.autogen:1989
 // ./common/autogen/doOp.autogen:1990
 // ./common/autogen/doOp.autogen:1991
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:1992
						this.a(op); // ./common/autogen/doOp.autogen:1993
						return; // ./common/autogen/doOp.autogen:1994
 // ./common/autogen/doOp.autogen:1995
 // ./common/autogen/doOp.autogen:1996
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:1997
						this.a(op); // ./common/autogen/doOp.autogen:1998
						return; // ./common/autogen/doOp.autogen:1999
 // ./common/autogen/doOp.autogen:2000
 // ./common/autogen/doOp.autogen:2001
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:2002
						this.a(op); // ./common/autogen/doOp.autogen:2003
						return; // ./common/autogen/doOp.autogen:2004
 // ./common/autogen/doOp.autogen:2005
 // ./common/autogen/doOp.autogen:2006
	default: // ./common/autogen/doOp.autogen:2007
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:2008
} // ./common/autogen/doOp.autogen:2009
 // ./common/autogen/doOp.autogen:2010
; // ./common/autogen/doOp.autogen:2011
						return; // ./common/autogen/doOp.autogen:2012
 // ./common/autogen/doOp.autogen:2013
 // ./common/autogen/doOp.autogen:2014
					case 0x2800000: /*0b10100000000000000000000000*/ // ./common/autogen/doOp.autogen:2015
 // ./common/autogen/doOp.autogen:2016
 // ./common/autogen/doOp.autogen:2017
/* 0b111111 */ // ./common/autogen/doOp.autogen:2018
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:2019
{ // ./common/autogen/doOp.autogen:2020
 // ./common/autogen/doOp.autogen:2021
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:2022
						this.a(op); // ./common/autogen/doOp.autogen:2023
						return; // ./common/autogen/doOp.autogen:2024
 // ./common/autogen/doOp.autogen:2025
 // ./common/autogen/doOp.autogen:2026
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:2027
						this.TLBR(op); // ./common/autogen/doOp.autogen:2028
						return; // ./common/autogen/doOp.autogen:2029
 // ./common/autogen/doOp.autogen:2030
 // ./common/autogen/doOp.autogen:2031
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:2032
						this.TLBWI(op); // ./common/autogen/doOp.autogen:2033
						return; // ./common/autogen/doOp.autogen:2034
 // ./common/autogen/doOp.autogen:2035
 // ./common/autogen/doOp.autogen:2036
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:2037
						this.a(op); // ./common/autogen/doOp.autogen:2038
						return; // ./common/autogen/doOp.autogen:2039
 // ./common/autogen/doOp.autogen:2040
 // ./common/autogen/doOp.autogen:2041
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:2042
						this.a(op); // ./common/autogen/doOp.autogen:2043
						return; // ./common/autogen/doOp.autogen:2044
 // ./common/autogen/doOp.autogen:2045
 // ./common/autogen/doOp.autogen:2046
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:2047
						this.a(op); // ./common/autogen/doOp.autogen:2048
						return; // ./common/autogen/doOp.autogen:2049
 // ./common/autogen/doOp.autogen:2050
 // ./common/autogen/doOp.autogen:2051
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:2052
						this.TLBWR(op); // ./common/autogen/doOp.autogen:2053
						return; // ./common/autogen/doOp.autogen:2054
 // ./common/autogen/doOp.autogen:2055
 // ./common/autogen/doOp.autogen:2056
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:2057
						this.a(op); // ./common/autogen/doOp.autogen:2058
						return; // ./common/autogen/doOp.autogen:2059
 // ./common/autogen/doOp.autogen:2060
 // ./common/autogen/doOp.autogen:2061
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:2062
						this.TLBP(op); // ./common/autogen/doOp.autogen:2063
						return; // ./common/autogen/doOp.autogen:2064
 // ./common/autogen/doOp.autogen:2065
 // ./common/autogen/doOp.autogen:2066
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:2067
						this.a(op); // ./common/autogen/doOp.autogen:2068
						return; // ./common/autogen/doOp.autogen:2069
 // ./common/autogen/doOp.autogen:2070
 // ./common/autogen/doOp.autogen:2071
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:2072
						this.a(op); // ./common/autogen/doOp.autogen:2073
						return; // ./common/autogen/doOp.autogen:2074
 // ./common/autogen/doOp.autogen:2075
 // ./common/autogen/doOp.autogen:2076
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:2077
						this.a(op); // ./common/autogen/doOp.autogen:2078
						return; // ./common/autogen/doOp.autogen:2079
 // ./common/autogen/doOp.autogen:2080
 // ./common/autogen/doOp.autogen:2081
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:2082
						this.a(op); // ./common/autogen/doOp.autogen:2083
						return; // ./common/autogen/doOp.autogen:2084
 // ./common/autogen/doOp.autogen:2085
 // ./common/autogen/doOp.autogen:2086
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:2087
						this.a(op); // ./common/autogen/doOp.autogen:2088
						return; // ./common/autogen/doOp.autogen:2089
 // ./common/autogen/doOp.autogen:2090
 // ./common/autogen/doOp.autogen:2091
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:2092
						this.a(op); // ./common/autogen/doOp.autogen:2093
						return; // ./common/autogen/doOp.autogen:2094
 // ./common/autogen/doOp.autogen:2095
 // ./common/autogen/doOp.autogen:2096
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:2097
						this.a(op); // ./common/autogen/doOp.autogen:2098
						return; // ./common/autogen/doOp.autogen:2099
 // ./common/autogen/doOp.autogen:2100
 // ./common/autogen/doOp.autogen:2101
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:2102
						this.a(op); // ./common/autogen/doOp.autogen:2103
						return; // ./common/autogen/doOp.autogen:2104
 // ./common/autogen/doOp.autogen:2105
 // ./common/autogen/doOp.autogen:2106
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:2107
						this.a(op); // ./common/autogen/doOp.autogen:2108
						return; // ./common/autogen/doOp.autogen:2109
 // ./common/autogen/doOp.autogen:2110
 // ./common/autogen/doOp.autogen:2111
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:2112
						this.a(op); // ./common/autogen/doOp.autogen:2113
						return; // ./common/autogen/doOp.autogen:2114
 // ./common/autogen/doOp.autogen:2115
 // ./common/autogen/doOp.autogen:2116
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:2117
						this.a(op); // ./common/autogen/doOp.autogen:2118
						return; // ./common/autogen/doOp.autogen:2119
 // ./common/autogen/doOp.autogen:2120
 // ./common/autogen/doOp.autogen:2121
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:2122
						this.a(op); // ./common/autogen/doOp.autogen:2123
						return; // ./common/autogen/doOp.autogen:2124
 // ./common/autogen/doOp.autogen:2125
 // ./common/autogen/doOp.autogen:2126
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:2127
						this.a(op); // ./common/autogen/doOp.autogen:2128
						return; // ./common/autogen/doOp.autogen:2129
 // ./common/autogen/doOp.autogen:2130
 // ./common/autogen/doOp.autogen:2131
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:2132
						this.a(op); // ./common/autogen/doOp.autogen:2133
						return; // ./common/autogen/doOp.autogen:2134
 // ./common/autogen/doOp.autogen:2135
 // ./common/autogen/doOp.autogen:2136
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:2137
						this.a(op); // ./common/autogen/doOp.autogen:2138
						return; // ./common/autogen/doOp.autogen:2139
 // ./common/autogen/doOp.autogen:2140
 // ./common/autogen/doOp.autogen:2141
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:2142
						this.ERET(op); // ./common/autogen/doOp.autogen:2143
						return; // ./common/autogen/doOp.autogen:2144
 // ./common/autogen/doOp.autogen:2145
 // ./common/autogen/doOp.autogen:2146
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:2147
						this.a(op); // ./common/autogen/doOp.autogen:2148
						return; // ./common/autogen/doOp.autogen:2149
 // ./common/autogen/doOp.autogen:2150
 // ./common/autogen/doOp.autogen:2151
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:2152
						this.a(op); // ./common/autogen/doOp.autogen:2153
						return; // ./common/autogen/doOp.autogen:2154
 // ./common/autogen/doOp.autogen:2155
 // ./common/autogen/doOp.autogen:2156
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:2157
						this.a(op); // ./common/autogen/doOp.autogen:2158
						return; // ./common/autogen/doOp.autogen:2159
 // ./common/autogen/doOp.autogen:2160
 // ./common/autogen/doOp.autogen:2161
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:2162
						this.a(op); // ./common/autogen/doOp.autogen:2163
						return; // ./common/autogen/doOp.autogen:2164
 // ./common/autogen/doOp.autogen:2165
 // ./common/autogen/doOp.autogen:2166
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:2167
						this.a(op); // ./common/autogen/doOp.autogen:2168
						return; // ./common/autogen/doOp.autogen:2169
 // ./common/autogen/doOp.autogen:2170
 // ./common/autogen/doOp.autogen:2171
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:2172
						this.a(op); // ./common/autogen/doOp.autogen:2173
						return; // ./common/autogen/doOp.autogen:2174
 // ./common/autogen/doOp.autogen:2175
 // ./common/autogen/doOp.autogen:2176
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:2177
						this.DERET(op); // ./common/autogen/doOp.autogen:2178
						return; // ./common/autogen/doOp.autogen:2179
 // ./common/autogen/doOp.autogen:2180
 // ./common/autogen/doOp.autogen:2181
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:2182
						this.WAIT(op); // ./common/autogen/doOp.autogen:2183
						return; // ./common/autogen/doOp.autogen:2184
 // ./common/autogen/doOp.autogen:2185
 // ./common/autogen/doOp.autogen:2186
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:2187
						this.a(op); // ./common/autogen/doOp.autogen:2188
						return; // ./common/autogen/doOp.autogen:2189
 // ./common/autogen/doOp.autogen:2190
 // ./common/autogen/doOp.autogen:2191
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:2192
						this.a(op); // ./common/autogen/doOp.autogen:2193
						return; // ./common/autogen/doOp.autogen:2194
 // ./common/autogen/doOp.autogen:2195
 // ./common/autogen/doOp.autogen:2196
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:2197
						this.a(op); // ./common/autogen/doOp.autogen:2198
						return; // ./common/autogen/doOp.autogen:2199
 // ./common/autogen/doOp.autogen:2200
 // ./common/autogen/doOp.autogen:2201
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:2202
						this.a(op); // ./common/autogen/doOp.autogen:2203
						return; // ./common/autogen/doOp.autogen:2204
 // ./common/autogen/doOp.autogen:2205
 // ./common/autogen/doOp.autogen:2206
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:2207
						this.a(op); // ./common/autogen/doOp.autogen:2208
						return; // ./common/autogen/doOp.autogen:2209
 // ./common/autogen/doOp.autogen:2210
 // ./common/autogen/doOp.autogen:2211
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:2212
						this.a(op); // ./common/autogen/doOp.autogen:2213
						return; // ./common/autogen/doOp.autogen:2214
 // ./common/autogen/doOp.autogen:2215
 // ./common/autogen/doOp.autogen:2216
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:2217
						this.a(op); // ./common/autogen/doOp.autogen:2218
						return; // ./common/autogen/doOp.autogen:2219
 // ./common/autogen/doOp.autogen:2220
 // ./common/autogen/doOp.autogen:2221
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:2222
						this.a(op); // ./common/autogen/doOp.autogen:2223
						return; // ./common/autogen/doOp.autogen:2224
 // ./common/autogen/doOp.autogen:2225
 // ./common/autogen/doOp.autogen:2226
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:2227
						this.a(op); // ./common/autogen/doOp.autogen:2228
						return; // ./common/autogen/doOp.autogen:2229
 // ./common/autogen/doOp.autogen:2230
 // ./common/autogen/doOp.autogen:2231
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:2232
						this.a(op); // ./common/autogen/doOp.autogen:2233
						return; // ./common/autogen/doOp.autogen:2234
 // ./common/autogen/doOp.autogen:2235
 // ./common/autogen/doOp.autogen:2236
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:2237
						this.a(op); // ./common/autogen/doOp.autogen:2238
						return; // ./common/autogen/doOp.autogen:2239
 // ./common/autogen/doOp.autogen:2240
 // ./common/autogen/doOp.autogen:2241
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:2242
						this.a(op); // ./common/autogen/doOp.autogen:2243
						return; // ./common/autogen/doOp.autogen:2244
 // ./common/autogen/doOp.autogen:2245
 // ./common/autogen/doOp.autogen:2246
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:2247
						this.a(op); // ./common/autogen/doOp.autogen:2248
						return; // ./common/autogen/doOp.autogen:2249
 // ./common/autogen/doOp.autogen:2250
 // ./common/autogen/doOp.autogen:2251
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:2252
						this.a(op); // ./common/autogen/doOp.autogen:2253
						return; // ./common/autogen/doOp.autogen:2254
 // ./common/autogen/doOp.autogen:2255
 // ./common/autogen/doOp.autogen:2256
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:2257
						this.a(op); // ./common/autogen/doOp.autogen:2258
						return; // ./common/autogen/doOp.autogen:2259
 // ./common/autogen/doOp.autogen:2260
 // ./common/autogen/doOp.autogen:2261
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:2262
						this.a(op); // ./common/autogen/doOp.autogen:2263
						return; // ./common/autogen/doOp.autogen:2264
 // ./common/autogen/doOp.autogen:2265
 // ./common/autogen/doOp.autogen:2266
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:2267
						this.a(op); // ./common/autogen/doOp.autogen:2268
						return; // ./common/autogen/doOp.autogen:2269
 // ./common/autogen/doOp.autogen:2270
 // ./common/autogen/doOp.autogen:2271
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:2272
						this.a(op); // ./common/autogen/doOp.autogen:2273
						return; // ./common/autogen/doOp.autogen:2274
 // ./common/autogen/doOp.autogen:2275
 // ./common/autogen/doOp.autogen:2276
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:2277
						this.a(op); // ./common/autogen/doOp.autogen:2278
						return; // ./common/autogen/doOp.autogen:2279
 // ./common/autogen/doOp.autogen:2280
 // ./common/autogen/doOp.autogen:2281
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:2282
						this.a(op); // ./common/autogen/doOp.autogen:2283
						return; // ./common/autogen/doOp.autogen:2284
 // ./common/autogen/doOp.autogen:2285
 // ./common/autogen/doOp.autogen:2286
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:2287
						this.a(op); // ./common/autogen/doOp.autogen:2288
						return; // ./common/autogen/doOp.autogen:2289
 // ./common/autogen/doOp.autogen:2290
 // ./common/autogen/doOp.autogen:2291
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:2292
						this.a(op); // ./common/autogen/doOp.autogen:2293
						return; // ./common/autogen/doOp.autogen:2294
 // ./common/autogen/doOp.autogen:2295
 // ./common/autogen/doOp.autogen:2296
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:2297
						this.a(op); // ./common/autogen/doOp.autogen:2298
						return; // ./common/autogen/doOp.autogen:2299
 // ./common/autogen/doOp.autogen:2300
 // ./common/autogen/doOp.autogen:2301
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:2302
						this.a(op); // ./common/autogen/doOp.autogen:2303
						return; // ./common/autogen/doOp.autogen:2304
 // ./common/autogen/doOp.autogen:2305
 // ./common/autogen/doOp.autogen:2306
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:2307
						this.a(op); // ./common/autogen/doOp.autogen:2308
						return; // ./common/autogen/doOp.autogen:2309
 // ./common/autogen/doOp.autogen:2310
 // ./common/autogen/doOp.autogen:2311
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:2312
						this.a(op); // ./common/autogen/doOp.autogen:2313
						return; // ./common/autogen/doOp.autogen:2314
 // ./common/autogen/doOp.autogen:2315
 // ./common/autogen/doOp.autogen:2316
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:2317
						this.a(op); // ./common/autogen/doOp.autogen:2318
						return; // ./common/autogen/doOp.autogen:2319
 // ./common/autogen/doOp.autogen:2320
 // ./common/autogen/doOp.autogen:2321
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:2322
						this.a(op); // ./common/autogen/doOp.autogen:2323
						return; // ./common/autogen/doOp.autogen:2324
 // ./common/autogen/doOp.autogen:2325
 // ./common/autogen/doOp.autogen:2326
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:2327
						this.a(op); // ./common/autogen/doOp.autogen:2328
						return; // ./common/autogen/doOp.autogen:2329
 // ./common/autogen/doOp.autogen:2330
 // ./common/autogen/doOp.autogen:2331
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:2332
						this.a(op); // ./common/autogen/doOp.autogen:2333
						return; // ./common/autogen/doOp.autogen:2334
 // ./common/autogen/doOp.autogen:2335
 // ./common/autogen/doOp.autogen:2336
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:2337
						this.a(op); // ./common/autogen/doOp.autogen:2338
						return; // ./common/autogen/doOp.autogen:2339
 // ./common/autogen/doOp.autogen:2340
 // ./common/autogen/doOp.autogen:2341
	default: // ./common/autogen/doOp.autogen:2342
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:2343
} // ./common/autogen/doOp.autogen:2344
 // ./common/autogen/doOp.autogen:2345
; // ./common/autogen/doOp.autogen:2346
						return; // ./common/autogen/doOp.autogen:2347
 // ./common/autogen/doOp.autogen:2348
 // ./common/autogen/doOp.autogen:2349
					case 0x2a00000: /*0b10101000000000000000000000*/ // ./common/autogen/doOp.autogen:2350
 // ./common/autogen/doOp.autogen:2351
 // ./common/autogen/doOp.autogen:2352
/* 0b111111 */ // ./common/autogen/doOp.autogen:2353
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:2354
{ // ./common/autogen/doOp.autogen:2355
 // ./common/autogen/doOp.autogen:2356
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:2357
						this.a(op); // ./common/autogen/doOp.autogen:2358
						return; // ./common/autogen/doOp.autogen:2359
 // ./common/autogen/doOp.autogen:2360
 // ./common/autogen/doOp.autogen:2361
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:2362
						this.TLBR(op); // ./common/autogen/doOp.autogen:2363
						return; // ./common/autogen/doOp.autogen:2364
 // ./common/autogen/doOp.autogen:2365
 // ./common/autogen/doOp.autogen:2366
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:2367
						this.TLBWI(op); // ./common/autogen/doOp.autogen:2368
						return; // ./common/autogen/doOp.autogen:2369
 // ./common/autogen/doOp.autogen:2370
 // ./common/autogen/doOp.autogen:2371
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:2372
						this.a(op); // ./common/autogen/doOp.autogen:2373
						return; // ./common/autogen/doOp.autogen:2374
 // ./common/autogen/doOp.autogen:2375
 // ./common/autogen/doOp.autogen:2376
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:2377
						this.a(op); // ./common/autogen/doOp.autogen:2378
						return; // ./common/autogen/doOp.autogen:2379
 // ./common/autogen/doOp.autogen:2380
 // ./common/autogen/doOp.autogen:2381
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:2382
						this.a(op); // ./common/autogen/doOp.autogen:2383
						return; // ./common/autogen/doOp.autogen:2384
 // ./common/autogen/doOp.autogen:2385
 // ./common/autogen/doOp.autogen:2386
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:2387
						this.TLBWR(op); // ./common/autogen/doOp.autogen:2388
						return; // ./common/autogen/doOp.autogen:2389
 // ./common/autogen/doOp.autogen:2390
 // ./common/autogen/doOp.autogen:2391
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:2392
						this.a(op); // ./common/autogen/doOp.autogen:2393
						return; // ./common/autogen/doOp.autogen:2394
 // ./common/autogen/doOp.autogen:2395
 // ./common/autogen/doOp.autogen:2396
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:2397
						this.TLBP(op); // ./common/autogen/doOp.autogen:2398
						return; // ./common/autogen/doOp.autogen:2399
 // ./common/autogen/doOp.autogen:2400
 // ./common/autogen/doOp.autogen:2401
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:2402
						this.a(op); // ./common/autogen/doOp.autogen:2403
						return; // ./common/autogen/doOp.autogen:2404
 // ./common/autogen/doOp.autogen:2405
 // ./common/autogen/doOp.autogen:2406
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:2407
						this.a(op); // ./common/autogen/doOp.autogen:2408
						return; // ./common/autogen/doOp.autogen:2409
 // ./common/autogen/doOp.autogen:2410
 // ./common/autogen/doOp.autogen:2411
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:2412
						this.a(op); // ./common/autogen/doOp.autogen:2413
						return; // ./common/autogen/doOp.autogen:2414
 // ./common/autogen/doOp.autogen:2415
 // ./common/autogen/doOp.autogen:2416
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:2417
						this.a(op); // ./common/autogen/doOp.autogen:2418
						return; // ./common/autogen/doOp.autogen:2419
 // ./common/autogen/doOp.autogen:2420
 // ./common/autogen/doOp.autogen:2421
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:2422
						this.a(op); // ./common/autogen/doOp.autogen:2423
						return; // ./common/autogen/doOp.autogen:2424
 // ./common/autogen/doOp.autogen:2425
 // ./common/autogen/doOp.autogen:2426
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:2427
						this.a(op); // ./common/autogen/doOp.autogen:2428
						return; // ./common/autogen/doOp.autogen:2429
 // ./common/autogen/doOp.autogen:2430
 // ./common/autogen/doOp.autogen:2431
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:2432
						this.a(op); // ./common/autogen/doOp.autogen:2433
						return; // ./common/autogen/doOp.autogen:2434
 // ./common/autogen/doOp.autogen:2435
 // ./common/autogen/doOp.autogen:2436
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:2437
						this.a(op); // ./common/autogen/doOp.autogen:2438
						return; // ./common/autogen/doOp.autogen:2439
 // ./common/autogen/doOp.autogen:2440
 // ./common/autogen/doOp.autogen:2441
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:2442
						this.a(op); // ./common/autogen/doOp.autogen:2443
						return; // ./common/autogen/doOp.autogen:2444
 // ./common/autogen/doOp.autogen:2445
 // ./common/autogen/doOp.autogen:2446
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:2447
						this.a(op); // ./common/autogen/doOp.autogen:2448
						return; // ./common/autogen/doOp.autogen:2449
 // ./common/autogen/doOp.autogen:2450
 // ./common/autogen/doOp.autogen:2451
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:2452
						this.a(op); // ./common/autogen/doOp.autogen:2453
						return; // ./common/autogen/doOp.autogen:2454
 // ./common/autogen/doOp.autogen:2455
 // ./common/autogen/doOp.autogen:2456
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:2457
						this.a(op); // ./common/autogen/doOp.autogen:2458
						return; // ./common/autogen/doOp.autogen:2459
 // ./common/autogen/doOp.autogen:2460
 // ./common/autogen/doOp.autogen:2461
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:2462
						this.a(op); // ./common/autogen/doOp.autogen:2463
						return; // ./common/autogen/doOp.autogen:2464
 // ./common/autogen/doOp.autogen:2465
 // ./common/autogen/doOp.autogen:2466
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:2467
						this.a(op); // ./common/autogen/doOp.autogen:2468
						return; // ./common/autogen/doOp.autogen:2469
 // ./common/autogen/doOp.autogen:2470
 // ./common/autogen/doOp.autogen:2471
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:2472
						this.a(op); // ./common/autogen/doOp.autogen:2473
						return; // ./common/autogen/doOp.autogen:2474
 // ./common/autogen/doOp.autogen:2475
 // ./common/autogen/doOp.autogen:2476
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:2477
						this.ERET(op); // ./common/autogen/doOp.autogen:2478
						return; // ./common/autogen/doOp.autogen:2479
 // ./common/autogen/doOp.autogen:2480
 // ./common/autogen/doOp.autogen:2481
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:2482
						this.a(op); // ./common/autogen/doOp.autogen:2483
						return; // ./common/autogen/doOp.autogen:2484
 // ./common/autogen/doOp.autogen:2485
 // ./common/autogen/doOp.autogen:2486
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:2487
						this.a(op); // ./common/autogen/doOp.autogen:2488
						return; // ./common/autogen/doOp.autogen:2489
 // ./common/autogen/doOp.autogen:2490
 // ./common/autogen/doOp.autogen:2491
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:2492
						this.a(op); // ./common/autogen/doOp.autogen:2493
						return; // ./common/autogen/doOp.autogen:2494
 // ./common/autogen/doOp.autogen:2495
 // ./common/autogen/doOp.autogen:2496
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:2497
						this.a(op); // ./common/autogen/doOp.autogen:2498
						return; // ./common/autogen/doOp.autogen:2499
 // ./common/autogen/doOp.autogen:2500
 // ./common/autogen/doOp.autogen:2501
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:2502
						this.a(op); // ./common/autogen/doOp.autogen:2503
						return; // ./common/autogen/doOp.autogen:2504
 // ./common/autogen/doOp.autogen:2505
 // ./common/autogen/doOp.autogen:2506
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:2507
						this.a(op); // ./common/autogen/doOp.autogen:2508
						return; // ./common/autogen/doOp.autogen:2509
 // ./common/autogen/doOp.autogen:2510
 // ./common/autogen/doOp.autogen:2511
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:2512
						this.DERET(op); // ./common/autogen/doOp.autogen:2513
						return; // ./common/autogen/doOp.autogen:2514
 // ./common/autogen/doOp.autogen:2515
 // ./common/autogen/doOp.autogen:2516
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:2517
						this.WAIT(op); // ./common/autogen/doOp.autogen:2518
						return; // ./common/autogen/doOp.autogen:2519
 // ./common/autogen/doOp.autogen:2520
 // ./common/autogen/doOp.autogen:2521
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:2522
						this.a(op); // ./common/autogen/doOp.autogen:2523
						return; // ./common/autogen/doOp.autogen:2524
 // ./common/autogen/doOp.autogen:2525
 // ./common/autogen/doOp.autogen:2526
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:2527
						this.a(op); // ./common/autogen/doOp.autogen:2528
						return; // ./common/autogen/doOp.autogen:2529
 // ./common/autogen/doOp.autogen:2530
 // ./common/autogen/doOp.autogen:2531
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:2532
						this.a(op); // ./common/autogen/doOp.autogen:2533
						return; // ./common/autogen/doOp.autogen:2534
 // ./common/autogen/doOp.autogen:2535
 // ./common/autogen/doOp.autogen:2536
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:2537
						this.a(op); // ./common/autogen/doOp.autogen:2538
						return; // ./common/autogen/doOp.autogen:2539
 // ./common/autogen/doOp.autogen:2540
 // ./common/autogen/doOp.autogen:2541
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:2542
						this.a(op); // ./common/autogen/doOp.autogen:2543
						return; // ./common/autogen/doOp.autogen:2544
 // ./common/autogen/doOp.autogen:2545
 // ./common/autogen/doOp.autogen:2546
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:2547
						this.a(op); // ./common/autogen/doOp.autogen:2548
						return; // ./common/autogen/doOp.autogen:2549
 // ./common/autogen/doOp.autogen:2550
 // ./common/autogen/doOp.autogen:2551
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:2552
						this.a(op); // ./common/autogen/doOp.autogen:2553
						return; // ./common/autogen/doOp.autogen:2554
 // ./common/autogen/doOp.autogen:2555
 // ./common/autogen/doOp.autogen:2556
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:2557
						this.a(op); // ./common/autogen/doOp.autogen:2558
						return; // ./common/autogen/doOp.autogen:2559
 // ./common/autogen/doOp.autogen:2560
 // ./common/autogen/doOp.autogen:2561
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:2562
						this.a(op); // ./common/autogen/doOp.autogen:2563
						return; // ./common/autogen/doOp.autogen:2564
 // ./common/autogen/doOp.autogen:2565
 // ./common/autogen/doOp.autogen:2566
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:2567
						this.a(op); // ./common/autogen/doOp.autogen:2568
						return; // ./common/autogen/doOp.autogen:2569
 // ./common/autogen/doOp.autogen:2570
 // ./common/autogen/doOp.autogen:2571
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:2572
						this.a(op); // ./common/autogen/doOp.autogen:2573
						return; // ./common/autogen/doOp.autogen:2574
 // ./common/autogen/doOp.autogen:2575
 // ./common/autogen/doOp.autogen:2576
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:2577
						this.a(op); // ./common/autogen/doOp.autogen:2578
						return; // ./common/autogen/doOp.autogen:2579
 // ./common/autogen/doOp.autogen:2580
 // ./common/autogen/doOp.autogen:2581
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:2582
						this.a(op); // ./common/autogen/doOp.autogen:2583
						return; // ./common/autogen/doOp.autogen:2584
 // ./common/autogen/doOp.autogen:2585
 // ./common/autogen/doOp.autogen:2586
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:2587
						this.a(op); // ./common/autogen/doOp.autogen:2588
						return; // ./common/autogen/doOp.autogen:2589
 // ./common/autogen/doOp.autogen:2590
 // ./common/autogen/doOp.autogen:2591
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:2592
						this.a(op); // ./common/autogen/doOp.autogen:2593
						return; // ./common/autogen/doOp.autogen:2594
 // ./common/autogen/doOp.autogen:2595
 // ./common/autogen/doOp.autogen:2596
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:2597
						this.a(op); // ./common/autogen/doOp.autogen:2598
						return; // ./common/autogen/doOp.autogen:2599
 // ./common/autogen/doOp.autogen:2600
 // ./common/autogen/doOp.autogen:2601
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:2602
						this.a(op); // ./common/autogen/doOp.autogen:2603
						return; // ./common/autogen/doOp.autogen:2604
 // ./common/autogen/doOp.autogen:2605
 // ./common/autogen/doOp.autogen:2606
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:2607
						this.a(op); // ./common/autogen/doOp.autogen:2608
						return; // ./common/autogen/doOp.autogen:2609
 // ./common/autogen/doOp.autogen:2610
 // ./common/autogen/doOp.autogen:2611
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:2612
						this.a(op); // ./common/autogen/doOp.autogen:2613
						return; // ./common/autogen/doOp.autogen:2614
 // ./common/autogen/doOp.autogen:2615
 // ./common/autogen/doOp.autogen:2616
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:2617
						this.a(op); // ./common/autogen/doOp.autogen:2618
						return; // ./common/autogen/doOp.autogen:2619
 // ./common/autogen/doOp.autogen:2620
 // ./common/autogen/doOp.autogen:2621
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:2622
						this.a(op); // ./common/autogen/doOp.autogen:2623
						return; // ./common/autogen/doOp.autogen:2624
 // ./common/autogen/doOp.autogen:2625
 // ./common/autogen/doOp.autogen:2626
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:2627
						this.a(op); // ./common/autogen/doOp.autogen:2628
						return; // ./common/autogen/doOp.autogen:2629
 // ./common/autogen/doOp.autogen:2630
 // ./common/autogen/doOp.autogen:2631
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:2632
						this.a(op); // ./common/autogen/doOp.autogen:2633
						return; // ./common/autogen/doOp.autogen:2634
 // ./common/autogen/doOp.autogen:2635
 // ./common/autogen/doOp.autogen:2636
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:2637
						this.a(op); // ./common/autogen/doOp.autogen:2638
						return; // ./common/autogen/doOp.autogen:2639
 // ./common/autogen/doOp.autogen:2640
 // ./common/autogen/doOp.autogen:2641
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:2642
						this.a(op); // ./common/autogen/doOp.autogen:2643
						return; // ./common/autogen/doOp.autogen:2644
 // ./common/autogen/doOp.autogen:2645
 // ./common/autogen/doOp.autogen:2646
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:2647
						this.a(op); // ./common/autogen/doOp.autogen:2648
						return; // ./common/autogen/doOp.autogen:2649
 // ./common/autogen/doOp.autogen:2650
 // ./common/autogen/doOp.autogen:2651
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:2652
						this.a(op); // ./common/autogen/doOp.autogen:2653
						return; // ./common/autogen/doOp.autogen:2654
 // ./common/autogen/doOp.autogen:2655
 // ./common/autogen/doOp.autogen:2656
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:2657
						this.a(op); // ./common/autogen/doOp.autogen:2658
						return; // ./common/autogen/doOp.autogen:2659
 // ./common/autogen/doOp.autogen:2660
 // ./common/autogen/doOp.autogen:2661
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:2662
						this.a(op); // ./common/autogen/doOp.autogen:2663
						return; // ./common/autogen/doOp.autogen:2664
 // ./common/autogen/doOp.autogen:2665
 // ./common/autogen/doOp.autogen:2666
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:2667
						this.a(op); // ./common/autogen/doOp.autogen:2668
						return; // ./common/autogen/doOp.autogen:2669
 // ./common/autogen/doOp.autogen:2670
 // ./common/autogen/doOp.autogen:2671
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:2672
						this.a(op); // ./common/autogen/doOp.autogen:2673
						return; // ./common/autogen/doOp.autogen:2674
 // ./common/autogen/doOp.autogen:2675
 // ./common/autogen/doOp.autogen:2676
	default: // ./common/autogen/doOp.autogen:2677
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:2678
} // ./common/autogen/doOp.autogen:2679
 // ./common/autogen/doOp.autogen:2680
; // ./common/autogen/doOp.autogen:2681
						return; // ./common/autogen/doOp.autogen:2682
 // ./common/autogen/doOp.autogen:2683
 // ./common/autogen/doOp.autogen:2684
					case 0x2c00000: /*0b10110000000000000000000000*/ // ./common/autogen/doOp.autogen:2685
 // ./common/autogen/doOp.autogen:2686
 // ./common/autogen/doOp.autogen:2687
/* 0b111111 */ // ./common/autogen/doOp.autogen:2688
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:2689
{ // ./common/autogen/doOp.autogen:2690
 // ./common/autogen/doOp.autogen:2691
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:2692
						this.a(op); // ./common/autogen/doOp.autogen:2693
						return; // ./common/autogen/doOp.autogen:2694
 // ./common/autogen/doOp.autogen:2695
 // ./common/autogen/doOp.autogen:2696
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:2697
						this.TLBR(op); // ./common/autogen/doOp.autogen:2698
						return; // ./common/autogen/doOp.autogen:2699
 // ./common/autogen/doOp.autogen:2700
 // ./common/autogen/doOp.autogen:2701
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:2702
						this.TLBWI(op); // ./common/autogen/doOp.autogen:2703
						return; // ./common/autogen/doOp.autogen:2704
 // ./common/autogen/doOp.autogen:2705
 // ./common/autogen/doOp.autogen:2706
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:2707
						this.a(op); // ./common/autogen/doOp.autogen:2708
						return; // ./common/autogen/doOp.autogen:2709
 // ./common/autogen/doOp.autogen:2710
 // ./common/autogen/doOp.autogen:2711
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:2712
						this.a(op); // ./common/autogen/doOp.autogen:2713
						return; // ./common/autogen/doOp.autogen:2714
 // ./common/autogen/doOp.autogen:2715
 // ./common/autogen/doOp.autogen:2716
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:2717
						this.a(op); // ./common/autogen/doOp.autogen:2718
						return; // ./common/autogen/doOp.autogen:2719
 // ./common/autogen/doOp.autogen:2720
 // ./common/autogen/doOp.autogen:2721
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:2722
						this.TLBWR(op); // ./common/autogen/doOp.autogen:2723
						return; // ./common/autogen/doOp.autogen:2724
 // ./common/autogen/doOp.autogen:2725
 // ./common/autogen/doOp.autogen:2726
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:2727
						this.a(op); // ./common/autogen/doOp.autogen:2728
						return; // ./common/autogen/doOp.autogen:2729
 // ./common/autogen/doOp.autogen:2730
 // ./common/autogen/doOp.autogen:2731
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:2732
						this.TLBP(op); // ./common/autogen/doOp.autogen:2733
						return; // ./common/autogen/doOp.autogen:2734
 // ./common/autogen/doOp.autogen:2735
 // ./common/autogen/doOp.autogen:2736
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:2737
						this.a(op); // ./common/autogen/doOp.autogen:2738
						return; // ./common/autogen/doOp.autogen:2739
 // ./common/autogen/doOp.autogen:2740
 // ./common/autogen/doOp.autogen:2741
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:2742
						this.a(op); // ./common/autogen/doOp.autogen:2743
						return; // ./common/autogen/doOp.autogen:2744
 // ./common/autogen/doOp.autogen:2745
 // ./common/autogen/doOp.autogen:2746
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:2747
						this.a(op); // ./common/autogen/doOp.autogen:2748
						return; // ./common/autogen/doOp.autogen:2749
 // ./common/autogen/doOp.autogen:2750
 // ./common/autogen/doOp.autogen:2751
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:2752
						this.a(op); // ./common/autogen/doOp.autogen:2753
						return; // ./common/autogen/doOp.autogen:2754
 // ./common/autogen/doOp.autogen:2755
 // ./common/autogen/doOp.autogen:2756
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:2757
						this.a(op); // ./common/autogen/doOp.autogen:2758
						return; // ./common/autogen/doOp.autogen:2759
 // ./common/autogen/doOp.autogen:2760
 // ./common/autogen/doOp.autogen:2761
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:2762
						this.a(op); // ./common/autogen/doOp.autogen:2763
						return; // ./common/autogen/doOp.autogen:2764
 // ./common/autogen/doOp.autogen:2765
 // ./common/autogen/doOp.autogen:2766
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:2767
						this.a(op); // ./common/autogen/doOp.autogen:2768
						return; // ./common/autogen/doOp.autogen:2769
 // ./common/autogen/doOp.autogen:2770
 // ./common/autogen/doOp.autogen:2771
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:2772
						this.a(op); // ./common/autogen/doOp.autogen:2773
						return; // ./common/autogen/doOp.autogen:2774
 // ./common/autogen/doOp.autogen:2775
 // ./common/autogen/doOp.autogen:2776
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:2777
						this.a(op); // ./common/autogen/doOp.autogen:2778
						return; // ./common/autogen/doOp.autogen:2779
 // ./common/autogen/doOp.autogen:2780
 // ./common/autogen/doOp.autogen:2781
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:2782
						this.a(op); // ./common/autogen/doOp.autogen:2783
						return; // ./common/autogen/doOp.autogen:2784
 // ./common/autogen/doOp.autogen:2785
 // ./common/autogen/doOp.autogen:2786
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:2787
						this.a(op); // ./common/autogen/doOp.autogen:2788
						return; // ./common/autogen/doOp.autogen:2789
 // ./common/autogen/doOp.autogen:2790
 // ./common/autogen/doOp.autogen:2791
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:2792
						this.a(op); // ./common/autogen/doOp.autogen:2793
						return; // ./common/autogen/doOp.autogen:2794
 // ./common/autogen/doOp.autogen:2795
 // ./common/autogen/doOp.autogen:2796
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:2797
						this.a(op); // ./common/autogen/doOp.autogen:2798
						return; // ./common/autogen/doOp.autogen:2799
 // ./common/autogen/doOp.autogen:2800
 // ./common/autogen/doOp.autogen:2801
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:2802
						this.a(op); // ./common/autogen/doOp.autogen:2803
						return; // ./common/autogen/doOp.autogen:2804
 // ./common/autogen/doOp.autogen:2805
 // ./common/autogen/doOp.autogen:2806
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:2807
						this.a(op); // ./common/autogen/doOp.autogen:2808
						return; // ./common/autogen/doOp.autogen:2809
 // ./common/autogen/doOp.autogen:2810
 // ./common/autogen/doOp.autogen:2811
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:2812
						this.ERET(op); // ./common/autogen/doOp.autogen:2813
						return; // ./common/autogen/doOp.autogen:2814
 // ./common/autogen/doOp.autogen:2815
 // ./common/autogen/doOp.autogen:2816
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:2817
						this.a(op); // ./common/autogen/doOp.autogen:2818
						return; // ./common/autogen/doOp.autogen:2819
 // ./common/autogen/doOp.autogen:2820
 // ./common/autogen/doOp.autogen:2821
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:2822
						this.a(op); // ./common/autogen/doOp.autogen:2823
						return; // ./common/autogen/doOp.autogen:2824
 // ./common/autogen/doOp.autogen:2825
 // ./common/autogen/doOp.autogen:2826
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:2827
						this.a(op); // ./common/autogen/doOp.autogen:2828
						return; // ./common/autogen/doOp.autogen:2829
 // ./common/autogen/doOp.autogen:2830
 // ./common/autogen/doOp.autogen:2831
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:2832
						this.a(op); // ./common/autogen/doOp.autogen:2833
						return; // ./common/autogen/doOp.autogen:2834
 // ./common/autogen/doOp.autogen:2835
 // ./common/autogen/doOp.autogen:2836
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:2837
						this.a(op); // ./common/autogen/doOp.autogen:2838
						return; // ./common/autogen/doOp.autogen:2839
 // ./common/autogen/doOp.autogen:2840
 // ./common/autogen/doOp.autogen:2841
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:2842
						this.a(op); // ./common/autogen/doOp.autogen:2843
						return; // ./common/autogen/doOp.autogen:2844
 // ./common/autogen/doOp.autogen:2845
 // ./common/autogen/doOp.autogen:2846
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:2847
						this.DERET(op); // ./common/autogen/doOp.autogen:2848
						return; // ./common/autogen/doOp.autogen:2849
 // ./common/autogen/doOp.autogen:2850
 // ./common/autogen/doOp.autogen:2851
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:2852
						this.WAIT(op); // ./common/autogen/doOp.autogen:2853
						return; // ./common/autogen/doOp.autogen:2854
 // ./common/autogen/doOp.autogen:2855
 // ./common/autogen/doOp.autogen:2856
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:2857
						this.a(op); // ./common/autogen/doOp.autogen:2858
						return; // ./common/autogen/doOp.autogen:2859
 // ./common/autogen/doOp.autogen:2860
 // ./common/autogen/doOp.autogen:2861
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:2862
						this.a(op); // ./common/autogen/doOp.autogen:2863
						return; // ./common/autogen/doOp.autogen:2864
 // ./common/autogen/doOp.autogen:2865
 // ./common/autogen/doOp.autogen:2866
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:2867
						this.a(op); // ./common/autogen/doOp.autogen:2868
						return; // ./common/autogen/doOp.autogen:2869
 // ./common/autogen/doOp.autogen:2870
 // ./common/autogen/doOp.autogen:2871
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:2872
						this.a(op); // ./common/autogen/doOp.autogen:2873
						return; // ./common/autogen/doOp.autogen:2874
 // ./common/autogen/doOp.autogen:2875
 // ./common/autogen/doOp.autogen:2876
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:2877
						this.a(op); // ./common/autogen/doOp.autogen:2878
						return; // ./common/autogen/doOp.autogen:2879
 // ./common/autogen/doOp.autogen:2880
 // ./common/autogen/doOp.autogen:2881
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:2882
						this.a(op); // ./common/autogen/doOp.autogen:2883
						return; // ./common/autogen/doOp.autogen:2884
 // ./common/autogen/doOp.autogen:2885
 // ./common/autogen/doOp.autogen:2886
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:2887
						this.a(op); // ./common/autogen/doOp.autogen:2888
						return; // ./common/autogen/doOp.autogen:2889
 // ./common/autogen/doOp.autogen:2890
 // ./common/autogen/doOp.autogen:2891
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:2892
						this.a(op); // ./common/autogen/doOp.autogen:2893
						return; // ./common/autogen/doOp.autogen:2894
 // ./common/autogen/doOp.autogen:2895
 // ./common/autogen/doOp.autogen:2896
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:2897
						this.a(op); // ./common/autogen/doOp.autogen:2898
						return; // ./common/autogen/doOp.autogen:2899
 // ./common/autogen/doOp.autogen:2900
 // ./common/autogen/doOp.autogen:2901
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:2902
						this.a(op); // ./common/autogen/doOp.autogen:2903
						return; // ./common/autogen/doOp.autogen:2904
 // ./common/autogen/doOp.autogen:2905
 // ./common/autogen/doOp.autogen:2906
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:2907
						this.a(op); // ./common/autogen/doOp.autogen:2908
						return; // ./common/autogen/doOp.autogen:2909
 // ./common/autogen/doOp.autogen:2910
 // ./common/autogen/doOp.autogen:2911
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:2912
						this.a(op); // ./common/autogen/doOp.autogen:2913
						return; // ./common/autogen/doOp.autogen:2914
 // ./common/autogen/doOp.autogen:2915
 // ./common/autogen/doOp.autogen:2916
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:2917
						this.a(op); // ./common/autogen/doOp.autogen:2918
						return; // ./common/autogen/doOp.autogen:2919
 // ./common/autogen/doOp.autogen:2920
 // ./common/autogen/doOp.autogen:2921
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:2922
						this.a(op); // ./common/autogen/doOp.autogen:2923
						return; // ./common/autogen/doOp.autogen:2924
 // ./common/autogen/doOp.autogen:2925
 // ./common/autogen/doOp.autogen:2926
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:2927
						this.a(op); // ./common/autogen/doOp.autogen:2928
						return; // ./common/autogen/doOp.autogen:2929
 // ./common/autogen/doOp.autogen:2930
 // ./common/autogen/doOp.autogen:2931
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:2932
						this.a(op); // ./common/autogen/doOp.autogen:2933
						return; // ./common/autogen/doOp.autogen:2934
 // ./common/autogen/doOp.autogen:2935
 // ./common/autogen/doOp.autogen:2936
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:2937
						this.a(op); // ./common/autogen/doOp.autogen:2938
						return; // ./common/autogen/doOp.autogen:2939
 // ./common/autogen/doOp.autogen:2940
 // ./common/autogen/doOp.autogen:2941
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:2942
						this.a(op); // ./common/autogen/doOp.autogen:2943
						return; // ./common/autogen/doOp.autogen:2944
 // ./common/autogen/doOp.autogen:2945
 // ./common/autogen/doOp.autogen:2946
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:2947
						this.a(op); // ./common/autogen/doOp.autogen:2948
						return; // ./common/autogen/doOp.autogen:2949
 // ./common/autogen/doOp.autogen:2950
 // ./common/autogen/doOp.autogen:2951
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:2952
						this.a(op); // ./common/autogen/doOp.autogen:2953
						return; // ./common/autogen/doOp.autogen:2954
 // ./common/autogen/doOp.autogen:2955
 // ./common/autogen/doOp.autogen:2956
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:2957
						this.a(op); // ./common/autogen/doOp.autogen:2958
						return; // ./common/autogen/doOp.autogen:2959
 // ./common/autogen/doOp.autogen:2960
 // ./common/autogen/doOp.autogen:2961
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:2962
						this.a(op); // ./common/autogen/doOp.autogen:2963
						return; // ./common/autogen/doOp.autogen:2964
 // ./common/autogen/doOp.autogen:2965
 // ./common/autogen/doOp.autogen:2966
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:2967
						this.a(op); // ./common/autogen/doOp.autogen:2968
						return; // ./common/autogen/doOp.autogen:2969
 // ./common/autogen/doOp.autogen:2970
 // ./common/autogen/doOp.autogen:2971
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:2972
						this.a(op); // ./common/autogen/doOp.autogen:2973
						return; // ./common/autogen/doOp.autogen:2974
 // ./common/autogen/doOp.autogen:2975
 // ./common/autogen/doOp.autogen:2976
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:2977
						this.a(op); // ./common/autogen/doOp.autogen:2978
						return; // ./common/autogen/doOp.autogen:2979
 // ./common/autogen/doOp.autogen:2980
 // ./common/autogen/doOp.autogen:2981
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:2982
						this.a(op); // ./common/autogen/doOp.autogen:2983
						return; // ./common/autogen/doOp.autogen:2984
 // ./common/autogen/doOp.autogen:2985
 // ./common/autogen/doOp.autogen:2986
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:2987
						this.a(op); // ./common/autogen/doOp.autogen:2988
						return; // ./common/autogen/doOp.autogen:2989
 // ./common/autogen/doOp.autogen:2990
 // ./common/autogen/doOp.autogen:2991
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:2992
						this.a(op); // ./common/autogen/doOp.autogen:2993
						return; // ./common/autogen/doOp.autogen:2994
 // ./common/autogen/doOp.autogen:2995
 // ./common/autogen/doOp.autogen:2996
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:2997
						this.a(op); // ./common/autogen/doOp.autogen:2998
						return; // ./common/autogen/doOp.autogen:2999
 // ./common/autogen/doOp.autogen:3000
 // ./common/autogen/doOp.autogen:3001
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:3002
						this.a(op); // ./common/autogen/doOp.autogen:3003
						return; // ./common/autogen/doOp.autogen:3004
 // ./common/autogen/doOp.autogen:3005
 // ./common/autogen/doOp.autogen:3006
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:3007
						this.a(op); // ./common/autogen/doOp.autogen:3008
						return; // ./common/autogen/doOp.autogen:3009
 // ./common/autogen/doOp.autogen:3010
 // ./common/autogen/doOp.autogen:3011
	default: // ./common/autogen/doOp.autogen:3012
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:3013
} // ./common/autogen/doOp.autogen:3014
 // ./common/autogen/doOp.autogen:3015
; // ./common/autogen/doOp.autogen:3016
						return; // ./common/autogen/doOp.autogen:3017
 // ./common/autogen/doOp.autogen:3018
 // ./common/autogen/doOp.autogen:3019
					case 0x2e00000: /*0b10111000000000000000000000*/ // ./common/autogen/doOp.autogen:3020
 // ./common/autogen/doOp.autogen:3021
 // ./common/autogen/doOp.autogen:3022
/* 0b111111 */ // ./common/autogen/doOp.autogen:3023
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:3024
{ // ./common/autogen/doOp.autogen:3025
 // ./common/autogen/doOp.autogen:3026
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:3027
						this.a(op); // ./common/autogen/doOp.autogen:3028
						return; // ./common/autogen/doOp.autogen:3029
 // ./common/autogen/doOp.autogen:3030
 // ./common/autogen/doOp.autogen:3031
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:3032
						this.TLBR(op); // ./common/autogen/doOp.autogen:3033
						return; // ./common/autogen/doOp.autogen:3034
 // ./common/autogen/doOp.autogen:3035
 // ./common/autogen/doOp.autogen:3036
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:3037
						this.TLBWI(op); // ./common/autogen/doOp.autogen:3038
						return; // ./common/autogen/doOp.autogen:3039
 // ./common/autogen/doOp.autogen:3040
 // ./common/autogen/doOp.autogen:3041
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:3042
						this.a(op); // ./common/autogen/doOp.autogen:3043
						return; // ./common/autogen/doOp.autogen:3044
 // ./common/autogen/doOp.autogen:3045
 // ./common/autogen/doOp.autogen:3046
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:3047
						this.a(op); // ./common/autogen/doOp.autogen:3048
						return; // ./common/autogen/doOp.autogen:3049
 // ./common/autogen/doOp.autogen:3050
 // ./common/autogen/doOp.autogen:3051
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:3052
						this.a(op); // ./common/autogen/doOp.autogen:3053
						return; // ./common/autogen/doOp.autogen:3054
 // ./common/autogen/doOp.autogen:3055
 // ./common/autogen/doOp.autogen:3056
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:3057
						this.TLBWR(op); // ./common/autogen/doOp.autogen:3058
						return; // ./common/autogen/doOp.autogen:3059
 // ./common/autogen/doOp.autogen:3060
 // ./common/autogen/doOp.autogen:3061
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:3062
						this.a(op); // ./common/autogen/doOp.autogen:3063
						return; // ./common/autogen/doOp.autogen:3064
 // ./common/autogen/doOp.autogen:3065
 // ./common/autogen/doOp.autogen:3066
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:3067
						this.TLBP(op); // ./common/autogen/doOp.autogen:3068
						return; // ./common/autogen/doOp.autogen:3069
 // ./common/autogen/doOp.autogen:3070
 // ./common/autogen/doOp.autogen:3071
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:3072
						this.a(op); // ./common/autogen/doOp.autogen:3073
						return; // ./common/autogen/doOp.autogen:3074
 // ./common/autogen/doOp.autogen:3075
 // ./common/autogen/doOp.autogen:3076
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:3077
						this.a(op); // ./common/autogen/doOp.autogen:3078
						return; // ./common/autogen/doOp.autogen:3079
 // ./common/autogen/doOp.autogen:3080
 // ./common/autogen/doOp.autogen:3081
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:3082
						this.a(op); // ./common/autogen/doOp.autogen:3083
						return; // ./common/autogen/doOp.autogen:3084
 // ./common/autogen/doOp.autogen:3085
 // ./common/autogen/doOp.autogen:3086
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:3087
						this.a(op); // ./common/autogen/doOp.autogen:3088
						return; // ./common/autogen/doOp.autogen:3089
 // ./common/autogen/doOp.autogen:3090
 // ./common/autogen/doOp.autogen:3091
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:3092
						this.a(op); // ./common/autogen/doOp.autogen:3093
						return; // ./common/autogen/doOp.autogen:3094
 // ./common/autogen/doOp.autogen:3095
 // ./common/autogen/doOp.autogen:3096
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:3097
						this.a(op); // ./common/autogen/doOp.autogen:3098
						return; // ./common/autogen/doOp.autogen:3099
 // ./common/autogen/doOp.autogen:3100
 // ./common/autogen/doOp.autogen:3101
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:3102
						this.a(op); // ./common/autogen/doOp.autogen:3103
						return; // ./common/autogen/doOp.autogen:3104
 // ./common/autogen/doOp.autogen:3105
 // ./common/autogen/doOp.autogen:3106
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:3107
						this.a(op); // ./common/autogen/doOp.autogen:3108
						return; // ./common/autogen/doOp.autogen:3109
 // ./common/autogen/doOp.autogen:3110
 // ./common/autogen/doOp.autogen:3111
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:3112
						this.a(op); // ./common/autogen/doOp.autogen:3113
						return; // ./common/autogen/doOp.autogen:3114
 // ./common/autogen/doOp.autogen:3115
 // ./common/autogen/doOp.autogen:3116
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:3117
						this.a(op); // ./common/autogen/doOp.autogen:3118
						return; // ./common/autogen/doOp.autogen:3119
 // ./common/autogen/doOp.autogen:3120
 // ./common/autogen/doOp.autogen:3121
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:3122
						this.a(op); // ./common/autogen/doOp.autogen:3123
						return; // ./common/autogen/doOp.autogen:3124
 // ./common/autogen/doOp.autogen:3125
 // ./common/autogen/doOp.autogen:3126
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:3127
						this.a(op); // ./common/autogen/doOp.autogen:3128
						return; // ./common/autogen/doOp.autogen:3129
 // ./common/autogen/doOp.autogen:3130
 // ./common/autogen/doOp.autogen:3131
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:3132
						this.a(op); // ./common/autogen/doOp.autogen:3133
						return; // ./common/autogen/doOp.autogen:3134
 // ./common/autogen/doOp.autogen:3135
 // ./common/autogen/doOp.autogen:3136
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:3137
						this.a(op); // ./common/autogen/doOp.autogen:3138
						return; // ./common/autogen/doOp.autogen:3139
 // ./common/autogen/doOp.autogen:3140
 // ./common/autogen/doOp.autogen:3141
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:3142
						this.a(op); // ./common/autogen/doOp.autogen:3143
						return; // ./common/autogen/doOp.autogen:3144
 // ./common/autogen/doOp.autogen:3145
 // ./common/autogen/doOp.autogen:3146
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:3147
						this.ERET(op); // ./common/autogen/doOp.autogen:3148
						return; // ./common/autogen/doOp.autogen:3149
 // ./common/autogen/doOp.autogen:3150
 // ./common/autogen/doOp.autogen:3151
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:3152
						this.a(op); // ./common/autogen/doOp.autogen:3153
						return; // ./common/autogen/doOp.autogen:3154
 // ./common/autogen/doOp.autogen:3155
 // ./common/autogen/doOp.autogen:3156
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:3157
						this.a(op); // ./common/autogen/doOp.autogen:3158
						return; // ./common/autogen/doOp.autogen:3159
 // ./common/autogen/doOp.autogen:3160
 // ./common/autogen/doOp.autogen:3161
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:3162
						this.a(op); // ./common/autogen/doOp.autogen:3163
						return; // ./common/autogen/doOp.autogen:3164
 // ./common/autogen/doOp.autogen:3165
 // ./common/autogen/doOp.autogen:3166
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:3167
						this.a(op); // ./common/autogen/doOp.autogen:3168
						return; // ./common/autogen/doOp.autogen:3169
 // ./common/autogen/doOp.autogen:3170
 // ./common/autogen/doOp.autogen:3171
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:3172
						this.a(op); // ./common/autogen/doOp.autogen:3173
						return; // ./common/autogen/doOp.autogen:3174
 // ./common/autogen/doOp.autogen:3175
 // ./common/autogen/doOp.autogen:3176
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:3177
						this.a(op); // ./common/autogen/doOp.autogen:3178
						return; // ./common/autogen/doOp.autogen:3179
 // ./common/autogen/doOp.autogen:3180
 // ./common/autogen/doOp.autogen:3181
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:3182
						this.DERET(op); // ./common/autogen/doOp.autogen:3183
						return; // ./common/autogen/doOp.autogen:3184
 // ./common/autogen/doOp.autogen:3185
 // ./common/autogen/doOp.autogen:3186
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:3187
						this.WAIT(op); // ./common/autogen/doOp.autogen:3188
						return; // ./common/autogen/doOp.autogen:3189
 // ./common/autogen/doOp.autogen:3190
 // ./common/autogen/doOp.autogen:3191
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:3192
						this.a(op); // ./common/autogen/doOp.autogen:3193
						return; // ./common/autogen/doOp.autogen:3194
 // ./common/autogen/doOp.autogen:3195
 // ./common/autogen/doOp.autogen:3196
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:3197
						this.a(op); // ./common/autogen/doOp.autogen:3198
						return; // ./common/autogen/doOp.autogen:3199
 // ./common/autogen/doOp.autogen:3200
 // ./common/autogen/doOp.autogen:3201
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:3202
						this.a(op); // ./common/autogen/doOp.autogen:3203
						return; // ./common/autogen/doOp.autogen:3204
 // ./common/autogen/doOp.autogen:3205
 // ./common/autogen/doOp.autogen:3206
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:3207
						this.a(op); // ./common/autogen/doOp.autogen:3208
						return; // ./common/autogen/doOp.autogen:3209
 // ./common/autogen/doOp.autogen:3210
 // ./common/autogen/doOp.autogen:3211
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:3212
						this.a(op); // ./common/autogen/doOp.autogen:3213
						return; // ./common/autogen/doOp.autogen:3214
 // ./common/autogen/doOp.autogen:3215
 // ./common/autogen/doOp.autogen:3216
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:3217
						this.a(op); // ./common/autogen/doOp.autogen:3218
						return; // ./common/autogen/doOp.autogen:3219
 // ./common/autogen/doOp.autogen:3220
 // ./common/autogen/doOp.autogen:3221
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:3222
						this.a(op); // ./common/autogen/doOp.autogen:3223
						return; // ./common/autogen/doOp.autogen:3224
 // ./common/autogen/doOp.autogen:3225
 // ./common/autogen/doOp.autogen:3226
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:3227
						this.a(op); // ./common/autogen/doOp.autogen:3228
						return; // ./common/autogen/doOp.autogen:3229
 // ./common/autogen/doOp.autogen:3230
 // ./common/autogen/doOp.autogen:3231
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:3232
						this.a(op); // ./common/autogen/doOp.autogen:3233
						return; // ./common/autogen/doOp.autogen:3234
 // ./common/autogen/doOp.autogen:3235
 // ./common/autogen/doOp.autogen:3236
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:3237
						this.a(op); // ./common/autogen/doOp.autogen:3238
						return; // ./common/autogen/doOp.autogen:3239
 // ./common/autogen/doOp.autogen:3240
 // ./common/autogen/doOp.autogen:3241
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:3242
						this.a(op); // ./common/autogen/doOp.autogen:3243
						return; // ./common/autogen/doOp.autogen:3244
 // ./common/autogen/doOp.autogen:3245
 // ./common/autogen/doOp.autogen:3246
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:3247
						this.a(op); // ./common/autogen/doOp.autogen:3248
						return; // ./common/autogen/doOp.autogen:3249
 // ./common/autogen/doOp.autogen:3250
 // ./common/autogen/doOp.autogen:3251
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:3252
						this.a(op); // ./common/autogen/doOp.autogen:3253
						return; // ./common/autogen/doOp.autogen:3254
 // ./common/autogen/doOp.autogen:3255
 // ./common/autogen/doOp.autogen:3256
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:3257
						this.a(op); // ./common/autogen/doOp.autogen:3258
						return; // ./common/autogen/doOp.autogen:3259
 // ./common/autogen/doOp.autogen:3260
 // ./common/autogen/doOp.autogen:3261
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:3262
						this.a(op); // ./common/autogen/doOp.autogen:3263
						return; // ./common/autogen/doOp.autogen:3264
 // ./common/autogen/doOp.autogen:3265
 // ./common/autogen/doOp.autogen:3266
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:3267
						this.a(op); // ./common/autogen/doOp.autogen:3268
						return; // ./common/autogen/doOp.autogen:3269
 // ./common/autogen/doOp.autogen:3270
 // ./common/autogen/doOp.autogen:3271
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:3272
						this.a(op); // ./common/autogen/doOp.autogen:3273
						return; // ./common/autogen/doOp.autogen:3274
 // ./common/autogen/doOp.autogen:3275
 // ./common/autogen/doOp.autogen:3276
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:3277
						this.a(op); // ./common/autogen/doOp.autogen:3278
						return; // ./common/autogen/doOp.autogen:3279
 // ./common/autogen/doOp.autogen:3280
 // ./common/autogen/doOp.autogen:3281
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:3282
						this.a(op); // ./common/autogen/doOp.autogen:3283
						return; // ./common/autogen/doOp.autogen:3284
 // ./common/autogen/doOp.autogen:3285
 // ./common/autogen/doOp.autogen:3286
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:3287
						this.a(op); // ./common/autogen/doOp.autogen:3288
						return; // ./common/autogen/doOp.autogen:3289
 // ./common/autogen/doOp.autogen:3290
 // ./common/autogen/doOp.autogen:3291
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:3292
						this.a(op); // ./common/autogen/doOp.autogen:3293
						return; // ./common/autogen/doOp.autogen:3294
 // ./common/autogen/doOp.autogen:3295
 // ./common/autogen/doOp.autogen:3296
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:3297
						this.a(op); // ./common/autogen/doOp.autogen:3298
						return; // ./common/autogen/doOp.autogen:3299
 // ./common/autogen/doOp.autogen:3300
 // ./common/autogen/doOp.autogen:3301
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:3302
						this.a(op); // ./common/autogen/doOp.autogen:3303
						return; // ./common/autogen/doOp.autogen:3304
 // ./common/autogen/doOp.autogen:3305
 // ./common/autogen/doOp.autogen:3306
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:3307
						this.a(op); // ./common/autogen/doOp.autogen:3308
						return; // ./common/autogen/doOp.autogen:3309
 // ./common/autogen/doOp.autogen:3310
 // ./common/autogen/doOp.autogen:3311
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:3312
						this.a(op); // ./common/autogen/doOp.autogen:3313
						return; // ./common/autogen/doOp.autogen:3314
 // ./common/autogen/doOp.autogen:3315
 // ./common/autogen/doOp.autogen:3316
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:3317
						this.a(op); // ./common/autogen/doOp.autogen:3318
						return; // ./common/autogen/doOp.autogen:3319
 // ./common/autogen/doOp.autogen:3320
 // ./common/autogen/doOp.autogen:3321
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:3322
						this.a(op); // ./common/autogen/doOp.autogen:3323
						return; // ./common/autogen/doOp.autogen:3324
 // ./common/autogen/doOp.autogen:3325
 // ./common/autogen/doOp.autogen:3326
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:3327
						this.a(op); // ./common/autogen/doOp.autogen:3328
						return; // ./common/autogen/doOp.autogen:3329
 // ./common/autogen/doOp.autogen:3330
 // ./common/autogen/doOp.autogen:3331
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:3332
						this.a(op); // ./common/autogen/doOp.autogen:3333
						return; // ./common/autogen/doOp.autogen:3334
 // ./common/autogen/doOp.autogen:3335
 // ./common/autogen/doOp.autogen:3336
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:3337
						this.a(op); // ./common/autogen/doOp.autogen:3338
						return; // ./common/autogen/doOp.autogen:3339
 // ./common/autogen/doOp.autogen:3340
 // ./common/autogen/doOp.autogen:3341
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:3342
						this.a(op); // ./common/autogen/doOp.autogen:3343
						return; // ./common/autogen/doOp.autogen:3344
 // ./common/autogen/doOp.autogen:3345
 // ./common/autogen/doOp.autogen:3346
	default: // ./common/autogen/doOp.autogen:3347
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:3348
} // ./common/autogen/doOp.autogen:3349
 // ./common/autogen/doOp.autogen:3350
; // ./common/autogen/doOp.autogen:3351
						return; // ./common/autogen/doOp.autogen:3352
 // ./common/autogen/doOp.autogen:3353
 // ./common/autogen/doOp.autogen:3354
					case 0x3000000: /*0b11000000000000000000000000*/ // ./common/autogen/doOp.autogen:3355
 // ./common/autogen/doOp.autogen:3356
 // ./common/autogen/doOp.autogen:3357
/* 0b111111 */ // ./common/autogen/doOp.autogen:3358
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:3359
{ // ./common/autogen/doOp.autogen:3360
 // ./common/autogen/doOp.autogen:3361
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:3362
						this.a(op); // ./common/autogen/doOp.autogen:3363
						return; // ./common/autogen/doOp.autogen:3364
 // ./common/autogen/doOp.autogen:3365
 // ./common/autogen/doOp.autogen:3366
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:3367
						this.TLBR(op); // ./common/autogen/doOp.autogen:3368
						return; // ./common/autogen/doOp.autogen:3369
 // ./common/autogen/doOp.autogen:3370
 // ./common/autogen/doOp.autogen:3371
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:3372
						this.TLBWI(op); // ./common/autogen/doOp.autogen:3373
						return; // ./common/autogen/doOp.autogen:3374
 // ./common/autogen/doOp.autogen:3375
 // ./common/autogen/doOp.autogen:3376
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:3377
						this.a(op); // ./common/autogen/doOp.autogen:3378
						return; // ./common/autogen/doOp.autogen:3379
 // ./common/autogen/doOp.autogen:3380
 // ./common/autogen/doOp.autogen:3381
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:3382
						this.a(op); // ./common/autogen/doOp.autogen:3383
						return; // ./common/autogen/doOp.autogen:3384
 // ./common/autogen/doOp.autogen:3385
 // ./common/autogen/doOp.autogen:3386
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:3387
						this.a(op); // ./common/autogen/doOp.autogen:3388
						return; // ./common/autogen/doOp.autogen:3389
 // ./common/autogen/doOp.autogen:3390
 // ./common/autogen/doOp.autogen:3391
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:3392
						this.TLBWR(op); // ./common/autogen/doOp.autogen:3393
						return; // ./common/autogen/doOp.autogen:3394
 // ./common/autogen/doOp.autogen:3395
 // ./common/autogen/doOp.autogen:3396
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:3397
						this.a(op); // ./common/autogen/doOp.autogen:3398
						return; // ./common/autogen/doOp.autogen:3399
 // ./common/autogen/doOp.autogen:3400
 // ./common/autogen/doOp.autogen:3401
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:3402
						this.TLBP(op); // ./common/autogen/doOp.autogen:3403
						return; // ./common/autogen/doOp.autogen:3404
 // ./common/autogen/doOp.autogen:3405
 // ./common/autogen/doOp.autogen:3406
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:3407
						this.a(op); // ./common/autogen/doOp.autogen:3408
						return; // ./common/autogen/doOp.autogen:3409
 // ./common/autogen/doOp.autogen:3410
 // ./common/autogen/doOp.autogen:3411
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:3412
						this.a(op); // ./common/autogen/doOp.autogen:3413
						return; // ./common/autogen/doOp.autogen:3414
 // ./common/autogen/doOp.autogen:3415
 // ./common/autogen/doOp.autogen:3416
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:3417
						this.a(op); // ./common/autogen/doOp.autogen:3418
						return; // ./common/autogen/doOp.autogen:3419
 // ./common/autogen/doOp.autogen:3420
 // ./common/autogen/doOp.autogen:3421
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:3422
						this.a(op); // ./common/autogen/doOp.autogen:3423
						return; // ./common/autogen/doOp.autogen:3424
 // ./common/autogen/doOp.autogen:3425
 // ./common/autogen/doOp.autogen:3426
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:3427
						this.a(op); // ./common/autogen/doOp.autogen:3428
						return; // ./common/autogen/doOp.autogen:3429
 // ./common/autogen/doOp.autogen:3430
 // ./common/autogen/doOp.autogen:3431
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:3432
						this.a(op); // ./common/autogen/doOp.autogen:3433
						return; // ./common/autogen/doOp.autogen:3434
 // ./common/autogen/doOp.autogen:3435
 // ./common/autogen/doOp.autogen:3436
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:3437
						this.a(op); // ./common/autogen/doOp.autogen:3438
						return; // ./common/autogen/doOp.autogen:3439
 // ./common/autogen/doOp.autogen:3440
 // ./common/autogen/doOp.autogen:3441
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:3442
						this.a(op); // ./common/autogen/doOp.autogen:3443
						return; // ./common/autogen/doOp.autogen:3444
 // ./common/autogen/doOp.autogen:3445
 // ./common/autogen/doOp.autogen:3446
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:3447
						this.a(op); // ./common/autogen/doOp.autogen:3448
						return; // ./common/autogen/doOp.autogen:3449
 // ./common/autogen/doOp.autogen:3450
 // ./common/autogen/doOp.autogen:3451
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:3452
						this.a(op); // ./common/autogen/doOp.autogen:3453
						return; // ./common/autogen/doOp.autogen:3454
 // ./common/autogen/doOp.autogen:3455
 // ./common/autogen/doOp.autogen:3456
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:3457
						this.a(op); // ./common/autogen/doOp.autogen:3458
						return; // ./common/autogen/doOp.autogen:3459
 // ./common/autogen/doOp.autogen:3460
 // ./common/autogen/doOp.autogen:3461
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:3462
						this.a(op); // ./common/autogen/doOp.autogen:3463
						return; // ./common/autogen/doOp.autogen:3464
 // ./common/autogen/doOp.autogen:3465
 // ./common/autogen/doOp.autogen:3466
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:3467
						this.a(op); // ./common/autogen/doOp.autogen:3468
						return; // ./common/autogen/doOp.autogen:3469
 // ./common/autogen/doOp.autogen:3470
 // ./common/autogen/doOp.autogen:3471
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:3472
						this.a(op); // ./common/autogen/doOp.autogen:3473
						return; // ./common/autogen/doOp.autogen:3474
 // ./common/autogen/doOp.autogen:3475
 // ./common/autogen/doOp.autogen:3476
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:3477
						this.a(op); // ./common/autogen/doOp.autogen:3478
						return; // ./common/autogen/doOp.autogen:3479
 // ./common/autogen/doOp.autogen:3480
 // ./common/autogen/doOp.autogen:3481
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:3482
						this.ERET(op); // ./common/autogen/doOp.autogen:3483
						return; // ./common/autogen/doOp.autogen:3484
 // ./common/autogen/doOp.autogen:3485
 // ./common/autogen/doOp.autogen:3486
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:3487
						this.a(op); // ./common/autogen/doOp.autogen:3488
						return; // ./common/autogen/doOp.autogen:3489
 // ./common/autogen/doOp.autogen:3490
 // ./common/autogen/doOp.autogen:3491
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:3492
						this.a(op); // ./common/autogen/doOp.autogen:3493
						return; // ./common/autogen/doOp.autogen:3494
 // ./common/autogen/doOp.autogen:3495
 // ./common/autogen/doOp.autogen:3496
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:3497
						this.a(op); // ./common/autogen/doOp.autogen:3498
						return; // ./common/autogen/doOp.autogen:3499
 // ./common/autogen/doOp.autogen:3500
 // ./common/autogen/doOp.autogen:3501
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:3502
						this.a(op); // ./common/autogen/doOp.autogen:3503
						return; // ./common/autogen/doOp.autogen:3504
 // ./common/autogen/doOp.autogen:3505
 // ./common/autogen/doOp.autogen:3506
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:3507
						this.a(op); // ./common/autogen/doOp.autogen:3508
						return; // ./common/autogen/doOp.autogen:3509
 // ./common/autogen/doOp.autogen:3510
 // ./common/autogen/doOp.autogen:3511
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:3512
						this.a(op); // ./common/autogen/doOp.autogen:3513
						return; // ./common/autogen/doOp.autogen:3514
 // ./common/autogen/doOp.autogen:3515
 // ./common/autogen/doOp.autogen:3516
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:3517
						this.DERET(op); // ./common/autogen/doOp.autogen:3518
						return; // ./common/autogen/doOp.autogen:3519
 // ./common/autogen/doOp.autogen:3520
 // ./common/autogen/doOp.autogen:3521
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:3522
						this.WAIT(op); // ./common/autogen/doOp.autogen:3523
						return; // ./common/autogen/doOp.autogen:3524
 // ./common/autogen/doOp.autogen:3525
 // ./common/autogen/doOp.autogen:3526
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:3527
						this.a(op); // ./common/autogen/doOp.autogen:3528
						return; // ./common/autogen/doOp.autogen:3529
 // ./common/autogen/doOp.autogen:3530
 // ./common/autogen/doOp.autogen:3531
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:3532
						this.a(op); // ./common/autogen/doOp.autogen:3533
						return; // ./common/autogen/doOp.autogen:3534
 // ./common/autogen/doOp.autogen:3535
 // ./common/autogen/doOp.autogen:3536
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:3537
						this.a(op); // ./common/autogen/doOp.autogen:3538
						return; // ./common/autogen/doOp.autogen:3539
 // ./common/autogen/doOp.autogen:3540
 // ./common/autogen/doOp.autogen:3541
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:3542
						this.a(op); // ./common/autogen/doOp.autogen:3543
						return; // ./common/autogen/doOp.autogen:3544
 // ./common/autogen/doOp.autogen:3545
 // ./common/autogen/doOp.autogen:3546
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:3547
						this.a(op); // ./common/autogen/doOp.autogen:3548
						return; // ./common/autogen/doOp.autogen:3549
 // ./common/autogen/doOp.autogen:3550
 // ./common/autogen/doOp.autogen:3551
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:3552
						this.a(op); // ./common/autogen/doOp.autogen:3553
						return; // ./common/autogen/doOp.autogen:3554
 // ./common/autogen/doOp.autogen:3555
 // ./common/autogen/doOp.autogen:3556
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:3557
						this.a(op); // ./common/autogen/doOp.autogen:3558
						return; // ./common/autogen/doOp.autogen:3559
 // ./common/autogen/doOp.autogen:3560
 // ./common/autogen/doOp.autogen:3561
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:3562
						this.a(op); // ./common/autogen/doOp.autogen:3563
						return; // ./common/autogen/doOp.autogen:3564
 // ./common/autogen/doOp.autogen:3565
 // ./common/autogen/doOp.autogen:3566
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:3567
						this.a(op); // ./common/autogen/doOp.autogen:3568
						return; // ./common/autogen/doOp.autogen:3569
 // ./common/autogen/doOp.autogen:3570
 // ./common/autogen/doOp.autogen:3571
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:3572
						this.a(op); // ./common/autogen/doOp.autogen:3573
						return; // ./common/autogen/doOp.autogen:3574
 // ./common/autogen/doOp.autogen:3575
 // ./common/autogen/doOp.autogen:3576
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:3577
						this.a(op); // ./common/autogen/doOp.autogen:3578
						return; // ./common/autogen/doOp.autogen:3579
 // ./common/autogen/doOp.autogen:3580
 // ./common/autogen/doOp.autogen:3581
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:3582
						this.a(op); // ./common/autogen/doOp.autogen:3583
						return; // ./common/autogen/doOp.autogen:3584
 // ./common/autogen/doOp.autogen:3585
 // ./common/autogen/doOp.autogen:3586
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:3587
						this.a(op); // ./common/autogen/doOp.autogen:3588
						return; // ./common/autogen/doOp.autogen:3589
 // ./common/autogen/doOp.autogen:3590
 // ./common/autogen/doOp.autogen:3591
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:3592
						this.a(op); // ./common/autogen/doOp.autogen:3593
						return; // ./common/autogen/doOp.autogen:3594
 // ./common/autogen/doOp.autogen:3595
 // ./common/autogen/doOp.autogen:3596
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:3597
						this.a(op); // ./common/autogen/doOp.autogen:3598
						return; // ./common/autogen/doOp.autogen:3599
 // ./common/autogen/doOp.autogen:3600
 // ./common/autogen/doOp.autogen:3601
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:3602
						this.a(op); // ./common/autogen/doOp.autogen:3603
						return; // ./common/autogen/doOp.autogen:3604
 // ./common/autogen/doOp.autogen:3605
 // ./common/autogen/doOp.autogen:3606
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:3607
						this.a(op); // ./common/autogen/doOp.autogen:3608
						return; // ./common/autogen/doOp.autogen:3609
 // ./common/autogen/doOp.autogen:3610
 // ./common/autogen/doOp.autogen:3611
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:3612
						this.a(op); // ./common/autogen/doOp.autogen:3613
						return; // ./common/autogen/doOp.autogen:3614
 // ./common/autogen/doOp.autogen:3615
 // ./common/autogen/doOp.autogen:3616
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:3617
						this.a(op); // ./common/autogen/doOp.autogen:3618
						return; // ./common/autogen/doOp.autogen:3619
 // ./common/autogen/doOp.autogen:3620
 // ./common/autogen/doOp.autogen:3621
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:3622
						this.a(op); // ./common/autogen/doOp.autogen:3623
						return; // ./common/autogen/doOp.autogen:3624
 // ./common/autogen/doOp.autogen:3625
 // ./common/autogen/doOp.autogen:3626
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:3627
						this.a(op); // ./common/autogen/doOp.autogen:3628
						return; // ./common/autogen/doOp.autogen:3629
 // ./common/autogen/doOp.autogen:3630
 // ./common/autogen/doOp.autogen:3631
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:3632
						this.a(op); // ./common/autogen/doOp.autogen:3633
						return; // ./common/autogen/doOp.autogen:3634
 // ./common/autogen/doOp.autogen:3635
 // ./common/autogen/doOp.autogen:3636
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:3637
						this.a(op); // ./common/autogen/doOp.autogen:3638
						return; // ./common/autogen/doOp.autogen:3639
 // ./common/autogen/doOp.autogen:3640
 // ./common/autogen/doOp.autogen:3641
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:3642
						this.a(op); // ./common/autogen/doOp.autogen:3643
						return; // ./common/autogen/doOp.autogen:3644
 // ./common/autogen/doOp.autogen:3645
 // ./common/autogen/doOp.autogen:3646
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:3647
						this.a(op); // ./common/autogen/doOp.autogen:3648
						return; // ./common/autogen/doOp.autogen:3649
 // ./common/autogen/doOp.autogen:3650
 // ./common/autogen/doOp.autogen:3651
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:3652
						this.a(op); // ./common/autogen/doOp.autogen:3653
						return; // ./common/autogen/doOp.autogen:3654
 // ./common/autogen/doOp.autogen:3655
 // ./common/autogen/doOp.autogen:3656
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:3657
						this.a(op); // ./common/autogen/doOp.autogen:3658
						return; // ./common/autogen/doOp.autogen:3659
 // ./common/autogen/doOp.autogen:3660
 // ./common/autogen/doOp.autogen:3661
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:3662
						this.a(op); // ./common/autogen/doOp.autogen:3663
						return; // ./common/autogen/doOp.autogen:3664
 // ./common/autogen/doOp.autogen:3665
 // ./common/autogen/doOp.autogen:3666
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:3667
						this.a(op); // ./common/autogen/doOp.autogen:3668
						return; // ./common/autogen/doOp.autogen:3669
 // ./common/autogen/doOp.autogen:3670
 // ./common/autogen/doOp.autogen:3671
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:3672
						this.a(op); // ./common/autogen/doOp.autogen:3673
						return; // ./common/autogen/doOp.autogen:3674
 // ./common/autogen/doOp.autogen:3675
 // ./common/autogen/doOp.autogen:3676
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:3677
						this.a(op); // ./common/autogen/doOp.autogen:3678
						return; // ./common/autogen/doOp.autogen:3679
 // ./common/autogen/doOp.autogen:3680
 // ./common/autogen/doOp.autogen:3681
	default: // ./common/autogen/doOp.autogen:3682
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:3683
} // ./common/autogen/doOp.autogen:3684
 // ./common/autogen/doOp.autogen:3685
; // ./common/autogen/doOp.autogen:3686
						return; // ./common/autogen/doOp.autogen:3687
 // ./common/autogen/doOp.autogen:3688
 // ./common/autogen/doOp.autogen:3689
					case 0x3200000: /*0b11001000000000000000000000*/ // ./common/autogen/doOp.autogen:3690
 // ./common/autogen/doOp.autogen:3691
 // ./common/autogen/doOp.autogen:3692
/* 0b111111 */ // ./common/autogen/doOp.autogen:3693
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:3694
{ // ./common/autogen/doOp.autogen:3695
 // ./common/autogen/doOp.autogen:3696
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:3697
						this.a(op); // ./common/autogen/doOp.autogen:3698
						return; // ./common/autogen/doOp.autogen:3699
 // ./common/autogen/doOp.autogen:3700
 // ./common/autogen/doOp.autogen:3701
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:3702
						this.TLBR(op); // ./common/autogen/doOp.autogen:3703
						return; // ./common/autogen/doOp.autogen:3704
 // ./common/autogen/doOp.autogen:3705
 // ./common/autogen/doOp.autogen:3706
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:3707
						this.TLBWI(op); // ./common/autogen/doOp.autogen:3708
						return; // ./common/autogen/doOp.autogen:3709
 // ./common/autogen/doOp.autogen:3710
 // ./common/autogen/doOp.autogen:3711
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:3712
						this.a(op); // ./common/autogen/doOp.autogen:3713
						return; // ./common/autogen/doOp.autogen:3714
 // ./common/autogen/doOp.autogen:3715
 // ./common/autogen/doOp.autogen:3716
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:3717
						this.a(op); // ./common/autogen/doOp.autogen:3718
						return; // ./common/autogen/doOp.autogen:3719
 // ./common/autogen/doOp.autogen:3720
 // ./common/autogen/doOp.autogen:3721
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:3722
						this.a(op); // ./common/autogen/doOp.autogen:3723
						return; // ./common/autogen/doOp.autogen:3724
 // ./common/autogen/doOp.autogen:3725
 // ./common/autogen/doOp.autogen:3726
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:3727
						this.TLBWR(op); // ./common/autogen/doOp.autogen:3728
						return; // ./common/autogen/doOp.autogen:3729
 // ./common/autogen/doOp.autogen:3730
 // ./common/autogen/doOp.autogen:3731
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:3732
						this.a(op); // ./common/autogen/doOp.autogen:3733
						return; // ./common/autogen/doOp.autogen:3734
 // ./common/autogen/doOp.autogen:3735
 // ./common/autogen/doOp.autogen:3736
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:3737
						this.TLBP(op); // ./common/autogen/doOp.autogen:3738
						return; // ./common/autogen/doOp.autogen:3739
 // ./common/autogen/doOp.autogen:3740
 // ./common/autogen/doOp.autogen:3741
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:3742
						this.a(op); // ./common/autogen/doOp.autogen:3743
						return; // ./common/autogen/doOp.autogen:3744
 // ./common/autogen/doOp.autogen:3745
 // ./common/autogen/doOp.autogen:3746
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:3747
						this.a(op); // ./common/autogen/doOp.autogen:3748
						return; // ./common/autogen/doOp.autogen:3749
 // ./common/autogen/doOp.autogen:3750
 // ./common/autogen/doOp.autogen:3751
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:3752
						this.a(op); // ./common/autogen/doOp.autogen:3753
						return; // ./common/autogen/doOp.autogen:3754
 // ./common/autogen/doOp.autogen:3755
 // ./common/autogen/doOp.autogen:3756
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:3757
						this.a(op); // ./common/autogen/doOp.autogen:3758
						return; // ./common/autogen/doOp.autogen:3759
 // ./common/autogen/doOp.autogen:3760
 // ./common/autogen/doOp.autogen:3761
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:3762
						this.a(op); // ./common/autogen/doOp.autogen:3763
						return; // ./common/autogen/doOp.autogen:3764
 // ./common/autogen/doOp.autogen:3765
 // ./common/autogen/doOp.autogen:3766
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:3767
						this.a(op); // ./common/autogen/doOp.autogen:3768
						return; // ./common/autogen/doOp.autogen:3769
 // ./common/autogen/doOp.autogen:3770
 // ./common/autogen/doOp.autogen:3771
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:3772
						this.a(op); // ./common/autogen/doOp.autogen:3773
						return; // ./common/autogen/doOp.autogen:3774
 // ./common/autogen/doOp.autogen:3775
 // ./common/autogen/doOp.autogen:3776
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:3777
						this.a(op); // ./common/autogen/doOp.autogen:3778
						return; // ./common/autogen/doOp.autogen:3779
 // ./common/autogen/doOp.autogen:3780
 // ./common/autogen/doOp.autogen:3781
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:3782
						this.a(op); // ./common/autogen/doOp.autogen:3783
						return; // ./common/autogen/doOp.autogen:3784
 // ./common/autogen/doOp.autogen:3785
 // ./common/autogen/doOp.autogen:3786
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:3787
						this.a(op); // ./common/autogen/doOp.autogen:3788
						return; // ./common/autogen/doOp.autogen:3789
 // ./common/autogen/doOp.autogen:3790
 // ./common/autogen/doOp.autogen:3791
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:3792
						this.a(op); // ./common/autogen/doOp.autogen:3793
						return; // ./common/autogen/doOp.autogen:3794
 // ./common/autogen/doOp.autogen:3795
 // ./common/autogen/doOp.autogen:3796
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:3797
						this.a(op); // ./common/autogen/doOp.autogen:3798
						return; // ./common/autogen/doOp.autogen:3799
 // ./common/autogen/doOp.autogen:3800
 // ./common/autogen/doOp.autogen:3801
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:3802
						this.a(op); // ./common/autogen/doOp.autogen:3803
						return; // ./common/autogen/doOp.autogen:3804
 // ./common/autogen/doOp.autogen:3805
 // ./common/autogen/doOp.autogen:3806
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:3807
						this.a(op); // ./common/autogen/doOp.autogen:3808
						return; // ./common/autogen/doOp.autogen:3809
 // ./common/autogen/doOp.autogen:3810
 // ./common/autogen/doOp.autogen:3811
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:3812
						this.a(op); // ./common/autogen/doOp.autogen:3813
						return; // ./common/autogen/doOp.autogen:3814
 // ./common/autogen/doOp.autogen:3815
 // ./common/autogen/doOp.autogen:3816
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:3817
						this.ERET(op); // ./common/autogen/doOp.autogen:3818
						return; // ./common/autogen/doOp.autogen:3819
 // ./common/autogen/doOp.autogen:3820
 // ./common/autogen/doOp.autogen:3821
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:3822
						this.a(op); // ./common/autogen/doOp.autogen:3823
						return; // ./common/autogen/doOp.autogen:3824
 // ./common/autogen/doOp.autogen:3825
 // ./common/autogen/doOp.autogen:3826
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:3827
						this.a(op); // ./common/autogen/doOp.autogen:3828
						return; // ./common/autogen/doOp.autogen:3829
 // ./common/autogen/doOp.autogen:3830
 // ./common/autogen/doOp.autogen:3831
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:3832
						this.a(op); // ./common/autogen/doOp.autogen:3833
						return; // ./common/autogen/doOp.autogen:3834
 // ./common/autogen/doOp.autogen:3835
 // ./common/autogen/doOp.autogen:3836
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:3837
						this.a(op); // ./common/autogen/doOp.autogen:3838
						return; // ./common/autogen/doOp.autogen:3839
 // ./common/autogen/doOp.autogen:3840
 // ./common/autogen/doOp.autogen:3841
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:3842
						this.a(op); // ./common/autogen/doOp.autogen:3843
						return; // ./common/autogen/doOp.autogen:3844
 // ./common/autogen/doOp.autogen:3845
 // ./common/autogen/doOp.autogen:3846
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:3847
						this.a(op); // ./common/autogen/doOp.autogen:3848
						return; // ./common/autogen/doOp.autogen:3849
 // ./common/autogen/doOp.autogen:3850
 // ./common/autogen/doOp.autogen:3851
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:3852
						this.DERET(op); // ./common/autogen/doOp.autogen:3853
						return; // ./common/autogen/doOp.autogen:3854
 // ./common/autogen/doOp.autogen:3855
 // ./common/autogen/doOp.autogen:3856
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:3857
						this.WAIT(op); // ./common/autogen/doOp.autogen:3858
						return; // ./common/autogen/doOp.autogen:3859
 // ./common/autogen/doOp.autogen:3860
 // ./common/autogen/doOp.autogen:3861
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:3862
						this.a(op); // ./common/autogen/doOp.autogen:3863
						return; // ./common/autogen/doOp.autogen:3864
 // ./common/autogen/doOp.autogen:3865
 // ./common/autogen/doOp.autogen:3866
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:3867
						this.a(op); // ./common/autogen/doOp.autogen:3868
						return; // ./common/autogen/doOp.autogen:3869
 // ./common/autogen/doOp.autogen:3870
 // ./common/autogen/doOp.autogen:3871
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:3872
						this.a(op); // ./common/autogen/doOp.autogen:3873
						return; // ./common/autogen/doOp.autogen:3874
 // ./common/autogen/doOp.autogen:3875
 // ./common/autogen/doOp.autogen:3876
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:3877
						this.a(op); // ./common/autogen/doOp.autogen:3878
						return; // ./common/autogen/doOp.autogen:3879
 // ./common/autogen/doOp.autogen:3880
 // ./common/autogen/doOp.autogen:3881
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:3882
						this.a(op); // ./common/autogen/doOp.autogen:3883
						return; // ./common/autogen/doOp.autogen:3884
 // ./common/autogen/doOp.autogen:3885
 // ./common/autogen/doOp.autogen:3886
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:3887
						this.a(op); // ./common/autogen/doOp.autogen:3888
						return; // ./common/autogen/doOp.autogen:3889
 // ./common/autogen/doOp.autogen:3890
 // ./common/autogen/doOp.autogen:3891
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:3892
						this.a(op); // ./common/autogen/doOp.autogen:3893
						return; // ./common/autogen/doOp.autogen:3894
 // ./common/autogen/doOp.autogen:3895
 // ./common/autogen/doOp.autogen:3896
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:3897
						this.a(op); // ./common/autogen/doOp.autogen:3898
						return; // ./common/autogen/doOp.autogen:3899
 // ./common/autogen/doOp.autogen:3900
 // ./common/autogen/doOp.autogen:3901
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:3902
						this.a(op); // ./common/autogen/doOp.autogen:3903
						return; // ./common/autogen/doOp.autogen:3904
 // ./common/autogen/doOp.autogen:3905
 // ./common/autogen/doOp.autogen:3906
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:3907
						this.a(op); // ./common/autogen/doOp.autogen:3908
						return; // ./common/autogen/doOp.autogen:3909
 // ./common/autogen/doOp.autogen:3910
 // ./common/autogen/doOp.autogen:3911
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:3912
						this.a(op); // ./common/autogen/doOp.autogen:3913
						return; // ./common/autogen/doOp.autogen:3914
 // ./common/autogen/doOp.autogen:3915
 // ./common/autogen/doOp.autogen:3916
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:3917
						this.a(op); // ./common/autogen/doOp.autogen:3918
						return; // ./common/autogen/doOp.autogen:3919
 // ./common/autogen/doOp.autogen:3920
 // ./common/autogen/doOp.autogen:3921
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:3922
						this.a(op); // ./common/autogen/doOp.autogen:3923
						return; // ./common/autogen/doOp.autogen:3924
 // ./common/autogen/doOp.autogen:3925
 // ./common/autogen/doOp.autogen:3926
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:3927
						this.a(op); // ./common/autogen/doOp.autogen:3928
						return; // ./common/autogen/doOp.autogen:3929
 // ./common/autogen/doOp.autogen:3930
 // ./common/autogen/doOp.autogen:3931
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:3932
						this.a(op); // ./common/autogen/doOp.autogen:3933
						return; // ./common/autogen/doOp.autogen:3934
 // ./common/autogen/doOp.autogen:3935
 // ./common/autogen/doOp.autogen:3936
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:3937
						this.a(op); // ./common/autogen/doOp.autogen:3938
						return; // ./common/autogen/doOp.autogen:3939
 // ./common/autogen/doOp.autogen:3940
 // ./common/autogen/doOp.autogen:3941
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:3942
						this.a(op); // ./common/autogen/doOp.autogen:3943
						return; // ./common/autogen/doOp.autogen:3944
 // ./common/autogen/doOp.autogen:3945
 // ./common/autogen/doOp.autogen:3946
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:3947
						this.a(op); // ./common/autogen/doOp.autogen:3948
						return; // ./common/autogen/doOp.autogen:3949
 // ./common/autogen/doOp.autogen:3950
 // ./common/autogen/doOp.autogen:3951
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:3952
						this.a(op); // ./common/autogen/doOp.autogen:3953
						return; // ./common/autogen/doOp.autogen:3954
 // ./common/autogen/doOp.autogen:3955
 // ./common/autogen/doOp.autogen:3956
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:3957
						this.a(op); // ./common/autogen/doOp.autogen:3958
						return; // ./common/autogen/doOp.autogen:3959
 // ./common/autogen/doOp.autogen:3960
 // ./common/autogen/doOp.autogen:3961
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:3962
						this.a(op); // ./common/autogen/doOp.autogen:3963
						return; // ./common/autogen/doOp.autogen:3964
 // ./common/autogen/doOp.autogen:3965
 // ./common/autogen/doOp.autogen:3966
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:3967
						this.a(op); // ./common/autogen/doOp.autogen:3968
						return; // ./common/autogen/doOp.autogen:3969
 // ./common/autogen/doOp.autogen:3970
 // ./common/autogen/doOp.autogen:3971
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:3972
						this.a(op); // ./common/autogen/doOp.autogen:3973
						return; // ./common/autogen/doOp.autogen:3974
 // ./common/autogen/doOp.autogen:3975
 // ./common/autogen/doOp.autogen:3976
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:3977
						this.a(op); // ./common/autogen/doOp.autogen:3978
						return; // ./common/autogen/doOp.autogen:3979
 // ./common/autogen/doOp.autogen:3980
 // ./common/autogen/doOp.autogen:3981
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:3982
						this.a(op); // ./common/autogen/doOp.autogen:3983
						return; // ./common/autogen/doOp.autogen:3984
 // ./common/autogen/doOp.autogen:3985
 // ./common/autogen/doOp.autogen:3986
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:3987
						this.a(op); // ./common/autogen/doOp.autogen:3988
						return; // ./common/autogen/doOp.autogen:3989
 // ./common/autogen/doOp.autogen:3990
 // ./common/autogen/doOp.autogen:3991
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:3992
						this.a(op); // ./common/autogen/doOp.autogen:3993
						return; // ./common/autogen/doOp.autogen:3994
 // ./common/autogen/doOp.autogen:3995
 // ./common/autogen/doOp.autogen:3996
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:3997
						this.a(op); // ./common/autogen/doOp.autogen:3998
						return; // ./common/autogen/doOp.autogen:3999
 // ./common/autogen/doOp.autogen:4000
 // ./common/autogen/doOp.autogen:4001
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:4002
						this.a(op); // ./common/autogen/doOp.autogen:4003
						return; // ./common/autogen/doOp.autogen:4004
 // ./common/autogen/doOp.autogen:4005
 // ./common/autogen/doOp.autogen:4006
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:4007
						this.a(op); // ./common/autogen/doOp.autogen:4008
						return; // ./common/autogen/doOp.autogen:4009
 // ./common/autogen/doOp.autogen:4010
 // ./common/autogen/doOp.autogen:4011
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:4012
						this.a(op); // ./common/autogen/doOp.autogen:4013
						return; // ./common/autogen/doOp.autogen:4014
 // ./common/autogen/doOp.autogen:4015
 // ./common/autogen/doOp.autogen:4016
	default: // ./common/autogen/doOp.autogen:4017
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:4018
} // ./common/autogen/doOp.autogen:4019
 // ./common/autogen/doOp.autogen:4020
; // ./common/autogen/doOp.autogen:4021
						return; // ./common/autogen/doOp.autogen:4022
 // ./common/autogen/doOp.autogen:4023
 // ./common/autogen/doOp.autogen:4024
					case 0x3400000: /*0b11010000000000000000000000*/ // ./common/autogen/doOp.autogen:4025
 // ./common/autogen/doOp.autogen:4026
 // ./common/autogen/doOp.autogen:4027
/* 0b111111 */ // ./common/autogen/doOp.autogen:4028
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:4029
{ // ./common/autogen/doOp.autogen:4030
 // ./common/autogen/doOp.autogen:4031
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:4032
						this.a(op); // ./common/autogen/doOp.autogen:4033
						return; // ./common/autogen/doOp.autogen:4034
 // ./common/autogen/doOp.autogen:4035
 // ./common/autogen/doOp.autogen:4036
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:4037
						this.TLBR(op); // ./common/autogen/doOp.autogen:4038
						return; // ./common/autogen/doOp.autogen:4039
 // ./common/autogen/doOp.autogen:4040
 // ./common/autogen/doOp.autogen:4041
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:4042
						this.TLBWI(op); // ./common/autogen/doOp.autogen:4043
						return; // ./common/autogen/doOp.autogen:4044
 // ./common/autogen/doOp.autogen:4045
 // ./common/autogen/doOp.autogen:4046
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:4047
						this.a(op); // ./common/autogen/doOp.autogen:4048
						return; // ./common/autogen/doOp.autogen:4049
 // ./common/autogen/doOp.autogen:4050
 // ./common/autogen/doOp.autogen:4051
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:4052
						this.a(op); // ./common/autogen/doOp.autogen:4053
						return; // ./common/autogen/doOp.autogen:4054
 // ./common/autogen/doOp.autogen:4055
 // ./common/autogen/doOp.autogen:4056
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:4057
						this.a(op); // ./common/autogen/doOp.autogen:4058
						return; // ./common/autogen/doOp.autogen:4059
 // ./common/autogen/doOp.autogen:4060
 // ./common/autogen/doOp.autogen:4061
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:4062
						this.TLBWR(op); // ./common/autogen/doOp.autogen:4063
						return; // ./common/autogen/doOp.autogen:4064
 // ./common/autogen/doOp.autogen:4065
 // ./common/autogen/doOp.autogen:4066
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:4067
						this.a(op); // ./common/autogen/doOp.autogen:4068
						return; // ./common/autogen/doOp.autogen:4069
 // ./common/autogen/doOp.autogen:4070
 // ./common/autogen/doOp.autogen:4071
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:4072
						this.TLBP(op); // ./common/autogen/doOp.autogen:4073
						return; // ./common/autogen/doOp.autogen:4074
 // ./common/autogen/doOp.autogen:4075
 // ./common/autogen/doOp.autogen:4076
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:4077
						this.a(op); // ./common/autogen/doOp.autogen:4078
						return; // ./common/autogen/doOp.autogen:4079
 // ./common/autogen/doOp.autogen:4080
 // ./common/autogen/doOp.autogen:4081
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:4082
						this.a(op); // ./common/autogen/doOp.autogen:4083
						return; // ./common/autogen/doOp.autogen:4084
 // ./common/autogen/doOp.autogen:4085
 // ./common/autogen/doOp.autogen:4086
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:4087
						this.a(op); // ./common/autogen/doOp.autogen:4088
						return; // ./common/autogen/doOp.autogen:4089
 // ./common/autogen/doOp.autogen:4090
 // ./common/autogen/doOp.autogen:4091
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:4092
						this.a(op); // ./common/autogen/doOp.autogen:4093
						return; // ./common/autogen/doOp.autogen:4094
 // ./common/autogen/doOp.autogen:4095
 // ./common/autogen/doOp.autogen:4096
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:4097
						this.a(op); // ./common/autogen/doOp.autogen:4098
						return; // ./common/autogen/doOp.autogen:4099
 // ./common/autogen/doOp.autogen:4100
 // ./common/autogen/doOp.autogen:4101
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:4102
						this.a(op); // ./common/autogen/doOp.autogen:4103
						return; // ./common/autogen/doOp.autogen:4104
 // ./common/autogen/doOp.autogen:4105
 // ./common/autogen/doOp.autogen:4106
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:4107
						this.a(op); // ./common/autogen/doOp.autogen:4108
						return; // ./common/autogen/doOp.autogen:4109
 // ./common/autogen/doOp.autogen:4110
 // ./common/autogen/doOp.autogen:4111
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:4112
						this.a(op); // ./common/autogen/doOp.autogen:4113
						return; // ./common/autogen/doOp.autogen:4114
 // ./common/autogen/doOp.autogen:4115
 // ./common/autogen/doOp.autogen:4116
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:4117
						this.a(op); // ./common/autogen/doOp.autogen:4118
						return; // ./common/autogen/doOp.autogen:4119
 // ./common/autogen/doOp.autogen:4120
 // ./common/autogen/doOp.autogen:4121
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:4122
						this.a(op); // ./common/autogen/doOp.autogen:4123
						return; // ./common/autogen/doOp.autogen:4124
 // ./common/autogen/doOp.autogen:4125
 // ./common/autogen/doOp.autogen:4126
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:4127
						this.a(op); // ./common/autogen/doOp.autogen:4128
						return; // ./common/autogen/doOp.autogen:4129
 // ./common/autogen/doOp.autogen:4130
 // ./common/autogen/doOp.autogen:4131
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:4132
						this.a(op); // ./common/autogen/doOp.autogen:4133
						return; // ./common/autogen/doOp.autogen:4134
 // ./common/autogen/doOp.autogen:4135
 // ./common/autogen/doOp.autogen:4136
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:4137
						this.a(op); // ./common/autogen/doOp.autogen:4138
						return; // ./common/autogen/doOp.autogen:4139
 // ./common/autogen/doOp.autogen:4140
 // ./common/autogen/doOp.autogen:4141
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:4142
						this.a(op); // ./common/autogen/doOp.autogen:4143
						return; // ./common/autogen/doOp.autogen:4144
 // ./common/autogen/doOp.autogen:4145
 // ./common/autogen/doOp.autogen:4146
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:4147
						this.a(op); // ./common/autogen/doOp.autogen:4148
						return; // ./common/autogen/doOp.autogen:4149
 // ./common/autogen/doOp.autogen:4150
 // ./common/autogen/doOp.autogen:4151
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:4152
						this.ERET(op); // ./common/autogen/doOp.autogen:4153
						return; // ./common/autogen/doOp.autogen:4154
 // ./common/autogen/doOp.autogen:4155
 // ./common/autogen/doOp.autogen:4156
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:4157
						this.a(op); // ./common/autogen/doOp.autogen:4158
						return; // ./common/autogen/doOp.autogen:4159
 // ./common/autogen/doOp.autogen:4160
 // ./common/autogen/doOp.autogen:4161
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:4162
						this.a(op); // ./common/autogen/doOp.autogen:4163
						return; // ./common/autogen/doOp.autogen:4164
 // ./common/autogen/doOp.autogen:4165
 // ./common/autogen/doOp.autogen:4166
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:4167
						this.a(op); // ./common/autogen/doOp.autogen:4168
						return; // ./common/autogen/doOp.autogen:4169
 // ./common/autogen/doOp.autogen:4170
 // ./common/autogen/doOp.autogen:4171
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:4172
						this.a(op); // ./common/autogen/doOp.autogen:4173
						return; // ./common/autogen/doOp.autogen:4174
 // ./common/autogen/doOp.autogen:4175
 // ./common/autogen/doOp.autogen:4176
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:4177
						this.a(op); // ./common/autogen/doOp.autogen:4178
						return; // ./common/autogen/doOp.autogen:4179
 // ./common/autogen/doOp.autogen:4180
 // ./common/autogen/doOp.autogen:4181
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:4182
						this.a(op); // ./common/autogen/doOp.autogen:4183
						return; // ./common/autogen/doOp.autogen:4184
 // ./common/autogen/doOp.autogen:4185
 // ./common/autogen/doOp.autogen:4186
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:4187
						this.DERET(op); // ./common/autogen/doOp.autogen:4188
						return; // ./common/autogen/doOp.autogen:4189
 // ./common/autogen/doOp.autogen:4190
 // ./common/autogen/doOp.autogen:4191
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:4192
						this.WAIT(op); // ./common/autogen/doOp.autogen:4193
						return; // ./common/autogen/doOp.autogen:4194
 // ./common/autogen/doOp.autogen:4195
 // ./common/autogen/doOp.autogen:4196
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:4197
						this.a(op); // ./common/autogen/doOp.autogen:4198
						return; // ./common/autogen/doOp.autogen:4199
 // ./common/autogen/doOp.autogen:4200
 // ./common/autogen/doOp.autogen:4201
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:4202
						this.a(op); // ./common/autogen/doOp.autogen:4203
						return; // ./common/autogen/doOp.autogen:4204
 // ./common/autogen/doOp.autogen:4205
 // ./common/autogen/doOp.autogen:4206
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:4207
						this.a(op); // ./common/autogen/doOp.autogen:4208
						return; // ./common/autogen/doOp.autogen:4209
 // ./common/autogen/doOp.autogen:4210
 // ./common/autogen/doOp.autogen:4211
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:4212
						this.a(op); // ./common/autogen/doOp.autogen:4213
						return; // ./common/autogen/doOp.autogen:4214
 // ./common/autogen/doOp.autogen:4215
 // ./common/autogen/doOp.autogen:4216
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:4217
						this.a(op); // ./common/autogen/doOp.autogen:4218
						return; // ./common/autogen/doOp.autogen:4219
 // ./common/autogen/doOp.autogen:4220
 // ./common/autogen/doOp.autogen:4221
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:4222
						this.a(op); // ./common/autogen/doOp.autogen:4223
						return; // ./common/autogen/doOp.autogen:4224
 // ./common/autogen/doOp.autogen:4225
 // ./common/autogen/doOp.autogen:4226
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:4227
						this.a(op); // ./common/autogen/doOp.autogen:4228
						return; // ./common/autogen/doOp.autogen:4229
 // ./common/autogen/doOp.autogen:4230
 // ./common/autogen/doOp.autogen:4231
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:4232
						this.a(op); // ./common/autogen/doOp.autogen:4233
						return; // ./common/autogen/doOp.autogen:4234
 // ./common/autogen/doOp.autogen:4235
 // ./common/autogen/doOp.autogen:4236
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:4237
						this.a(op); // ./common/autogen/doOp.autogen:4238
						return; // ./common/autogen/doOp.autogen:4239
 // ./common/autogen/doOp.autogen:4240
 // ./common/autogen/doOp.autogen:4241
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:4242
						this.a(op); // ./common/autogen/doOp.autogen:4243
						return; // ./common/autogen/doOp.autogen:4244
 // ./common/autogen/doOp.autogen:4245
 // ./common/autogen/doOp.autogen:4246
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:4247
						this.a(op); // ./common/autogen/doOp.autogen:4248
						return; // ./common/autogen/doOp.autogen:4249
 // ./common/autogen/doOp.autogen:4250
 // ./common/autogen/doOp.autogen:4251
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:4252
						this.a(op); // ./common/autogen/doOp.autogen:4253
						return; // ./common/autogen/doOp.autogen:4254
 // ./common/autogen/doOp.autogen:4255
 // ./common/autogen/doOp.autogen:4256
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:4257
						this.a(op); // ./common/autogen/doOp.autogen:4258
						return; // ./common/autogen/doOp.autogen:4259
 // ./common/autogen/doOp.autogen:4260
 // ./common/autogen/doOp.autogen:4261
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:4262
						this.a(op); // ./common/autogen/doOp.autogen:4263
						return; // ./common/autogen/doOp.autogen:4264
 // ./common/autogen/doOp.autogen:4265
 // ./common/autogen/doOp.autogen:4266
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:4267
						this.a(op); // ./common/autogen/doOp.autogen:4268
						return; // ./common/autogen/doOp.autogen:4269
 // ./common/autogen/doOp.autogen:4270
 // ./common/autogen/doOp.autogen:4271
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:4272
						this.a(op); // ./common/autogen/doOp.autogen:4273
						return; // ./common/autogen/doOp.autogen:4274
 // ./common/autogen/doOp.autogen:4275
 // ./common/autogen/doOp.autogen:4276
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:4277
						this.a(op); // ./common/autogen/doOp.autogen:4278
						return; // ./common/autogen/doOp.autogen:4279
 // ./common/autogen/doOp.autogen:4280
 // ./common/autogen/doOp.autogen:4281
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:4282
						this.a(op); // ./common/autogen/doOp.autogen:4283
						return; // ./common/autogen/doOp.autogen:4284
 // ./common/autogen/doOp.autogen:4285
 // ./common/autogen/doOp.autogen:4286
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:4287
						this.a(op); // ./common/autogen/doOp.autogen:4288
						return; // ./common/autogen/doOp.autogen:4289
 // ./common/autogen/doOp.autogen:4290
 // ./common/autogen/doOp.autogen:4291
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:4292
						this.a(op); // ./common/autogen/doOp.autogen:4293
						return; // ./common/autogen/doOp.autogen:4294
 // ./common/autogen/doOp.autogen:4295
 // ./common/autogen/doOp.autogen:4296
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:4297
						this.a(op); // ./common/autogen/doOp.autogen:4298
						return; // ./common/autogen/doOp.autogen:4299
 // ./common/autogen/doOp.autogen:4300
 // ./common/autogen/doOp.autogen:4301
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:4302
						this.a(op); // ./common/autogen/doOp.autogen:4303
						return; // ./common/autogen/doOp.autogen:4304
 // ./common/autogen/doOp.autogen:4305
 // ./common/autogen/doOp.autogen:4306
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:4307
						this.a(op); // ./common/autogen/doOp.autogen:4308
						return; // ./common/autogen/doOp.autogen:4309
 // ./common/autogen/doOp.autogen:4310
 // ./common/autogen/doOp.autogen:4311
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:4312
						this.a(op); // ./common/autogen/doOp.autogen:4313
						return; // ./common/autogen/doOp.autogen:4314
 // ./common/autogen/doOp.autogen:4315
 // ./common/autogen/doOp.autogen:4316
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:4317
						this.a(op); // ./common/autogen/doOp.autogen:4318
						return; // ./common/autogen/doOp.autogen:4319
 // ./common/autogen/doOp.autogen:4320
 // ./common/autogen/doOp.autogen:4321
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:4322
						this.a(op); // ./common/autogen/doOp.autogen:4323
						return; // ./common/autogen/doOp.autogen:4324
 // ./common/autogen/doOp.autogen:4325
 // ./common/autogen/doOp.autogen:4326
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:4327
						this.a(op); // ./common/autogen/doOp.autogen:4328
						return; // ./common/autogen/doOp.autogen:4329
 // ./common/autogen/doOp.autogen:4330
 // ./common/autogen/doOp.autogen:4331
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:4332
						this.a(op); // ./common/autogen/doOp.autogen:4333
						return; // ./common/autogen/doOp.autogen:4334
 // ./common/autogen/doOp.autogen:4335
 // ./common/autogen/doOp.autogen:4336
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:4337
						this.a(op); // ./common/autogen/doOp.autogen:4338
						return; // ./common/autogen/doOp.autogen:4339
 // ./common/autogen/doOp.autogen:4340
 // ./common/autogen/doOp.autogen:4341
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:4342
						this.a(op); // ./common/autogen/doOp.autogen:4343
						return; // ./common/autogen/doOp.autogen:4344
 // ./common/autogen/doOp.autogen:4345
 // ./common/autogen/doOp.autogen:4346
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:4347
						this.a(op); // ./common/autogen/doOp.autogen:4348
						return; // ./common/autogen/doOp.autogen:4349
 // ./common/autogen/doOp.autogen:4350
 // ./common/autogen/doOp.autogen:4351
	default: // ./common/autogen/doOp.autogen:4352
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:4353
} // ./common/autogen/doOp.autogen:4354
 // ./common/autogen/doOp.autogen:4355
; // ./common/autogen/doOp.autogen:4356
						return; // ./common/autogen/doOp.autogen:4357
 // ./common/autogen/doOp.autogen:4358
 // ./common/autogen/doOp.autogen:4359
					case 0x3600000: /*0b11011000000000000000000000*/ // ./common/autogen/doOp.autogen:4360
 // ./common/autogen/doOp.autogen:4361
 // ./common/autogen/doOp.autogen:4362
/* 0b111111 */ // ./common/autogen/doOp.autogen:4363
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:4364
{ // ./common/autogen/doOp.autogen:4365
 // ./common/autogen/doOp.autogen:4366
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:4367
						this.a(op); // ./common/autogen/doOp.autogen:4368
						return; // ./common/autogen/doOp.autogen:4369
 // ./common/autogen/doOp.autogen:4370
 // ./common/autogen/doOp.autogen:4371
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:4372
						this.TLBR(op); // ./common/autogen/doOp.autogen:4373
						return; // ./common/autogen/doOp.autogen:4374
 // ./common/autogen/doOp.autogen:4375
 // ./common/autogen/doOp.autogen:4376
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:4377
						this.TLBWI(op); // ./common/autogen/doOp.autogen:4378
						return; // ./common/autogen/doOp.autogen:4379
 // ./common/autogen/doOp.autogen:4380
 // ./common/autogen/doOp.autogen:4381
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:4382
						this.a(op); // ./common/autogen/doOp.autogen:4383
						return; // ./common/autogen/doOp.autogen:4384
 // ./common/autogen/doOp.autogen:4385
 // ./common/autogen/doOp.autogen:4386
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:4387
						this.a(op); // ./common/autogen/doOp.autogen:4388
						return; // ./common/autogen/doOp.autogen:4389
 // ./common/autogen/doOp.autogen:4390
 // ./common/autogen/doOp.autogen:4391
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:4392
						this.a(op); // ./common/autogen/doOp.autogen:4393
						return; // ./common/autogen/doOp.autogen:4394
 // ./common/autogen/doOp.autogen:4395
 // ./common/autogen/doOp.autogen:4396
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:4397
						this.TLBWR(op); // ./common/autogen/doOp.autogen:4398
						return; // ./common/autogen/doOp.autogen:4399
 // ./common/autogen/doOp.autogen:4400
 // ./common/autogen/doOp.autogen:4401
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:4402
						this.a(op); // ./common/autogen/doOp.autogen:4403
						return; // ./common/autogen/doOp.autogen:4404
 // ./common/autogen/doOp.autogen:4405
 // ./common/autogen/doOp.autogen:4406
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:4407
						this.TLBP(op); // ./common/autogen/doOp.autogen:4408
						return; // ./common/autogen/doOp.autogen:4409
 // ./common/autogen/doOp.autogen:4410
 // ./common/autogen/doOp.autogen:4411
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:4412
						this.a(op); // ./common/autogen/doOp.autogen:4413
						return; // ./common/autogen/doOp.autogen:4414
 // ./common/autogen/doOp.autogen:4415
 // ./common/autogen/doOp.autogen:4416
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:4417
						this.a(op); // ./common/autogen/doOp.autogen:4418
						return; // ./common/autogen/doOp.autogen:4419
 // ./common/autogen/doOp.autogen:4420
 // ./common/autogen/doOp.autogen:4421
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:4422
						this.a(op); // ./common/autogen/doOp.autogen:4423
						return; // ./common/autogen/doOp.autogen:4424
 // ./common/autogen/doOp.autogen:4425
 // ./common/autogen/doOp.autogen:4426
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:4427
						this.a(op); // ./common/autogen/doOp.autogen:4428
						return; // ./common/autogen/doOp.autogen:4429
 // ./common/autogen/doOp.autogen:4430
 // ./common/autogen/doOp.autogen:4431
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:4432
						this.a(op); // ./common/autogen/doOp.autogen:4433
						return; // ./common/autogen/doOp.autogen:4434
 // ./common/autogen/doOp.autogen:4435
 // ./common/autogen/doOp.autogen:4436
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:4437
						this.a(op); // ./common/autogen/doOp.autogen:4438
						return; // ./common/autogen/doOp.autogen:4439
 // ./common/autogen/doOp.autogen:4440
 // ./common/autogen/doOp.autogen:4441
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:4442
						this.a(op); // ./common/autogen/doOp.autogen:4443
						return; // ./common/autogen/doOp.autogen:4444
 // ./common/autogen/doOp.autogen:4445
 // ./common/autogen/doOp.autogen:4446
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:4447
						this.a(op); // ./common/autogen/doOp.autogen:4448
						return; // ./common/autogen/doOp.autogen:4449
 // ./common/autogen/doOp.autogen:4450
 // ./common/autogen/doOp.autogen:4451
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:4452
						this.a(op); // ./common/autogen/doOp.autogen:4453
						return; // ./common/autogen/doOp.autogen:4454
 // ./common/autogen/doOp.autogen:4455
 // ./common/autogen/doOp.autogen:4456
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:4457
						this.a(op); // ./common/autogen/doOp.autogen:4458
						return; // ./common/autogen/doOp.autogen:4459
 // ./common/autogen/doOp.autogen:4460
 // ./common/autogen/doOp.autogen:4461
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:4462
						this.a(op); // ./common/autogen/doOp.autogen:4463
						return; // ./common/autogen/doOp.autogen:4464
 // ./common/autogen/doOp.autogen:4465
 // ./common/autogen/doOp.autogen:4466
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:4467
						this.a(op); // ./common/autogen/doOp.autogen:4468
						return; // ./common/autogen/doOp.autogen:4469
 // ./common/autogen/doOp.autogen:4470
 // ./common/autogen/doOp.autogen:4471
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:4472
						this.a(op); // ./common/autogen/doOp.autogen:4473
						return; // ./common/autogen/doOp.autogen:4474
 // ./common/autogen/doOp.autogen:4475
 // ./common/autogen/doOp.autogen:4476
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:4477
						this.a(op); // ./common/autogen/doOp.autogen:4478
						return; // ./common/autogen/doOp.autogen:4479
 // ./common/autogen/doOp.autogen:4480
 // ./common/autogen/doOp.autogen:4481
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:4482
						this.a(op); // ./common/autogen/doOp.autogen:4483
						return; // ./common/autogen/doOp.autogen:4484
 // ./common/autogen/doOp.autogen:4485
 // ./common/autogen/doOp.autogen:4486
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:4487
						this.ERET(op); // ./common/autogen/doOp.autogen:4488
						return; // ./common/autogen/doOp.autogen:4489
 // ./common/autogen/doOp.autogen:4490
 // ./common/autogen/doOp.autogen:4491
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:4492
						this.a(op); // ./common/autogen/doOp.autogen:4493
						return; // ./common/autogen/doOp.autogen:4494
 // ./common/autogen/doOp.autogen:4495
 // ./common/autogen/doOp.autogen:4496
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:4497
						this.a(op); // ./common/autogen/doOp.autogen:4498
						return; // ./common/autogen/doOp.autogen:4499
 // ./common/autogen/doOp.autogen:4500
 // ./common/autogen/doOp.autogen:4501
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:4502
						this.a(op); // ./common/autogen/doOp.autogen:4503
						return; // ./common/autogen/doOp.autogen:4504
 // ./common/autogen/doOp.autogen:4505
 // ./common/autogen/doOp.autogen:4506
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:4507
						this.a(op); // ./common/autogen/doOp.autogen:4508
						return; // ./common/autogen/doOp.autogen:4509
 // ./common/autogen/doOp.autogen:4510
 // ./common/autogen/doOp.autogen:4511
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:4512
						this.a(op); // ./common/autogen/doOp.autogen:4513
						return; // ./common/autogen/doOp.autogen:4514
 // ./common/autogen/doOp.autogen:4515
 // ./common/autogen/doOp.autogen:4516
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:4517
						this.a(op); // ./common/autogen/doOp.autogen:4518
						return; // ./common/autogen/doOp.autogen:4519
 // ./common/autogen/doOp.autogen:4520
 // ./common/autogen/doOp.autogen:4521
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:4522
						this.DERET(op); // ./common/autogen/doOp.autogen:4523
						return; // ./common/autogen/doOp.autogen:4524
 // ./common/autogen/doOp.autogen:4525
 // ./common/autogen/doOp.autogen:4526
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:4527
						this.WAIT(op); // ./common/autogen/doOp.autogen:4528
						return; // ./common/autogen/doOp.autogen:4529
 // ./common/autogen/doOp.autogen:4530
 // ./common/autogen/doOp.autogen:4531
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:4532
						this.a(op); // ./common/autogen/doOp.autogen:4533
						return; // ./common/autogen/doOp.autogen:4534
 // ./common/autogen/doOp.autogen:4535
 // ./common/autogen/doOp.autogen:4536
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:4537
						this.a(op); // ./common/autogen/doOp.autogen:4538
						return; // ./common/autogen/doOp.autogen:4539
 // ./common/autogen/doOp.autogen:4540
 // ./common/autogen/doOp.autogen:4541
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:4542
						this.a(op); // ./common/autogen/doOp.autogen:4543
						return; // ./common/autogen/doOp.autogen:4544
 // ./common/autogen/doOp.autogen:4545
 // ./common/autogen/doOp.autogen:4546
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:4547
						this.a(op); // ./common/autogen/doOp.autogen:4548
						return; // ./common/autogen/doOp.autogen:4549
 // ./common/autogen/doOp.autogen:4550
 // ./common/autogen/doOp.autogen:4551
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:4552
						this.a(op); // ./common/autogen/doOp.autogen:4553
						return; // ./common/autogen/doOp.autogen:4554
 // ./common/autogen/doOp.autogen:4555
 // ./common/autogen/doOp.autogen:4556
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:4557
						this.a(op); // ./common/autogen/doOp.autogen:4558
						return; // ./common/autogen/doOp.autogen:4559
 // ./common/autogen/doOp.autogen:4560
 // ./common/autogen/doOp.autogen:4561
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:4562
						this.a(op); // ./common/autogen/doOp.autogen:4563
						return; // ./common/autogen/doOp.autogen:4564
 // ./common/autogen/doOp.autogen:4565
 // ./common/autogen/doOp.autogen:4566
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:4567
						this.a(op); // ./common/autogen/doOp.autogen:4568
						return; // ./common/autogen/doOp.autogen:4569
 // ./common/autogen/doOp.autogen:4570
 // ./common/autogen/doOp.autogen:4571
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:4572
						this.a(op); // ./common/autogen/doOp.autogen:4573
						return; // ./common/autogen/doOp.autogen:4574
 // ./common/autogen/doOp.autogen:4575
 // ./common/autogen/doOp.autogen:4576
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:4577
						this.a(op); // ./common/autogen/doOp.autogen:4578
						return; // ./common/autogen/doOp.autogen:4579
 // ./common/autogen/doOp.autogen:4580
 // ./common/autogen/doOp.autogen:4581
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:4582
						this.a(op); // ./common/autogen/doOp.autogen:4583
						return; // ./common/autogen/doOp.autogen:4584
 // ./common/autogen/doOp.autogen:4585
 // ./common/autogen/doOp.autogen:4586
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:4587
						this.a(op); // ./common/autogen/doOp.autogen:4588
						return; // ./common/autogen/doOp.autogen:4589
 // ./common/autogen/doOp.autogen:4590
 // ./common/autogen/doOp.autogen:4591
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:4592
						this.a(op); // ./common/autogen/doOp.autogen:4593
						return; // ./common/autogen/doOp.autogen:4594
 // ./common/autogen/doOp.autogen:4595
 // ./common/autogen/doOp.autogen:4596
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:4597
						this.a(op); // ./common/autogen/doOp.autogen:4598
						return; // ./common/autogen/doOp.autogen:4599
 // ./common/autogen/doOp.autogen:4600
 // ./common/autogen/doOp.autogen:4601
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:4602
						this.a(op); // ./common/autogen/doOp.autogen:4603
						return; // ./common/autogen/doOp.autogen:4604
 // ./common/autogen/doOp.autogen:4605
 // ./common/autogen/doOp.autogen:4606
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:4607
						this.a(op); // ./common/autogen/doOp.autogen:4608
						return; // ./common/autogen/doOp.autogen:4609
 // ./common/autogen/doOp.autogen:4610
 // ./common/autogen/doOp.autogen:4611
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:4612
						this.a(op); // ./common/autogen/doOp.autogen:4613
						return; // ./common/autogen/doOp.autogen:4614
 // ./common/autogen/doOp.autogen:4615
 // ./common/autogen/doOp.autogen:4616
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:4617
						this.a(op); // ./common/autogen/doOp.autogen:4618
						return; // ./common/autogen/doOp.autogen:4619
 // ./common/autogen/doOp.autogen:4620
 // ./common/autogen/doOp.autogen:4621
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:4622
						this.a(op); // ./common/autogen/doOp.autogen:4623
						return; // ./common/autogen/doOp.autogen:4624
 // ./common/autogen/doOp.autogen:4625
 // ./common/autogen/doOp.autogen:4626
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:4627
						this.a(op); // ./common/autogen/doOp.autogen:4628
						return; // ./common/autogen/doOp.autogen:4629
 // ./common/autogen/doOp.autogen:4630
 // ./common/autogen/doOp.autogen:4631
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:4632
						this.a(op); // ./common/autogen/doOp.autogen:4633
						return; // ./common/autogen/doOp.autogen:4634
 // ./common/autogen/doOp.autogen:4635
 // ./common/autogen/doOp.autogen:4636
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:4637
						this.a(op); // ./common/autogen/doOp.autogen:4638
						return; // ./common/autogen/doOp.autogen:4639
 // ./common/autogen/doOp.autogen:4640
 // ./common/autogen/doOp.autogen:4641
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:4642
						this.a(op); // ./common/autogen/doOp.autogen:4643
						return; // ./common/autogen/doOp.autogen:4644
 // ./common/autogen/doOp.autogen:4645
 // ./common/autogen/doOp.autogen:4646
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:4647
						this.a(op); // ./common/autogen/doOp.autogen:4648
						return; // ./common/autogen/doOp.autogen:4649
 // ./common/autogen/doOp.autogen:4650
 // ./common/autogen/doOp.autogen:4651
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:4652
						this.a(op); // ./common/autogen/doOp.autogen:4653
						return; // ./common/autogen/doOp.autogen:4654
 // ./common/autogen/doOp.autogen:4655
 // ./common/autogen/doOp.autogen:4656
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:4657
						this.a(op); // ./common/autogen/doOp.autogen:4658
						return; // ./common/autogen/doOp.autogen:4659
 // ./common/autogen/doOp.autogen:4660
 // ./common/autogen/doOp.autogen:4661
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:4662
						this.a(op); // ./common/autogen/doOp.autogen:4663
						return; // ./common/autogen/doOp.autogen:4664
 // ./common/autogen/doOp.autogen:4665
 // ./common/autogen/doOp.autogen:4666
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:4667
						this.a(op); // ./common/autogen/doOp.autogen:4668
						return; // ./common/autogen/doOp.autogen:4669
 // ./common/autogen/doOp.autogen:4670
 // ./common/autogen/doOp.autogen:4671
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:4672
						this.a(op); // ./common/autogen/doOp.autogen:4673
						return; // ./common/autogen/doOp.autogen:4674
 // ./common/autogen/doOp.autogen:4675
 // ./common/autogen/doOp.autogen:4676
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:4677
						this.a(op); // ./common/autogen/doOp.autogen:4678
						return; // ./common/autogen/doOp.autogen:4679
 // ./common/autogen/doOp.autogen:4680
 // ./common/autogen/doOp.autogen:4681
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:4682
						this.a(op); // ./common/autogen/doOp.autogen:4683
						return; // ./common/autogen/doOp.autogen:4684
 // ./common/autogen/doOp.autogen:4685
 // ./common/autogen/doOp.autogen:4686
	default: // ./common/autogen/doOp.autogen:4687
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:4688
} // ./common/autogen/doOp.autogen:4689
 // ./common/autogen/doOp.autogen:4690
; // ./common/autogen/doOp.autogen:4691
						return; // ./common/autogen/doOp.autogen:4692
 // ./common/autogen/doOp.autogen:4693
 // ./common/autogen/doOp.autogen:4694
					case 0x3800000: /*0b11100000000000000000000000*/ // ./common/autogen/doOp.autogen:4695
 // ./common/autogen/doOp.autogen:4696
 // ./common/autogen/doOp.autogen:4697
/* 0b111111 */ // ./common/autogen/doOp.autogen:4698
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:4699
{ // ./common/autogen/doOp.autogen:4700
 // ./common/autogen/doOp.autogen:4701
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:4702
						this.a(op); // ./common/autogen/doOp.autogen:4703
						return; // ./common/autogen/doOp.autogen:4704
 // ./common/autogen/doOp.autogen:4705
 // ./common/autogen/doOp.autogen:4706
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:4707
						this.TLBR(op); // ./common/autogen/doOp.autogen:4708
						return; // ./common/autogen/doOp.autogen:4709
 // ./common/autogen/doOp.autogen:4710
 // ./common/autogen/doOp.autogen:4711
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:4712
						this.TLBWI(op); // ./common/autogen/doOp.autogen:4713
						return; // ./common/autogen/doOp.autogen:4714
 // ./common/autogen/doOp.autogen:4715
 // ./common/autogen/doOp.autogen:4716
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:4717
						this.a(op); // ./common/autogen/doOp.autogen:4718
						return; // ./common/autogen/doOp.autogen:4719
 // ./common/autogen/doOp.autogen:4720
 // ./common/autogen/doOp.autogen:4721
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:4722
						this.a(op); // ./common/autogen/doOp.autogen:4723
						return; // ./common/autogen/doOp.autogen:4724
 // ./common/autogen/doOp.autogen:4725
 // ./common/autogen/doOp.autogen:4726
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:4727
						this.a(op); // ./common/autogen/doOp.autogen:4728
						return; // ./common/autogen/doOp.autogen:4729
 // ./common/autogen/doOp.autogen:4730
 // ./common/autogen/doOp.autogen:4731
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:4732
						this.TLBWR(op); // ./common/autogen/doOp.autogen:4733
						return; // ./common/autogen/doOp.autogen:4734
 // ./common/autogen/doOp.autogen:4735
 // ./common/autogen/doOp.autogen:4736
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:4737
						this.a(op); // ./common/autogen/doOp.autogen:4738
						return; // ./common/autogen/doOp.autogen:4739
 // ./common/autogen/doOp.autogen:4740
 // ./common/autogen/doOp.autogen:4741
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:4742
						this.TLBP(op); // ./common/autogen/doOp.autogen:4743
						return; // ./common/autogen/doOp.autogen:4744
 // ./common/autogen/doOp.autogen:4745
 // ./common/autogen/doOp.autogen:4746
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:4747
						this.a(op); // ./common/autogen/doOp.autogen:4748
						return; // ./common/autogen/doOp.autogen:4749
 // ./common/autogen/doOp.autogen:4750
 // ./common/autogen/doOp.autogen:4751
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:4752
						this.a(op); // ./common/autogen/doOp.autogen:4753
						return; // ./common/autogen/doOp.autogen:4754
 // ./common/autogen/doOp.autogen:4755
 // ./common/autogen/doOp.autogen:4756
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:4757
						this.a(op); // ./common/autogen/doOp.autogen:4758
						return; // ./common/autogen/doOp.autogen:4759
 // ./common/autogen/doOp.autogen:4760
 // ./common/autogen/doOp.autogen:4761
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:4762
						this.a(op); // ./common/autogen/doOp.autogen:4763
						return; // ./common/autogen/doOp.autogen:4764
 // ./common/autogen/doOp.autogen:4765
 // ./common/autogen/doOp.autogen:4766
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:4767
						this.a(op); // ./common/autogen/doOp.autogen:4768
						return; // ./common/autogen/doOp.autogen:4769
 // ./common/autogen/doOp.autogen:4770
 // ./common/autogen/doOp.autogen:4771
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:4772
						this.a(op); // ./common/autogen/doOp.autogen:4773
						return; // ./common/autogen/doOp.autogen:4774
 // ./common/autogen/doOp.autogen:4775
 // ./common/autogen/doOp.autogen:4776
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:4777
						this.a(op); // ./common/autogen/doOp.autogen:4778
						return; // ./common/autogen/doOp.autogen:4779
 // ./common/autogen/doOp.autogen:4780
 // ./common/autogen/doOp.autogen:4781
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:4782
						this.a(op); // ./common/autogen/doOp.autogen:4783
						return; // ./common/autogen/doOp.autogen:4784
 // ./common/autogen/doOp.autogen:4785
 // ./common/autogen/doOp.autogen:4786
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:4787
						this.a(op); // ./common/autogen/doOp.autogen:4788
						return; // ./common/autogen/doOp.autogen:4789
 // ./common/autogen/doOp.autogen:4790
 // ./common/autogen/doOp.autogen:4791
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:4792
						this.a(op); // ./common/autogen/doOp.autogen:4793
						return; // ./common/autogen/doOp.autogen:4794
 // ./common/autogen/doOp.autogen:4795
 // ./common/autogen/doOp.autogen:4796
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:4797
						this.a(op); // ./common/autogen/doOp.autogen:4798
						return; // ./common/autogen/doOp.autogen:4799
 // ./common/autogen/doOp.autogen:4800
 // ./common/autogen/doOp.autogen:4801
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:4802
						this.a(op); // ./common/autogen/doOp.autogen:4803
						return; // ./common/autogen/doOp.autogen:4804
 // ./common/autogen/doOp.autogen:4805
 // ./common/autogen/doOp.autogen:4806
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:4807
						this.a(op); // ./common/autogen/doOp.autogen:4808
						return; // ./common/autogen/doOp.autogen:4809
 // ./common/autogen/doOp.autogen:4810
 // ./common/autogen/doOp.autogen:4811
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:4812
						this.a(op); // ./common/autogen/doOp.autogen:4813
						return; // ./common/autogen/doOp.autogen:4814
 // ./common/autogen/doOp.autogen:4815
 // ./common/autogen/doOp.autogen:4816
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:4817
						this.a(op); // ./common/autogen/doOp.autogen:4818
						return; // ./common/autogen/doOp.autogen:4819
 // ./common/autogen/doOp.autogen:4820
 // ./common/autogen/doOp.autogen:4821
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:4822
						this.ERET(op); // ./common/autogen/doOp.autogen:4823
						return; // ./common/autogen/doOp.autogen:4824
 // ./common/autogen/doOp.autogen:4825
 // ./common/autogen/doOp.autogen:4826
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:4827
						this.a(op); // ./common/autogen/doOp.autogen:4828
						return; // ./common/autogen/doOp.autogen:4829
 // ./common/autogen/doOp.autogen:4830
 // ./common/autogen/doOp.autogen:4831
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:4832
						this.a(op); // ./common/autogen/doOp.autogen:4833
						return; // ./common/autogen/doOp.autogen:4834
 // ./common/autogen/doOp.autogen:4835
 // ./common/autogen/doOp.autogen:4836
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:4837
						this.a(op); // ./common/autogen/doOp.autogen:4838
						return; // ./common/autogen/doOp.autogen:4839
 // ./common/autogen/doOp.autogen:4840
 // ./common/autogen/doOp.autogen:4841
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:4842
						this.a(op); // ./common/autogen/doOp.autogen:4843
						return; // ./common/autogen/doOp.autogen:4844
 // ./common/autogen/doOp.autogen:4845
 // ./common/autogen/doOp.autogen:4846
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:4847
						this.a(op); // ./common/autogen/doOp.autogen:4848
						return; // ./common/autogen/doOp.autogen:4849
 // ./common/autogen/doOp.autogen:4850
 // ./common/autogen/doOp.autogen:4851
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:4852
						this.a(op); // ./common/autogen/doOp.autogen:4853
						return; // ./common/autogen/doOp.autogen:4854
 // ./common/autogen/doOp.autogen:4855
 // ./common/autogen/doOp.autogen:4856
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:4857
						this.DERET(op); // ./common/autogen/doOp.autogen:4858
						return; // ./common/autogen/doOp.autogen:4859
 // ./common/autogen/doOp.autogen:4860
 // ./common/autogen/doOp.autogen:4861
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:4862
						this.WAIT(op); // ./common/autogen/doOp.autogen:4863
						return; // ./common/autogen/doOp.autogen:4864
 // ./common/autogen/doOp.autogen:4865
 // ./common/autogen/doOp.autogen:4866
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:4867
						this.a(op); // ./common/autogen/doOp.autogen:4868
						return; // ./common/autogen/doOp.autogen:4869
 // ./common/autogen/doOp.autogen:4870
 // ./common/autogen/doOp.autogen:4871
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:4872
						this.a(op); // ./common/autogen/doOp.autogen:4873
						return; // ./common/autogen/doOp.autogen:4874
 // ./common/autogen/doOp.autogen:4875
 // ./common/autogen/doOp.autogen:4876
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:4877
						this.a(op); // ./common/autogen/doOp.autogen:4878
						return; // ./common/autogen/doOp.autogen:4879
 // ./common/autogen/doOp.autogen:4880
 // ./common/autogen/doOp.autogen:4881
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:4882
						this.a(op); // ./common/autogen/doOp.autogen:4883
						return; // ./common/autogen/doOp.autogen:4884
 // ./common/autogen/doOp.autogen:4885
 // ./common/autogen/doOp.autogen:4886
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:4887
						this.a(op); // ./common/autogen/doOp.autogen:4888
						return; // ./common/autogen/doOp.autogen:4889
 // ./common/autogen/doOp.autogen:4890
 // ./common/autogen/doOp.autogen:4891
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:4892
						this.a(op); // ./common/autogen/doOp.autogen:4893
						return; // ./common/autogen/doOp.autogen:4894
 // ./common/autogen/doOp.autogen:4895
 // ./common/autogen/doOp.autogen:4896
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:4897
						this.a(op); // ./common/autogen/doOp.autogen:4898
						return; // ./common/autogen/doOp.autogen:4899
 // ./common/autogen/doOp.autogen:4900
 // ./common/autogen/doOp.autogen:4901
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:4902
						this.a(op); // ./common/autogen/doOp.autogen:4903
						return; // ./common/autogen/doOp.autogen:4904
 // ./common/autogen/doOp.autogen:4905
 // ./common/autogen/doOp.autogen:4906
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:4907
						this.a(op); // ./common/autogen/doOp.autogen:4908
						return; // ./common/autogen/doOp.autogen:4909
 // ./common/autogen/doOp.autogen:4910
 // ./common/autogen/doOp.autogen:4911
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:4912
						this.a(op); // ./common/autogen/doOp.autogen:4913
						return; // ./common/autogen/doOp.autogen:4914
 // ./common/autogen/doOp.autogen:4915
 // ./common/autogen/doOp.autogen:4916
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:4917
						this.a(op); // ./common/autogen/doOp.autogen:4918
						return; // ./common/autogen/doOp.autogen:4919
 // ./common/autogen/doOp.autogen:4920
 // ./common/autogen/doOp.autogen:4921
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:4922
						this.a(op); // ./common/autogen/doOp.autogen:4923
						return; // ./common/autogen/doOp.autogen:4924
 // ./common/autogen/doOp.autogen:4925
 // ./common/autogen/doOp.autogen:4926
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:4927
						this.a(op); // ./common/autogen/doOp.autogen:4928
						return; // ./common/autogen/doOp.autogen:4929
 // ./common/autogen/doOp.autogen:4930
 // ./common/autogen/doOp.autogen:4931
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:4932
						this.a(op); // ./common/autogen/doOp.autogen:4933
						return; // ./common/autogen/doOp.autogen:4934
 // ./common/autogen/doOp.autogen:4935
 // ./common/autogen/doOp.autogen:4936
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:4937
						this.a(op); // ./common/autogen/doOp.autogen:4938
						return; // ./common/autogen/doOp.autogen:4939
 // ./common/autogen/doOp.autogen:4940
 // ./common/autogen/doOp.autogen:4941
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:4942
						this.a(op); // ./common/autogen/doOp.autogen:4943
						return; // ./common/autogen/doOp.autogen:4944
 // ./common/autogen/doOp.autogen:4945
 // ./common/autogen/doOp.autogen:4946
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:4947
						this.a(op); // ./common/autogen/doOp.autogen:4948
						return; // ./common/autogen/doOp.autogen:4949
 // ./common/autogen/doOp.autogen:4950
 // ./common/autogen/doOp.autogen:4951
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:4952
						this.a(op); // ./common/autogen/doOp.autogen:4953
						return; // ./common/autogen/doOp.autogen:4954
 // ./common/autogen/doOp.autogen:4955
 // ./common/autogen/doOp.autogen:4956
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:4957
						this.a(op); // ./common/autogen/doOp.autogen:4958
						return; // ./common/autogen/doOp.autogen:4959
 // ./common/autogen/doOp.autogen:4960
 // ./common/autogen/doOp.autogen:4961
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:4962
						this.a(op); // ./common/autogen/doOp.autogen:4963
						return; // ./common/autogen/doOp.autogen:4964
 // ./common/autogen/doOp.autogen:4965
 // ./common/autogen/doOp.autogen:4966
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:4967
						this.a(op); // ./common/autogen/doOp.autogen:4968
						return; // ./common/autogen/doOp.autogen:4969
 // ./common/autogen/doOp.autogen:4970
 // ./common/autogen/doOp.autogen:4971
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:4972
						this.a(op); // ./common/autogen/doOp.autogen:4973
						return; // ./common/autogen/doOp.autogen:4974
 // ./common/autogen/doOp.autogen:4975
 // ./common/autogen/doOp.autogen:4976
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:4977
						this.a(op); // ./common/autogen/doOp.autogen:4978
						return; // ./common/autogen/doOp.autogen:4979
 // ./common/autogen/doOp.autogen:4980
 // ./common/autogen/doOp.autogen:4981
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:4982
						this.a(op); // ./common/autogen/doOp.autogen:4983
						return; // ./common/autogen/doOp.autogen:4984
 // ./common/autogen/doOp.autogen:4985
 // ./common/autogen/doOp.autogen:4986
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:4987
						this.a(op); // ./common/autogen/doOp.autogen:4988
						return; // ./common/autogen/doOp.autogen:4989
 // ./common/autogen/doOp.autogen:4990
 // ./common/autogen/doOp.autogen:4991
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:4992
						this.a(op); // ./common/autogen/doOp.autogen:4993
						return; // ./common/autogen/doOp.autogen:4994
 // ./common/autogen/doOp.autogen:4995
 // ./common/autogen/doOp.autogen:4996
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:4997
						this.a(op); // ./common/autogen/doOp.autogen:4998
						return; // ./common/autogen/doOp.autogen:4999
 // ./common/autogen/doOp.autogen:5000
 // ./common/autogen/doOp.autogen:5001
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:5002
						this.a(op); // ./common/autogen/doOp.autogen:5003
						return; // ./common/autogen/doOp.autogen:5004
 // ./common/autogen/doOp.autogen:5005
 // ./common/autogen/doOp.autogen:5006
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:5007
						this.a(op); // ./common/autogen/doOp.autogen:5008
						return; // ./common/autogen/doOp.autogen:5009
 // ./common/autogen/doOp.autogen:5010
 // ./common/autogen/doOp.autogen:5011
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:5012
						this.a(op); // ./common/autogen/doOp.autogen:5013
						return; // ./common/autogen/doOp.autogen:5014
 // ./common/autogen/doOp.autogen:5015
 // ./common/autogen/doOp.autogen:5016
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:5017
						this.a(op); // ./common/autogen/doOp.autogen:5018
						return; // ./common/autogen/doOp.autogen:5019
 // ./common/autogen/doOp.autogen:5020
 // ./common/autogen/doOp.autogen:5021
	default: // ./common/autogen/doOp.autogen:5022
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:5023
} // ./common/autogen/doOp.autogen:5024
 // ./common/autogen/doOp.autogen:5025
; // ./common/autogen/doOp.autogen:5026
						return; // ./common/autogen/doOp.autogen:5027
 // ./common/autogen/doOp.autogen:5028
 // ./common/autogen/doOp.autogen:5029
					case 0x3a00000: /*0b11101000000000000000000000*/ // ./common/autogen/doOp.autogen:5030
 // ./common/autogen/doOp.autogen:5031
 // ./common/autogen/doOp.autogen:5032
/* 0b111111 */ // ./common/autogen/doOp.autogen:5033
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:5034
{ // ./common/autogen/doOp.autogen:5035
 // ./common/autogen/doOp.autogen:5036
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:5037
						this.a(op); // ./common/autogen/doOp.autogen:5038
						return; // ./common/autogen/doOp.autogen:5039
 // ./common/autogen/doOp.autogen:5040
 // ./common/autogen/doOp.autogen:5041
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:5042
						this.TLBR(op); // ./common/autogen/doOp.autogen:5043
						return; // ./common/autogen/doOp.autogen:5044
 // ./common/autogen/doOp.autogen:5045
 // ./common/autogen/doOp.autogen:5046
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:5047
						this.TLBWI(op); // ./common/autogen/doOp.autogen:5048
						return; // ./common/autogen/doOp.autogen:5049
 // ./common/autogen/doOp.autogen:5050
 // ./common/autogen/doOp.autogen:5051
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:5052
						this.a(op); // ./common/autogen/doOp.autogen:5053
						return; // ./common/autogen/doOp.autogen:5054
 // ./common/autogen/doOp.autogen:5055
 // ./common/autogen/doOp.autogen:5056
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:5057
						this.a(op); // ./common/autogen/doOp.autogen:5058
						return; // ./common/autogen/doOp.autogen:5059
 // ./common/autogen/doOp.autogen:5060
 // ./common/autogen/doOp.autogen:5061
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:5062
						this.a(op); // ./common/autogen/doOp.autogen:5063
						return; // ./common/autogen/doOp.autogen:5064
 // ./common/autogen/doOp.autogen:5065
 // ./common/autogen/doOp.autogen:5066
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:5067
						this.TLBWR(op); // ./common/autogen/doOp.autogen:5068
						return; // ./common/autogen/doOp.autogen:5069
 // ./common/autogen/doOp.autogen:5070
 // ./common/autogen/doOp.autogen:5071
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:5072
						this.a(op); // ./common/autogen/doOp.autogen:5073
						return; // ./common/autogen/doOp.autogen:5074
 // ./common/autogen/doOp.autogen:5075
 // ./common/autogen/doOp.autogen:5076
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:5077
						this.TLBP(op); // ./common/autogen/doOp.autogen:5078
						return; // ./common/autogen/doOp.autogen:5079
 // ./common/autogen/doOp.autogen:5080
 // ./common/autogen/doOp.autogen:5081
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:5082
						this.a(op); // ./common/autogen/doOp.autogen:5083
						return; // ./common/autogen/doOp.autogen:5084
 // ./common/autogen/doOp.autogen:5085
 // ./common/autogen/doOp.autogen:5086
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:5087
						this.a(op); // ./common/autogen/doOp.autogen:5088
						return; // ./common/autogen/doOp.autogen:5089
 // ./common/autogen/doOp.autogen:5090
 // ./common/autogen/doOp.autogen:5091
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:5092
						this.a(op); // ./common/autogen/doOp.autogen:5093
						return; // ./common/autogen/doOp.autogen:5094
 // ./common/autogen/doOp.autogen:5095
 // ./common/autogen/doOp.autogen:5096
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:5097
						this.a(op); // ./common/autogen/doOp.autogen:5098
						return; // ./common/autogen/doOp.autogen:5099
 // ./common/autogen/doOp.autogen:5100
 // ./common/autogen/doOp.autogen:5101
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:5102
						this.a(op); // ./common/autogen/doOp.autogen:5103
						return; // ./common/autogen/doOp.autogen:5104
 // ./common/autogen/doOp.autogen:5105
 // ./common/autogen/doOp.autogen:5106
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:5107
						this.a(op); // ./common/autogen/doOp.autogen:5108
						return; // ./common/autogen/doOp.autogen:5109
 // ./common/autogen/doOp.autogen:5110
 // ./common/autogen/doOp.autogen:5111
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:5112
						this.a(op); // ./common/autogen/doOp.autogen:5113
						return; // ./common/autogen/doOp.autogen:5114
 // ./common/autogen/doOp.autogen:5115
 // ./common/autogen/doOp.autogen:5116
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:5117
						this.a(op); // ./common/autogen/doOp.autogen:5118
						return; // ./common/autogen/doOp.autogen:5119
 // ./common/autogen/doOp.autogen:5120
 // ./common/autogen/doOp.autogen:5121
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:5122
						this.a(op); // ./common/autogen/doOp.autogen:5123
						return; // ./common/autogen/doOp.autogen:5124
 // ./common/autogen/doOp.autogen:5125
 // ./common/autogen/doOp.autogen:5126
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:5127
						this.a(op); // ./common/autogen/doOp.autogen:5128
						return; // ./common/autogen/doOp.autogen:5129
 // ./common/autogen/doOp.autogen:5130
 // ./common/autogen/doOp.autogen:5131
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:5132
						this.a(op); // ./common/autogen/doOp.autogen:5133
						return; // ./common/autogen/doOp.autogen:5134
 // ./common/autogen/doOp.autogen:5135
 // ./common/autogen/doOp.autogen:5136
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:5137
						this.a(op); // ./common/autogen/doOp.autogen:5138
						return; // ./common/autogen/doOp.autogen:5139
 // ./common/autogen/doOp.autogen:5140
 // ./common/autogen/doOp.autogen:5141
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:5142
						this.a(op); // ./common/autogen/doOp.autogen:5143
						return; // ./common/autogen/doOp.autogen:5144
 // ./common/autogen/doOp.autogen:5145
 // ./common/autogen/doOp.autogen:5146
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:5147
						this.a(op); // ./common/autogen/doOp.autogen:5148
						return; // ./common/autogen/doOp.autogen:5149
 // ./common/autogen/doOp.autogen:5150
 // ./common/autogen/doOp.autogen:5151
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:5152
						this.a(op); // ./common/autogen/doOp.autogen:5153
						return; // ./common/autogen/doOp.autogen:5154
 // ./common/autogen/doOp.autogen:5155
 // ./common/autogen/doOp.autogen:5156
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:5157
						this.ERET(op); // ./common/autogen/doOp.autogen:5158
						return; // ./common/autogen/doOp.autogen:5159
 // ./common/autogen/doOp.autogen:5160
 // ./common/autogen/doOp.autogen:5161
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:5162
						this.a(op); // ./common/autogen/doOp.autogen:5163
						return; // ./common/autogen/doOp.autogen:5164
 // ./common/autogen/doOp.autogen:5165
 // ./common/autogen/doOp.autogen:5166
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:5167
						this.a(op); // ./common/autogen/doOp.autogen:5168
						return; // ./common/autogen/doOp.autogen:5169
 // ./common/autogen/doOp.autogen:5170
 // ./common/autogen/doOp.autogen:5171
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:5172
						this.a(op); // ./common/autogen/doOp.autogen:5173
						return; // ./common/autogen/doOp.autogen:5174
 // ./common/autogen/doOp.autogen:5175
 // ./common/autogen/doOp.autogen:5176
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:5177
						this.a(op); // ./common/autogen/doOp.autogen:5178
						return; // ./common/autogen/doOp.autogen:5179
 // ./common/autogen/doOp.autogen:5180
 // ./common/autogen/doOp.autogen:5181
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:5182
						this.a(op); // ./common/autogen/doOp.autogen:5183
						return; // ./common/autogen/doOp.autogen:5184
 // ./common/autogen/doOp.autogen:5185
 // ./common/autogen/doOp.autogen:5186
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:5187
						this.a(op); // ./common/autogen/doOp.autogen:5188
						return; // ./common/autogen/doOp.autogen:5189
 // ./common/autogen/doOp.autogen:5190
 // ./common/autogen/doOp.autogen:5191
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:5192
						this.DERET(op); // ./common/autogen/doOp.autogen:5193
						return; // ./common/autogen/doOp.autogen:5194
 // ./common/autogen/doOp.autogen:5195
 // ./common/autogen/doOp.autogen:5196
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:5197
						this.WAIT(op); // ./common/autogen/doOp.autogen:5198
						return; // ./common/autogen/doOp.autogen:5199
 // ./common/autogen/doOp.autogen:5200
 // ./common/autogen/doOp.autogen:5201
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:5202
						this.a(op); // ./common/autogen/doOp.autogen:5203
						return; // ./common/autogen/doOp.autogen:5204
 // ./common/autogen/doOp.autogen:5205
 // ./common/autogen/doOp.autogen:5206
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:5207
						this.a(op); // ./common/autogen/doOp.autogen:5208
						return; // ./common/autogen/doOp.autogen:5209
 // ./common/autogen/doOp.autogen:5210
 // ./common/autogen/doOp.autogen:5211
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:5212
						this.a(op); // ./common/autogen/doOp.autogen:5213
						return; // ./common/autogen/doOp.autogen:5214
 // ./common/autogen/doOp.autogen:5215
 // ./common/autogen/doOp.autogen:5216
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:5217
						this.a(op); // ./common/autogen/doOp.autogen:5218
						return; // ./common/autogen/doOp.autogen:5219
 // ./common/autogen/doOp.autogen:5220
 // ./common/autogen/doOp.autogen:5221
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:5222
						this.a(op); // ./common/autogen/doOp.autogen:5223
						return; // ./common/autogen/doOp.autogen:5224
 // ./common/autogen/doOp.autogen:5225
 // ./common/autogen/doOp.autogen:5226
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:5227
						this.a(op); // ./common/autogen/doOp.autogen:5228
						return; // ./common/autogen/doOp.autogen:5229
 // ./common/autogen/doOp.autogen:5230
 // ./common/autogen/doOp.autogen:5231
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:5232
						this.a(op); // ./common/autogen/doOp.autogen:5233
						return; // ./common/autogen/doOp.autogen:5234
 // ./common/autogen/doOp.autogen:5235
 // ./common/autogen/doOp.autogen:5236
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:5237
						this.a(op); // ./common/autogen/doOp.autogen:5238
						return; // ./common/autogen/doOp.autogen:5239
 // ./common/autogen/doOp.autogen:5240
 // ./common/autogen/doOp.autogen:5241
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:5242
						this.a(op); // ./common/autogen/doOp.autogen:5243
						return; // ./common/autogen/doOp.autogen:5244
 // ./common/autogen/doOp.autogen:5245
 // ./common/autogen/doOp.autogen:5246
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:5247
						this.a(op); // ./common/autogen/doOp.autogen:5248
						return; // ./common/autogen/doOp.autogen:5249
 // ./common/autogen/doOp.autogen:5250
 // ./common/autogen/doOp.autogen:5251
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:5252
						this.a(op); // ./common/autogen/doOp.autogen:5253
						return; // ./common/autogen/doOp.autogen:5254
 // ./common/autogen/doOp.autogen:5255
 // ./common/autogen/doOp.autogen:5256
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:5257
						this.a(op); // ./common/autogen/doOp.autogen:5258
						return; // ./common/autogen/doOp.autogen:5259
 // ./common/autogen/doOp.autogen:5260
 // ./common/autogen/doOp.autogen:5261
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:5262
						this.a(op); // ./common/autogen/doOp.autogen:5263
						return; // ./common/autogen/doOp.autogen:5264
 // ./common/autogen/doOp.autogen:5265
 // ./common/autogen/doOp.autogen:5266
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:5267
						this.a(op); // ./common/autogen/doOp.autogen:5268
						return; // ./common/autogen/doOp.autogen:5269
 // ./common/autogen/doOp.autogen:5270
 // ./common/autogen/doOp.autogen:5271
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:5272
						this.a(op); // ./common/autogen/doOp.autogen:5273
						return; // ./common/autogen/doOp.autogen:5274
 // ./common/autogen/doOp.autogen:5275
 // ./common/autogen/doOp.autogen:5276
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:5277
						this.a(op); // ./common/autogen/doOp.autogen:5278
						return; // ./common/autogen/doOp.autogen:5279
 // ./common/autogen/doOp.autogen:5280
 // ./common/autogen/doOp.autogen:5281
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:5282
						this.a(op); // ./common/autogen/doOp.autogen:5283
						return; // ./common/autogen/doOp.autogen:5284
 // ./common/autogen/doOp.autogen:5285
 // ./common/autogen/doOp.autogen:5286
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:5287
						this.a(op); // ./common/autogen/doOp.autogen:5288
						return; // ./common/autogen/doOp.autogen:5289
 // ./common/autogen/doOp.autogen:5290
 // ./common/autogen/doOp.autogen:5291
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:5292
						this.a(op); // ./common/autogen/doOp.autogen:5293
						return; // ./common/autogen/doOp.autogen:5294
 // ./common/autogen/doOp.autogen:5295
 // ./common/autogen/doOp.autogen:5296
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:5297
						this.a(op); // ./common/autogen/doOp.autogen:5298
						return; // ./common/autogen/doOp.autogen:5299
 // ./common/autogen/doOp.autogen:5300
 // ./common/autogen/doOp.autogen:5301
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:5302
						this.a(op); // ./common/autogen/doOp.autogen:5303
						return; // ./common/autogen/doOp.autogen:5304
 // ./common/autogen/doOp.autogen:5305
 // ./common/autogen/doOp.autogen:5306
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:5307
						this.a(op); // ./common/autogen/doOp.autogen:5308
						return; // ./common/autogen/doOp.autogen:5309
 // ./common/autogen/doOp.autogen:5310
 // ./common/autogen/doOp.autogen:5311
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:5312
						this.a(op); // ./common/autogen/doOp.autogen:5313
						return; // ./common/autogen/doOp.autogen:5314
 // ./common/autogen/doOp.autogen:5315
 // ./common/autogen/doOp.autogen:5316
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:5317
						this.a(op); // ./common/autogen/doOp.autogen:5318
						return; // ./common/autogen/doOp.autogen:5319
 // ./common/autogen/doOp.autogen:5320
 // ./common/autogen/doOp.autogen:5321
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:5322
						this.a(op); // ./common/autogen/doOp.autogen:5323
						return; // ./common/autogen/doOp.autogen:5324
 // ./common/autogen/doOp.autogen:5325
 // ./common/autogen/doOp.autogen:5326
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:5327
						this.a(op); // ./common/autogen/doOp.autogen:5328
						return; // ./common/autogen/doOp.autogen:5329
 // ./common/autogen/doOp.autogen:5330
 // ./common/autogen/doOp.autogen:5331
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:5332
						this.a(op); // ./common/autogen/doOp.autogen:5333
						return; // ./common/autogen/doOp.autogen:5334
 // ./common/autogen/doOp.autogen:5335
 // ./common/autogen/doOp.autogen:5336
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:5337
						this.a(op); // ./common/autogen/doOp.autogen:5338
						return; // ./common/autogen/doOp.autogen:5339
 // ./common/autogen/doOp.autogen:5340
 // ./common/autogen/doOp.autogen:5341
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:5342
						this.a(op); // ./common/autogen/doOp.autogen:5343
						return; // ./common/autogen/doOp.autogen:5344
 // ./common/autogen/doOp.autogen:5345
 // ./common/autogen/doOp.autogen:5346
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:5347
						this.a(op); // ./common/autogen/doOp.autogen:5348
						return; // ./common/autogen/doOp.autogen:5349
 // ./common/autogen/doOp.autogen:5350
 // ./common/autogen/doOp.autogen:5351
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:5352
						this.a(op); // ./common/autogen/doOp.autogen:5353
						return; // ./common/autogen/doOp.autogen:5354
 // ./common/autogen/doOp.autogen:5355
 // ./common/autogen/doOp.autogen:5356
	default: // ./common/autogen/doOp.autogen:5357
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:5358
} // ./common/autogen/doOp.autogen:5359
 // ./common/autogen/doOp.autogen:5360
; // ./common/autogen/doOp.autogen:5361
						return; // ./common/autogen/doOp.autogen:5362
 // ./common/autogen/doOp.autogen:5363
 // ./common/autogen/doOp.autogen:5364
					case 0x3c00000: /*0b11110000000000000000000000*/ // ./common/autogen/doOp.autogen:5365
 // ./common/autogen/doOp.autogen:5366
 // ./common/autogen/doOp.autogen:5367
/* 0b111111 */ // ./common/autogen/doOp.autogen:5368
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:5369
{ // ./common/autogen/doOp.autogen:5370
 // ./common/autogen/doOp.autogen:5371
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:5372
						this.a(op); // ./common/autogen/doOp.autogen:5373
						return; // ./common/autogen/doOp.autogen:5374
 // ./common/autogen/doOp.autogen:5375
 // ./common/autogen/doOp.autogen:5376
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:5377
						this.TLBR(op); // ./common/autogen/doOp.autogen:5378
						return; // ./common/autogen/doOp.autogen:5379
 // ./common/autogen/doOp.autogen:5380
 // ./common/autogen/doOp.autogen:5381
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:5382
						this.TLBWI(op); // ./common/autogen/doOp.autogen:5383
						return; // ./common/autogen/doOp.autogen:5384
 // ./common/autogen/doOp.autogen:5385
 // ./common/autogen/doOp.autogen:5386
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:5387
						this.a(op); // ./common/autogen/doOp.autogen:5388
						return; // ./common/autogen/doOp.autogen:5389
 // ./common/autogen/doOp.autogen:5390
 // ./common/autogen/doOp.autogen:5391
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:5392
						this.a(op); // ./common/autogen/doOp.autogen:5393
						return; // ./common/autogen/doOp.autogen:5394
 // ./common/autogen/doOp.autogen:5395
 // ./common/autogen/doOp.autogen:5396
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:5397
						this.a(op); // ./common/autogen/doOp.autogen:5398
						return; // ./common/autogen/doOp.autogen:5399
 // ./common/autogen/doOp.autogen:5400
 // ./common/autogen/doOp.autogen:5401
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:5402
						this.TLBWR(op); // ./common/autogen/doOp.autogen:5403
						return; // ./common/autogen/doOp.autogen:5404
 // ./common/autogen/doOp.autogen:5405
 // ./common/autogen/doOp.autogen:5406
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:5407
						this.a(op); // ./common/autogen/doOp.autogen:5408
						return; // ./common/autogen/doOp.autogen:5409
 // ./common/autogen/doOp.autogen:5410
 // ./common/autogen/doOp.autogen:5411
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:5412
						this.TLBP(op); // ./common/autogen/doOp.autogen:5413
						return; // ./common/autogen/doOp.autogen:5414
 // ./common/autogen/doOp.autogen:5415
 // ./common/autogen/doOp.autogen:5416
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:5417
						this.a(op); // ./common/autogen/doOp.autogen:5418
						return; // ./common/autogen/doOp.autogen:5419
 // ./common/autogen/doOp.autogen:5420
 // ./common/autogen/doOp.autogen:5421
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:5422
						this.a(op); // ./common/autogen/doOp.autogen:5423
						return; // ./common/autogen/doOp.autogen:5424
 // ./common/autogen/doOp.autogen:5425
 // ./common/autogen/doOp.autogen:5426
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:5427
						this.a(op); // ./common/autogen/doOp.autogen:5428
						return; // ./common/autogen/doOp.autogen:5429
 // ./common/autogen/doOp.autogen:5430
 // ./common/autogen/doOp.autogen:5431
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:5432
						this.a(op); // ./common/autogen/doOp.autogen:5433
						return; // ./common/autogen/doOp.autogen:5434
 // ./common/autogen/doOp.autogen:5435
 // ./common/autogen/doOp.autogen:5436
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:5437
						this.a(op); // ./common/autogen/doOp.autogen:5438
						return; // ./common/autogen/doOp.autogen:5439
 // ./common/autogen/doOp.autogen:5440
 // ./common/autogen/doOp.autogen:5441
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:5442
						this.a(op); // ./common/autogen/doOp.autogen:5443
						return; // ./common/autogen/doOp.autogen:5444
 // ./common/autogen/doOp.autogen:5445
 // ./common/autogen/doOp.autogen:5446
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:5447
						this.a(op); // ./common/autogen/doOp.autogen:5448
						return; // ./common/autogen/doOp.autogen:5449
 // ./common/autogen/doOp.autogen:5450
 // ./common/autogen/doOp.autogen:5451
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:5452
						this.a(op); // ./common/autogen/doOp.autogen:5453
						return; // ./common/autogen/doOp.autogen:5454
 // ./common/autogen/doOp.autogen:5455
 // ./common/autogen/doOp.autogen:5456
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:5457
						this.a(op); // ./common/autogen/doOp.autogen:5458
						return; // ./common/autogen/doOp.autogen:5459
 // ./common/autogen/doOp.autogen:5460
 // ./common/autogen/doOp.autogen:5461
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:5462
						this.a(op); // ./common/autogen/doOp.autogen:5463
						return; // ./common/autogen/doOp.autogen:5464
 // ./common/autogen/doOp.autogen:5465
 // ./common/autogen/doOp.autogen:5466
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:5467
						this.a(op); // ./common/autogen/doOp.autogen:5468
						return; // ./common/autogen/doOp.autogen:5469
 // ./common/autogen/doOp.autogen:5470
 // ./common/autogen/doOp.autogen:5471
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:5472
						this.a(op); // ./common/autogen/doOp.autogen:5473
						return; // ./common/autogen/doOp.autogen:5474
 // ./common/autogen/doOp.autogen:5475
 // ./common/autogen/doOp.autogen:5476
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:5477
						this.a(op); // ./common/autogen/doOp.autogen:5478
						return; // ./common/autogen/doOp.autogen:5479
 // ./common/autogen/doOp.autogen:5480
 // ./common/autogen/doOp.autogen:5481
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:5482
						this.a(op); // ./common/autogen/doOp.autogen:5483
						return; // ./common/autogen/doOp.autogen:5484
 // ./common/autogen/doOp.autogen:5485
 // ./common/autogen/doOp.autogen:5486
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:5487
						this.a(op); // ./common/autogen/doOp.autogen:5488
						return; // ./common/autogen/doOp.autogen:5489
 // ./common/autogen/doOp.autogen:5490
 // ./common/autogen/doOp.autogen:5491
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:5492
						this.ERET(op); // ./common/autogen/doOp.autogen:5493
						return; // ./common/autogen/doOp.autogen:5494
 // ./common/autogen/doOp.autogen:5495
 // ./common/autogen/doOp.autogen:5496
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:5497
						this.a(op); // ./common/autogen/doOp.autogen:5498
						return; // ./common/autogen/doOp.autogen:5499
 // ./common/autogen/doOp.autogen:5500
 // ./common/autogen/doOp.autogen:5501
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:5502
						this.a(op); // ./common/autogen/doOp.autogen:5503
						return; // ./common/autogen/doOp.autogen:5504
 // ./common/autogen/doOp.autogen:5505
 // ./common/autogen/doOp.autogen:5506
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:5507
						this.a(op); // ./common/autogen/doOp.autogen:5508
						return; // ./common/autogen/doOp.autogen:5509
 // ./common/autogen/doOp.autogen:5510
 // ./common/autogen/doOp.autogen:5511
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:5512
						this.a(op); // ./common/autogen/doOp.autogen:5513
						return; // ./common/autogen/doOp.autogen:5514
 // ./common/autogen/doOp.autogen:5515
 // ./common/autogen/doOp.autogen:5516
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:5517
						this.a(op); // ./common/autogen/doOp.autogen:5518
						return; // ./common/autogen/doOp.autogen:5519
 // ./common/autogen/doOp.autogen:5520
 // ./common/autogen/doOp.autogen:5521
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:5522
						this.a(op); // ./common/autogen/doOp.autogen:5523
						return; // ./common/autogen/doOp.autogen:5524
 // ./common/autogen/doOp.autogen:5525
 // ./common/autogen/doOp.autogen:5526
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:5527
						this.DERET(op); // ./common/autogen/doOp.autogen:5528
						return; // ./common/autogen/doOp.autogen:5529
 // ./common/autogen/doOp.autogen:5530
 // ./common/autogen/doOp.autogen:5531
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:5532
						this.WAIT(op); // ./common/autogen/doOp.autogen:5533
						return; // ./common/autogen/doOp.autogen:5534
 // ./common/autogen/doOp.autogen:5535
 // ./common/autogen/doOp.autogen:5536
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:5537
						this.a(op); // ./common/autogen/doOp.autogen:5538
						return; // ./common/autogen/doOp.autogen:5539
 // ./common/autogen/doOp.autogen:5540
 // ./common/autogen/doOp.autogen:5541
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:5542
						this.a(op); // ./common/autogen/doOp.autogen:5543
						return; // ./common/autogen/doOp.autogen:5544
 // ./common/autogen/doOp.autogen:5545
 // ./common/autogen/doOp.autogen:5546
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:5547
						this.a(op); // ./common/autogen/doOp.autogen:5548
						return; // ./common/autogen/doOp.autogen:5549
 // ./common/autogen/doOp.autogen:5550
 // ./common/autogen/doOp.autogen:5551
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:5552
						this.a(op); // ./common/autogen/doOp.autogen:5553
						return; // ./common/autogen/doOp.autogen:5554
 // ./common/autogen/doOp.autogen:5555
 // ./common/autogen/doOp.autogen:5556
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:5557
						this.a(op); // ./common/autogen/doOp.autogen:5558
						return; // ./common/autogen/doOp.autogen:5559
 // ./common/autogen/doOp.autogen:5560
 // ./common/autogen/doOp.autogen:5561
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:5562
						this.a(op); // ./common/autogen/doOp.autogen:5563
						return; // ./common/autogen/doOp.autogen:5564
 // ./common/autogen/doOp.autogen:5565
 // ./common/autogen/doOp.autogen:5566
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:5567
						this.a(op); // ./common/autogen/doOp.autogen:5568
						return; // ./common/autogen/doOp.autogen:5569
 // ./common/autogen/doOp.autogen:5570
 // ./common/autogen/doOp.autogen:5571
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:5572
						this.a(op); // ./common/autogen/doOp.autogen:5573
						return; // ./common/autogen/doOp.autogen:5574
 // ./common/autogen/doOp.autogen:5575
 // ./common/autogen/doOp.autogen:5576
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:5577
						this.a(op); // ./common/autogen/doOp.autogen:5578
						return; // ./common/autogen/doOp.autogen:5579
 // ./common/autogen/doOp.autogen:5580
 // ./common/autogen/doOp.autogen:5581
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:5582
						this.a(op); // ./common/autogen/doOp.autogen:5583
						return; // ./common/autogen/doOp.autogen:5584
 // ./common/autogen/doOp.autogen:5585
 // ./common/autogen/doOp.autogen:5586
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:5587
						this.a(op); // ./common/autogen/doOp.autogen:5588
						return; // ./common/autogen/doOp.autogen:5589
 // ./common/autogen/doOp.autogen:5590
 // ./common/autogen/doOp.autogen:5591
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:5592
						this.a(op); // ./common/autogen/doOp.autogen:5593
						return; // ./common/autogen/doOp.autogen:5594
 // ./common/autogen/doOp.autogen:5595
 // ./common/autogen/doOp.autogen:5596
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:5597
						this.a(op); // ./common/autogen/doOp.autogen:5598
						return; // ./common/autogen/doOp.autogen:5599
 // ./common/autogen/doOp.autogen:5600
 // ./common/autogen/doOp.autogen:5601
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:5602
						this.a(op); // ./common/autogen/doOp.autogen:5603
						return; // ./common/autogen/doOp.autogen:5604
 // ./common/autogen/doOp.autogen:5605
 // ./common/autogen/doOp.autogen:5606
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:5607
						this.a(op); // ./common/autogen/doOp.autogen:5608
						return; // ./common/autogen/doOp.autogen:5609
 // ./common/autogen/doOp.autogen:5610
 // ./common/autogen/doOp.autogen:5611
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:5612
						this.a(op); // ./common/autogen/doOp.autogen:5613
						return; // ./common/autogen/doOp.autogen:5614
 // ./common/autogen/doOp.autogen:5615
 // ./common/autogen/doOp.autogen:5616
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:5617
						this.a(op); // ./common/autogen/doOp.autogen:5618
						return; // ./common/autogen/doOp.autogen:5619
 // ./common/autogen/doOp.autogen:5620
 // ./common/autogen/doOp.autogen:5621
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:5622
						this.a(op); // ./common/autogen/doOp.autogen:5623
						return; // ./common/autogen/doOp.autogen:5624
 // ./common/autogen/doOp.autogen:5625
 // ./common/autogen/doOp.autogen:5626
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:5627
						this.a(op); // ./common/autogen/doOp.autogen:5628
						return; // ./common/autogen/doOp.autogen:5629
 // ./common/autogen/doOp.autogen:5630
 // ./common/autogen/doOp.autogen:5631
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:5632
						this.a(op); // ./common/autogen/doOp.autogen:5633
						return; // ./common/autogen/doOp.autogen:5634
 // ./common/autogen/doOp.autogen:5635
 // ./common/autogen/doOp.autogen:5636
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:5637
						this.a(op); // ./common/autogen/doOp.autogen:5638
						return; // ./common/autogen/doOp.autogen:5639
 // ./common/autogen/doOp.autogen:5640
 // ./common/autogen/doOp.autogen:5641
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:5642
						this.a(op); // ./common/autogen/doOp.autogen:5643
						return; // ./common/autogen/doOp.autogen:5644
 // ./common/autogen/doOp.autogen:5645
 // ./common/autogen/doOp.autogen:5646
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:5647
						this.a(op); // ./common/autogen/doOp.autogen:5648
						return; // ./common/autogen/doOp.autogen:5649
 // ./common/autogen/doOp.autogen:5650
 // ./common/autogen/doOp.autogen:5651
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:5652
						this.a(op); // ./common/autogen/doOp.autogen:5653
						return; // ./common/autogen/doOp.autogen:5654
 // ./common/autogen/doOp.autogen:5655
 // ./common/autogen/doOp.autogen:5656
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:5657
						this.a(op); // ./common/autogen/doOp.autogen:5658
						return; // ./common/autogen/doOp.autogen:5659
 // ./common/autogen/doOp.autogen:5660
 // ./common/autogen/doOp.autogen:5661
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:5662
						this.a(op); // ./common/autogen/doOp.autogen:5663
						return; // ./common/autogen/doOp.autogen:5664
 // ./common/autogen/doOp.autogen:5665
 // ./common/autogen/doOp.autogen:5666
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:5667
						this.a(op); // ./common/autogen/doOp.autogen:5668
						return; // ./common/autogen/doOp.autogen:5669
 // ./common/autogen/doOp.autogen:5670
 // ./common/autogen/doOp.autogen:5671
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:5672
						this.a(op); // ./common/autogen/doOp.autogen:5673
						return; // ./common/autogen/doOp.autogen:5674
 // ./common/autogen/doOp.autogen:5675
 // ./common/autogen/doOp.autogen:5676
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:5677
						this.a(op); // ./common/autogen/doOp.autogen:5678
						return; // ./common/autogen/doOp.autogen:5679
 // ./common/autogen/doOp.autogen:5680
 // ./common/autogen/doOp.autogen:5681
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:5682
						this.a(op); // ./common/autogen/doOp.autogen:5683
						return; // ./common/autogen/doOp.autogen:5684
 // ./common/autogen/doOp.autogen:5685
 // ./common/autogen/doOp.autogen:5686
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:5687
						this.a(op); // ./common/autogen/doOp.autogen:5688
						return; // ./common/autogen/doOp.autogen:5689
 // ./common/autogen/doOp.autogen:5690
 // ./common/autogen/doOp.autogen:5691
	default: // ./common/autogen/doOp.autogen:5692
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:5693
} // ./common/autogen/doOp.autogen:5694
 // ./common/autogen/doOp.autogen:5695
; // ./common/autogen/doOp.autogen:5696
						return; // ./common/autogen/doOp.autogen:5697
 // ./common/autogen/doOp.autogen:5698
 // ./common/autogen/doOp.autogen:5699
					case 0x3e00000: /*0b11111000000000000000000000*/ // ./common/autogen/doOp.autogen:5700
 // ./common/autogen/doOp.autogen:5701
 // ./common/autogen/doOp.autogen:5702
/* 0b111111 */ // ./common/autogen/doOp.autogen:5703
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:5704
{ // ./common/autogen/doOp.autogen:5705
 // ./common/autogen/doOp.autogen:5706
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:5707
						this.a(op); // ./common/autogen/doOp.autogen:5708
						return; // ./common/autogen/doOp.autogen:5709
 // ./common/autogen/doOp.autogen:5710
 // ./common/autogen/doOp.autogen:5711
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:5712
						this.TLBR(op); // ./common/autogen/doOp.autogen:5713
						return; // ./common/autogen/doOp.autogen:5714
 // ./common/autogen/doOp.autogen:5715
 // ./common/autogen/doOp.autogen:5716
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:5717
						this.TLBWI(op); // ./common/autogen/doOp.autogen:5718
						return; // ./common/autogen/doOp.autogen:5719
 // ./common/autogen/doOp.autogen:5720
 // ./common/autogen/doOp.autogen:5721
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:5722
						this.a(op); // ./common/autogen/doOp.autogen:5723
						return; // ./common/autogen/doOp.autogen:5724
 // ./common/autogen/doOp.autogen:5725
 // ./common/autogen/doOp.autogen:5726
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:5727
						this.a(op); // ./common/autogen/doOp.autogen:5728
						return; // ./common/autogen/doOp.autogen:5729
 // ./common/autogen/doOp.autogen:5730
 // ./common/autogen/doOp.autogen:5731
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:5732
						this.a(op); // ./common/autogen/doOp.autogen:5733
						return; // ./common/autogen/doOp.autogen:5734
 // ./common/autogen/doOp.autogen:5735
 // ./common/autogen/doOp.autogen:5736
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:5737
						this.TLBWR(op); // ./common/autogen/doOp.autogen:5738
						return; // ./common/autogen/doOp.autogen:5739
 // ./common/autogen/doOp.autogen:5740
 // ./common/autogen/doOp.autogen:5741
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:5742
						this.a(op); // ./common/autogen/doOp.autogen:5743
						return; // ./common/autogen/doOp.autogen:5744
 // ./common/autogen/doOp.autogen:5745
 // ./common/autogen/doOp.autogen:5746
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:5747
						this.TLBP(op); // ./common/autogen/doOp.autogen:5748
						return; // ./common/autogen/doOp.autogen:5749
 // ./common/autogen/doOp.autogen:5750
 // ./common/autogen/doOp.autogen:5751
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:5752
						this.a(op); // ./common/autogen/doOp.autogen:5753
						return; // ./common/autogen/doOp.autogen:5754
 // ./common/autogen/doOp.autogen:5755
 // ./common/autogen/doOp.autogen:5756
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:5757
						this.a(op); // ./common/autogen/doOp.autogen:5758
						return; // ./common/autogen/doOp.autogen:5759
 // ./common/autogen/doOp.autogen:5760
 // ./common/autogen/doOp.autogen:5761
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:5762
						this.a(op); // ./common/autogen/doOp.autogen:5763
						return; // ./common/autogen/doOp.autogen:5764
 // ./common/autogen/doOp.autogen:5765
 // ./common/autogen/doOp.autogen:5766
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:5767
						this.a(op); // ./common/autogen/doOp.autogen:5768
						return; // ./common/autogen/doOp.autogen:5769
 // ./common/autogen/doOp.autogen:5770
 // ./common/autogen/doOp.autogen:5771
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:5772
						this.a(op); // ./common/autogen/doOp.autogen:5773
						return; // ./common/autogen/doOp.autogen:5774
 // ./common/autogen/doOp.autogen:5775
 // ./common/autogen/doOp.autogen:5776
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:5777
						this.a(op); // ./common/autogen/doOp.autogen:5778
						return; // ./common/autogen/doOp.autogen:5779
 // ./common/autogen/doOp.autogen:5780
 // ./common/autogen/doOp.autogen:5781
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:5782
						this.a(op); // ./common/autogen/doOp.autogen:5783
						return; // ./common/autogen/doOp.autogen:5784
 // ./common/autogen/doOp.autogen:5785
 // ./common/autogen/doOp.autogen:5786
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:5787
						this.a(op); // ./common/autogen/doOp.autogen:5788
						return; // ./common/autogen/doOp.autogen:5789
 // ./common/autogen/doOp.autogen:5790
 // ./common/autogen/doOp.autogen:5791
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:5792
						this.a(op); // ./common/autogen/doOp.autogen:5793
						return; // ./common/autogen/doOp.autogen:5794
 // ./common/autogen/doOp.autogen:5795
 // ./common/autogen/doOp.autogen:5796
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:5797
						this.a(op); // ./common/autogen/doOp.autogen:5798
						return; // ./common/autogen/doOp.autogen:5799
 // ./common/autogen/doOp.autogen:5800
 // ./common/autogen/doOp.autogen:5801
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:5802
						this.a(op); // ./common/autogen/doOp.autogen:5803
						return; // ./common/autogen/doOp.autogen:5804
 // ./common/autogen/doOp.autogen:5805
 // ./common/autogen/doOp.autogen:5806
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:5807
						this.a(op); // ./common/autogen/doOp.autogen:5808
						return; // ./common/autogen/doOp.autogen:5809
 // ./common/autogen/doOp.autogen:5810
 // ./common/autogen/doOp.autogen:5811
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:5812
						this.a(op); // ./common/autogen/doOp.autogen:5813
						return; // ./common/autogen/doOp.autogen:5814
 // ./common/autogen/doOp.autogen:5815
 // ./common/autogen/doOp.autogen:5816
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:5817
						this.a(op); // ./common/autogen/doOp.autogen:5818
						return; // ./common/autogen/doOp.autogen:5819
 // ./common/autogen/doOp.autogen:5820
 // ./common/autogen/doOp.autogen:5821
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:5822
						this.a(op); // ./common/autogen/doOp.autogen:5823
						return; // ./common/autogen/doOp.autogen:5824
 // ./common/autogen/doOp.autogen:5825
 // ./common/autogen/doOp.autogen:5826
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:5827
						this.ERET(op); // ./common/autogen/doOp.autogen:5828
						return; // ./common/autogen/doOp.autogen:5829
 // ./common/autogen/doOp.autogen:5830
 // ./common/autogen/doOp.autogen:5831
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:5832
						this.a(op); // ./common/autogen/doOp.autogen:5833
						return; // ./common/autogen/doOp.autogen:5834
 // ./common/autogen/doOp.autogen:5835
 // ./common/autogen/doOp.autogen:5836
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:5837
						this.a(op); // ./common/autogen/doOp.autogen:5838
						return; // ./common/autogen/doOp.autogen:5839
 // ./common/autogen/doOp.autogen:5840
 // ./common/autogen/doOp.autogen:5841
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:5842
						this.a(op); // ./common/autogen/doOp.autogen:5843
						return; // ./common/autogen/doOp.autogen:5844
 // ./common/autogen/doOp.autogen:5845
 // ./common/autogen/doOp.autogen:5846
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:5847
						this.a(op); // ./common/autogen/doOp.autogen:5848
						return; // ./common/autogen/doOp.autogen:5849
 // ./common/autogen/doOp.autogen:5850
 // ./common/autogen/doOp.autogen:5851
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:5852
						this.a(op); // ./common/autogen/doOp.autogen:5853
						return; // ./common/autogen/doOp.autogen:5854
 // ./common/autogen/doOp.autogen:5855
 // ./common/autogen/doOp.autogen:5856
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:5857
						this.a(op); // ./common/autogen/doOp.autogen:5858
						return; // ./common/autogen/doOp.autogen:5859
 // ./common/autogen/doOp.autogen:5860
 // ./common/autogen/doOp.autogen:5861
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:5862
						this.DERET(op); // ./common/autogen/doOp.autogen:5863
						return; // ./common/autogen/doOp.autogen:5864
 // ./common/autogen/doOp.autogen:5865
 // ./common/autogen/doOp.autogen:5866
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:5867
						this.WAIT(op); // ./common/autogen/doOp.autogen:5868
						return; // ./common/autogen/doOp.autogen:5869
 // ./common/autogen/doOp.autogen:5870
 // ./common/autogen/doOp.autogen:5871
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:5872
						this.a(op); // ./common/autogen/doOp.autogen:5873
						return; // ./common/autogen/doOp.autogen:5874
 // ./common/autogen/doOp.autogen:5875
 // ./common/autogen/doOp.autogen:5876
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:5877
						this.a(op); // ./common/autogen/doOp.autogen:5878
						return; // ./common/autogen/doOp.autogen:5879
 // ./common/autogen/doOp.autogen:5880
 // ./common/autogen/doOp.autogen:5881
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:5882
						this.a(op); // ./common/autogen/doOp.autogen:5883
						return; // ./common/autogen/doOp.autogen:5884
 // ./common/autogen/doOp.autogen:5885
 // ./common/autogen/doOp.autogen:5886
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:5887
						this.a(op); // ./common/autogen/doOp.autogen:5888
						return; // ./common/autogen/doOp.autogen:5889
 // ./common/autogen/doOp.autogen:5890
 // ./common/autogen/doOp.autogen:5891
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:5892
						this.a(op); // ./common/autogen/doOp.autogen:5893
						return; // ./common/autogen/doOp.autogen:5894
 // ./common/autogen/doOp.autogen:5895
 // ./common/autogen/doOp.autogen:5896
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:5897
						this.a(op); // ./common/autogen/doOp.autogen:5898
						return; // ./common/autogen/doOp.autogen:5899
 // ./common/autogen/doOp.autogen:5900
 // ./common/autogen/doOp.autogen:5901
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:5902
						this.a(op); // ./common/autogen/doOp.autogen:5903
						return; // ./common/autogen/doOp.autogen:5904
 // ./common/autogen/doOp.autogen:5905
 // ./common/autogen/doOp.autogen:5906
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:5907
						this.a(op); // ./common/autogen/doOp.autogen:5908
						return; // ./common/autogen/doOp.autogen:5909
 // ./common/autogen/doOp.autogen:5910
 // ./common/autogen/doOp.autogen:5911
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:5912
						this.a(op); // ./common/autogen/doOp.autogen:5913
						return; // ./common/autogen/doOp.autogen:5914
 // ./common/autogen/doOp.autogen:5915
 // ./common/autogen/doOp.autogen:5916
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:5917
						this.a(op); // ./common/autogen/doOp.autogen:5918
						return; // ./common/autogen/doOp.autogen:5919
 // ./common/autogen/doOp.autogen:5920
 // ./common/autogen/doOp.autogen:5921
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:5922
						this.a(op); // ./common/autogen/doOp.autogen:5923
						return; // ./common/autogen/doOp.autogen:5924
 // ./common/autogen/doOp.autogen:5925
 // ./common/autogen/doOp.autogen:5926
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:5927
						this.a(op); // ./common/autogen/doOp.autogen:5928
						return; // ./common/autogen/doOp.autogen:5929
 // ./common/autogen/doOp.autogen:5930
 // ./common/autogen/doOp.autogen:5931
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:5932
						this.a(op); // ./common/autogen/doOp.autogen:5933
						return; // ./common/autogen/doOp.autogen:5934
 // ./common/autogen/doOp.autogen:5935
 // ./common/autogen/doOp.autogen:5936
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:5937
						this.a(op); // ./common/autogen/doOp.autogen:5938
						return; // ./common/autogen/doOp.autogen:5939
 // ./common/autogen/doOp.autogen:5940
 // ./common/autogen/doOp.autogen:5941
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:5942
						this.a(op); // ./common/autogen/doOp.autogen:5943
						return; // ./common/autogen/doOp.autogen:5944
 // ./common/autogen/doOp.autogen:5945
 // ./common/autogen/doOp.autogen:5946
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:5947
						this.a(op); // ./common/autogen/doOp.autogen:5948
						return; // ./common/autogen/doOp.autogen:5949
 // ./common/autogen/doOp.autogen:5950
 // ./common/autogen/doOp.autogen:5951
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:5952
						this.a(op); // ./common/autogen/doOp.autogen:5953
						return; // ./common/autogen/doOp.autogen:5954
 // ./common/autogen/doOp.autogen:5955
 // ./common/autogen/doOp.autogen:5956
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:5957
						this.a(op); // ./common/autogen/doOp.autogen:5958
						return; // ./common/autogen/doOp.autogen:5959
 // ./common/autogen/doOp.autogen:5960
 // ./common/autogen/doOp.autogen:5961
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:5962
						this.a(op); // ./common/autogen/doOp.autogen:5963
						return; // ./common/autogen/doOp.autogen:5964
 // ./common/autogen/doOp.autogen:5965
 // ./common/autogen/doOp.autogen:5966
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:5967
						this.a(op); // ./common/autogen/doOp.autogen:5968
						return; // ./common/autogen/doOp.autogen:5969
 // ./common/autogen/doOp.autogen:5970
 // ./common/autogen/doOp.autogen:5971
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:5972
						this.a(op); // ./common/autogen/doOp.autogen:5973
						return; // ./common/autogen/doOp.autogen:5974
 // ./common/autogen/doOp.autogen:5975
 // ./common/autogen/doOp.autogen:5976
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:5977
						this.a(op); // ./common/autogen/doOp.autogen:5978
						return; // ./common/autogen/doOp.autogen:5979
 // ./common/autogen/doOp.autogen:5980
 // ./common/autogen/doOp.autogen:5981
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:5982
						this.a(op); // ./common/autogen/doOp.autogen:5983
						return; // ./common/autogen/doOp.autogen:5984
 // ./common/autogen/doOp.autogen:5985
 // ./common/autogen/doOp.autogen:5986
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:5987
						this.a(op); // ./common/autogen/doOp.autogen:5988
						return; // ./common/autogen/doOp.autogen:5989
 // ./common/autogen/doOp.autogen:5990
 // ./common/autogen/doOp.autogen:5991
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:5992
						this.a(op); // ./common/autogen/doOp.autogen:5993
						return; // ./common/autogen/doOp.autogen:5994
 // ./common/autogen/doOp.autogen:5995
 // ./common/autogen/doOp.autogen:5996
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:5997
						this.a(op); // ./common/autogen/doOp.autogen:5998
						return; // ./common/autogen/doOp.autogen:5999
 // ./common/autogen/doOp.autogen:6000
 // ./common/autogen/doOp.autogen:6001
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:6002
						this.a(op); // ./common/autogen/doOp.autogen:6003
						return; // ./common/autogen/doOp.autogen:6004
 // ./common/autogen/doOp.autogen:6005
 // ./common/autogen/doOp.autogen:6006
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:6007
						this.a(op); // ./common/autogen/doOp.autogen:6008
						return; // ./common/autogen/doOp.autogen:6009
 // ./common/autogen/doOp.autogen:6010
 // ./common/autogen/doOp.autogen:6011
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:6012
						this.a(op); // ./common/autogen/doOp.autogen:6013
						return; // ./common/autogen/doOp.autogen:6014
 // ./common/autogen/doOp.autogen:6015
 // ./common/autogen/doOp.autogen:6016
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:6017
						this.a(op); // ./common/autogen/doOp.autogen:6018
						return; // ./common/autogen/doOp.autogen:6019
 // ./common/autogen/doOp.autogen:6020
 // ./common/autogen/doOp.autogen:6021
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:6022
						this.a(op); // ./common/autogen/doOp.autogen:6023
						return; // ./common/autogen/doOp.autogen:6024
 // ./common/autogen/doOp.autogen:6025
 // ./common/autogen/doOp.autogen:6026
	default: // ./common/autogen/doOp.autogen:6027
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:6028
} // ./common/autogen/doOp.autogen:6029
 // ./common/autogen/doOp.autogen:6030
; // ./common/autogen/doOp.autogen:6031
						return; // ./common/autogen/doOp.autogen:6032
 // ./common/autogen/doOp.autogen:6033
 // ./common/autogen/doOp.autogen:6034
	default: // ./common/autogen/doOp.autogen:6035
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:6036
} // ./common/autogen/doOp.autogen:6037
 // ./common/autogen/doOp.autogen:6038
; // ./common/autogen/doOp.autogen:6039
						return; // ./common/autogen/doOp.autogen:6040
 // ./common/autogen/doOp.autogen:6041
 // ./common/autogen/doOp.autogen:6042
					case 0x44000000: /*0b1000100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6043
						this.b(op); // ./common/autogen/doOp.autogen:6044
						return; // ./common/autogen/doOp.autogen:6045
 // ./common/autogen/doOp.autogen:6046
 // ./common/autogen/doOp.autogen:6047
					case 0x48000000: /*0b1001000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6048
						this.b(op); // ./common/autogen/doOp.autogen:6049
						return; // ./common/autogen/doOp.autogen:6050
 // ./common/autogen/doOp.autogen:6051
 // ./common/autogen/doOp.autogen:6052
					case 0x4c000000: /*0b1001100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6053
						this.b(op); // ./common/autogen/doOp.autogen:6054
						return; // ./common/autogen/doOp.autogen:6055
 // ./common/autogen/doOp.autogen:6056
 // ./common/autogen/doOp.autogen:6057
					case 0x50000000: /*0b1010000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6058
						this.BEQL(op); // ./common/autogen/doOp.autogen:6059
						return; // ./common/autogen/doOp.autogen:6060
 // ./common/autogen/doOp.autogen:6061
 // ./common/autogen/doOp.autogen:6062
					case 0x54000000: /*0b1010100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6063
						this.BNEL(op); // ./common/autogen/doOp.autogen:6064
						return; // ./common/autogen/doOp.autogen:6065
 // ./common/autogen/doOp.autogen:6066
 // ./common/autogen/doOp.autogen:6067
					case 0x58000000: /*0b1011000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6068
						this.BLEZL(op); // ./common/autogen/doOp.autogen:6069
						return; // ./common/autogen/doOp.autogen:6070
 // ./common/autogen/doOp.autogen:6071
 // ./common/autogen/doOp.autogen:6072
					case 0x5c000000: /*0b1011100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6073
						this.BGTZL(op); // ./common/autogen/doOp.autogen:6074
						return; // ./common/autogen/doOp.autogen:6075
 // ./common/autogen/doOp.autogen:6076
 // ./common/autogen/doOp.autogen:6077
					case 0x60000000: /*0b1100000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6078
						this.a(op); // ./common/autogen/doOp.autogen:6079
						return; // ./common/autogen/doOp.autogen:6080
 // ./common/autogen/doOp.autogen:6081
 // ./common/autogen/doOp.autogen:6082
					case 0x64000000: /*0b1100100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6083
						this.a(op); // ./common/autogen/doOp.autogen:6084
						return; // ./common/autogen/doOp.autogen:6085
 // ./common/autogen/doOp.autogen:6086
 // ./common/autogen/doOp.autogen:6087
					case 0x68000000: /*0b1101000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6088
						this.a(op); // ./common/autogen/doOp.autogen:6089
						return; // ./common/autogen/doOp.autogen:6090
 // ./common/autogen/doOp.autogen:6091
 // ./common/autogen/doOp.autogen:6092
					case 0x6c000000: /*0b1101100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6093
						this.a(op); // ./common/autogen/doOp.autogen:6094
						return; // ./common/autogen/doOp.autogen:6095
 // ./common/autogen/doOp.autogen:6096
 // ./common/autogen/doOp.autogen:6097
					case 0x70000000: /*0b1110000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6098
 // ./common/autogen/doOp.autogen:6099
 // ./common/autogen/doOp.autogen:6100
/* 0b111111 */ // ./common/autogen/doOp.autogen:6101
switch((op & 0x3f) >>> 0) // ./common/autogen/doOp.autogen:6102
{ // ./common/autogen/doOp.autogen:6103
 // ./common/autogen/doOp.autogen:6104
					case 0x0: /*0b0*/ // ./common/autogen/doOp.autogen:6105
						this.MADD(op); // ./common/autogen/doOp.autogen:6106
						return; // ./common/autogen/doOp.autogen:6107
 // ./common/autogen/doOp.autogen:6108
 // ./common/autogen/doOp.autogen:6109
					case 0x1: /*0b1*/ // ./common/autogen/doOp.autogen:6110
						this.MADDU(op); // ./common/autogen/doOp.autogen:6111
						return; // ./common/autogen/doOp.autogen:6112
 // ./common/autogen/doOp.autogen:6113
 // ./common/autogen/doOp.autogen:6114
					case 0x2: /*0b10*/ // ./common/autogen/doOp.autogen:6115
						this.MUL(op); // ./common/autogen/doOp.autogen:6116
						return; // ./common/autogen/doOp.autogen:6117
 // ./common/autogen/doOp.autogen:6118
 // ./common/autogen/doOp.autogen:6119
					case 0x3: /*0b11*/ // ./common/autogen/doOp.autogen:6120
						this.a(op); // ./common/autogen/doOp.autogen:6121
						return; // ./common/autogen/doOp.autogen:6122
 // ./common/autogen/doOp.autogen:6123
 // ./common/autogen/doOp.autogen:6124
					case 0x4: /*0b100*/ // ./common/autogen/doOp.autogen:6125
						this.MSUB(op); // ./common/autogen/doOp.autogen:6126
						return; // ./common/autogen/doOp.autogen:6127
 // ./common/autogen/doOp.autogen:6128
 // ./common/autogen/doOp.autogen:6129
					case 0x5: /*0b101*/ // ./common/autogen/doOp.autogen:6130
						this.MSUBU(op); // ./common/autogen/doOp.autogen:6131
						return; // ./common/autogen/doOp.autogen:6132
 // ./common/autogen/doOp.autogen:6133
 // ./common/autogen/doOp.autogen:6134
					case 0x6: /*0b110*/ // ./common/autogen/doOp.autogen:6135
						this.a(op); // ./common/autogen/doOp.autogen:6136
						return; // ./common/autogen/doOp.autogen:6137
 // ./common/autogen/doOp.autogen:6138
 // ./common/autogen/doOp.autogen:6139
					case 0x7: /*0b111*/ // ./common/autogen/doOp.autogen:6140
						this.a(op); // ./common/autogen/doOp.autogen:6141
						return; // ./common/autogen/doOp.autogen:6142
 // ./common/autogen/doOp.autogen:6143
 // ./common/autogen/doOp.autogen:6144
					case 0x8: /*0b1000*/ // ./common/autogen/doOp.autogen:6145
						this.a(op); // ./common/autogen/doOp.autogen:6146
						return; // ./common/autogen/doOp.autogen:6147
 // ./common/autogen/doOp.autogen:6148
 // ./common/autogen/doOp.autogen:6149
					case 0x9: /*0b1001*/ // ./common/autogen/doOp.autogen:6150
						this.a(op); // ./common/autogen/doOp.autogen:6151
						return; // ./common/autogen/doOp.autogen:6152
 // ./common/autogen/doOp.autogen:6153
 // ./common/autogen/doOp.autogen:6154
					case 0xa: /*0b1010*/ // ./common/autogen/doOp.autogen:6155
						this.a(op); // ./common/autogen/doOp.autogen:6156
						return; // ./common/autogen/doOp.autogen:6157
 // ./common/autogen/doOp.autogen:6158
 // ./common/autogen/doOp.autogen:6159
					case 0xb: /*0b1011*/ // ./common/autogen/doOp.autogen:6160
						this.a(op); // ./common/autogen/doOp.autogen:6161
						return; // ./common/autogen/doOp.autogen:6162
 // ./common/autogen/doOp.autogen:6163
 // ./common/autogen/doOp.autogen:6164
					case 0xc: /*0b1100*/ // ./common/autogen/doOp.autogen:6165
						this.a(op); // ./common/autogen/doOp.autogen:6166
						return; // ./common/autogen/doOp.autogen:6167
 // ./common/autogen/doOp.autogen:6168
 // ./common/autogen/doOp.autogen:6169
					case 0xd: /*0b1101*/ // ./common/autogen/doOp.autogen:6170
						this.a(op); // ./common/autogen/doOp.autogen:6171
						return; // ./common/autogen/doOp.autogen:6172
 // ./common/autogen/doOp.autogen:6173
 // ./common/autogen/doOp.autogen:6174
					case 0xe: /*0b1110*/ // ./common/autogen/doOp.autogen:6175
						this.a(op); // ./common/autogen/doOp.autogen:6176
						return; // ./common/autogen/doOp.autogen:6177
 // ./common/autogen/doOp.autogen:6178
 // ./common/autogen/doOp.autogen:6179
					case 0xf: /*0b1111*/ // ./common/autogen/doOp.autogen:6180
						this.a(op); // ./common/autogen/doOp.autogen:6181
						return; // ./common/autogen/doOp.autogen:6182
 // ./common/autogen/doOp.autogen:6183
 // ./common/autogen/doOp.autogen:6184
					case 0x10: /*0b10000*/ // ./common/autogen/doOp.autogen:6185
						this.a(op); // ./common/autogen/doOp.autogen:6186
						return; // ./common/autogen/doOp.autogen:6187
 // ./common/autogen/doOp.autogen:6188
 // ./common/autogen/doOp.autogen:6189
					case 0x11: /*0b10001*/ // ./common/autogen/doOp.autogen:6190
						this.a(op); // ./common/autogen/doOp.autogen:6191
						return; // ./common/autogen/doOp.autogen:6192
 // ./common/autogen/doOp.autogen:6193
 // ./common/autogen/doOp.autogen:6194
					case 0x12: /*0b10010*/ // ./common/autogen/doOp.autogen:6195
						this.a(op); // ./common/autogen/doOp.autogen:6196
						return; // ./common/autogen/doOp.autogen:6197
 // ./common/autogen/doOp.autogen:6198
 // ./common/autogen/doOp.autogen:6199
					case 0x13: /*0b10011*/ // ./common/autogen/doOp.autogen:6200
						this.a(op); // ./common/autogen/doOp.autogen:6201
						return; // ./common/autogen/doOp.autogen:6202
 // ./common/autogen/doOp.autogen:6203
 // ./common/autogen/doOp.autogen:6204
					case 0x14: /*0b10100*/ // ./common/autogen/doOp.autogen:6205
						this.a(op); // ./common/autogen/doOp.autogen:6206
						return; // ./common/autogen/doOp.autogen:6207
 // ./common/autogen/doOp.autogen:6208
 // ./common/autogen/doOp.autogen:6209
					case 0x15: /*0b10101*/ // ./common/autogen/doOp.autogen:6210
						this.a(op); // ./common/autogen/doOp.autogen:6211
						return; // ./common/autogen/doOp.autogen:6212
 // ./common/autogen/doOp.autogen:6213
 // ./common/autogen/doOp.autogen:6214
					case 0x16: /*0b10110*/ // ./common/autogen/doOp.autogen:6215
						this.a(op); // ./common/autogen/doOp.autogen:6216
						return; // ./common/autogen/doOp.autogen:6217
 // ./common/autogen/doOp.autogen:6218
 // ./common/autogen/doOp.autogen:6219
					case 0x17: /*0b10111*/ // ./common/autogen/doOp.autogen:6220
						this.a(op); // ./common/autogen/doOp.autogen:6221
						return; // ./common/autogen/doOp.autogen:6222
 // ./common/autogen/doOp.autogen:6223
 // ./common/autogen/doOp.autogen:6224
					case 0x18: /*0b11000*/ // ./common/autogen/doOp.autogen:6225
						this.a(op); // ./common/autogen/doOp.autogen:6226
						return; // ./common/autogen/doOp.autogen:6227
 // ./common/autogen/doOp.autogen:6228
 // ./common/autogen/doOp.autogen:6229
					case 0x19: /*0b11001*/ // ./common/autogen/doOp.autogen:6230
						this.a(op); // ./common/autogen/doOp.autogen:6231
						return; // ./common/autogen/doOp.autogen:6232
 // ./common/autogen/doOp.autogen:6233
 // ./common/autogen/doOp.autogen:6234
					case 0x1a: /*0b11010*/ // ./common/autogen/doOp.autogen:6235
						this.a(op); // ./common/autogen/doOp.autogen:6236
						return; // ./common/autogen/doOp.autogen:6237
 // ./common/autogen/doOp.autogen:6238
 // ./common/autogen/doOp.autogen:6239
					case 0x1b: /*0b11011*/ // ./common/autogen/doOp.autogen:6240
						this.a(op); // ./common/autogen/doOp.autogen:6241
						return; // ./common/autogen/doOp.autogen:6242
 // ./common/autogen/doOp.autogen:6243
 // ./common/autogen/doOp.autogen:6244
					case 0x1c: /*0b11100*/ // ./common/autogen/doOp.autogen:6245
						this.a(op); // ./common/autogen/doOp.autogen:6246
						return; // ./common/autogen/doOp.autogen:6247
 // ./common/autogen/doOp.autogen:6248
 // ./common/autogen/doOp.autogen:6249
					case 0x1d: /*0b11101*/ // ./common/autogen/doOp.autogen:6250
						this.a(op); // ./common/autogen/doOp.autogen:6251
						return; // ./common/autogen/doOp.autogen:6252
 // ./common/autogen/doOp.autogen:6253
 // ./common/autogen/doOp.autogen:6254
					case 0x1e: /*0b11110*/ // ./common/autogen/doOp.autogen:6255
						this.a(op); // ./common/autogen/doOp.autogen:6256
						return; // ./common/autogen/doOp.autogen:6257
 // ./common/autogen/doOp.autogen:6258
 // ./common/autogen/doOp.autogen:6259
					case 0x1f: /*0b11111*/ // ./common/autogen/doOp.autogen:6260
						this.a(op); // ./common/autogen/doOp.autogen:6261
						return; // ./common/autogen/doOp.autogen:6262
 // ./common/autogen/doOp.autogen:6263
 // ./common/autogen/doOp.autogen:6264
					case 0x20: /*0b100000*/ // ./common/autogen/doOp.autogen:6265
						this.CLZ(op); // ./common/autogen/doOp.autogen:6266
						return; // ./common/autogen/doOp.autogen:6267
 // ./common/autogen/doOp.autogen:6268
 // ./common/autogen/doOp.autogen:6269
					case 0x21: /*0b100001*/ // ./common/autogen/doOp.autogen:6270
						this.CLO(op); // ./common/autogen/doOp.autogen:6271
						return; // ./common/autogen/doOp.autogen:6272
 // ./common/autogen/doOp.autogen:6273
 // ./common/autogen/doOp.autogen:6274
					case 0x22: /*0b100010*/ // ./common/autogen/doOp.autogen:6275
						this.a(op); // ./common/autogen/doOp.autogen:6276
						return; // ./common/autogen/doOp.autogen:6277
 // ./common/autogen/doOp.autogen:6278
 // ./common/autogen/doOp.autogen:6279
					case 0x23: /*0b100011*/ // ./common/autogen/doOp.autogen:6280
						this.a(op); // ./common/autogen/doOp.autogen:6281
						return; // ./common/autogen/doOp.autogen:6282
 // ./common/autogen/doOp.autogen:6283
 // ./common/autogen/doOp.autogen:6284
					case 0x24: /*0b100100*/ // ./common/autogen/doOp.autogen:6285
						this.a(op); // ./common/autogen/doOp.autogen:6286
						return; // ./common/autogen/doOp.autogen:6287
 // ./common/autogen/doOp.autogen:6288
 // ./common/autogen/doOp.autogen:6289
					case 0x25: /*0b100101*/ // ./common/autogen/doOp.autogen:6290
						this.a(op); // ./common/autogen/doOp.autogen:6291
						return; // ./common/autogen/doOp.autogen:6292
 // ./common/autogen/doOp.autogen:6293
 // ./common/autogen/doOp.autogen:6294
					case 0x26: /*0b100110*/ // ./common/autogen/doOp.autogen:6295
						this.a(op); // ./common/autogen/doOp.autogen:6296
						return; // ./common/autogen/doOp.autogen:6297
 // ./common/autogen/doOp.autogen:6298
 // ./common/autogen/doOp.autogen:6299
					case 0x27: /*0b100111*/ // ./common/autogen/doOp.autogen:6300
						this.a(op); // ./common/autogen/doOp.autogen:6301
						return; // ./common/autogen/doOp.autogen:6302
 // ./common/autogen/doOp.autogen:6303
 // ./common/autogen/doOp.autogen:6304
					case 0x28: /*0b101000*/ // ./common/autogen/doOp.autogen:6305
						this.a(op); // ./common/autogen/doOp.autogen:6306
						return; // ./common/autogen/doOp.autogen:6307
 // ./common/autogen/doOp.autogen:6308
 // ./common/autogen/doOp.autogen:6309
					case 0x29: /*0b101001*/ // ./common/autogen/doOp.autogen:6310
						this.a(op); // ./common/autogen/doOp.autogen:6311
						return; // ./common/autogen/doOp.autogen:6312
 // ./common/autogen/doOp.autogen:6313
 // ./common/autogen/doOp.autogen:6314
					case 0x2a: /*0b101010*/ // ./common/autogen/doOp.autogen:6315
						this.a(op); // ./common/autogen/doOp.autogen:6316
						return; // ./common/autogen/doOp.autogen:6317
 // ./common/autogen/doOp.autogen:6318
 // ./common/autogen/doOp.autogen:6319
					case 0x2b: /*0b101011*/ // ./common/autogen/doOp.autogen:6320
						this.a(op); // ./common/autogen/doOp.autogen:6321
						return; // ./common/autogen/doOp.autogen:6322
 // ./common/autogen/doOp.autogen:6323
 // ./common/autogen/doOp.autogen:6324
					case 0x2c: /*0b101100*/ // ./common/autogen/doOp.autogen:6325
						this.a(op); // ./common/autogen/doOp.autogen:6326
						return; // ./common/autogen/doOp.autogen:6327
 // ./common/autogen/doOp.autogen:6328
 // ./common/autogen/doOp.autogen:6329
					case 0x2d: /*0b101101*/ // ./common/autogen/doOp.autogen:6330
						this.a(op); // ./common/autogen/doOp.autogen:6331
						return; // ./common/autogen/doOp.autogen:6332
 // ./common/autogen/doOp.autogen:6333
 // ./common/autogen/doOp.autogen:6334
					case 0x2e: /*0b101110*/ // ./common/autogen/doOp.autogen:6335
						this.a(op); // ./common/autogen/doOp.autogen:6336
						return; // ./common/autogen/doOp.autogen:6337
 // ./common/autogen/doOp.autogen:6338
 // ./common/autogen/doOp.autogen:6339
					case 0x2f: /*0b101111*/ // ./common/autogen/doOp.autogen:6340
						this.a(op); // ./common/autogen/doOp.autogen:6341
						return; // ./common/autogen/doOp.autogen:6342
 // ./common/autogen/doOp.autogen:6343
 // ./common/autogen/doOp.autogen:6344
					case 0x30: /*0b110000*/ // ./common/autogen/doOp.autogen:6345
						this.a(op); // ./common/autogen/doOp.autogen:6346
						return; // ./common/autogen/doOp.autogen:6347
 // ./common/autogen/doOp.autogen:6348
 // ./common/autogen/doOp.autogen:6349
					case 0x31: /*0b110001*/ // ./common/autogen/doOp.autogen:6350
						this.a(op); // ./common/autogen/doOp.autogen:6351
						return; // ./common/autogen/doOp.autogen:6352
 // ./common/autogen/doOp.autogen:6353
 // ./common/autogen/doOp.autogen:6354
					case 0x32: /*0b110010*/ // ./common/autogen/doOp.autogen:6355
						this.a(op); // ./common/autogen/doOp.autogen:6356
						return; // ./common/autogen/doOp.autogen:6357
 // ./common/autogen/doOp.autogen:6358
 // ./common/autogen/doOp.autogen:6359
					case 0x33: /*0b110011*/ // ./common/autogen/doOp.autogen:6360
						this.a(op); // ./common/autogen/doOp.autogen:6361
						return; // ./common/autogen/doOp.autogen:6362
 // ./common/autogen/doOp.autogen:6363
 // ./common/autogen/doOp.autogen:6364
					case 0x34: /*0b110100*/ // ./common/autogen/doOp.autogen:6365
						this.a(op); // ./common/autogen/doOp.autogen:6366
						return; // ./common/autogen/doOp.autogen:6367
 // ./common/autogen/doOp.autogen:6368
 // ./common/autogen/doOp.autogen:6369
					case 0x35: /*0b110101*/ // ./common/autogen/doOp.autogen:6370
						this.a(op); // ./common/autogen/doOp.autogen:6371
						return; // ./common/autogen/doOp.autogen:6372
 // ./common/autogen/doOp.autogen:6373
 // ./common/autogen/doOp.autogen:6374
					case 0x36: /*0b110110*/ // ./common/autogen/doOp.autogen:6375
						this.a(op); // ./common/autogen/doOp.autogen:6376
						return; // ./common/autogen/doOp.autogen:6377
 // ./common/autogen/doOp.autogen:6378
 // ./common/autogen/doOp.autogen:6379
					case 0x37: /*0b110111*/ // ./common/autogen/doOp.autogen:6380
						this.a(op); // ./common/autogen/doOp.autogen:6381
						return; // ./common/autogen/doOp.autogen:6382
 // ./common/autogen/doOp.autogen:6383
 // ./common/autogen/doOp.autogen:6384
					case 0x38: /*0b111000*/ // ./common/autogen/doOp.autogen:6385
						this.a(op); // ./common/autogen/doOp.autogen:6386
						return; // ./common/autogen/doOp.autogen:6387
 // ./common/autogen/doOp.autogen:6388
 // ./common/autogen/doOp.autogen:6389
					case 0x39: /*0b111001*/ // ./common/autogen/doOp.autogen:6390
						this.a(op); // ./common/autogen/doOp.autogen:6391
						return; // ./common/autogen/doOp.autogen:6392
 // ./common/autogen/doOp.autogen:6393
 // ./common/autogen/doOp.autogen:6394
					case 0x3a: /*0b111010*/ // ./common/autogen/doOp.autogen:6395
						this.a(op); // ./common/autogen/doOp.autogen:6396
						return; // ./common/autogen/doOp.autogen:6397
 // ./common/autogen/doOp.autogen:6398
 // ./common/autogen/doOp.autogen:6399
					case 0x3b: /*0b111011*/ // ./common/autogen/doOp.autogen:6400
						this.a(op); // ./common/autogen/doOp.autogen:6401
						return; // ./common/autogen/doOp.autogen:6402
 // ./common/autogen/doOp.autogen:6403
 // ./common/autogen/doOp.autogen:6404
					case 0x3c: /*0b111100*/ // ./common/autogen/doOp.autogen:6405
						this.a(op); // ./common/autogen/doOp.autogen:6406
						return; // ./common/autogen/doOp.autogen:6407
 // ./common/autogen/doOp.autogen:6408
 // ./common/autogen/doOp.autogen:6409
					case 0x3d: /*0b111101*/ // ./common/autogen/doOp.autogen:6410
						this.a(op); // ./common/autogen/doOp.autogen:6411
						return; // ./common/autogen/doOp.autogen:6412
 // ./common/autogen/doOp.autogen:6413
 // ./common/autogen/doOp.autogen:6414
					case 0x3e: /*0b111110*/ // ./common/autogen/doOp.autogen:6415
						this.a(op); // ./common/autogen/doOp.autogen:6416
						return; // ./common/autogen/doOp.autogen:6417
 // ./common/autogen/doOp.autogen:6418
 // ./common/autogen/doOp.autogen:6419
					case 0x3f: /*0b111111*/ // ./common/autogen/doOp.autogen:6420
						this.SDBBP(op); // ./common/autogen/doOp.autogen:6421
						return; // ./common/autogen/doOp.autogen:6422
 // ./common/autogen/doOp.autogen:6423
 // ./common/autogen/doOp.autogen:6424
	default: // ./common/autogen/doOp.autogen:6425
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:6426
} // ./common/autogen/doOp.autogen:6427
 // ./common/autogen/doOp.autogen:6428
; // ./common/autogen/doOp.autogen:6429
						return; // ./common/autogen/doOp.autogen:6430
 // ./common/autogen/doOp.autogen:6431
 // ./common/autogen/doOp.autogen:6432
					case 0x74000000: /*0b1110100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6433
						this.a(op); // ./common/autogen/doOp.autogen:6434
						return; // ./common/autogen/doOp.autogen:6435
 // ./common/autogen/doOp.autogen:6436
 // ./common/autogen/doOp.autogen:6437
					case 0x78000000: /*0b1111000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6438
						this.a(op); // ./common/autogen/doOp.autogen:6439
						return; // ./common/autogen/doOp.autogen:6440
 // ./common/autogen/doOp.autogen:6441
 // ./common/autogen/doOp.autogen:6442
					case 0x7c000000: /*0b1111100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6443
						this.a(op); // ./common/autogen/doOp.autogen:6444
						return; // ./common/autogen/doOp.autogen:6445
 // ./common/autogen/doOp.autogen:6446
 // ./common/autogen/doOp.autogen:6447
					case 0x80000000: /*0b10000000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6448
						this.LB(op); // ./common/autogen/doOp.autogen:6449
						return; // ./common/autogen/doOp.autogen:6450
 // ./common/autogen/doOp.autogen:6451
 // ./common/autogen/doOp.autogen:6452
					case 0x84000000: /*0b10000100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6453
						this.LH(op); // ./common/autogen/doOp.autogen:6454
						return; // ./common/autogen/doOp.autogen:6455
 // ./common/autogen/doOp.autogen:6456
 // ./common/autogen/doOp.autogen:6457
					case 0x88000000: /*0b10001000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6458
						this.LWL(op); // ./common/autogen/doOp.autogen:6459
						return; // ./common/autogen/doOp.autogen:6460
 // ./common/autogen/doOp.autogen:6461
 // ./common/autogen/doOp.autogen:6462
					case 0x8c000000: /*0b10001100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6463
						this.LW(op); // ./common/autogen/doOp.autogen:6464
						return; // ./common/autogen/doOp.autogen:6465
 // ./common/autogen/doOp.autogen:6466
 // ./common/autogen/doOp.autogen:6467
					case 0x90000000: /*0b10010000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6468
						this.LBU(op); // ./common/autogen/doOp.autogen:6469
						return; // ./common/autogen/doOp.autogen:6470
 // ./common/autogen/doOp.autogen:6471
 // ./common/autogen/doOp.autogen:6472
					case 0x94000000: /*0b10010100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6473
						this.LHU(op); // ./common/autogen/doOp.autogen:6474
						return; // ./common/autogen/doOp.autogen:6475
 // ./common/autogen/doOp.autogen:6476
 // ./common/autogen/doOp.autogen:6477
					case 0x98000000: /*0b10011000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6478
						this.LWR(op); // ./common/autogen/doOp.autogen:6479
						return; // ./common/autogen/doOp.autogen:6480
 // ./common/autogen/doOp.autogen:6481
 // ./common/autogen/doOp.autogen:6482
					case 0x9c000000: /*0b10011100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6483
						this.a(op); // ./common/autogen/doOp.autogen:6484
						return; // ./common/autogen/doOp.autogen:6485
 // ./common/autogen/doOp.autogen:6486
 // ./common/autogen/doOp.autogen:6487
					case 0xa0000000: /*0b10100000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6488
						this.SB(op); // ./common/autogen/doOp.autogen:6489
						return; // ./common/autogen/doOp.autogen:6490
 // ./common/autogen/doOp.autogen:6491
 // ./common/autogen/doOp.autogen:6492
					case 0xa4000000: /*0b10100100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6493
						this.SH(op); // ./common/autogen/doOp.autogen:6494
						return; // ./common/autogen/doOp.autogen:6495
 // ./common/autogen/doOp.autogen:6496
 // ./common/autogen/doOp.autogen:6497
					case 0xa8000000: /*0b10101000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6498
						this.SWL(op); // ./common/autogen/doOp.autogen:6499
						return; // ./common/autogen/doOp.autogen:6500
 // ./common/autogen/doOp.autogen:6501
 // ./common/autogen/doOp.autogen:6502
					case 0xac000000: /*0b10101100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6503
						this.SW(op); // ./common/autogen/doOp.autogen:6504
						return; // ./common/autogen/doOp.autogen:6505
 // ./common/autogen/doOp.autogen:6506
 // ./common/autogen/doOp.autogen:6507
					case 0xb0000000: /*0b10110000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6508
						this.a(op); // ./common/autogen/doOp.autogen:6509
						return; // ./common/autogen/doOp.autogen:6510
 // ./common/autogen/doOp.autogen:6511
 // ./common/autogen/doOp.autogen:6512
					case 0xb4000000: /*0b10110100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6513
						this.a(op); // ./common/autogen/doOp.autogen:6514
						return; // ./common/autogen/doOp.autogen:6515
 // ./common/autogen/doOp.autogen:6516
 // ./common/autogen/doOp.autogen:6517
					case 0xb8000000: /*0b10111000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6518
						this.SWR(op); // ./common/autogen/doOp.autogen:6519
						return; // ./common/autogen/doOp.autogen:6520
 // ./common/autogen/doOp.autogen:6521
 // ./common/autogen/doOp.autogen:6522
					case 0xbc000000: /*0b10111100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6523
						this.CACHE(op); // ./common/autogen/doOp.autogen:6524
						return; // ./common/autogen/doOp.autogen:6525
 // ./common/autogen/doOp.autogen:6526
 // ./common/autogen/doOp.autogen:6527
					case 0xc0000000: /*0b11000000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6528
						this.LL(op); // ./common/autogen/doOp.autogen:6529
						return; // ./common/autogen/doOp.autogen:6530
 // ./common/autogen/doOp.autogen:6531
 // ./common/autogen/doOp.autogen:6532
					case 0xc4000000: /*0b11000100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6533
						this.b(op); // ./common/autogen/doOp.autogen:6534
						return; // ./common/autogen/doOp.autogen:6535
 // ./common/autogen/doOp.autogen:6536
 // ./common/autogen/doOp.autogen:6537
					case 0xc8000000: /*0b11001000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6538
						this.b(op); // ./common/autogen/doOp.autogen:6539
						return; // ./common/autogen/doOp.autogen:6540
 // ./common/autogen/doOp.autogen:6541
 // ./common/autogen/doOp.autogen:6542
					case 0xcc000000: /*0b11001100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6543
						this.PREF(op); // ./common/autogen/doOp.autogen:6544
						return; // ./common/autogen/doOp.autogen:6545
 // ./common/autogen/doOp.autogen:6546
 // ./common/autogen/doOp.autogen:6547
					case 0xd0000000: /*0b11010000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6548
						this.a(op); // ./common/autogen/doOp.autogen:6549
						return; // ./common/autogen/doOp.autogen:6550
 // ./common/autogen/doOp.autogen:6551
 // ./common/autogen/doOp.autogen:6552
					case 0xd4000000: /*0b11010100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6553
						this.b(op); // ./common/autogen/doOp.autogen:6554
						return; // ./common/autogen/doOp.autogen:6555
 // ./common/autogen/doOp.autogen:6556
 // ./common/autogen/doOp.autogen:6557
					case 0xd8000000: /*0b11011000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6558
						this.b(op); // ./common/autogen/doOp.autogen:6559
						return; // ./common/autogen/doOp.autogen:6560
 // ./common/autogen/doOp.autogen:6561
 // ./common/autogen/doOp.autogen:6562
					case 0xdc000000: /*0b11011100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6563
						this.a(op); // ./common/autogen/doOp.autogen:6564
						return; // ./common/autogen/doOp.autogen:6565
 // ./common/autogen/doOp.autogen:6566
 // ./common/autogen/doOp.autogen:6567
					case 0xe0000000: /*0b11100000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6568
						this.SC(op); // ./common/autogen/doOp.autogen:6569
						return; // ./common/autogen/doOp.autogen:6570
 // ./common/autogen/doOp.autogen:6571
 // ./common/autogen/doOp.autogen:6572
					case 0xe4000000: /*0b11100100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6573
						this.b(op); // ./common/autogen/doOp.autogen:6574
						return; // ./common/autogen/doOp.autogen:6575
 // ./common/autogen/doOp.autogen:6576
 // ./common/autogen/doOp.autogen:6577
					case 0xe8000000: /*0b11101000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6578
						this.b(op); // ./common/autogen/doOp.autogen:6579
						return; // ./common/autogen/doOp.autogen:6580
 // ./common/autogen/doOp.autogen:6581
 // ./common/autogen/doOp.autogen:6582
					case 0xec000000: /*0b11101100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6583
						this.a(op); // ./common/autogen/doOp.autogen:6584
						return; // ./common/autogen/doOp.autogen:6585
 // ./common/autogen/doOp.autogen:6586
 // ./common/autogen/doOp.autogen:6587
					case 0xf0000000: /*0b11110000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6588
						this.a(op); // ./common/autogen/doOp.autogen:6589
						return; // ./common/autogen/doOp.autogen:6590
 // ./common/autogen/doOp.autogen:6591
 // ./common/autogen/doOp.autogen:6592
					case 0xf4000000: /*0b11110100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6593
						this.b(op); // ./common/autogen/doOp.autogen:6594
						return; // ./common/autogen/doOp.autogen:6595
 // ./common/autogen/doOp.autogen:6596
 // ./common/autogen/doOp.autogen:6597
					case 0xf8000000: /*0b11111000000000000000000000000000*/ // ./common/autogen/doOp.autogen:6598
						this.b(op); // ./common/autogen/doOp.autogen:6599
						return; // ./common/autogen/doOp.autogen:6600
 // ./common/autogen/doOp.autogen:6601
 // ./common/autogen/doOp.autogen:6602
					case 0xfc000000: /*0b11111100000000000000000000000000*/ // ./common/autogen/doOp.autogen:6603
						this.a(op); // ./common/autogen/doOp.autogen:6604
						return; // ./common/autogen/doOp.autogen:6605
 // ./common/autogen/doOp.autogen:6606
 // ./common/autogen/doOp.autogen:6607
	default: // ./common/autogen/doOp.autogen:6608
	    throw("Unreachable from opcode: " + op ); // ./common/autogen/doOp.autogen:6609
} // ./common/autogen/doOp.autogen:6610
 // ./common/autogen/doOp.autogen:6611
 // ./common/autogen/doOp.autogen:6612
	} // ./common/autogen/doOp.autogen:6613
 // ./common/cpu.js:0
 // ./common/cpu.js:1
function GeneralRegister() { // 32 bit register // ./common/cpu.js:2
 // ./common/cpu.js:3
    this.val = 0; // ./common/cpu.js:4
 // ./common/cpu.js:5
    this.asUInt32 = function () { // ./common/cpu.js:6
        return this.val; // ./common/cpu.js:7
    } // ./common/cpu.js:8
 // ./common/cpu.js:9
    this.putUInt32 = function ( val ) { // ./common/cpu.js:10
        this.val = (val & 0xffffffff) >>> 0; // ./common/cpu.js:11
    } // ./common/cpu.js:12
 // ./common/cpu.js:13
    this.incr = function ( v ) { // ./common/cpu.js:14
        this.putUInt32(this.val+v); // ./common/cpu.js:15
    } // ./common/cpu.js:16
 // ./common/cpu.js:17
} // ./common/cpu.js:18
 // ./common/cpu.js:19
function ZeroRegister() { // 32 bit register // ./common/cpu.js:20
 // ./common/cpu.js:21
 // ./common/cpu.js:22
    this.asUInt32 = function () { // ./common/cpu.js:23
        return 0; // ./common/cpu.js:24
    } // ./common/cpu.js:25
 // ./common/cpu.js:26
    this.putUInt32 = function ( val ) { // ./common/cpu.js:27
    } // ./common/cpu.js:28
 // ./common/cpu.js:29
} // ./common/cpu.js:30
 // ./common/cpu.js:31
function twosComplement(value) // ./common/cpu.js:32
{ // ./common/cpu.js:33
	return (~(value) + 1); // ./common/cpu.js:34
} // ./common/cpu.js:35
 // ./common/cpu.js:36
 // ./common/cpu.js:37
// CP0 Register 0, Select 0 // ./common/cpu.js:38
function IndexRegister() { // ./common/cpu.js:39
    this.P = 0; // ./common/cpu.js:40
    this.Index = 0; // ./common/cpu.js:41
 // ./common/cpu.js:42
    this.asUInt32 = function() { // ./common/cpu.js:43
        return (this.Index); // ./common/cpu.js:44
    } // ./common/cpu.js:45
 // ./common/cpu.js:46
    this.putUInt32 = function(val) { // ./common/cpu.js:47
        this.Index = (val & 0xf) >>> 0; // ./common/cpu.js:48
    } // ./common/cpu.js:49
} // ./common/cpu.js:50
 // ./common/cpu.js:51
// CP0 Register 1, Select 0 // ./common/cpu.js:52
function RandomRegister() { // ./common/cpu.js:53
    this._upperBound = 15; // ./common/cpu.js:54
 // ./common/cpu.js:55
    this.asUInt32 = function() // ./common/cpu.js:56
    { // ./common/cpu.js:57
        var wire = this.cpu.C0Registers[6].asUInt32(); // ./common/cpu.js:58
        var randRange = (15 - wire); // ./common/cpu.js:59
 // ./common/cpu.js:60
        var random = wire + Math.floor(Math.random() * randRange); // ./common/cpu.js:61
 // ./common/cpu.js:62
        return random; // ./common/cpu.js:63
    } // ./common/cpu.js:64
 // ./common/cpu.js:65
    this.putUInt32 = function(val) // ./common/cpu.js:66
    { // ./common/cpu.js:67
    } // ./common/cpu.js:68
} // ./common/cpu.js:69
 // ./common/cpu.js:70
// CP0 Register 2 and 3, Select 0 // ./common/cpu.js:71
function EntryLoRegister() { // ./common/cpu.js:72
    this.PFN = 0; // ./common/cpu.js:73
    this.C = 0; // ./common/cpu.js:74
    this.D = 0; // ./common/cpu.js:75
    this.V = 0; // ./common/cpu.js:76
    this.G = 0; // ./common/cpu.js:77
 // ./common/cpu.js:78
    this.asUInt32 = function() // ./common/cpu.js:79
    { // ./common/cpu.js:80
        return (this.G + (this.V << 1) + (this.D << 2) + (this.C << 3) + (this.PFN << 6)); // ./common/cpu.js:81
    } // ./common/cpu.js:82
 // ./common/cpu.js:83
    this.putUInt32 = function(val) // ./common/cpu.js:84
    { // ./common/cpu.js:85
        this.G = val & 0x1; // ./common/cpu.js:86
        this.V = (val >>> 1) & 0x1; // ./common/cpu.js:87
        this.D = (val >>> 2) & 0x1; // ./common/cpu.js:88
        this.C = (val >>> 3) & 0x7; // ./common/cpu.js:89
        this.PFN = (val >>> 6) & 0xfffff; // ./common/cpu.js:90
    } // ./common/cpu.js:91
} // ./common/cpu.js:92
 // ./common/cpu.js:93
// CP0 Register 4, Select 0 // ./common/cpu.js:94
function ContextRegister() { // ./common/cpu.js:95
    this.PTEBase = 0; // ./common/cpu.js:96
    this.BadVPN2 = 0; // ./common/cpu.js:97
 // ./common/cpu.js:98
    this.asUInt32 = function() // ./common/cpu.js:99
    { // ./common/cpu.js:100
        return ((this.PTEBase * Math.pow(2,23)) + (this.BadVPN2 << 4)); // ./common/cpu.js:101
    } // ./common/cpu.js:102
 // ./common/cpu.js:103
    this.putUInt32 = function(val) // ./common/cpu.js:104
    { // ./common/cpu.js:105
        this.BadVPN2 = (val >>> 4) & 0x7ffff; // ./common/cpu.js:106
        this.PTEBase = (val >>> 23) & 0x1ff; // ./common/cpu.js:107
    } // ./common/cpu.js:108
} // ./common/cpu.js:109
 // ./common/cpu.js:110
// CP0 Register 5, Select 0 // ./common/cpu.js:111
function PageMaskRegister() { // ./common/cpu.js:112
    this.Mask = 0; // ./common/cpu.js:113
 // ./common/cpu.js:114
    this.rawUInt32 = function() // ./common/cpu.js:115
    { // ./common/cpu.js:116
        return this.Mask; // ./common/cpu.js:117
    } // ./common/cpu.js:118
 // ./common/cpu.js:119
    this.asUInt32 = function() // ./common/cpu.js:120
    { // ./common/cpu.js:121
        var mask = Math.pow(2,this.Mask*2)-1; // ./common/cpu.js:122
        return ((mask << 13) >>> 0); // ./common/cpu.js:123
    } // ./common/cpu.js:124
 // ./common/cpu.js:125
    this.putUInt32 = function(val) // ./common/cpu.js:126
    { // ./common/cpu.js:127
        var mask = 0; // ./common/cpu.js:128
 // ./common/cpu.js:129
        switch(val) // ./common/cpu.js:130
        { // ./common/cpu.js:131
            case 0: // ./common/cpu.js:132
                mask = 0; // ./common/cpu.js:133
                break; // ./common/cpu.js:134
            case 3: // ./common/cpu.js:135
                mask = 1; // ./common/cpu.js:136
                break; // ./common/cpu.js:137
            case 15: // ./common/cpu.js:138
                mask = 2; // ./common/cpu.js:139
                break; // ./common/cpu.js:140
            case 63: // ./common/cpu.js:141
                mask = 3; // ./common/cpu.js:142
                break; // ./common/cpu.js:143
            case 255: // ./common/cpu.js:144
                mask = 4; // ./common/cpu.js:145
                break; // ./common/cpu.js:146
            case 1023: // ./common/cpu.js:147
                mask = 5; // ./common/cpu.js:148
                break; // ./common/cpu.js:149
            case 4095: // ./common/cpu.js:150
                mask = 6; // ./common/cpu.js:151
                break; // ./common/cpu.js:152
            default: // ./common/cpu.js:153
                ERROR("Invalid page mask."); // ./common/cpu.js:154
                break; // ./common/cpu.js:155
        } // ./common/cpu.js:156
 // ./common/cpu.js:157
        this.Mask = mask; // ./common/cpu.js:158
    } // ./common/cpu.js:159
} // ./common/cpu.js:160
 // ./common/cpu.js:161
// CP0 Register 6, Select 0 // ./common/cpu.js:162
function WiredRegister() { // ./common/cpu.js:163
    this.Wired = 0; // ./common/cpu.js:164
 // ./common/cpu.js:165
    this.asUInt32 = function() // ./common/cpu.js:166
    { // ./common/cpu.js:167
        return this.Wired; // ./common/cpu.js:168
    } // ./common/cpu.js:169
 // ./common/cpu.js:170
    this.putUInt32 = function(val) // ./common/cpu.js:171
    { // ./common/cpu.js:172
        this.Wired = val & 0xf; // ./common/cpu.js:173
    } // ./common/cpu.js:174
} // ./common/cpu.js:175
 // ./common/cpu.js:176
// CP0 Register 8, Select 0 // ./common/cpu.js:177
// BadVAddr = GeneralRegister // ./common/cpu.js:178
 // ./common/cpu.js:179
// CP0 Register 9, Select 0 // ./common/cpu.js:180
// Count = GeneralRegister // ./common/cpu.js:181
 // ./common/cpu.js:182
// CP0 Register 10, Select 0 // ./common/cpu.js:183
function EntryHiRegister() { // ./common/cpu.js:184
    this.VPN2 = 0; // ./common/cpu.js:185
    this.ASID = 0; // ./common/cpu.js:186
 // ./common/cpu.js:187
    this.asUInt32 = function() { // ./common/cpu.js:188
        return (((this.VPN2 << 13) + this.ASID) >>> 0); // ./common/cpu.js:189
    } // ./common/cpu.js:190
 // ./common/cpu.js:191
    this.putUInt32 = function(val) { // ./common/cpu.js:192
        this.ASID = val & 0xff; // ./common/cpu.js:193
        this.VPN2 = (val >>> 13) & 0x7ffff; // ./common/cpu.js:194
    } // ./common/cpu.js:195
} // ./common/cpu.js:196
 // ./common/cpu.js:197
// CP0 Register 11, Select 0 // ./common/cpu.js:198
function CompareRegister(cpu) { // ./common/cpu.js:199
    this.val = 0; // ./common/cpu.js:200
    this.cpu = cpu; // ./common/cpu.js:201
 // ./common/cpu.js:202
    this.asUInt32 = function () { // ./common/cpu.js:203
        return this.val; // ./common/cpu.js:204
    } // ./common/cpu.js:205
 // ./common/cpu.js:206
    this.putUInt32 = function ( val ) { // ./common/cpu.js:207
        this.val = (val & 0xffffffff) >>> 0; // ./common/cpu.js:208
        // clear timer interrupt // ./common/cpu.js:209
        this.cpu.C0Registers[13].IP1 = this.cpu.C0Registers[13].IP1 & 0x1f; // ./common/cpu.js:210
    } // ./common/cpu.js:211
} // ./common/cpu.js:212
 // ./common/cpu.js:213
// CP0 Register 12, Select 0 // ./common/cpu.js:214
function StatusRegister() { // ./common/cpu.js:215
	this.CU = 1; // Controls access to co-processors, bits 31:28 // ./common/cpu.js:216
	this.RP = 0; // Enables reduced power mode, bit 27 // ./common/cpu.js:217
	this.R = 0; // This bit must be ignored on writes and read as zero, bit 26 // ./common/cpu.js:218
	this.RE = 0; // Used to enable reverse-endian memory references, bit 25 // ./common/cpu.js:219
	this.zero = 0; // This bit must be written as zero; returns zero on read, bit 24:23 // ./common/cpu.js:220
	this.BEV = 0; // Controls the location of exception vectors, bit 22 // ./common/cpu.js:221
	this.TS = 0; // TLB shutdown, bit 21 // ./common/cpu.js:222
	this.SR = 0; // bit 20 // ./common/cpu.js:223
	this.NMI = 0; // bit 19 // ./common/cpu.js:224
	// bit 18 is same as this.zero // ./common/cpu.js:225
	// bits 17:16 are reserved // ./common/cpu.js:226
	this.IM = 0; // Interrupt mask, bits 15:8 // ./common/cpu.js:227
	// bits 7:5 are reserved // ./common/cpu.js:228
	this.UM = 0; // User Mode, bits 4 // ./common/cpu.js:229
	// bit 3 is reserved // ./common/cpu.js:230
	this.ERL = 1; // Error Level, bit 2 // ./common/cpu.js:231
	this.EXL = 0; // Exception Level, bit 1 // ./common/cpu.js:232
	this.IE = 1; // Interrupt Enable, bit 0 // ./common/cpu.js:233
 // ./common/cpu.js:234
	this.asUInt32 = function() // ./common/cpu.js:235
	{ // ./common/cpu.js:236
		return ((this.CU * Math.pow(2, 28)) + (this.RP * Math.pow(2,27)) + (this.R * Math.pow(2,26)) + (this.RE * Math.pow(2, 25)) + (this.BEV * Math.pow(2,22)) + (this.TS * Math.pow(2, 21)) + (this.SR * Math.pow(2,20)) + (this.NMI * Math.pow(2, 19)) + (this.IM * Math.pow(2, 8)) + (this.UM * Math.pow(2,4)) + (this.ERL * Math.pow(2,2)) + (this.EXL * Math.pow(2,1)) + this.IE); // ./common/cpu.js:237
	} // ./common/cpu.js:238
 // ./common/cpu.js:239
	this.putUInt32 = function(value) // ./common/cpu.js:240
	{ // ./common/cpu.js:241
		this.CU = (value >>> 28) & 0xf; // ./common/cpu.js:242
		this.RP = (value >>> 27) & 0x1; // ./common/cpu.js:243
		this.R = (value >>> 26) & 0x1; // ./common/cpu.js:244
		this.RE = (value >>> 25) & 0x1; // ./common/cpu.js:245
		// this.zero ro // ./common/cpu.js:246
		this.BEV = (value >>> 22) & 0x1; // ./common/cpu.js:247
		this.TS = (value >>> 21) & 0x1; // ./common/cpu.js:248
		this.SR = (value >>> 20) & 0x1; // ./common/cpu.js:249
		this.NMI = (value >>> 19) & 0x1; // ./common/cpu.js:250
		this.IM = (value >>> 8) & 0xff; // ./common/cpu.js:251
		this.UM = (value >>> 4) & 0x1; // ./common/cpu.js:252
		this.ERL = (value >>> 2) & 0x1; // ./common/cpu.js:253
		this.EXL = (value >>> 1) & 0x1; // ./common/cpu.js:254
		this.IE = value & 0x1; // ./common/cpu.js:255
	} // ./common/cpu.js:256
 // ./common/cpu.js:257
} // ./common/cpu.js:258
 // ./common/cpu.js:259
// CP0 Register 13, Select 0 // ./common/cpu.js:260
function CauseRegister() // ./common/cpu.js:261
{ // ./common/cpu.js:262
    this.BD = 0; // ./common/cpu.js:263
    this.CE = 0; // ./common/cpu.js:264
    this.IV = 0; // ./common/cpu.js:265
    this.WP = 0; // ./common/cpu.js:266
    this.IP1 = 0; // ./common/cpu.js:267
    this.IP0 = 0; // ./common/cpu.js:268
    this.EXC = 0; // ./common/cpu.js:269
 // ./common/cpu.js:270
    this.asUInt32 = function() { // ./common/cpu.js:271
        return ((this.EXC << 2) + (this.IP0 << 8) + (this.IP1 << 10) + (this.WP << 22) + (this.IV << 23) + (this.CE << 28) + (this.BD * Math.pow(2,31))); // ./common/cpu.js:272
    } // ./common/cpu.js:273
 // ./common/cpu.js:274
    this.putUInt32 = function(val) { // ./common/cpu.js:275
        this.BD = (val >>> 31); // ./common/cpu.js:276
        this.CE = (val >>> 28) & 0x3; // ./common/cpu.js:277
        this.IV = (val >>> 23) & 0x1; // ./common/cpu.js:278
        this.WP = (val >>> 22) & 0x1; // ./common/cpu.js:279
        this.IP1 = (val >>> 10) & 0x3f; // ./common/cpu.js:280
        this.IP0 = (val >>> 8) & 0x3; // ./common/cpu.js:281
        this.EXC = (val >>> 2) & 0x1f; // ./common/cpu.js:282
    } // ./common/cpu.js:283
} // ./common/cpu.js:284
 // ./common/cpu.js:285
// CP0 Register 14, Select 0 // ./common/cpu.js:286
// ExceptionProgramCounter = GeneralRegister // ./common/cpu.js:287
 // ./common/cpu.js:288
// CP0 Register 15, Select 0 // ./common/cpu.js:289
function processorIDRegister() // ./common/cpu.js:290
{ // ./common/cpu.js:291
	// all fields are read only by software // ./common/cpu.js:292
	this.R = 0; // bits 31:24 // ./common/cpu.js:293
	this.companyID = 1; // bits 23:16 // ./common/cpu.js:294
	this.processorID = 128; // bits 15:8, (128 for 4kc) // ./common/cpu.js:295
	this.revision = 11; // bits 7:0, latest version according to manual // ./common/cpu.js:296
 // ./common/cpu.js:297
	this.asUInt32 = function() // ./common/cpu.js:298
	{ // ./common/cpu.js:299
		return ((this.R << 24) + (this.companyID << 16) + (this.processorID << 8) + this.revision); // ./common/cpu.js:300
	} // ./common/cpu.js:301
 // ./common/cpu.js:302
	this.putUInt32 = function(value) // ./common/cpu.js:303
	{ // ./common/cpu.js:304
		return; // ./common/cpu.js:305
	} // ./common/cpu.js:306
} // ./common/cpu.js:307
 // ./common/cpu.js:308
// CP0 Register 16, Select 0 // ./common/cpu.js:309
function ConfigRegister() // ./common/cpu.js:310
{ // ./common/cpu.js:311
	// all fields except K0 are read only by software // ./common/cpu.js:312
	this.M = 1; // bit 31 // ./common/cpu.js:313
	this.K23 = 0; // bits 30:28 // ./common/cpu.js:314
	this.KU = 0; // bits 27:25 // ./common/cpu.js:315
	this.ISP = 0; // bit 24 // ./common/cpu.js:316
	this.DSP = 0; // bit 23 // ./common/cpu.js:317
	this.zero = 0; // bit 22 // ./common/cpu.js:318
	this.SB = 0; // bit 21 // ./common/cpu.js:319
	this.MDU = 0; // bit 20 // ./common/cpu.js:320
	// bit 19 same as this.zero // ./common/cpu.js:321
	this.MM = 0; // bits 18:17 // ./common/cpu.js:322
	this.BM = 0; // bit 16 // ./common/cpu.js:323
	this.BE = 1; // bit 15 // ./common/cpu.js:324
	this.AT = 0; // bits 14:13 // ./common/cpu.js:325
	this.AR = 0; // bits 12:10 // ./common/cpu.js:326
	this.MT = 1; // bits 9:7 // ./common/cpu.js:327
	// bit 6 same as this.zero // ./common/cpu.js:328
	this.K0 = 2; // bits 2:0 // ./common/cpu.js:329
 // ./common/cpu.js:330
	this.asUInt32 = function() // ./common/cpu.js:331
	{ // ./common/cpu.js:332
        return ((this.M << 31) + (this.K23 << 28) + (this.KU << 25) + (this.ISP << 24) + (this.DSP << 23) + (this.SB << 21) + (this.MDU << 20) + (this.MM << 17) + (this.BM << 16) + (this.BE << 15) + (this.AT << 13) + (this.AR << 10) + (this.MT << 7) + (this.K0)) >>> 0; // ./common/cpu.js:333
	} // ./common/cpu.js:334
 // ./common/cpu.js:335
	this.putUInt32 = function(value) // ./common/cpu.js:336
	{ // ./common/cpu.js:337
		this.K0 = value & 0x7; // ./common/cpu.js:338
	} // ./common/cpu.js:339
 // ./common/cpu.js:340
} // ./common/cpu.js:341
 // ./common/cpu.js:342
// CP0 Register 16, Select 1 // ./common/cpu.js:343
function Config1Register() // ./common/cpu.js:344
{ // ./common/cpu.js:345
	// all fields read only by software // ./common/cpu.js:346
	this.M = 0; // bit 31 // ./common/cpu.js:347
	this.MMUSize = 15; // bits 30:25 // ./common/cpu.js:348
	this.IS = 0; // bits 24:22 // ./common/cpu.js:349
	this.IL = 0; // bits 21:19 // ./common/cpu.js:350
	this.IA = 0; // bits 18:16 // ./common/cpu.js:351
	this.DS = 0; // bits 15:13 // ./common/cpu.js:352
	this.DL = 0; // bits 12:10 // ./common/cpu.js:353
	this.DA = 0; // bits 9:7 // ./common/cpu.js:354
	this.zero = 0; // bits 6:5 // ./common/cpu.js:355
	this.PC = 0; // bit 4, performance counter registers not program counter // ./common/cpu.js:356
	this.WR = 1; // bit 3 // ./common/cpu.js:357
	this.CA = 0; // bit 2 // ./common/cpu.js:358
	this.EP = 1; // bit 1 // ./common/cpu.js:359
	this.FP = 0; // bit 0 // ./common/cpu.js:360
 // ./common/cpu.js:361
	this.asUInt32 = function() // ./common/cpu.js:362
	{ // ./common/cpu.js:363
		return ((this.M * Math.pow(2,31)) + (this.MMUSize * Math.pow(2,25)) + (this.IS * Math.pow(2,22)) + (this.IL * Math.pow(2,19)) + (this.IA * 65536) + (this.DS * Math.pow(2,13)) + (this.DL * Math.pow(2,10)) + (this.DA * Math.pow(2,7)) + (this.PC * Math.pow(2,4)) + (this.WR * Math.pow(2,3)) + (this.CA * Math.pow(2,2)) + (this.EP * Math.pow(2,1)) + this.FP); // ./common/cpu.js:364
	} // ./common/cpu.js:365
 // ./common/cpu.js:366
	this.putUInt32 = function(value) // ./common/cpu.js:367
	{ // ./common/cpu.js:368
		return; // ./common/cpu.js:369
	} // ./common/cpu.js:370
} // ./common/cpu.js:371
 // ./common/cpu.js:372
// CP0 Register 17, Select 0 // ./common/cpu.js:373
function LLAddrRegister() // ./common/cpu.js:374
{ // ./common/cpu.js:375
	this.zero = 0; // bits 31:28 // ./common/cpu.js:376
	this.PAddr = 0; // bits 27:0 - physical address read by most recent load linked instruction // ./common/cpu.js:377
 // ./common/cpu.js:378
	this.asUInt32 = function() // ./common/cpu.js:379
	{ // ./common/cpu.js:380
		return this.PAddr; // ./common/cpu.js:381
	} // ./common/cpu.js:382
 // ./common/cpu.js:383
	this.putUInt32 = function(value) // ./common/cpu.js:384
	{ // ./common/cpu.js:385
		return; // ./common/cpu.js:386
	} // ./common/cpu.js:387
} // ./common/cpu.js:388
 // ./common/cpu.js:389
 // ./common/cpu.js:390
function getRs (op) { // ./common/cpu.js:391
    return (op&0x3e00000) >>> 21; // ./common/cpu.js:392
} // ./common/cpu.js:393
 // ./common/cpu.js:394
function getRt (op) { // ./common/cpu.js:395
    return (op&0x1f0000) >>> 16; // ./common/cpu.js:396
} // ./common/cpu.js:397
 // ./common/cpu.js:398
 // ./common/cpu.js:399
function getRd (op) { // ./common/cpu.js:400
    return (op&0xf800) >>> 11; // ./common/cpu.js:401
} // ./common/cpu.js:402
 // ./common/cpu.js:403
 // ./common/cpu.js:404
function getSHAMT (op) { // ./common/cpu.js:405
    return (op&0x7c0) >>> 6; // ./common/cpu.js:406
} // ./common/cpu.js:407
 // ./common/cpu.js:408
function getFunct (op) { // ./common/cpu.js:409
    return (op&0x3f) >>> 0; // ./common/cpu.js:410
} // ./common/cpu.js:411
 // ./common/cpu.js:412
function getSigned (value) { // ./common/cpu.js:413
	return (value & 0xffffffff); // ./common/cpu.js:414
} // ./common/cpu.js:415
 // ./common/cpu.js:416
function getSigned16 (value) { // ./common/cpu.js:417
	var sign = 0; // ./common/cpu.js:418
	var signedVal = value; // ./common/cpu.js:419
 // ./common/cpu.js:420
	if((value << 16) < 0) // ./common/cpu.js:421
	{ // ./common/cpu.js:422
		sign = 1; // ./common/cpu.js:423
	} // ./common/cpu.js:424
 // ./common/cpu.js:425
	if(sign) // ./common/cpu.js:426
	{ // ./common/cpu.js:427
		signedVal = /*0signedVal | 0xffff0000;//*/-((~(signedVal) + 1) & 0x0000ffff); // ./common/cpu.js:428
	} // ./common/cpu.js:429
 // ./common/cpu.js:430
	return signedVal; // ./common/cpu.js:431
} // ./common/cpu.js:432
 // ./common/cpu.js:433
function getSigned18 (value) { // ./common/cpu.js:434
	var sign = 0; // ./common/cpu.js:435
	var signedVal = value; // ./common/cpu.js:436
 // ./common/cpu.js:437
	if((value << 14) < 0) // ./common/cpu.js:438
	{ // ./common/cpu.js:439
		sign = 1; // ./common/cpu.js:440
	} // ./common/cpu.js:441
 // ./common/cpu.js:442
	if(sign) // ./common/cpu.js:443
	{ // ./common/cpu.js:444
		signedVal = /*0signedVal | 0xffff0000;//*/-((~(signedVal) + 1) & 0x0003ffff); // ./common/cpu.js:445
	} // ./common/cpu.js:446
 // ./common/cpu.js:447
	return signedVal; // ./common/cpu.js:448
} // ./common/cpu.js:449
 // ./common/cpu.js:450
 // ./common/cpu.js:451
function MipsCpu () { // ./common/cpu.js:452
 // ./common/cpu.js:453
    //member mmu , to save space i wont make a setter. its set by the emu object // ./common/cpu.js:454
 // ./common/cpu.js:455
    this.genRegisters = new Array(32); // array of 32 32 bit integers // ./common/cpu.js:456
 // ./common/cpu.js:457
    this.genRegisters[0] = new ZeroRegister(); // ./common/cpu.js:458
    for(var i = 1 ; i < 32; i++){ // ./common/cpu.js:459
        this.genRegisters[i] = new GeneralRegister(); // ./common/cpu.js:460
    } // ./common/cpu.js:461
 // ./common/cpu.js:462
    this.C0Registers = new Array(32); // ./common/cpu.js:463
    this.C0Registers[0] = new IndexRegister(); // ./common/cpu.js:464
    this.C0Registers[1] = new RandomRegister(); // ./common/cpu.js:465
    this.C0Registers[1].cpu = this; // ./common/cpu.js:466
    this.C0Registers[2] = new EntryLoRegister(); // ./common/cpu.js:467
    this.C0Registers[3] = new EntryLoRegister(); // ./common/cpu.js:468
    this.C0Registers[4] = new ContextRegister(); // ./common/cpu.js:469
    this.C0Registers[5] = new PageMaskRegister(); // ./common/cpu.js:470
    this.C0Registers[6] = new WiredRegister(); // ./common/cpu.js:471
    this.C0Registers[8] = new GeneralRegister(); // BadVAddr // ./common/cpu.js:472
    this.C0Registers[9] = new GeneralRegister(); // Count // ./common/cpu.js:473
    this.C0Registers[10] = new EntryHiRegister(); // ./common/cpu.js:474
    this.C0Registers[11] = new CompareRegister(this); //Compare // ./common/cpu.js:475
    this.C0Registers[12] = new StatusRegister(); // ./common/cpu.js:476
    this.C0Registers[13] = new CauseRegister(); // ./common/cpu.js:477
    this.C0Registers[14] = new GeneralRegister(); // EPC // ./common/cpu.js:478
    this.C0Registers[15] = new processorIDRegister(); // ./common/cpu.js:479
    this.C0Registers[17] = new LLAddrRegister(); // ./common/cpu.js:480
    // fillers for unimplemented coprocessor registers // ./common/cpu.js:481
    for(i = 18; i <= 31; i++) // ./common/cpu.js:482
    { // ./common/cpu.js:483
        this.C0Registers[i] = new GeneralRegister(); // ./common/cpu.js:484
    } // ./common/cpu.js:485
 // ./common/cpu.js:486
    this.exceptionFlags = new Uint32Array(30); // ./common/cpu.js:487
    this.excCodes = new Uint32Array(30); // ./common/cpu.js:488
 // ./common/cpu.js:489
    this.HI = new GeneralRegister(); // ./common/cpu.js:490
	this.LO = new GeneralRegister(); // ./common/cpu.js:491
 // ./common/cpu.js:492
    this.entryHiReg = this.C0Registers[10]; // ./common/cpu.js:493
	this.statusRegister = this.C0Registers[12]; // ./common/cpu.js:494
	this.configRegister = new ConfigRegister(); // ./common/cpu.js:495
	this.config1Register = new Config1Register(); // ./common/cpu.js:496
	this.llAddrRegister = this.C0Registers[17]; // ./common/cpu.js:497
	this.PC = new GeneralRegister(); // ./common/cpu.js:498
	this.doOp = doOp; // ./common/cpu.js:499
 // ./common/cpu.js:500
	this.delaySlot = false; // ./common/cpu.js:501
    this.exceptionOccured = false; // ./common/cpu.js:502
 // ./common/cpu.js:503
    this.LLBit = 0; // ./common/cpu.js:504
    this.clockCount = 0; // ./common/cpu.js:505
 // ./common/cpu.js:506
    this.triggerException = function(exception, exc_code) // ./common/cpu.js:507
    { // ./common/cpu.js:508
        this.exceptionOccured = true; // ./common/cpu.js:509
        this.excCodes[exception] = exc_code; // ./common/cpu.js:510
        this.exceptionFlags[exception] = 1; // ./common/cpu.js:511
    } // ./common/cpu.js:512
 // ./common/cpu.js:513
    this.triggerInterrupt = function(interrupt_bit) // ./common/cpu.js:514
    { // ./common/cpu.js:515
        var causeReg = this.C0Registers[13]; // ./common/cpu.js:516
        var interruptVal; // ./common/cpu.js:517
 // ./common/cpu.js:518
        if(interrupt_bit < 2) // ./common/cpu.js:519
        { // ./common/cpu.js:520
            interruptVal = 1 << interrupt_bit; // ./common/cpu.js:521
            causeReg.IP0 = causeReg.IP0 | interruptVal; // ./common/cpu.js:522
        } // ./common/cpu.js:523
        else // ./common/cpu.js:524
        { // ./common/cpu.js:525
            interruptVal = 1 << (interrupt_bit - 2); // ./common/cpu.js:526
            causeReg.IP1 = causeReg.IP1 | interruptVal; // ./common/cpu.js:527
        } // ./common/cpu.js:528
 // ./common/cpu.js:529
        return; // ./common/cpu.js:530
    } // ./common/cpu.js:531
 // ./common/cpu.js:532
    this.checkInterrupts = function() // ./common/cpu.js:533
    { // ./common/cpu.js:534
       var c0Registers = this.C0Registers; // ./common/cpu.js:535
       var countRegister = c0Registers[9]; // ./common/cpu.js:536
       var compareRegister = c0Registers[11]; // ./common/cpu.js:537
 // ./common/cpu.js:538
       //TODO: if in debug mode check CountDM // ./common/cpu.js:539
       this.clockCount = this.clockCount + 1; // ./common/cpu.js:540
 // ./common/cpu.js:541
       if(this.clockCount == 2) // ./common/cpu.js:542
       { // ./common/cpu.js:543
            countRegister.putUInt32(countRegister.asUInt32()+1); // ./common/cpu.js:544
 // ./common/cpu.js:545
            if(countRegister.asUInt32() == compareRegister.asUInt32()) // ./common/cpu.js:546
            { // ./common/cpu.js:547
                this.triggerInterrupt(7); // ./common/cpu.js:548
            } // ./common/cpu.js:549
            this.clockCount = 0; // ./common/cpu.js:550
       } // ./common/cpu.js:551
 // ./common/cpu.js:552
       var statusRegister = c0Registers[12]; // ./common/cpu.js:553
 // ./common/cpu.js:554
       if((statusRegister.IE == 1) && (statusRegister.EXL == 0) && (statusRegister.ERL == 0)) // ./common/cpu.js:555
       { // ./common/cpu.js:556
            var interruptPendingBits = c0Registers[13].IP0 + (c0Registers[13].IP1 << 2); // ./common/cpu.js:557
            var interruptMask = statusRegister.IM; // ./common/cpu.js:558
 // ./common/cpu.js:559
            var dispatchInterrupts = interruptMask & interruptPendingBits; // ./common/cpu.js:560
 // ./common/cpu.js:561
            if(dispatchInterrupts > 0) // ./common/cpu.js:562
            { // ./common/cpu.js:563
                this.triggerException(6,0); // ./common/cpu.js:564
            } // ./common/cpu.js:565
       } // ./common/cpu.js:566
    } // ./common/cpu.js:567
 // ./common/cpu.js:568
    this.getExceptionVectorAddress = function(exception) // ./common/cpu.js:569
    { // ./common/cpu.js:570
        var statusRegister = this.C0Registers[12]; // ./common/cpu.js:571
        var BEV = statusRegister.BEV; // ./common/cpu.js:572
        var EXL = statusRegister.EXL; // ./common/cpu.js:573
        var IV = this.C0Registers[13].IV; // ./common/cpu.js:574
        var genBase = 0x80000000; // ./common/cpu.js:575
        if(BEV == 1) // ./common/cpu.js:576
        { // ./common/cpu.js:577
            genBase = 0xBFC00200; // ./common/cpu.js:578
        } // ./common/cpu.js:579
 // ./common/cpu.js:580
        switch(exception) // ./common/cpu.js:581
        { // ./common/cpu.js:582
            case 0: // ./common/cpu.js:583
            case 1: // ./common/cpu.js:584
            case 4: // ./common/cpu.js:585
                return 0xBFC00000; // ./common/cpu.js:586
 // ./common/cpu.js:587
            /*case 2: // ./common/cpu.js:588
            case 3: // ./common/cpu.js:589
            case 8: // ./common/cpu.js:590
            case 14: // ./common/cpu.js:591
            case 21: // ./common/cpu.js:592
            case 29: // ./common/cpu.js:593
                if(EJTAG ProbTrap==0) // ./common/cpu.js:594
                { // ./common/cpu.js:595
                    return 0xBFC00480; // ./common/cpu.js:596
                } // ./common/cpu.js:597
                else // ./common/cpu.js:598
                { // ./common/cpu.js:599
                    return 0xFF200200; // ./common/cpu.js:600
                }*/ // ./common/cpu.js:601
 // ./common/cpu.js:602
            case 6: // ./common/cpu.js:603
                if(IV == 0) // ./common/cpu.js:604
                { // ./common/cpu.js:605
                    return genBase + 0x180; // ./common/cpu.js:606
                } // ./common/cpu.js:607
                return genBase + 0x200; // ./common/cpu.js:608
 // ./common/cpu.js:609
            case 11: // ./common/cpu.js:610
            case 26: // ./common/cpu.js:611
            case 27: // ./common/cpu.js:612
            case 28: // ./common/cpu.js:613
                if(EXL == 1) // ./common/cpu.js:614
                { // ./common/cpu.js:615
                    return genBase + 0x180; // ./common/cpu.js:616
                } // ./common/cpu.js:617
                return genBase; // ./common/cpu.js:618
 // ./common/cpu.js:619
            default: // ./common/cpu.js:620
                return genBase + 0x180; // ./common/cpu.js:621
        } // ./common/cpu.js:622
    } // ./common/cpu.js:623
 // ./common/cpu.js:624
    this.processException = function() // ./common/cpu.js:625
    { // ./common/cpu.js:626
        var PC = this.PC; // ./common/cpu.js:627
        var causeReg = this.C0Registers[13]; // ./common/cpu.js:628
        var statusRegister = this.statusRegister; // ./common/cpu.js:629
        if(statusRegister.EXL == 0) // ./common/cpu.js:630
        { // ./common/cpu.js:631
           var EPCval = 0; // ./common/cpu.js:632
           var epcReg = this.C0Registers[14]; // ./common/cpu.js:633
 // ./common/cpu.js:634
           if(this.delaySlot) // ./common/cpu.js:635
           { // ./common/cpu.js:636
               EPCval = (PC.asUInt32() - 4); // ./common/cpu.js:637
               causeReg.BD = 1; // ./common/cpu.js:638
           } // ./common/cpu.js:639
           else // ./common/cpu.js:640
           { // ./common/cpu.js:641
               EPCval = (PC.asUInt32()); // ./common/cpu.js:642
               causeReg.BD = 0; // ./common/cpu.js:643
           } // ./common/cpu.js:644
 // ./common/cpu.js:645
           epcReg.putUInt32(EPCval); // ./common/cpu.js:646
        } // ./common/cpu.js:647
 // ./common/cpu.js:648
        var exceptionFlags = this.exceptionFlags; // ./common/cpu.js:649
        var exceptionNum = -1; // ./common/cpu.js:650
 // ./common/cpu.js:651
        for(i = 0; i < 30; i++) // ./common/cpu.js:652
        { // ./common/cpu.js:653
            if(exceptionFlags[i] == 1) // ./common/cpu.js:654
            { // ./common/cpu.js:655
                exceptionNum = i; // ./common/cpu.js:656
                break; // ./common/cpu.js:657
            } // ./common/cpu.js:658
        } // ./common/cpu.js:659
 // ./common/cpu.js:660
        if(exceptionNum == -1) // ./common/cpu.js:661
        { // ./common/cpu.js:662
            ERROR("Attempting to process exception but exceptionFlags not set!"); // ./common/cpu.js:663
            return; // ./common/cpu.js:664
        } // ./common/cpu.js:665
 // ./common/cpu.js:666
        causeReg.EXC = this.excCodes[exceptionNum]; // ./common/cpu.js:667
        causeReg.CE = 0; // TODO: set CE to a proper value on CoProcessor unusable exception // ./common/cpu.js:668
 // ./common/cpu.js:669
        var excAddress = this.getExceptionVectorAddress(exceptionNum); // ./common/cpu.js:670
 // ./common/cpu.js:671
        // debug printing for all exceptions except timer interrupt // ./common/cpu.js:672
        if((exceptionNum != 6) && (exceptionNum != 15)) // ./common/cpu.js:673
        { // ./common/cpu.js:674
            INFO("Executing exception vector @ " + excAddress.toString(16) + "(exceptionNum:" + exceptionNum + ") EPC: " + this.C0Registers[14].asUInt32().toString(16) + ", v0: " + this.genRegisters[2].asUInt32().toString(16)); // ./common/cpu.js:675
        } // ./common/cpu.js:676
 // ./common/cpu.js:677
        statusRegister.EXL = 1; // ./common/cpu.js:678
        PC.putUInt32(excAddress); // ./common/cpu.js:679
 // ./common/cpu.js:680
        this.exceptionOccured = false; // ./common/cpu.js:681
        for(i = 0; i < 30; i++) // ./common/cpu.js:682
        { // ./common/cpu.js:683
            this.exceptionFlags[i] = 0; // ./common/cpu.js:684
        } // ./common/cpu.js:685
    } // ./common/cpu.js:686
 // ./common/cpu.js:687
    this.isKernelMode = function () { // ./common/cpu.js:688
       return (this.statusRegister.UM == 0) | (this.statusRegister.ERL == 1) | (this.statusRegister.EXL == 1); // ./common/cpu.js:689
    } // ./common/cpu.js:690
 // ./common/cpu.js:691
    this.getC0Register = function(index, select) // ./common/cpu.js:692
    { // ./common/cpu.js:693
       if(index != 16) // ./common/cpu.js:694
       { // ./common/cpu.js:695
            return this.C0Registers[index]; // ./common/cpu.js:696
       } // ./common/cpu.js:697
       else if(select == 0) // ./common/cpu.js:698
       { // ./common/cpu.js:699
            return this.configRegister; // ./common/cpu.js:700
       } // ./common/cpu.js:701
       else if(select == 1) // ./common/cpu.js:702
       { // ./common/cpu.js:703
            return this.config1Register; // ./common/cpu.js:704
       } // ./common/cpu.js:705
       else // ./common/cpu.js:706
       { // ./common/cpu.js:707
            ERROR("Error, accessing Coprocessor register at index: " + index + ", select: " + select); // ./common/cpu.js:708
       } // ./common/cpu.js:709
    } // ./common/cpu.js:710
 // ./common/cpu.js:711
	this.advancePC = function () { // ./common/cpu.js:712
	    if(this.delaySlot){ // ./common/cpu.js:713
	        return; // ./common/cpu.js:714
	    } // ./common/cpu.js:715
	    this.PC.incr(4); // ./common/cpu.js:716
	} // ./common/cpu.js:717
 // ./common/cpu.js:718
	this.doDelaySlot = function() { // ./common/cpu.js:719
		this.PC.incr(4); // ./common/cpu.js:720
	    var delayInsAddr = this.PC.asUInt32(); // ./common/cpu.js:721
	    //DEBUG("Executing delay slot ins at " + delayInsAddr.toString(16)); // ./common/cpu.js:722
	    var ins = this.mmu.readWord(delayInsAddr); // ./common/cpu.js:723
	    this.delaySlot = true; // ./common/cpu.js:724
 // ./common/cpu.js:725
        this.checkInterrupts(); // ./common/cpu.js:726
        if(this.exceptionOccured) // ./common/cpu.js:727
        { // ./common/cpu.js:728
            throw 1337; // ./common/cpu.js:729
        } // ./common/cpu.js:730
 // ./common/cpu.js:731
	    this.doOp(ins); // ./common/cpu.js:732
 // ./common/cpu.js:733
        //this.checkInterrupts(); // ./common/cpu.js:734
 // ./common/cpu.js:735
        if(this.exceptionOccured) // ./common/cpu.js:736
        { // ./common/cpu.js:737
            throw 1337; // ./common/cpu.js:738
            //this.processException(); // ./common/cpu.js:739
        } // ./common/cpu.js:740
 // ./common/cpu.js:741
	    this.delaySlot = false; // ./common/cpu.js:742
 // ./common/cpu.js:743
	}; // ./common/cpu.js:744
 // ./common/cpu.js:745
 // ./common/cpu.js:746
	this.getEndianness = function() // ./common/cpu.js:747
	{ // ./common/cpu.js:748
		// returns 0 for LE and 1 for BE // ./common/cpu.js:749
		var bigEndian = this.configRegister.BE; // ./common/cpu.js:750
 // ./common/cpu.js:751
		// if in user mode, and RE is set, reverse endianness // ./common/cpu.js:752
		if((this.statusRegister.UM == 1) && (this.statusRegister.RE == 1)) // ./common/cpu.js:753
		{ // ./common/cpu.js:754
			if(bigEndian == 1) // ./common/cpu.js:755
			{ // ./common/cpu.js:756
				bigEndian = 0; // ./common/cpu.js:757
			} // ./common/cpu.js:758
			else // ./common/cpu.js:759
			{ // ./common/cpu.js:760
				bigEndian = 1; // ./common/cpu.js:761
			} // ./common/cpu.js:762
		} // ./common/cpu.js:763
 // ./common/cpu.js:764
		return bigEndian; // ./common/cpu.js:765
	} // ./common/cpu.js:766
 // ./common/cpu.js:767
    //this.lastPC = -1; // ./common/cpu.js:768
 // ./common/cpu.js:769
	this.step = function () { // ./common/cpu.js:770
 // ./common/cpu.js:771
	    var pcVal = this.PC.asUInt32(); // ./common/cpu.js:772
        /*if((pcVal % 4) != 0) // ./common/cpu.js:773
        { // ./common/cpu.js:774
            console.log("ERROR, unaligned PC: " + pcVal.toString(16) + ", RA: " + this.genRegisters[31].asUInt32().toString(16) + ", lastPC: " + lastPC.toString(16)); // ./common/cpu.js:775
        } // ./common/cpu.js:776
 // ./common/cpu.js:777
        lastPC = pcVal;*/ // ./common/cpu.js:778
 // ./common/cpu.js:779
        this.checkInterrupts(); // ./common/cpu.js:780
        if(this.exceptionOccured) // ./common/cpu.js:781
        { // ./common/cpu.js:782
            //console.log("Exception process PC: " + pcVal.toString(16)); // ./common/cpu.js:783
            this.processException(); // ./common/cpu.js:784
            this.delaySlot = false; // ./common/cpu.js:785
            return; // ./common/cpu.js:786
        } // ./common/cpu.js:787
 // ./common/cpu.js:788
        this.delaySlot = false; // ./common/cpu.js:789
 // ./common/cpu.js:790
	    //DEBUG("Executing instruction at " + pcVal.toString(16)); // ./common/cpu.js:791
	    //DEBUG("instruction word: " + ins.toString(16)); // ./common/cpu.js:792
        try { // ./common/cpu.js:793
	        var ins = this.mmu.readWord(pcVal); // ./common/cpu.js:794
	        this.doOp(ins); // ./common/cpu.js:795
        } // ./common/cpu.js:796
        catch(err) // ./common/cpu.js:797
        { // ./common/cpu.js:798
            if(err != 1337) // ./common/cpu.js:799
            { // ./common/cpu.js:800
                throw err; // ./common/cpu.js:801
            } // ./common/cpu.js:802
            else // ./common/cpu.js:803
            { // ./common/cpu.js:804
                //this.PC.incr(4); // ./common/cpu.js:805
            } // ./common/cpu.js:806
        } // ./common/cpu.js:807
 // ./common/cpu.js:808
	} // ./common/cpu.js:809
 // ./common/cpu.js:810
    this.unknownPrinted = 0; // ./common/cpu.js:811
 // ./common/cpu.js:812
	this.a = function( op ){ // ./common/cpu.js:813
        //if(!this.unknownPrinted) // ./common/cpu.js:814
        //{ // ./common/cpu.js:815
        //    this.unknownPrinted = 1; // ./common/cpu.js:816
            ERROR("unknown instruction! " + op.toString(16) + " at PC: "+ // ./common/cpu.js:817
                                                this.PC.asUInt32().toString(16)); // ./common/cpu.js:818
        //} // ./common/cpu.js:819
        this.advancePC(); // ./common/cpu.js:820
        //throw "mission abort!"; // ./common/cpu.js:821
	} // ./common/cpu.js:822
 // ./common/cpu.js:823
	this.b = this.a // ./common/cpu.js:824
 // ./common/cpu.js:825
	this.ADD = function ( op ) { // ./common/cpu.js:826
		//DEBUG("ADD"); // ./common/cpu.js:827
		var rs = getRs(op); // ./common/cpu.js:828
		var rt = getRt(op); // ./common/cpu.js:829
		var rd = getRd(op); // ./common/cpu.js:830
 // ./common/cpu.js:831
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:832
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:833
		var result = rs_val + rt_val; // ./common/cpu.js:834
		if(result < 4294967296) // ./common/cpu.js:835
		{ // ./common/cpu.js:836
			this.genRegisters[rd].putUInt32(result); // ./common/cpu.js:837
		} // ./common/cpu.js:838
		else // ./common/cpu.js:839
		{ // ./common/cpu.js:840
            WARN("Overflow trap not implemented."); // ./common/cpu.js:841
			// TODO Overflow trap // ./common/cpu.js:842
		} // ./common/cpu.js:843
 // ./common/cpu.js:844
		this.advancePC(); // ./common/cpu.js:845
	} // ./common/cpu.js:846
 // ./common/cpu.js:847
	this.ADDI = function ( op ){ // ./common/cpu.js:848
	    var imm = getSigned16(op&0x0000ffff); // ./common/cpu.js:849
	    var rs = getRs(op); // ./common/cpu.js:850
	    var rt = getRt(op); // ./common/cpu.js:851
	    //DEBUG("ADDI reg "+rs + " with imm " + imm + " and save in reg " + rt ); // ./common/cpu.js:852
	    var result = this.genRegisters[rs].asUInt32() + imm; // ./common/cpu.js:853
	    //res = res % 4294967296; // handle overflow // ./common/cpu.js:854
 // ./common/cpu.js:855
		if(result < 4294967296) // ./common/cpu.js:856
		{ // ./common/cpu.js:857
			this.genRegisters[rt].putUInt32(result); // ./common/cpu.js:858
		} // ./common/cpu.js:859
		else // ./common/cpu.js:860
		{ // ./common/cpu.js:861
			// TODO Overflow trap // ./common/cpu.js:862
		} // ./common/cpu.js:863
 // ./common/cpu.js:864
	    this.advancePC(); // ./common/cpu.js:865
	} // ./common/cpu.js:866
 // ./common/cpu.js:867
	this.ADDIU = function ( op ){ // ./common/cpu.js:868
	    var imm = getSigned16(op&0x0000ffff); // ./common/cpu.js:869
	    var rs = getRs(op); // ./common/cpu.js:870
	    var rt = getRt(op); // ./common/cpu.js:871
	    //DEBUG("ADDIU reg "+rs + " with imm " + imm + " and save in reg " + rt ); // ./common/cpu.js:872
 // ./common/cpu.js:873
        var rsVal = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:874
	    var res = this.genRegisters[rs].asUInt32() + imm; // ./common/cpu.js:875
	    res = res % 4294967296; // handle overflow // ./common/cpu.js:876
	    this.genRegisters[rt].putUInt32(res); // ./common/cpu.js:877
 // ./common/cpu.js:878
		this.advancePC(); // ./common/cpu.js:879
	} // ./common/cpu.js:880
 // ./common/cpu.js:881
	this.ADDU = function ( op ){ // ./common/cpu.js:882
 // ./common/cpu.js:883
	    var rs = getRs(op); // ./common/cpu.js:884
	    var rt = getRt(op); // ./common/cpu.js:885
	    var rd = getRd(op); // ./common/cpu.js:886
 // ./common/cpu.js:887
	    //DEBUG("addu"); // ./common/cpu.js:888
	    var res = this.genRegisters[rt].asUInt32() + this.genRegisters[rs].asUInt32(); // ./common/cpu.js:889
	    res = res % 4294967296; // handle overflow // ./common/cpu.js:890
	    this.genRegisters[rd].putUInt32(res); // ./common/cpu.js:891
	    this.advancePC(); // ./common/cpu.js:892
 // ./common/cpu.js:893
	} // ./common/cpu.js:894
 // ./common/cpu.js:895
	this.OR = function ( op ) { // ./common/cpu.js:896
		//DEBUG("OR"); // ./common/cpu.js:897
		var rs = getRs(op); // ./common/cpu.js:898
		var rt = getRt(op); // ./common/cpu.js:899
		var rd = getRd(op); // ./common/cpu.js:900
 // ./common/cpu.js:901
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:902
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:903
 // ./common/cpu.js:904
		this.genRegisters[rd].putUInt32(rs_val | rt_val); // ./common/cpu.js:905
 // ./common/cpu.js:906
		this.advancePC(); // ./common/cpu.js:907
	} // ./common/cpu.js:908
 // ./common/cpu.js:909
	this.ORI = function ( op ) { // ./common/cpu.js:910
		var rs = getRs(op); // ./common/cpu.js:911
		var rt = getRt(op); // ./common/cpu.js:912
		var c = op&0x0000ffff; // ./common/cpu.js:913
 // ./common/cpu.js:914
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:915
 // ./common/cpu.js:916
		this.genRegisters[rt].putUInt32(rs_val | c); // ./common/cpu.js:917
		this.advancePC(); // ./common/cpu.js:918
 // ./common/cpu.js:919
 // ./common/cpu.js:920
		//DEBUG("ORI rs: " + rs.toString(16) + ", rt: " + rt.toString(16) + ", c: " + c.toString(16) + ", rs_val: " + rs_val + ", result: " + this.genRegisters[rt].asUInt32()); // ./common/cpu.js:921
	} // ./common/cpu.js:922
 // ./common/cpu.js:923
    this.PREF = function ( op ) { // ./common/cpu.js:924
        // loads specified line to cache, ignore in our emulator // ./common/cpu.js:925
        this.advancePC(); // ./common/cpu.js:926
    } // ./common/cpu.js:927
 // ./common/cpu.js:928
    this.SB = function ( op ){ // ./common/cpu.js:929
        var rs = getRs(op); // ./common/cpu.js:930
        var rt = getRt(op); // ./common/cpu.js:931
        var offset = getSigned16(op & 0x0000ffff); // ./common/cpu.js:932
 // ./common/cpu.js:933
        var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:934
 // ./common/cpu.js:935
        var addr = ((rs_val + offset) & 0xffffffff) >>> 0; // ./common/cpu.js:936
        var rt_val = (this.genRegisters[rt].asUInt32() & 0xff) >>> 0; // ./common/cpu.js:937
 // ./common/cpu.js:938
        this.mmu.writeByte(addr, rt_val); // ./common/cpu.js:939
 // ./common/cpu.js:940
        this.advancePC(); // ./common/cpu.js:941
    } // ./common/cpu.js:942
 // ./common/cpu.js:943
	this.XOR = function ( op ) { // ./common/cpu.js:944
        //DEBUG("XOR"); // ./common/cpu.js:945
		var rs = getRs(op); // ./common/cpu.js:946
		var rt = getRt(op); // ./common/cpu.js:947
		var rd = getRd(op); // ./common/cpu.js:948
 // ./common/cpu.js:949
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:950
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:951
 // ./common/cpu.js:952
		//DEBUG("XOR"); // ./common/cpu.js:953
 // ./common/cpu.js:954
		this.genRegisters[rd].putUInt32(rs_val ^ rt_val); // ./common/cpu.js:955
		this.advancePC(); // ./common/cpu.js:956
	} // ./common/cpu.js:957
 // ./common/cpu.js:958
    this.XORI = function ( op ) { // ./common/cpu.js:959
        //DEBUG("XORI"); // ./common/cpu.js:960
        var rs = getRs(op); // ./common/cpu.js:961
        var c = (op & 0x0000ffff); // ./common/cpu.js:962
        var rt = getRt(op); // ./common/cpu.js:963
 // ./common/cpu.js:964
        var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:965
        var result = (rs_val ^ c); // ./common/cpu.js:966
 // ./common/cpu.js:967
        this.genRegisters[rt].putUInt32(result); // ./common/cpu.js:968
        this.advancePC(); // ./common/cpu.js:969
    } // ./common/cpu.js:970
 // ./common/cpu.js:971
	this.NOR = function ( op ) { // ./common/cpu.js:972
		//DEBUG("NOR"); // ./common/cpu.js:973
		var rs = getRs(op); // ./common/cpu.js:974
		var rt = getRt(op); // ./common/cpu.js:975
		var rd = getRd(op); // ./common/cpu.js:976
 // ./common/cpu.js:977
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:978
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:979
 // ./common/cpu.js:980
		var result = ~(rs_val | rt_val); // ./common/cpu.js:981
		this.genRegisters[rd].putUInt32(result); // ./common/cpu.js:982
		this.advancePC(); // ./common/cpu.js:983
	} // ./common/cpu.js:984
 // ./common/cpu.js:985
	this.SLT = function ( op ){ // ./common/cpu.js:986
		//DEBUG("SLT"); // ./common/cpu.js:987
		var rs = getRs(op); // ./common/cpu.js:988
		var rt = getRt(op); // ./common/cpu.js:989
 // ./common/cpu.js:990
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:991
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:992
 // ./common/cpu.js:993
		var rd = getRd(op); // ./common/cpu.js:994
 // ./common/cpu.js:995
		if(getSigned(rs_val) < getSigned(rt_val)) // ./common/cpu.js:996
		{ // ./common/cpu.js:997
			this.genRegisters[rd].putUInt32(1); // ./common/cpu.js:998
		} // ./common/cpu.js:999
		else // ./common/cpu.js:1000
		{ // ./common/cpu.js:1001
			this.genRegisters[rd].putUInt32(0); // ./common/cpu.js:1002
		} // ./common/cpu.js:1003
 // ./common/cpu.js:1004
		this.advancePC(); // ./common/cpu.js:1005
	} // ./common/cpu.js:1006
 // ./common/cpu.js:1007
	this.SLTI = function ( op ){ // ./common/cpu.js:1008
		//DEBUG("SLTI"); // ./common/cpu.js:1009
		var rs = getRs(op); // ./common/cpu.js:1010
		var rt = getRt(op); // ./common/cpu.js:1011
		var c = (op&0x0000ffff); // ./common/cpu.js:1012
 // ./common/cpu.js:1013
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1014
		//console.log("rt: " + rt + ", rs: " + rs + ", rs_val: " + rs_val + ", c: " + getSigned16(c)); // ./common/cpu.js:1015
 // ./common/cpu.js:1016
		if(getSigned(rs_val) < getSigned16(c)) // ./common/cpu.js:1017
		{ // ./common/cpu.js:1018
			//console.log("set"); // ./common/cpu.js:1019
			this.genRegisters[rt].putUInt32(1); // ./common/cpu.js:1020
		} // ./common/cpu.js:1021
		else // ./common/cpu.js:1022
		{ // ./common/cpu.js:1023
			//console.log("not set"); // ./common/cpu.js:1024
			this.genRegisters[rt].putUInt32(0); // ./common/cpu.js:1025
		} // ./common/cpu.js:1026
 // ./common/cpu.js:1027
		this.advancePC(); // ./common/cpu.js:1028
	} // ./common/cpu.js:1029
 // ./common/cpu.js:1030
	this.SLTIU = function ( op ){ // ./common/cpu.js:1031
		//DEBUG("SLTIU"); // ./common/cpu.js:1032
		var rs = getRs(op); // ./common/cpu.js:1033
		var rt = getRt(op); // ./common/cpu.js:1034
		var c = getSigned16(op&0x0000ffff) >>> 0; // ./common/cpu.js:1035
 // ./common/cpu.js:1036
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1037
 // ./common/cpu.js:1038
 // ./common/cpu.js:1039
		if(rs_val < c) // ./common/cpu.js:1040
		{ // ./common/cpu.js:1041
			this.genRegisters[rt].putUInt32(1); // ./common/cpu.js:1042
		} // ./common/cpu.js:1043
		else // ./common/cpu.js:1044
		{ // ./common/cpu.js:1045
			this.genRegisters[rt].putUInt32(0); // ./common/cpu.js:1046
		} // ./common/cpu.js:1047
 // ./common/cpu.js:1048
		this.advancePC(); // ./common/cpu.js:1049
	} // ./common/cpu.js:1050
 // ./common/cpu.js:1051
	this.SLTU = function ( op ){ // ./common/cpu.js:1052
		//DEBUG("SLTU"); // ./common/cpu.js:1053
		var rs = getRs(op); // ./common/cpu.js:1054
		var rt = getRt(op); // ./common/cpu.js:1055
 // ./common/cpu.js:1056
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1057
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1058
 // ./common/cpu.js:1059
		var rd = getRd(op); // ./common/cpu.js:1060
 // ./common/cpu.js:1061
		if(rs_val < rt_val) // ./common/cpu.js:1062
		{ // ./common/cpu.js:1063
			this.genRegisters[rd].putUInt32(1); // ./common/cpu.js:1064
		} // ./common/cpu.js:1065
		else // ./common/cpu.js:1066
		{ // ./common/cpu.js:1067
			this.genRegisters[rd].putUInt32(0); // ./common/cpu.js:1068
		} // ./common/cpu.js:1069
 // ./common/cpu.js:1070
		this.advancePC(); // ./common/cpu.js:1071
	} // ./common/cpu.js:1072
 // ./common/cpu.js:1073
	this.SH = function ( op ){ // ./common/cpu.js:1074
		var rt = getRt(op); // ./common/cpu.js:1075
		var rs = getRs(op); // ./common/cpu.js:1076
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1077
		//DEBUG("SH"); // ./common/cpu.js:1078
 // ./common/cpu.js:1079
		var address = ((this.genRegisters[rs].asUInt32() + c) & 0xffffffff) >>> 0; // ./common/cpu.js:1080
		var rt_val = (this.genRegisters[rt].asUInt32() & 0xffff) >>> 0; // ./common/cpu.js:1081
 // ./common/cpu.js:1082
		this.mmu.writeHalfWord(address, rt_val); // ./common/cpu.js:1083
		this.advancePC(); // ./common/cpu.js:1084
	} // ./common/cpu.js:1085
 // ./common/cpu.js:1086
	this.SLL = function ( op ){ // ./common/cpu.js:1087
		//DEBUG("SLL"); // ./common/cpu.js:1088
		var rd = getRd(op); // ./common/cpu.js:1089
		var rt = getRt(op); // ./common/cpu.js:1090
		var sa = getSHAMT(op); // ./common/cpu.js:1091
		var val = this.genRegisters[rt].asUInt32() * Math.pow(2,sa); // ./common/cpu.js:1092
 // ./common/cpu.js:1093
		this.genRegisters[rd].putUInt32(val); // ./common/cpu.js:1094
		this.advancePC(); // ./common/cpu.js:1095
	} // ./common/cpu.js:1096
 // ./common/cpu.js:1097
	this.SLLV = function ( op ){ // ./common/cpu.js:1098
		//DEBUG("SLLV"); // ./common/cpu.js:1099
		var rd = getRd(op); // ./common/cpu.js:1100
		var rt = getRt(op); // ./common/cpu.js:1101
		var rs = getRs(op); // ./common/cpu.js:1102
		var val = (this.genRegisters[rt].asUInt32()) * Math.pow(2,this.genRegisters[rs].asUInt32()&0x0000001f); // ./common/cpu.js:1103
		this.genRegisters[rd].putUInt32(val); // ./common/cpu.js:1104
		this.advancePC(); // ./common/cpu.js:1105
	} // ./common/cpu.js:1106
 // ./common/cpu.js:1107
	this.SRL = function ( op ){ // ./common/cpu.js:1108
		//DEBUG("SRL"); // ./common/cpu.js:1109
		var rd = getRd(op); // ./common/cpu.js:1110
		var rt = getRt(op); // ./common/cpu.js:1111
		var sa = getSHAMT(op); // ./common/cpu.js:1112
		var val = this.genRegisters[rt].asUInt32() >>> sa; // ./common/cpu.js:1113
 // ./common/cpu.js:1114
		this.genRegisters[rd].putUInt32(val); // ./common/cpu.js:1115
		this.advancePC(); // ./common/cpu.js:1116
	} // ./common/cpu.js:1117
 // ./common/cpu.js:1118
	this.SRLV = function ( op ){ // ./common/cpu.js:1119
		//DEBUG("SRLV"); // ./common/cpu.js:1120
		var rd = getRd(op); // ./common/cpu.js:1121
		var rt = getRt(op); // ./common/cpu.js:1122
		var rs = getRs(op); // ./common/cpu.js:1123
		var val = (this.genRegisters[rt].asUInt32()) / Math.pow(2,this.genRegisters[rs].asUInt32()&0x0000001f); // ./common/cpu.js:1124
		this.genRegisters[rd].putUInt32(val); // ./common/cpu.js:1125
		this.advancePC(); // ./common/cpu.js:1126
	} // ./common/cpu.js:1127
 // ./common/cpu.js:1128
	this.SC = function ( op ) { // ./common/cpu.js:1129
		var rt = getRt(op); // ./common/cpu.js:1130
		var base = getRs(op); // ./common/cpu.js:1131
		var addr = getSigned16(op&0x0000ffff) + this.genRegisters[base].asUInt32(); // ./common/cpu.js:1132
		//WARN("SC implement address error???") // ./common/cpu.js:1133
		addr = addr >>> 0 // ./common/cpu.js:1134
		var val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1135
		if(this.LLBit == 1){ // ./common/cpu.js:1136
		    this.mmu.writeWord(addr,val); // ./common/cpu.js:1137
		    this.genRegisters[rt].putUInt32(1); // ./common/cpu.js:1138
		}else { // ./common/cpu.js:1139
		    this.genRegisters[rt].putUInt32(0); // ./common/cpu.js:1140
		} // ./common/cpu.js:1141
 // ./common/cpu.js:1142
		this.LLBit = 0; // ./common/cpu.js:1143
 // ./common/cpu.js:1144
 // ./common/cpu.js:1145
        this.advancePC(); // ./common/cpu.js:1146
	} // ./common/cpu.js:1147
 // ./common/cpu.js:1148
	this.TNE = function (op) { // ./common/cpu.js:1149
        //DEBUG("TNE"); // ./common/cpu.js:1150
        var rs = getRs(op); // ./common/cpu.js:1151
        var rt = getRt(op); // ./common/cpu.js:1152
 // ./common/cpu.js:1153
        var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1154
        var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1155
 // ./common/cpu.js:1156
        if(rs_val != rt_val) // ./common/cpu.js:1157
        { // ./common/cpu.js:1158
            this.triggerException(20, 13); // ./common/cpu.js:1159
            return; // ./common/cpu.js:1160
        } // ./common/cpu.js:1161
 // ./common/cpu.js:1162
	    this.advancePC(); // ./common/cpu.js:1163
	} // ./common/cpu.js:1164
 // ./common/cpu.js:1165
    this.BREAK = function (op) { // ./common/cpu.js:1166
        //DEBUG("BREAK"); // ./common/cpu.js:1167
        this.triggerException(16, 9); // ./common/cpu.js:1168
        //this.advancePC(); // ./common/cpu.js:1169
    } // ./common/cpu.js:1170
 // ./common/cpu.js:1171
    this.WAIT = function (op) // ./common/cpu.js:1172
    { // ./common/cpu.js:1173
        // wait for interrupt // ./common/cpu.js:1174
        return;// // ./common/cpu.js:1175
    } // ./common/cpu.js:1176
 // ./common/cpu.js:1177
	this.SRA = function ( op ){ // ./common/cpu.js:1178
		//DEBUG("SRA"); // ./common/cpu.js:1179
		var rd = getRd(op); // ./common/cpu.js:1180
		var rt = getRt(op); // ./common/cpu.js:1181
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1182
		var shamt = getSHAMT(op); // ./common/cpu.js:1183
 // ./common/cpu.js:1184
		var sign = (rt_val >>> 31); // ./common/cpu.js:1185
		var val = (rt_val & 0xffffffff) >>> 0; // ./common/cpu.js:1186
		var shifted_val = (val >>> shamt); // ./common/cpu.js:1187
 // ./common/cpu.js:1188
		if(sign != 0) // ./common/cpu.js:1189
		{ // ./common/cpu.js:1190
			var shamt_mask = (~(0xffffffff >>> shamt) >>> 0); // ./common/cpu.js:1191
			shifted_val = (shifted_val | shamt_mask); // ./common/cpu.js:1192
		} // ./common/cpu.js:1193
 // ./common/cpu.js:1194
 // ./common/cpu.js:1195
		this.genRegisters[rd].putUInt32(shifted_val); // ./common/cpu.js:1196
		this.advancePC(); // ./common/cpu.js:1197
	} // ./common/cpu.js:1198
 // ./common/cpu.js:1199
	this.SRAV = function ( op ){ // ./common/cpu.js:1200
		//DEBUG("SRAV"); // ./common/cpu.js:1201
		var rd = getRd(op); // ./common/cpu.js:1202
		var rt = getRt(op); // ./common/cpu.js:1203
		var rs = getRs(op); // ./common/cpu.js:1204
 // ./common/cpu.js:1205
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1206
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1207
 // ./common/cpu.js:1208
		var shamt = (rs_val & 0x1f) >>> 0; // ./common/cpu.js:1209
 // ./common/cpu.js:1210
		var sign = (rt_val >>> 31); // ./common/cpu.js:1211
		var val = (rt_val & 0xffffffff) >>> 0; // ./common/cpu.js:1212
		var shifted_val = (val >>> shamt); // ./common/cpu.js:1213
 // ./common/cpu.js:1214
		if(sign != 0) // ./common/cpu.js:1215
		{ // ./common/cpu.js:1216
			var shamt_mask = (~(0xffffffff >>> shamt) >>> 0); // ./common/cpu.js:1217
			shifted_val = (shifted_val | shamt_mask); // ./common/cpu.js:1218
		} // ./common/cpu.js:1219
 // ./common/cpu.js:1220
 // ./common/cpu.js:1221
		this.genRegisters[rd].putUInt32(shifted_val); // ./common/cpu.js:1222
		this.advancePC(); // ./common/cpu.js:1223
	} // ./common/cpu.js:1224
 // ./common/cpu.js:1225
	this.SUB = function ( op ){ // ./common/cpu.js:1226
		var rs = getRs(op); // ./common/cpu.js:1227
		var rd = getRd(op); // ./common/cpu.js:1228
		var rt = getRt(op); // ./common/cpu.js:1229
 // ./common/cpu.js:1230
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1231
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1232
 // ./common/cpu.js:1233
		var result = (rs_val + twosComplement(rt_val)) >>> 0; // ./common/cpu.js:1234
		//var result = (rs_val - rt_val) >>> 0; // ./common/cpu.js:1235
 // ./common/cpu.js:1236
		if(result < 4294967296) // ./common/cpu.js:1237
		{ // ./common/cpu.js:1238
			this.genRegisters[rd].putUInt32(result); // ./common/cpu.js:1239
		} // ./common/cpu.js:1240
		else // ./common/cpu.js:1241
		{ // ./common/cpu.js:1242
			// TODO trigger overflow exception // ./common/cpu.js:1243
		} // ./common/cpu.js:1244
 // ./common/cpu.js:1245
		this.advancePC(); // ./common/cpu.js:1246
	} // ./common/cpu.js:1247
 // ./common/cpu.js:1248
	this.SUBU = function ( op ){ // ./common/cpu.js:1249
		var rs = getRs(op); // ./common/cpu.js:1250
		var rd = getRd(op); // ./common/cpu.js:1251
		var rt = getRt(op); // ./common/cpu.js:1252
 // ./common/cpu.js:1253
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1254
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1255
 // ./common/cpu.js:1256
		var result = (rs_val + twosComplement(rt_val)) >>> 0; // ./common/cpu.js:1257
		//var result = (rs_val - rt_val) >>> 0; // ./common/cpu.js:1258
 // ./common/cpu.js:1259
		this.genRegisters[rd].putUInt32(result); // ./common/cpu.js:1260
		this.advancePC(); // ./common/cpu.js:1261
	} // ./common/cpu.js:1262
 // ./common/cpu.js:1263
	this.AND = function ( op ) { // ./common/cpu.js:1264
		//DEBUG("AND"); // ./common/cpu.js:1265
		var rs = getRs(op); // ./common/cpu.js:1266
		var rt = getRt(op); // ./common/cpu.js:1267
		var rd = getRd(op); // ./common/cpu.js:1268
 // ./common/cpu.js:1269
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1270
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1271
		var result = (rs_val & rt_val); // ./common/cpu.js:1272
 // ./common/cpu.js:1273
		this.genRegisters[rd].putUInt32(result); // ./common/cpu.js:1274
		this.advancePC(); // ./common/cpu.js:1275
	} // ./common/cpu.js:1276
 // ./common/cpu.js:1277
	this.ANDI = function ( op ){ // ./common/cpu.js:1278
		//DEBUG("ANDI"); // ./common/cpu.js:1279
		var rs = getRs(op); // ./common/cpu.js:1280
		var rt = getRt(op); // ./common/cpu.js:1281
		var imm = (op&0x0000ffff); // ./common/cpu.js:1282
 // ./common/cpu.js:1283
		var result = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1284
		result = ((result & 0x0000ffff) & imm) >>> 0; // ./common/cpu.js:1285
 // ./common/cpu.js:1286
		this.genRegisters[rt].putUInt32(result); // ./common/cpu.js:1287
		this.advancePC(); // ./common/cpu.js:1288
	} // ./common/cpu.js:1289
 // ./common/cpu.js:1290
	this.MULT = function ( op ){ // ./common/cpu.js:1291
		var rs = getRs(op); // ./common/cpu.js:1292
		var rt = getRt(op); // ./common/cpu.js:1293
 // ./common/cpu.js:1294
		var number1Signed = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1295
		var number2Signed = getSigned(this.genRegisters[rt].asUInt32()); // ./common/cpu.js:1296
 // ./common/cpu.js:1297
        var number1 = Math.abs(number1Signed); // ./common/cpu.js:1298
        var number2 = Math.abs(number2Signed); // ./common/cpu.js:1299
 // ./common/cpu.js:1300
		var sign = (number1Signed/number1) * (number2Signed/number2); // ./common/cpu.js:1301
 // ./common/cpu.js:1302
		var number1Hi = number1 >>> 16; // ./common/cpu.js:1303
		var number1Lo = (number1 & 0xffff); // ./common/cpu.js:1304
		var number2Hi = number2 >>> 16; // ./common/cpu.js:1305
		var number2Lo = (number2 & 0xffff); // ./common/cpu.js:1306
		var z2 = (number1Hi * number2Hi); // ./common/cpu.js:1307
		var z1 = (number1Hi * number2Lo) + (number1Lo * number2Hi); // ./common/cpu.js:1308
		var z0 = (number1Lo * number2Lo); // ./common/cpu.js:1309
 // ./common/cpu.js:1310
 // ./common/cpu.js:1311
		var result = (z2*4294967296 + z1*65536 + z0); // ./common/cpu.js:1312
 // ./common/cpu.js:1313
		var t1 = (z1*65536 + z0); // ./common/cpu.js:1314
		this.HI.putUInt32((z2 + ((t1-t1%4294967296) / 4294967296)) >>> 0); // ./common/cpu.js:1315
		this.LO.putUInt32(((z1*65536 + z0) & 0xffffffff) >>> 0); // ./common/cpu.js:1316
 // ./common/cpu.js:1317
		var HI_val = this.HI.asUInt32(); // ./common/cpu.js:1318
		var LO_val = this.LO.asUInt32(); // ./common/cpu.js:1319
 // ./common/cpu.js:1320
		if(sign < 0) // ./common/cpu.js:1321
		{ // ./common/cpu.js:1322
			LO_val = (~(LO_val) + 1); // ./common/cpu.js:1323
			var carry = (LO_val - LO_val%4294967296) / 4294967296; // ./common/cpu.js:1324
			LO_val = LO_val & 0xffffffff; // ./common/cpu.js:1325
 // ./common/cpu.js:1326
 // ./common/cpu.js:1327
			HI_val = (~(HI_val) + carry) & 0xffffffff; // ./common/cpu.js:1328
			this.HI.putUInt32(HI_val); // ./common/cpu.js:1329
			this.LO.putUInt32(LO_val); // ./common/cpu.js:1330
		} // ./common/cpu.js:1331
		//console.log("A: " + number1 + ", B:" + number2); // ./common/cpu.js:1332
		//console.log("Result: 0x"+result.toString(16)+", HI: 0x"+this.HI.asUInt32().toString(16)+", LO: 0x"+this.LO.asUInt32().toString(16)); // ./common/cpu.js:1333
		this.advancePC(); // ./common/cpu.js:1334
	} // ./common/cpu.js:1335
 // ./common/cpu.js:1336
    this.MULTU = function ( op ) { //karatsuba algorithm // ./common/cpu.js:1337
		var rs = getRs(op); // ./common/cpu.js:1338
		var rt = getRt(op); // ./common/cpu.js:1339
 // ./common/cpu.js:1340
		var number1 = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1341
		var number2 = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1342
 // ./common/cpu.js:1343
		var number1Hi = number1 >>> 16; // ./common/cpu.js:1344
		var number1Lo = (number1 & 0xffff); // ./common/cpu.js:1345
		var number2Hi = number2 >>> 16; // ./common/cpu.js:1346
		var number2Lo = (number2 & 0xffff); // ./common/cpu.js:1347
		var z2 = (number1Hi * number2Hi); // ./common/cpu.js:1348
		var z1 = (number1Hi * number2Lo) + (number1Lo * number2Hi); // ./common/cpu.js:1349
		var z0 = (number1Lo * number2Lo); // ./common/cpu.js:1350
 // ./common/cpu.js:1351
		var result = (z2*4294967296 + z1*65536 + z0); // ./common/cpu.js:1352
 // ./common/cpu.js:1353
		var t1 = (z1*65536 + z0); // ./common/cpu.js:1354
		this.HI.putUInt32((z2 + ((t1-t1%4294967296) / 4294967296)) >>> 0); // ./common/cpu.js:1355
		this.LO.putUInt32(((z1*65536 + z0) & 0xffffffff) >>> 0); // ./common/cpu.js:1356
 // ./common/cpu.js:1357
        this.advancePC(); // ./common/cpu.js:1358
    } // ./common/cpu.js:1359
 // ./common/cpu.js:1360
    this.MUL = function ( op ) { // ./common/cpu.js:1361
        var HI_old = this.HI.asUInt32(); // ./common/cpu.js:1362
        var LO_old = this.LO.asUInt32(); // ./common/cpu.js:1363
 // ./common/cpu.js:1364
        this.MULT(op); // ./common/cpu.js:1365
 // ./common/cpu.js:1366
        var rd = getRd(op); // ./common/cpu.js:1367
        this.genRegisters[rd].putUInt32(this.LO.asUInt32()); // ./common/cpu.js:1368
 // ./common/cpu.js:1369
        this.HI.putUInt32(HI_old); // ./common/cpu.js:1370
        this.LO.putUInt32(LO_old); // ./common/cpu.js:1371
 // ./common/cpu.js:1372
        // advancePC() done in this.MULT // ./common/cpu.js:1373
    } // ./common/cpu.js:1374
 // ./common/cpu.js:1375
    this.MADD = function ( op ) { // ./common/cpu.js:1376
        var HI_old = this.HI.asUInt32(); // ./common/cpu.js:1377
        var LO_old = this.LO.asUInt32(); // ./common/cpu.js:1378
 // ./common/cpu.js:1379
        this.MULT(op); // ./common/cpu.js:1380
        var LO_sum = LO_old + this.LO.asUInt32(); // ./common/cpu.js:1381
        var LO_carry = LO_sum >> 32; // ./common/cpu.js:1382
        var HI_sum = HI_old + this.HI.asUInt32() + LO_carry; // ./common/cpu.js:1383
 // ./common/cpu.js:1384
        this.LO.putUInt32(LO_sum); // ./common/cpu.js:1385
        this.HI.putUInt32(HI_sum); // ./common/cpu.js:1386
 // ./common/cpu.js:1387
        // TODO: handle overflow // ./common/cpu.js:1388
 // ./common/cpu.js:1389
        // advancePC done in this.MULT // ./common/cpu.js:1390
    } // ./common/cpu.js:1391
 // ./common/cpu.js:1392
    this.MADDU = function ( op ){ // ./common/cpu.js:1393
        var HI_old = this.HI.asUInt32(); // ./common/cpu.js:1394
        var LO_old = this.LO.asUInt32(); // ./common/cpu.js:1395
 // ./common/cpu.js:1396
        var signed = HI_old >>> 31; // ./common/cpu.js:1397
 // ./common/cpu.js:1398
        if(signed) // ./common/cpu.js:1399
        { // ./common/cpu.js:1400
            LO_old = ((~LO_old & 0xffffffff) >>> 0); // ./common/cpu.js:1401
            LO_old += 1; // ./common/cpu.js:1402
			var carry = 0; // ./common/cpu.js:1403
 // ./common/cpu.js:1404
			if(LO_old >= 4294967296) // ./common/cpu.js:1405
			{ // ./common/cpu.js:1406
				carry = 1; // ./common/cpu.js:1407
			} // ./common/cpu.js:1408
 // ./common/cpu.js:1409
            HI_old = ((~HI_old & 0xffffffff) >>> 0) + carry; // ./common/cpu.js:1410
        } // ./common/cpu.js:1411
 // ./common/cpu.js:1412
        this.MULT(op); // ./common/cpu.js:1413
        var HI_new = this.HI.asUInt32(); // ./common/cpu.js:1414
        var LO_new = this.LO.asUInt32(); // ./common/cpu.js:1415
 // ./common/cpu.js:1416
 // ./common/cpu.js:1417
        signed = HI_new >>> 31; // ./common/cpu.js:1418
 // ./common/cpu.js:1419
        if(signed) // ./common/cpu.js:1420
        { // ./common/cpu.js:1421
            LO_new = ((~LO_new & 0xffffffff) >>> 0); // ./common/cpu.js:1422
            LO_new += 1; // ./common/cpu.js:1423
			var carry = 0; // ./common/cpu.js:1424
 // ./common/cpu.js:1425
			if(LO_new >= 4294967296) // ./common/cpu.js:1426
			{ // ./common/cpu.js:1427
				carry = 1; // ./common/cpu.js:1428
			} // ./common/cpu.js:1429
 // ./common/cpu.js:1430
            HI_new = ((~HI_new & 0xffffffff) >>> 0) + carry; // ./common/cpu.js:1431
        } // ./common/cpu.js:1432
 // ./common/cpu.js:1433
        var LO_sum = LO_old + LO_new; // ./common/cpu.js:1434
        var LO_carry = LO_sum >> 32; // ./common/cpu.js:1435
        var HI_sum = HI_old + HI_new + LO_carry; // ./common/cpu.js:1436
 // ./common/cpu.js:1437
        this.LO.putUInt32(LO_sum); // ./common/cpu.js:1438
        this.HI.putUInt32(HI_sum); // ./common/cpu.js:1439
 // ./common/cpu.js:1440
        // advancePC done in this.MULT // ./common/cpu.js:1441
    } // ./common/cpu.js:1442
 // ./common/cpu.js:1443
    this.MFC0 = function ( op ) { // ./common/cpu.js:1444
        //DEBUG("MFC0"); // ./common/cpu.js:1445
        var rt = getRt(op); // ./common/cpu.js:1446
        var cd = getRd(op); // ./common/cpu.js:1447
        var select = (op & 0x7); // ./common/cpu.js:1448
 // ./common/cpu.js:1449
        this.genRegisters[rt].putUInt32(this.getC0Register(cd, select).asUInt32()); // ./common/cpu.js:1450
        this.advancePC(); // ./common/cpu.js:1451
    } // ./common/cpu.js:1452
 // ./common/cpu.js:1453
    this.MTC0 = function ( op ) { // ./common/cpu.js:1454
        //DEBUG("MTC0"); // ./common/cpu.js:1455
        var rt = getRt(op); // ./common/cpu.js:1456
        var cd = getRd(op); // ./common/cpu.js:1457
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1458
        var select = (op&0x7); // ./common/cpu.js:1459
 // ./common/cpu.js:1460
		this.getC0Register(cd,select).putUInt32(rt_val); // ./common/cpu.js:1461
        this.advancePC(); // ./common/cpu.js:1462
    } // ./common/cpu.js:1463
 // ./common/cpu.js:1464
	this.MFHI = function ( op ) { // ./common/cpu.js:1465
        //DEBUG("MFHI"); // ./common/cpu.js:1466
		var rd = getRd(op); // ./common/cpu.js:1467
		this.genRegisters[rd].putUInt32(this.HI.asUInt32()); // ./common/cpu.js:1468
		//console.log("MFHI: " + this.genRegisters[rd].asUInt32()); // ./common/cpu.js:1469
		this.advancePC(); // ./common/cpu.js:1470
	} // ./common/cpu.js:1471
 // ./common/cpu.js:1472
	this.MFLO = function ( op ) { // ./common/cpu.js:1473
        //DEBUG("MFLO"); // ./common/cpu.js:1474
		var rd = getRd(op); // ./common/cpu.js:1475
		this.genRegisters[rd].putUInt32(this.LO.asUInt32()); // ./common/cpu.js:1476
		this.advancePC(); // ./common/cpu.js:1477
	} // ./common/cpu.js:1478
 // ./common/cpu.js:1479
    this.MOVN = function ( op ) { // ./common/cpu.js:1480
        //DEBUG("MOVN"); // ./common/cpu.js:1481
        var rt = getRt(op); // ./common/cpu.js:1482
        var rs = getRs(op); // ./common/cpu.js:1483
        var rd = getRd(op); // ./common/cpu.js:1484
 // ./common/cpu.js:1485
        if(this.genRegisters[rt].asUInt32() != 0) // ./common/cpu.js:1486
        { // ./common/cpu.js:1487
            this.genRegisters[rd].putUInt32(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1488
        } // ./common/cpu.js:1489
 // ./common/cpu.js:1490
        this.advancePC(); // ./common/cpu.js:1491
    } // ./common/cpu.js:1492
 // ./common/cpu.js:1493
    this.MOVZ = function ( op ){ // ./common/cpu.js:1494
        //DEBUG("MOVZ"); // ./common/cpu.js:1495
        var rt = getRt(op); // ./common/cpu.js:1496
        var rs = getRs(op); // ./common/cpu.js:1497
        var rd = getRd(op); // ./common/cpu.js:1498
 // ./common/cpu.js:1499
        if(this.genRegisters[rt].asUInt32() == 0) // ./common/cpu.js:1500
        { // ./common/cpu.js:1501
            this.genRegisters[rd].putUInt32(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1502
        } // ./common/cpu.js:1503
 // ./common/cpu.js:1504
        this.advancePC(); // ./common/cpu.js:1505
    } // ./common/cpu.js:1506
 // ./common/cpu.js:1507
    this.MSUB = function ( op ){ // ./common/cpu.js:1508
        //DEBUG("MSUB"); // ./common/cpu.js:1509
        var HI_old = this.HI.asUInt32(); // ./common/cpu.js:1510
        var LO_old = this.LO.asUInt32(); // ./common/cpu.js:1511
 // ./common/cpu.js:1512
        this.MULT(op); // ./common/cpu.js:1513
 // ./common/cpu.js:1514
        var HI_new = this.HI.asUInt32(); // ./common/cpu.js:1515
        var LO_new = this.LO.asUInt32(); // ./common/cpu.js:1516
 // ./common/cpu.js:1517
 // ./common/cpu.js:1518
        LO_new = (~LO_new & 0xffffffff) >>> 0; // ./common/cpu.js:1519
        LO_new += 1; // ./common/cpu.js:1520
        var carry = LO_new >> 32; // ./common/cpu.js:1521
        HI_new = (~HI_new & 0xffffffff) >>> 0; // ./common/cpu.js:1522
        HI_new += carry; // ./common/cpu.js:1523
 // ./common/cpu.js:1524
 // ./common/cpu.js:1525
        var LO_sum = LO_old + LO_new; // ./common/cpu.js:1526
        carry = LO_sum >> 32; // ./common/cpu.js:1527
        var HI_sum = HI_old + HI_new + carry; // ./common/cpu.js:1528
 // ./common/cpu.js:1529
        this.HI.putUInt32(HI_sum); // ./common/cpu.js:1530
        this.LO.putUInt32(LO_sum); // ./common/cpu.js:1531
 // ./common/cpu.js:1532
        // TODO: handle overflow exception // ./common/cpu.js:1533
 // ./common/cpu.js:1534
        // advancePC() is done in this.MULT // ./common/cpu.js:1535
    } // ./common/cpu.js:1536
 // ./common/cpu.js:1537
    this.MSUBU = function ( op ){ // ./common/cpu.js:1538
        //DEBUG("MSUBU"); // ./common/cpu.js:1539
        var HI_old = this.HI.asUInt32(); // ./common/cpu.js:1540
        var LO_old = this.LO.asUInt32(); // ./common/cpu.js:1541
 // ./common/cpu.js:1542
        this.MULT(op); // ./common/cpu.js:1543
 // ./common/cpu.js:1544
        var HI_new = this.HI.asUInt32(); // ./common/cpu.js:1545
        var LO_new = this.LO.asUInt32(); // ./common/cpu.js:1546
 // ./common/cpu.js:1547
 // ./common/cpu.js:1548
        LO_new = (~LO_new & 0xffffffff) >>> 0; // ./common/cpu.js:1549
        LO_new += 1; // ./common/cpu.js:1550
        var carry = LO_new >> 32; // ./common/cpu.js:1551
        HI_new = (~HI_new & 0xffffffff) >>> 0; // ./common/cpu.js:1552
        HI_new += carry; // ./common/cpu.js:1553
 // ./common/cpu.js:1554
 // ./common/cpu.js:1555
        var LO_sum = LO_old + LO_new; // ./common/cpu.js:1556
        carry = LO_sum >> 32; // ./common/cpu.js:1557
        var HI_sum = HI_old + HI_new + carry; // ./common/cpu.js:1558
 // ./common/cpu.js:1559
        this.HI.putUInt32(HI_sum); // ./common/cpu.js:1560
        this.LO.putUInt32(LO_sum); // ./common/cpu.js:1561
 // ./common/cpu.js:1562
        // advancePC() is done in this.MULT // ./common/cpu.js:1563
    } // ./common/cpu.js:1564
 // ./common/cpu.js:1565
	this.MTHI = function ( op ){ // ./common/cpu.js:1566
		//DEBUG("MTHI"); // ./common/cpu.js:1567
 // ./common/cpu.js:1568
		var rs = getRs(op); // ./common/cpu.js:1569
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1570
 // ./common/cpu.js:1571
		this.HI.putUInt32(rs_val); // ./common/cpu.js:1572
		this.advancePC(); // ./common/cpu.js:1573
	} // ./common/cpu.js:1574
 // ./common/cpu.js:1575
	this.MTLO = function ( op ){ // ./common/cpu.js:1576
		//DEBUG("MTLO"); // ./common/cpu.js:1577
 // ./common/cpu.js:1578
		var rs = getRs(op); // ./common/cpu.js:1579
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1580
 // ./common/cpu.js:1581
		this.LO.putUInt32(rs_val); // ./common/cpu.js:1582
		this.advancePC(); // ./common/cpu.js:1583
	} // ./common/cpu.js:1584
 // ./common/cpu.js:1585
 // ./common/cpu.js:1586
	this.J = function ( op ) { // ./common/cpu.js:1587
 // ./common/cpu.js:1588
        var top = (this.PC.asUInt32()&0xf0000000) >>> 0; // ./common/cpu.js:1589
        var addr = (top| ((op&0x3ffffff)*4)) >>> 0; // ./common/cpu.js:1590
        //DEBUG("jumping to address " + addr.toString(16)); // ./common/cpu.js:1591
        this.doDelaySlot(); // ./common/cpu.js:1592
        this.PC.putUInt32(addr); // ./common/cpu.js:1593
 // ./common/cpu.js:1594
	} // ./common/cpu.js:1595
 // ./common/cpu.js:1596
	this.JR = function ( op ) { // ./common/cpu.js:1597
		var rs = getRs(op); // ./common/cpu.js:1598
		var addr = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1599
        //DEBUG("JR (rs: " + rs + ") jumping to address " + addr.toString(16)); // ./common/cpu.js:1600
		this.doDelaySlot(); // ./common/cpu.js:1601
		this.PC.putUInt32(addr); // ./common/cpu.js:1602
	} // ./common/cpu.js:1603
 // ./common/cpu.js:1604
	this.JAL = function ( op ) { // ./common/cpu.js:1605
	    //same as J but saves return address to stack // ./common/cpu.js:1606
        //DEBUG("JAL"); // ./common/cpu.js:1607
        var pcval = this.PC.asUInt32(); // ./common/cpu.js:1608
        var top = (pcval&0xf0000000) >>> 0; // ./common/cpu.js:1609
        var addr = (top| ((op&0x3ffffff)*4)) >>> 0; // ./common/cpu.js:1610
        this.doDelaySlot(); // ./common/cpu.js:1611
        //DEBUG("jumping to address " + addr.toString(16)) // ./common/cpu.js:1612
        this.genRegisters[31].putUInt32(pcval+8); // ./common/cpu.js:1613
        this.PC.putUInt32(addr); // ./common/cpu.js:1614
	} // ./common/cpu.js:1615
 // ./common/cpu.js:1616
	this.JALR = function ( op ) { // ./common/cpu.js:1617
	    //same as J but saves return address to stack // ./common/cpu.js:1618
        //DEBUG("JALR"); // ./common/cpu.js:1619
        var pcval = this.PC.asUInt32(); // ./common/cpu.js:1620
		var rs = getRs(op); // ./common/cpu.js:1621
        var rd = getRd(op); // ./common/cpu.js:1622
		var addr = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1623
 // ./common/cpu.js:1624
        this.doDelaySlot(); // ./common/cpu.js:1625
        //DEBUG("jumping to address " + addr.toString(16)) // ./common/cpu.js:1626
        this.genRegisters[rd].putUInt32(pcval+8); // ./common/cpu.js:1627
        this.PC.putUInt32(addr); // ./common/cpu.js:1628
	} // ./common/cpu.js:1629
 // ./common/cpu.js:1630
	this.LUI = function ( op ){ // ./common/cpu.js:1631
	    var rDest = getRt(op); // ./common/cpu.js:1632
	    var c = (op&0x0000ffff) * 65536; // ./common/cpu.js:1633
	    //DEBUG("loading upper const into reg "+rDest); // ./common/cpu.js:1634
	    this.genRegisters[rDest].putUInt32(c); // ./common/cpu.js:1635
	    this.advancePC(); // ./common/cpu.js:1636
	} // ./common/cpu.js:1637
 // ./common/cpu.js:1638
	this.LB = function ( op ){ // ./common/cpu.js:1639
		var rt = getRt(op); // ./common/cpu.js:1640
		var rs = getRs(op); // ./common/cpu.js:1641
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1642
		//DEBUG("LB"); // ./common/cpu.js:1643
 // ./common/cpu.js:1644
 // ./common/cpu.js:1645
		this.genRegisters[rt].putUInt32(this.genRegisters[rs].asUInt32()+c); // ./common/cpu.js:1646
		var byteVal = this.mmu.readByte(this.genRegisters[rt].asUInt32()); // ./common/cpu.js:1647
		var signed = (byteVal >>> 7); // ./common/cpu.js:1648
 // ./common/cpu.js:1649
		if(signed) // ./common/cpu.js:1650
		{ // ./common/cpu.js:1651
			byteVal = (byteVal | 0xffffff00) >>> 0; // ./common/cpu.js:1652
		} // ./common/cpu.js:1653
 // ./common/cpu.js:1654
		this.genRegisters[rt].putUInt32(byteVal); // ./common/cpu.js:1655
		this.advancePC(); // ./common/cpu.js:1656
	} // ./common/cpu.js:1657
 // ./common/cpu.js:1658
	this.LBU = function ( op ){ // ./common/cpu.js:1659
		var rt = getRt(op); // ./common/cpu.js:1660
		var rs = getRs(op); // ./common/cpu.js:1661
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1662
		//DEBUG("LBU"); // ./common/cpu.js:1663
 // ./common/cpu.js:1664
		this.genRegisters[rt].putUInt32(this.genRegisters[rs].asUInt32()+c) // ./common/cpu.js:1665
		this.genRegisters[rt].putUInt32(this.mmu.readByte(this.genRegisters[rt].asUInt32())); // ./common/cpu.js:1666
		this.advancePC(); // ./common/cpu.js:1667
	} // ./common/cpu.js:1668
 // ./common/cpu.js:1669
	this.LH = function ( op ){ // ./common/cpu.js:1670
		var rt = getRt(op); // ./common/cpu.js:1671
		var rs = getRs(op); // ./common/cpu.js:1672
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1673
		//DEBUG("LH"); // ./common/cpu.js:1674
 // ./common/cpu.js:1675
 // ./common/cpu.js:1676
		this.genRegisters[rt].putUInt32(this.genRegisters[rs].asUInt32()+c); // ./common/cpu.js:1677
		var halfwordVal = this.mmu.readHalfWord(this.genRegisters[rt].asUInt32()); // ./common/cpu.js:1678
		var signed = (halfwordVal >>> 15); // ./common/cpu.js:1679
 // ./common/cpu.js:1680
		if(signed) // ./common/cpu.js:1681
		{ // ./common/cpu.js:1682
			halfwordVal = (halfwordVal | 0xffff0000) >>> 0; // ./common/cpu.js:1683
		} // ./common/cpu.js:1684
 // ./common/cpu.js:1685
		this.genRegisters[rt].putUInt32(halfwordVal); // ./common/cpu.js:1686
		this.advancePC(); // ./common/cpu.js:1687
	} // ./common/cpu.js:1688
 // ./common/cpu.js:1689
	this.LHU = function ( op ){ // ./common/cpu.js:1690
		var rt = getRt(op); // ./common/cpu.js:1691
		var rs = getRs(op); // ./common/cpu.js:1692
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1693
		//DEBUG("LHU"); // ./common/cpu.js:1694
 // ./common/cpu.js:1695
		this.genRegisters[rt].putUInt32(this.genRegisters[rs].asUInt32()+c) // ./common/cpu.js:1696
		this.genRegisters[rt].putUInt32(this.mmu.readHalfWord(this.genRegisters[rt].asUInt32())); // ./common/cpu.js:1697
		this.advancePC(); // ./common/cpu.js:1698
	} // ./common/cpu.js:1699
 // ./common/cpu.js:1700
	this.LL = function ( op ){ // ./common/cpu.js:1701
		var rt = getRt(op); // ./common/cpu.js:1702
		var rs = getRs(op); // ./common/cpu.js:1703
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1704
		//WARN("LL implement address error???") // ./common/cpu.js:1705
		var addr = this.genRegisters[rs].asUInt32()+c; // ./common/cpu.js:1706
 // ./common/cpu.js:1707
		this.genRegisters[rt].putUInt32(addr) // ./common/cpu.js:1708
		this.genRegisters[rt].putUInt32(this.mmu.readWord(this.genRegisters[rt].asUInt32())); // ./common/cpu.js:1709
		this.llAddrRegister.PAddr = (addr >>> 4); // ./common/cpu.js:1710
		this.LLBit = 1; // ./common/cpu.js:1711
		this.advancePC(); // ./common/cpu.js:1712
	} // ./common/cpu.js:1713
 // ./common/cpu.js:1714
 // ./common/cpu.js:1715
	this.LW = function ( op ){ // ./common/cpu.js:1716
		var rt = getRt(op); // ./common/cpu.js:1717
		var rs = getRs(op); // ./common/cpu.js:1718
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1719
		//DEBUG("LW"); // ./common/cpu.js:1720
 // ./common/cpu.js:1721
        var rsVal = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1722
        var newRtValAddr = ((rsVal+c) & 0xffffffff) >>> 0; // ./common/cpu.js:1723
 // ./common/cpu.js:1724
        var newRtVal = this.mmu.readWord(newRtValAddr); // ./common/cpu.js:1725
 // ./common/cpu.js:1726
		this.genRegisters[rt].putUInt32(newRtVal); // ./common/cpu.js:1727
 // ./common/cpu.js:1728
		this.advancePC(); // ./common/cpu.js:1729
	} // ./common/cpu.js:1730
 // ./common/cpu.js:1731
	this.LWL = function ( op ){ // ./common/cpu.js:1732
		var rt = getRt(op); // ./common/cpu.js:1733
		var rs = getRs(op); // ./common/cpu.js:1734
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1735
 // ./common/cpu.js:1736
		var addr = ((this.genRegisters[rs].asUInt32()+c) & 0xffffffff) >>> 0; // ./common/cpu.js:1737
		var rtVal = this.genRegisters[rt].asUInt32() // ./common/cpu.js:1738
		var wordVal = this.mmu.readWord(addr); // ./common/cpu.js:1739
 // ./common/cpu.js:1740
		var offset = addr % 4; // ./common/cpu.js:1741
 // ./common/cpu.js:1742
		var result; // ./common/cpu.js:1743
 // ./common/cpu.js:1744
		switch(offset){ // ./common/cpu.js:1745
		    case 0: // ./common/cpu.js:1746
		        result = wordVal; // ./common/cpu.js:1747
		        break; // ./common/cpu.js:1748
		    case 1: // ./common/cpu.js:1749
		        result = (wordVal & 0xffffff00) | (rtVal & 0xff); // ./common/cpu.js:1750
		        break; // ./common/cpu.js:1751
		    case 2: // ./common/cpu.js:1752
		        result = (wordVal & 0xffff0000) | (rtVal & 0xffff); // ./common/cpu.js:1753
		        break; // ./common/cpu.js:1754
		    case 3: // ./common/cpu.js:1755
		        result = (wordVal & 0xff000000) | (rtVal & 0xffffff); // ./common/cpu.js:1756
		        break; // ./common/cpu.js:1757
		} // ./common/cpu.js:1758
 // ./common/cpu.js:1759
 // ./common/cpu.js:1760
 // ./common/cpu.js:1761
		this.genRegisters[rt].putUInt32(result); // ./common/cpu.js:1762
		this.advancePC(); // ./common/cpu.js:1763
	} // ./common/cpu.js:1764
 // ./common/cpu.js:1765
	this.LWR = function ( op ){ // ./common/cpu.js:1766
		var rt = getRt(op); // ./common/cpu.js:1767
		var rs = getRs(op); // ./common/cpu.js:1768
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1769
 // ./common/cpu.js:1770
 // ./common/cpu.js:1771
		var addr = ((this.genRegisters[rs].asUInt32()+c) & 0xffffffff) >>> 0; // ./common/cpu.js:1772
		var rtVal = this.genRegisters[rt].asUInt32() // ./common/cpu.js:1773
		var wordVal = this.mmu.readWord(addr-3); // ./common/cpu.js:1774
		var offset = addr % 4; // ./common/cpu.js:1775
 // ./common/cpu.js:1776
 // ./common/cpu.js:1777
		var result; // ./common/cpu.js:1778
 // ./common/cpu.js:1779
		switch(offset){ // ./common/cpu.js:1780
		    case 3: // ./common/cpu.js:1781
		        result = wordVal; // ./common/cpu.js:1782
		        break; // ./common/cpu.js:1783
		    case 2: // ./common/cpu.js:1784
		        result = (wordVal & 0x00ffffff) | (rtVal & 0xff000000); // ./common/cpu.js:1785
		        break; // ./common/cpu.js:1786
		    case 1: // ./common/cpu.js:1787
		        result = (wordVal & 0xffff) | (rtVal & 0xffff0000); // ./common/cpu.js:1788
		        break; // ./common/cpu.js:1789
		    case 0: // ./common/cpu.js:1790
		        result = (wordVal & 0xff) | (rtVal & 0xffffff00); // ./common/cpu.js:1791
		        break; // ./common/cpu.js:1792
		} // ./common/cpu.js:1793
 // ./common/cpu.js:1794
		this.genRegisters[rt].putUInt32(result); // ./common/cpu.js:1795
		this.advancePC(); // ./common/cpu.js:1796
	} // ./common/cpu.js:1797
 // ./common/cpu.js:1798
	this.SW = function ( op ){ // ./common/cpu.js:1799
 // ./common/cpu.js:1800
	    //DEBUG("SW storing word"); // ./common/cpu.js:1801
	    var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1802
        var rs = getRs(op); // ./common/cpu.js:1803
	    var rt = getRt(op); // ./common/cpu.js:1804
	    this.mmu.writeWord( (((this.genRegisters[rs].asUInt32() + c) & 0xffffffff) >>> 0), this.genRegisters[rt].asUInt32()  ); // ./common/cpu.js:1805
		/*if(c == 28) // ./common/cpu.js:1806
		{ // ./common/cpu.js:1807
			console.log("sw: " + this.genRegisters[rt].asUInt32() + ", rs: " + rs + ", rt: " + rt + ", c: " + c + ", address: " + (((this.genRegisters[rs].asUInt32() + c) & 0xffffffff) >>> 0)); // ./common/cpu.js:1808
	    }*/ // ./common/cpu.js:1809
		this.advancePC(); // ./common/cpu.js:1810
 // ./common/cpu.js:1811
	} // ./common/cpu.js:1812
 // ./common/cpu.js:1813
	this.SWL = function ( op ){ // ./common/cpu.js:1814
		var rt = getRt(op); // ./common/cpu.js:1815
		var rs = getRs(op); // ./common/cpu.js:1816
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1817
 // ./common/cpu.js:1818
		var addr = ((this.genRegisters[rs].asUInt32()+c) & 0xffffffff) >>> 0; // ./common/cpu.js:1819
		var rtVal = this.genRegisters[rt].asUInt32() // ./common/cpu.js:1820
		var wordVal = this.mmu.readWord(addr); // ./common/cpu.js:1821
 // ./common/cpu.js:1822
		var offset = addr % 4; // ./common/cpu.js:1823
 // ./common/cpu.js:1824
		var result; // ./common/cpu.js:1825
 // ./common/cpu.js:1826
		switch(offset){ // ./common/cpu.js:1827
		    case 0: // ./common/cpu.js:1828
		        result = rtVal; // ./common/cpu.js:1829
		        break; // ./common/cpu.js:1830
		    case 1: // ./common/cpu.js:1831
		        result = (rtVal & 0xffffff00) | (wordVal & 0xff); // ./common/cpu.js:1832
		        break; // ./common/cpu.js:1833
		    case 2: // ./common/cpu.js:1834
		        result = (rtVal & 0xffff0000) | (wordVal & 0xffff); // ./common/cpu.js:1835
		        break; // ./common/cpu.js:1836
		    case 3: // ./common/cpu.js:1837
		        result = (rtVal & 0xff000000) | (wordVal & 0xffffff); // ./common/cpu.js:1838
		        break; // ./common/cpu.js:1839
		} // ./common/cpu.js:1840
 // ./common/cpu.js:1841
 // ./common/cpu.js:1842
	    this.mmu.writeWord(addr, result); // ./common/cpu.js:1843
		this.advancePC(); // ./common/cpu.js:1844
	} // ./common/cpu.js:1845
 // ./common/cpu.js:1846
	this.SWR = function ( op ){ // ./common/cpu.js:1847
		var rt = getRt(op); // ./common/cpu.js:1848
		var rs = getRs(op); // ./common/cpu.js:1849
		var c = getSigned16(op&0x0000ffff); // ./common/cpu.js:1850
 // ./common/cpu.js:1851
 // ./common/cpu.js:1852
		var addr = ((this.genRegisters[rs].asUInt32()+c) & 0xffffffff) >>> 0; // ./common/cpu.js:1853
		var rtVal = this.genRegisters[rt].asUInt32() // ./common/cpu.js:1854
		var wordVal = this.mmu.readWord(addr-3); // ./common/cpu.js:1855
		var offset = addr % 4; // ./common/cpu.js:1856
 // ./common/cpu.js:1857
 // ./common/cpu.js:1858
		var result; // ./common/cpu.js:1859
 // ./common/cpu.js:1860
		switch(offset){ // ./common/cpu.js:1861
		    case 3: // ./common/cpu.js:1862
		        result = rtVal; // ./common/cpu.js:1863
		        break; // ./common/cpu.js:1864
		    case 2: // ./common/cpu.js:1865
		        result = (rtVal & 0x00ffffff) | (wordVal & 0xff000000); // ./common/cpu.js:1866
		        break; // ./common/cpu.js:1867
		    case 1: // ./common/cpu.js:1868
		        result = (rtVal & 0xffff) | (wordVal & 0xffff0000); // ./common/cpu.js:1869
		        break; // ./common/cpu.js:1870
		    case 0: // ./common/cpu.js:1871
		        result = (rtVal & 0xff) | (wordVal & 0xffffff00); // ./common/cpu.js:1872
		        break; // ./common/cpu.js:1873
		} // ./common/cpu.js:1874
 // ./common/cpu.js:1875
        this.mmu.writeWord(addr-3,result); // ./common/cpu.js:1876
		this.advancePC(); // ./common/cpu.js:1877
	} // ./common/cpu.js:1878
 // ./common/cpu.js:1879
	this.B = function ( op ) { // ./common/cpu.js:1880
		var offset = getSigned18((op & 0x0000ffff) * 4); // ./common/cpu.js:1881
		this.doDelaySlot(); // ./common/cpu.js:1882
		//DEBUG("B"); // ./common/cpu.js:1883
		this.PC.incr(offset); // ./common/cpu.js:1884
		this.advancePC(); // ./common/cpu.js:1885
	} // ./common/cpu.js:1886
 // ./common/cpu.js:1887
	this.BEQ = function ( op ) { // ./common/cpu.js:1888
		var rs = getRs(op); // ./common/cpu.js:1889
		var rt = getRt(op); // ./common/cpu.js:1890
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:1891
 // ./common/cpu.js:1892
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1893
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1894
 // ./common/cpu.js:1895
		this.doDelaySlot(); // ./common/cpu.js:1896
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:1897
		var addr = pc_val + offset; // ./common/cpu.js:1898
 // ./common/cpu.js:1899
		if(rs_val == rt_val) // ./common/cpu.js:1900
		{ // ./common/cpu.js:1901
			//DEBUG("BEQ - taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:1902
			this.PC.putUInt32(addr); // ./common/cpu.js:1903
		} // ./common/cpu.js:1904
		else // ./common/cpu.js:1905
		{ // ./common/cpu.js:1906
			//DEBUG("BEQ - not taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:1907
			this.advancePC(); // ./common/cpu.js:1908
		} // ./common/cpu.js:1909
	} // ./common/cpu.js:1910
 // ./common/cpu.js:1911
	this.BEQL = function ( op ) { // ./common/cpu.js:1912
		var rs = getRs(op); // ./common/cpu.js:1913
		var rt = getRt(op); // ./common/cpu.js:1914
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:1915
 // ./common/cpu.js:1916
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:1917
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:1918
 // ./common/cpu.js:1919
		if(rs_val == rt_val) // ./common/cpu.js:1920
		{ // ./common/cpu.js:1921
			this.doDelaySlot(); // ./common/cpu.js:1922
			var pc_val = this.PC.asUInt32(); // ./common/cpu.js:1923
			var addr = pc_val + offset; // ./common/cpu.js:1924
			//DEBUG("BEQL - taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:1925
			this.PC.putUInt32(addr); // ./common/cpu.js:1926
		} // ./common/cpu.js:1927
		else // ./common/cpu.js:1928
		{ // ./common/cpu.js:1929
			//DEBUG("BEQL - not taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:1930
			this.advancePC(); // ./common/cpu.js:1931
			this.advancePC(); // ./common/cpu.js:1932
		} // ./common/cpu.js:1933
	} // ./common/cpu.js:1934
 // ./common/cpu.js:1935
	this.BGEZ = function ( op ) { // ./common/cpu.js:1936
		var rs = getRs(op); // ./common/cpu.js:1937
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:1938
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1939
 // ./common/cpu.js:1940
		this.doDelaySlot(); // ./common/cpu.js:1941
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:1942
		var addr = pc_val + offset; // ./common/cpu.js:1943
 // ./common/cpu.js:1944
		if(rs_val >= 0) // ./common/cpu.js:1945
		{ // ./common/cpu.js:1946
			//DEBUG("BGEZ - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1947
			this.PC.putUInt32(addr); // ./common/cpu.js:1948
		} // ./common/cpu.js:1949
		else // ./common/cpu.js:1950
		{ // ./common/cpu.js:1951
			//DEBUG("BGEZ - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1952
			this.advancePC(); // ./common/cpu.js:1953
		} // ./common/cpu.js:1954
	} // ./common/cpu.js:1955
 // ./common/cpu.js:1956
	this.BGEZAL = function ( op ) { // ./common/cpu.js:1957
		var rs = getRs(op); // ./common/cpu.js:1958
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:1959
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1960
 // ./common/cpu.js:1961
		this.doDelaySlot(); // ./common/cpu.js:1962
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:1963
		var addr = pc_val + offset; // ./common/cpu.js:1964
 // ./common/cpu.js:1965
		this.genRegisters[31].putUInt32(pc_val+4); // ./common/cpu.js:1966
 // ./common/cpu.js:1967
		if(rs_val >= 0) // ./common/cpu.js:1968
		{ // ./common/cpu.js:1969
			//DEBUG("BGEZAL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1970
			this.PC.putUInt32(addr); // ./common/cpu.js:1971
		} // ./common/cpu.js:1972
		else // ./common/cpu.js:1973
		{ // ./common/cpu.js:1974
			//DEBUG("BGEZAL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1975
			this.advancePC(); // ./common/cpu.js:1976
			this.advancePC(); // ./common/cpu.js:1977
		} // ./common/cpu.js:1978
	} // ./common/cpu.js:1979
 // ./common/cpu.js:1980
	this.BGEZALL = function ( op ) { // ./common/cpu.js:1981
		var rs = getRs(op); // ./common/cpu.js:1982
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:1983
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:1984
 // ./common/cpu.js:1985
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:1986
 // ./common/cpu.js:1987
		this.genRegisters[31].putUInt32(pc_val+8); // ./common/cpu.js:1988
 // ./common/cpu.js:1989
		if(rs_val >= 0) // ./common/cpu.js:1990
		{ // ./common/cpu.js:1991
			this.doDelaySlot(); // ./common/cpu.js:1992
			var addr = pc_val + 4 + offset; // ./common/cpu.js:1993
			//DEBUG("BGEZALL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1994
			this.PC.putUInt32(addr); // ./common/cpu.js:1995
		} // ./common/cpu.js:1996
		else // ./common/cpu.js:1997
		{ // ./common/cpu.js:1998
			//DEBUG("BGEZALL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:1999
			this.advancePC(); // ./common/cpu.js:2000
			this.advancePC(); // ./common/cpu.js:2001
		} // ./common/cpu.js:2002
	} // ./common/cpu.js:2003
 // ./common/cpu.js:2004
	this.BGEZL = function ( op ) { // ./common/cpu.js:2005
		var rs = getRs(op); // ./common/cpu.js:2006
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2007
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2008
 // ./common/cpu.js:2009
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2010
 // ./common/cpu.js:2011
		if(rs_val >= 0) // ./common/cpu.js:2012
		{ // ./common/cpu.js:2013
			this.doDelaySlot(); // ./common/cpu.js:2014
			var addr = pc_val + 4 + offset; // ./common/cpu.js:2015
			//DEBUG("BGEZL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2016
			this.PC.putUInt32(addr); // ./common/cpu.js:2017
		} // ./common/cpu.js:2018
		else // ./common/cpu.js:2019
		{ // ./common/cpu.js:2020
			//DEBUG("BGEZL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2021
			this.advancePC(); // ./common/cpu.js:2022
			this.advancePC(); // ./common/cpu.js:2023
		} // ./common/cpu.js:2024
	} // ./common/cpu.js:2025
 // ./common/cpu.js:2026
	this.BGTZ = function ( op ) { // ./common/cpu.js:2027
		var rs = getRs(op); // ./common/cpu.js:2028
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2029
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2030
 // ./common/cpu.js:2031
		this.doDelaySlot(); // ./common/cpu.js:2032
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2033
		var addr = pc_val + offset; // ./common/cpu.js:2034
 // ./common/cpu.js:2035
		if(rs_val > 0) // ./common/cpu.js:2036
		{ // ./common/cpu.js:2037
			//DEBUG("BGTZ - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2038
			this.PC.putUInt32(addr); // ./common/cpu.js:2039
		} // ./common/cpu.js:2040
		else // ./common/cpu.js:2041
		{ // ./common/cpu.js:2042
			//DEBUG("BGTZ - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2043
			this.advancePC(); // ./common/cpu.js:2044
		} // ./common/cpu.js:2045
	} // ./common/cpu.js:2046
 // ./common/cpu.js:2047
	this.BGTZL = function ( op ) { // ./common/cpu.js:2048
		var rs = getRs(op); // ./common/cpu.js:2049
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2050
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2051
 // ./common/cpu.js:2052
		if(rs_val > 0) // ./common/cpu.js:2053
		{ // ./common/cpu.js:2054
			this.doDelaySlot(); // ./common/cpu.js:2055
			var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2056
			var addr = pc_val + offset; // ./common/cpu.js:2057
			//DEBUG("BGTZL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2058
			this.PC.putUInt32(addr); // ./common/cpu.js:2059
		} // ./common/cpu.js:2060
		else // ./common/cpu.js:2061
		{ // ./common/cpu.js:2062
			//DEBUG("BGTZL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2063
			this.advancePC(); // ./common/cpu.js:2064
			this.advancePC(); // ./common/cpu.js:2065
		} // ./common/cpu.js:2066
	} // ./common/cpu.js:2067
 // ./common/cpu.js:2068
	this.BLEZ = function ( op ) { // ./common/cpu.js:2069
		var rs = getRs(op); // ./common/cpu.js:2070
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2071
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2072
 // ./common/cpu.js:2073
		this.doDelaySlot(); // ./common/cpu.js:2074
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2075
		var addr = pc_val + offset; // ./common/cpu.js:2076
 // ./common/cpu.js:2077
		if(rs_val <= 0) // ./common/cpu.js:2078
		{ // ./common/cpu.js:2079
			//DEBUG("BLEZ - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2080
			this.PC.putUInt32(addr); // ./common/cpu.js:2081
		} // ./common/cpu.js:2082
		else // ./common/cpu.js:2083
		{ // ./common/cpu.js:2084
			//DEBUG("BLEZ - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2085
			this.advancePC(); // ./common/cpu.js:2086
		} // ./common/cpu.js:2087
	} // ./common/cpu.js:2088
 // ./common/cpu.js:2089
	this.BLEZL = function ( op ) { // ./common/cpu.js:2090
		var rs = getRs(op); // ./common/cpu.js:2091
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2092
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2093
 // ./common/cpu.js:2094
		if(rs_val <= 0) // ./common/cpu.js:2095
		{ // ./common/cpu.js:2096
			this.doDelaySlot(); // ./common/cpu.js:2097
			var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2098
			var addr = pc_val + offset; // ./common/cpu.js:2099
			//DEBUG("BLEZL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2100
			this.PC.putUInt32(addr); // ./common/cpu.js:2101
		} // ./common/cpu.js:2102
		else // ./common/cpu.js:2103
		{ // ./common/cpu.js:2104
			//DEBUG("BLEZL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2105
			this.advancePC(); // ./common/cpu.js:2106
			this.advancePC(); // ./common/cpu.js:2107
		} // ./common/cpu.js:2108
	} // ./common/cpu.js:2109
 // ./common/cpu.js:2110
	this.BLTZ = function ( op ) { // ./common/cpu.js:2111
		var rs = getRs(op); // ./common/cpu.js:2112
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2113
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2114
 // ./common/cpu.js:2115
		this.doDelaySlot(); // ./common/cpu.js:2116
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2117
		var addr = pc_val + offset; // ./common/cpu.js:2118
 // ./common/cpu.js:2119
		if(rs_val < 0) // ./common/cpu.js:2120
		{ // ./common/cpu.js:2121
			//DEBUG("BLTZ - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2122
			this.PC.putUInt32(addr); // ./common/cpu.js:2123
		} // ./common/cpu.js:2124
		else // ./common/cpu.js:2125
		{ // ./common/cpu.js:2126
			//DEBUG("BLTZ - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2127
			this.advancePC(); // ./common/cpu.js:2128
		} // ./common/cpu.js:2129
	} // ./common/cpu.js:2130
 // ./common/cpu.js:2131
	this.BLTZAL = function ( op ) { // ./common/cpu.js:2132
		var rs = getRs(op); // ./common/cpu.js:2133
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2134
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2135
 // ./common/cpu.js:2136
		this.doDelaySlot(); // ./common/cpu.js:2137
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2138
		var addr = pc_val + offset; // ./common/cpu.js:2139
 // ./common/cpu.js:2140
		this.genRegisters[31].putUInt32(pc_val+4); // ./common/cpu.js:2141
 // ./common/cpu.js:2142
		if(rs_val < 0) // ./common/cpu.js:2143
		{ // ./common/cpu.js:2144
			//DEBUG("BLTZAL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2145
			this.PC.putUInt32(addr); // ./common/cpu.js:2146
		} // ./common/cpu.js:2147
		else // ./common/cpu.js:2148
		{ // ./common/cpu.js:2149
			//DEBUG("BLTZAL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2150
			this.advancePC(); // ./common/cpu.js:2151
		} // ./common/cpu.js:2152
	} // ./common/cpu.js:2153
 // ./common/cpu.js:2154
	this.BLTZALL = function ( op ) { // ./common/cpu.js:2155
		var rs = getRs(op); // ./common/cpu.js:2156
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2157
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2158
 // ./common/cpu.js:2159
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2160
 // ./common/cpu.js:2161
		this.genRegisters[31].putUInt32(pc_val+8); // ./common/cpu.js:2162
 // ./common/cpu.js:2163
		if(rs_val < 0) // ./common/cpu.js:2164
		{ // ./common/cpu.js:2165
			this.doDelaySlot(); // ./common/cpu.js:2166
			var addr = pc_val + 4 + offset; // ./common/cpu.js:2167
			//DEBUG("BLTZALL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2168
			this.PC.putUInt32(addr); // ./common/cpu.js:2169
		} // ./common/cpu.js:2170
		else // ./common/cpu.js:2171
		{ // ./common/cpu.js:2172
			//DEBUG("BLTZALL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2173
			this.advancePC(); // ./common/cpu.js:2174
			this.advancePC(); // ./common/cpu.js:2175
		} // ./common/cpu.js:2176
	} // ./common/cpu.js:2177
 // ./common/cpu.js:2178
	this.BLTZL = function ( op ) { // ./common/cpu.js:2179
		var rs = getRs(op); // ./common/cpu.js:2180
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2181
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2182
 // ./common/cpu.js:2183
		if(rs_val < 0) // ./common/cpu.js:2184
		{ // ./common/cpu.js:2185
			this.doDelaySlot(); // ./common/cpu.js:2186
			var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2187
			var addr = pc_val + offset; // ./common/cpu.js:2188
			//DEBUG("BLTZL - taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2189
			this.PC.putUInt32(addr); // ./common/cpu.js:2190
		} // ./common/cpu.js:2191
		else // ./common/cpu.js:2192
		{ // ./common/cpu.js:2193
			//DEBUG("BLTZL - not taking branch (offset: " + offset + ") rs_val: " + rs_val); // ./common/cpu.js:2194
			this.advancePC(); // ./common/cpu.js:2195
			this.advancePC(); // ./common/cpu.js:2196
		} // ./common/cpu.js:2197
	} // ./common/cpu.js:2198
 // ./common/cpu.js:2199
	this.BNE = function ( op ) { // ./common/cpu.js:2200
		var rs = getRs(op); // ./common/cpu.js:2201
		var rt = getRt(op); // ./common/cpu.js:2202
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2203
 // ./common/cpu.js:2204
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:2205
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:2206
 // ./common/cpu.js:2207
		this.doDelaySlot(); // ./common/cpu.js:2208
		var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2209
		var addr = pc_val + offset; // ./common/cpu.js:2210
 // ./common/cpu.js:2211
		if(rs_val != rt_val) // ./common/cpu.js:2212
		{ // ./common/cpu.js:2213
			//DEBUG("BNE - taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:2214
			this.PC.putUInt32(addr); // ./common/cpu.js:2215
		} // ./common/cpu.js:2216
		else // ./common/cpu.js:2217
		{ // ./common/cpu.js:2218
			//DEBUG("BNE - not taking branch"); // ./common/cpu.js:2219
			this.advancePC(); // ./common/cpu.js:2220
		} // ./common/cpu.js:2221
	} // ./common/cpu.js:2222
 // ./common/cpu.js:2223
	this.BNEL = function ( op ) { // ./common/cpu.js:2224
		var rs = getRs(op); // ./common/cpu.js:2225
		var rt = getRt(op); // ./common/cpu.js:2226
		var offset = getSigned18((op&0x0000ffff) * 4); // ./common/cpu.js:2227
 // ./common/cpu.js:2228
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:2229
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:2230
 // ./common/cpu.js:2231
		if(rs_val != rt_val) // ./common/cpu.js:2232
		{ // ./common/cpu.js:2233
			this.doDelaySlot(); // ./common/cpu.js:2234
			var pc_val = this.PC.asUInt32(); // ./common/cpu.js:2235
			var addr = pc_val + offset; // ./common/cpu.js:2236
			//DEBUG("BNEL - taking branch (offset: " + offset + ") rs_val: " + rs_val + " rt_val: " + rt_val); // ./common/cpu.js:2237
			this.PC.putUInt32(addr); // ./common/cpu.js:2238
		} // ./common/cpu.js:2239
		else // ./common/cpu.js:2240
		{ // ./common/cpu.js:2241
			//DEBUG("BNEL - not taking branch"); // ./common/cpu.js:2242
			this.advancePC(); // ./common/cpu.js:2243
			this.advancePC(); // ./common/cpu.js:2244
		} // ./common/cpu.js:2245
	} // ./common/cpu.js:2246
 // ./common/cpu.js:2247
	this.CLO = function ( op ) { // ./common/cpu.js:2248
		//DEBUG("CLO"); // ./common/cpu.js:2249
		var rs = getRs(op); // ./common/cpu.js:2250
		var rd = getRd(op); // ./common/cpu.js:2251
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:2252
 // ./common/cpu.js:2253
		var bit = (rs_val & 0x80000000); // ./common/cpu.js:2254
		var count = 0; // ./common/cpu.js:2255
 // ./common/cpu.js:2256
		while(bit) // ./common/cpu.js:2257
		{ // ./common/cpu.js:2258
			rs_val = ((rs_val * 2) & 0xffffffff) >>> 0; // ./common/cpu.js:2259
			bit = (rs_val & 0x80000000); // ./common/cpu.js:2260
			count++; // ./common/cpu.js:2261
		} // ./common/cpu.js:2262
 // ./common/cpu.js:2263
		this.genRegisters[rd].putUInt32(count); // ./common/cpu.js:2264
		this.advancePC(); // ./common/cpu.js:2265
	} // ./common/cpu.js:2266
 // ./common/cpu.js:2267
	this.CLZ = function ( op ) { // ./common/cpu.js:2268
		//DEBUG("CLZ"); // ./common/cpu.js:2269
		var rs = getRs(op); // ./common/cpu.js:2270
		var rd = getRd(op); // ./common/cpu.js:2271
		var rs_val = (~this.genRegisters[rs].asUInt32() & 0xffffffff) >>> 0; // ./common/cpu.js:2272
 // ./common/cpu.js:2273
		var bit = (rs_val & 0x80000000); // ./common/cpu.js:2274
		var count = 0; // ./common/cpu.js:2275
 // ./common/cpu.js:2276
		while(bit) // ./common/cpu.js:2277
		{ // ./common/cpu.js:2278
			rs_val = ((rs_val * 2) & 0xffffffff) >>> 0; // ./common/cpu.js:2279
			bit = (rs_val & 0x80000000); // ./common/cpu.js:2280
			count++; // ./common/cpu.js:2281
		} // ./common/cpu.js:2282
 // ./common/cpu.js:2283
		this.genRegisters[rd].putUInt32(count); // ./common/cpu.js:2284
		this.advancePC(); // ./common/cpu.js:2285
	} // ./common/cpu.js:2286
 // ./common/cpu.js:2287
	this.DIV = function ( op ) { // ./common/cpu.js:2288
		//DEBUG("DIV"); // ./common/cpu.js:2289
		var rs = getRs(op); // ./common/cpu.js:2290
		var rt = getRt(op); // ./common/cpu.js:2291
 // ./common/cpu.js:2292
		var rs_val = getSigned(this.genRegisters[rs].asUInt32()); // ./common/cpu.js:2293
		var rt_val = getSigned(this.genRegisters[rt].asUInt32()); // ./common/cpu.js:2294
 // ./common/cpu.js:2295
		var modulo = rs_val % Math.abs(rt_val); // ./common/cpu.js:2296
		var answer = (rs_val - modulo)/rt_val; // ./common/cpu.js:2297
 // ./common/cpu.js:2298
		this.LO.putUInt32(answer); // ./common/cpu.js:2299
		this.HI.putUInt32(modulo); // ./common/cpu.js:2300
		this.advancePC(); // ./common/cpu.js:2301
	} // ./common/cpu.js:2302
 // ./common/cpu.js:2303
	this.DIVU = function ( op ) { // ./common/cpu.js:2304
		//DEBUG("DIVU"); // ./common/cpu.js:2305
		var rs = getRs(op); // ./common/cpu.js:2306
		var rt = getRt(op); // ./common/cpu.js:2307
 // ./common/cpu.js:2308
		var rs_val = this.genRegisters[rs].asUInt32(); // ./common/cpu.js:2309
		var rt_val = this.genRegisters[rt].asUInt32(); // ./common/cpu.js:2310
 // ./common/cpu.js:2311
		var modulo = rs_val % rt_val; // ./common/cpu.js:2312
		var answer = (rs_val - modulo)/rt_val; // ./common/cpu.js:2313
 // ./common/cpu.js:2314
		this.LO.putUInt32(answer); // ./common/cpu.js:2315
		this.HI.putUInt32(modulo); // ./common/cpu.js:2316
		this.advancePC(); // ./common/cpu.js:2317
	} // ./common/cpu.js:2318
 // ./common/cpu.js:2319
    this.ERET = function ( op ) { // ./common/cpu.js:2320
        //DEBUG("ERET"); // ./common/cpu.js:2321
        var c0registers = this.C0Registers; // ./common/cpu.js:2322
        var statusReg = c0registers[12]; // ./common/cpu.js:2323
        var newPCVal = 0; // ./common/cpu.js:2324
 // ./common/cpu.js:2325
        /*if(statusReg.ERL == 1) // ./common/cpu.js:2326
        { // ./common/cpu.js:2327
            WARN("Error_exception logic not implemented yet!"); // ./common/cpu.js:2328
            newPCVal = c0registers[30].asUInt32(); // ./common/cpu.js:2329
            statusReg.ERL = 0; // ./common/cpu.js:2330
        } // ./common/cpu.js:2331
        else // ./common/cpu.js:2332
        {*/ // ./common/cpu.js:2333
            newPCVal = c0registers[14].asUInt32(); // ./common/cpu.js:2334
            statusReg.EXL = 0; // ./common/cpu.js:2335
        //} // ./common/cpu.js:2336
 // ./common/cpu.js:2337
        this.LLBit = 0; // ./common/cpu.js:2338
        //INFO("ERET, PC: " + this.PC.asUInt32().toString(16) + ", newPC: " + newPCVal.toString(16) + ", v0: " + this.genRegisters[2].asUInt32().toString(16)); // ./common/cpu.js:2339
        this.PC.putUInt32(newPCVal); // ./common/cpu.js:2340
        //INFO("new PC: " + this.PC.asUInt32().toString(16)); // ./common/cpu.js:2341
    } // ./common/cpu.js:2342
 // ./common/cpu.js:2343
 // ./common/cpu.js:2344
    this.SYSCALL = function ( op ) { // ./common/cpu.js:2345
        //DEBUG("SYSCALL"); // ./common/cpu.js:2346
        /*var v0_val = this.genRegisters[2].asUInt32(); // ./common/cpu.js:2347
        var a0_val = this.genRegisters[4].asUInt32(); // ./common/cpu.js:2348
 // ./common/cpu.js:2349
        if(v0_val == 4) // ./common/cpu.js:2350
        { // ./common/cpu.js:2351
            var characterInt; // ./common/cpu.js:2352
            var stringToPrint = ""; // ./common/cpu.js:2353
 // ./common/cpu.js:2354
            for(characterInt = this.mmu.readByte(a0_val); characterInt != 0; a0_val++) // ./common/cpu.js:2355
            { // ./common/cpu.js:2356
                stringToPrint += String.fromCharCode(characterInt); // ./common/cpu.js:2357
                characterInt = this.mmu.readByte(a0_val+1); // ./common/cpu.js:2358
            } // ./common/cpu.js:2359
 // ./common/cpu.js:2360
            this.emu.serialLine.writeToConsole(stringToPrint); // ./common/cpu.js:2361
        } // ./common/cpu.js:2362
        else // ./common/cpu.js:2363
        {*/ // ./common/cpu.js:2364
            //console.log("syscall..."); // ./common/cpu.js:2365
            this.triggerException(15,8); // ./common/cpu.js:2366
        /*} // ./common/cpu.js:2367
 // ./common/cpu.js:2368
        if(v0_val == 5) // ./common/cpu.js:2369
        { // ./common/cpu.js:2370
            process.exit(0); // ./common/cpu.js:2371
        } // ./common/cpu.js:2372
 // ./common/cpu.js:2373
        if(v0_val == 6) // ./common/cpu.js:2374
        { // ./common/cpu.js:2375
            process.exit(1); // ./common/cpu.js:2376
        }*/ // ./common/cpu.js:2377
 // ./common/cpu.js:2378
		//this.advancePC(); // ./common/cpu.js:2379
    } // ./common/cpu.js:2380
 // ./common/cpu.js:2381
    this.TLBP = function ( op ) { // ./common/cpu.js:2382
       //DEBUG("TLBP"); // ./common/cpu.js:2383
       var c0registers = this.C0Registers; // ./common/cpu.js:2384
       var entryHi = c0registers[10].asUInt32(); // ./common/cpu.js:2385
       var result = this.mmu.tlbProbe(entryHi); // ./common/cpu.js:2386
       var indexReg = c0registers[0]; // ./common/cpu.js:2387
 // ./common/cpu.js:2388
       if(result > -1) // ./common/cpu.js:2389
       { // ./common/cpu.js:2390
          indexReg.putUInt32(result); // ./common/cpu.js:2391
       } // ./common/cpu.js:2392
       else // ./common/cpu.js:2393
       { // ./common/cpu.js:2394
          indexReg.putUInt32(indexReg.asUInt32() | 0x80000000); // ./common/cpu.js:2395
       } // ./common/cpu.js:2396
       this.advancePC(); // ./common/cpu.js:2397
    } // ./common/cpu.js:2398
 // ./common/cpu.js:2399
    this.TLBR = function ( op ) { // ./common/cpu.js:2400
        //DEBUG("TLBR"); // ./common/cpu.js:2401
 // ./common/cpu.js:2402
        var c0registers = this.C0Registers; // ./common/cpu.js:2403
        var index = c0registers[0].asUInt32(); // ./common/cpu.js:2404
        var tlbParsed = this.mmu.readTLBEntry(index); // ./common/cpu.js:2405
        var entryLo0 = c0registers[2]; // ./common/cpu.js:2406
        var entryLo1 = c0registers[3]; // ./common/cpu.js:2407
        var pagemask = c0registers[5]; // ./common/cpu.js:2408
        var entryHi = c0registers[10]; // ./common/cpu.js:2409
 // ./common/cpu.js:2410
        entryLo0.putUInt32(tlbParsed[0]); // ./common/cpu.js:2411
        entryLo1.putUInt32(tlbParsed[1]); // ./common/cpu.js:2412
        entryHi.putUInt32(tlbParsed[2]); // ./common/cpu.js:2413
        pagemask.putUInt32(tlbParsed[3]); // ./common/cpu.js:2414
        this.advancePC(); // ./common/cpu.js:2415
    } // ./common/cpu.js:2416
 // ./common/cpu.js:2417
    this.TLBWI = function ( op ) { // ./common/cpu.js:2418
        //DEBUG("TLBWI"); // ./common/cpu.js:2419
        console.log("TLBWI"); // ./common/cpu.js:2420
        var c0registers = this.C0Registers; // ./common/cpu.js:2421
        var index = c0registers[0].asUInt32(); // ./common/cpu.js:2422
        var entryHi = c0registers[10].asUInt32(); // ./common/cpu.js:2423
        var entryLo0 = c0registers[2].asUInt32(); // ./common/cpu.js:2424
        var entryLo1 = c0registers[3].asUInt32(); // ./common/cpu.js:2425
        var pagemask = c0registers[5].rawUInt32(); // ./common/cpu.js:2426
        console.log("index: " + index + ", entryHi: " + entryHi.toString(16) + ", entryLo0: " + entryLo0.toString(16) + ", entryLo1: " + entryLo1.toString(16) + ", pagemask: " + pagemask.toString(16)); // ./common/cpu.js:2427
        this.mmu.writeTLBEntry(index, entryLo0, entryLo1, entryHi, pagemask); // ./common/cpu.js:2428
        this.advancePC(); // ./common/cpu.js:2429
    } // ./common/cpu.js:2430
 // ./common/cpu.js:2431
    this.TLBWR = function ( op ) { // ./common/cpu.js:2432
        //DEBUG("TLBWR"); // ./common/cpu.js:2433
        console.log("TLBWR"); // ./common/cpu.js:2434
        var c0registers = this.C0Registers; // ./common/cpu.js:2435
        var index = c0registers[1].asUInt32(); // ./common/cpu.js:2436
        var entryHi = c0registers[10].asUInt32(); // ./common/cpu.js:2437
        var entryLo0 = c0registers[2].asUInt32(); // ./common/cpu.js:2438
        var entryLo1 = c0registers[3].asUInt32(); // ./common/cpu.js:2439
        var pagemask = c0registers[5].asUInt32(); // ./common/cpu.js:2440
        console.log("wiredReg: " + c0registers[6].asUInt32() + ", index: " + index + ", entryHi: " + entryHi.toString(16) + ", entryLo0: " + entryLo0.toString(16) + ", entryLo1: " + entryLo1.toString(16) + ", pagemask: " + pagemask.toString(16)); // ./common/cpu.js:2441
        this.mmu.writeTLBEntry(index, entryLo0, entryLo1, entryHi, pagemask); // ./common/cpu.js:2442
        this.advancePC(); // ./common/cpu.js:2443
    } // ./common/cpu.js:2444
 // ./common/cpu.js:2445
    this.SYNC = function ( op ) { // ./common/cpu.js:2446
        // ignore in emulator // ./common/cpu.js:2447
        this.advancePC(); // ./common/cpu.js:2448
    } // ./common/cpu.js:2449
 // ./common/cpu.js:2450
	this.TEQ = function ( op ) { // ./common/cpu.js:2451
        // ignore it // ./common/cpu.js:2452
        this.advancePC(); // ./common/cpu.js:2453
	} // ./common/cpu.js:2454
} // ./common/cpu.js:2455
 // ./common/uart.js:0
function UART_16550() // ./common/uart.js:1
{ // ./common/uart.js:2
    this.uartRegisters = new Array(8); // ./common/uart.js:3
    this.baseAddr = 0x1f000900; // ./common/uart.js:4
    this.endAddr = 0x1f000900 + 0x38; // ./common/uart.js:5
    this.interruptId = 0; // ./common/uart.js:6
 // ./common/uart.js:7
    for(i = 0; i < 9; i++) // ./common/uart.js:8
    { // ./common/uart.js:9
        this.uartRegisters[i] = new GeneralRegister(); // ./common/uart.js:10
    } // ./common/uart.js:11
 // ./common/uart.js:12
    this.getReg = function(addr,write) // ./common/uart.js:13
    { // ./common/uart.js:14
        var offset = (addr - this.baseAddr); // ./common/uart.js:15
 // ./common/uart.js:16
        switch(offset) // ./common/uart.js:17
        { // ./common/uart.js:18
            case 0x0: // ./common/uart.js:19
                if(write) // ./common/uart.js:20
                { // ./common/uart.js:21
                    return this.uartRegisters[1]; // ./common/uart.js:22
                } // ./common/uart.js:23
                else // ./common/uart.js:24
                { // ./common/uart.js:25
                    return this.uartRegisters[0]; // ./common/uart.js:26
                } // ./common/uart.js:27
                break; // ./common/uart.js:28
 // ./common/uart.js:29
            case 0x8: // ./common/uart.js:30
                return this.uartRegisters[2]; // ./common/uart.js:31
 // ./common/uart.js:32
            case 0x10: // ./common/uart.js:33
                if(write) // ./common/uart.js:34
                { // ./common/uart.js:35
                    return this.uartRegisters[3]; // ./common/uart.js:36
                } // ./common/uart.js:37
                else // ./common/uart.js:38
                { // ./common/uart.js:39
                    // TODO lazily evaluate interrupt identification from convenience variable this.interruptId // ./common/uart.js:40
                    return 0; // ./common/uart.js:41
                } // ./common/uart.js:42
 // ./common/uart.js:43
            case 0x18: // ./common/uart.js:44
                return this.uartRegisters[4]; // ./common/uart.js:45
 // ./common/uart.js:46
            case 0x20: // ./common/uart.js:47
                return this.uartRegisters[5]; // ./common/uart.js:48
 // ./common/uart.js:49
            case 0x28: // ./common/uart.js:50
                return this.uartRegisters[6]; // ./common/uart.js:51
 // ./common/uart.js:52
            case 0x30: // ./common/uart.js:53
                return this.uartRegisters[7]; // ./common/uart.js:54
 // ./common/uart.js:55
            case 0x38: // ./common/uart.js:56
                return this.uartRegisters[8]; // ./common/uart.js:57
 // ./common/uart.js:58
            default: // ./common/uart.js:59
                //INFO("Access to invalid UART register address: " + addr.toString(16)); // ./common/uart.js:60
                return undefined; // ./common/uart.js:61
        } // ./common/uart.js:62
    } // ./common/uart.js:63
 // ./common/uart.js:64
    this.readByte = function(addr) // ./common/uart.js:65
    { // ./common/uart.js:66
        var offset = addr - this.baseAddr; // ./common/uart.js:67
        // LSTAT // ./common/uart.js:68
        if(offset == 0x5) // ./common/uart.js:69
        { // ./common/uart.js:70
            // THRE & TEMT are set // ./common/uart.js:71
            return (1 << 5) | (1 << 6); // ./common/uart.js:72
        } // ./common/uart.js:73
        else // ./common/uart.js:74
        { // ./common/uart.js:75
            //console.log("UART access read: " + addr.toString(16)); // ./common/uart.js:76
            var reg = this.getReg(addr,0); // ./common/uart.js:77
            if(reg == undefined) // ./common/uart.js:78
            { // ./common/uart.js:79
                return 0; // ./common/uart.js:80
            } // ./common/uart.js:81
            else // ./common/uart.js:82
            { // ./common/uart.js:83
                return reg.asUInt32(); // ./common/uart.js:84
            } // ./common/uart.js:85
        } // ./common/uart.js:86
    } // ./common/uart.js:87
 // ./common/uart.js:88
    this.writeByte = function(addr,val) // ./common/uart.js:89
    { // ./common/uart.js:90
        var offset = addr - this.baseAddr; // ./common/uart.js:91
        if(offset == 0x0) // ./common/uart.js:92
        { // ./common/uart.js:93
            this.cpu.emu.serialLine.writeToConsole(String.fromCharCode(val)); // ./common/uart.js:94
        } // ./common/uart.js:95
        else // ./common/uart.js:96
        { // ./common/uart.js:97
            //console.log("UART access write: " + addr.toString(16)); // ./common/uart.js:98
            var reg = this.getReg(addr,1); // ./common/uart.js:99
            if(reg != undefined) // ./common/uart.js:100
            { // ./common/uart.js:101
                reg.putUInt32(val); // ./common/uart.js:102
            } // ./common/uart.js:103
        } // ./common/uart.js:104
    } // ./common/uart.js:105
 // ./common/uart.js:106
    this.readWord = function(addr) // ./common/uart.js:107
    { // ./common/uart.js:108
        return this.readByte(addr+3) + // ./common/uart.js:109
               this.readByte(addr+2) * 256 + // ./common/uart.js:110
               this.readByte(addr+1) * 65536 + // ./common/uart.js:111
               this.readByte(addr)   * 16777216; // ./common/uart.js:112
    } // ./common/uart.js:113
 // ./common/uart.js:114
    this.writeWord = function(addr,val) // ./common/uart.js:115
    { // ./common/uart.js:116
        var n = addr; // ./common/uart.js:117
        this.putByte( n+3 , val & 0xff); // ./common/uart.js:118
        this.putByte( n+2, (val & 0xff00) >>> 8); // ./common/uart.js:119
        this.putByte( n+1, (val & 0xff0000) >>> 16); // ./common/uart.js:120
        this.putByte( n+0, (val & 0xff000000) >>> 24); // ./common/uart.js:121
    } // ./common/uart.js:122
 // ./common/uart.js:123
    this.checkInterrupts = function() // ./common/uart.js:124
    { // ./common/uart.js:125
        // todo // ./common/uart.js:126
        return; // ./common/uart.js:127
    } // ./common/uart.js:128
} // ./common/uart.js:129
/* Memory management unit (mmu) // ./common/mmu.js:0
 // ./common/mmu.js:1
This class provides the memory access abstractions including the translation // ./common/mmu.js:2
from virtual address's to physical addresses. // ./common/mmu.js:3
 // ./common/mmu.js:4
The context of a memory access depends on the cpu state and so the mmu will // ./common/mmu.js:5
behave and access memory, this means it requires access to the cpu state. // ./common/mmu.js:6
 // ./common/mmu.js:7
*/ // ./common/mmu.js:8
 // ./common/mmu.js:9
 // ./common/mmu.js:10
 // ./common/mmu.js:11
function Mmu(size) { // ./common/mmu.js:12
    //member cpu , to save space i wont make a setter. its set by the emu object // ./common/mmu.js:13
    this.physicalMemory = new OctetBuffer(size); // ./common/mmu.js:14
    // structure of tlb, each tlb entry = 4 array entries, 2 tag entry (1 for page mask) + 2 data entries // ./common/mmu.js:15
    this.tlb = new Uint32Array(4*16); // ./common/mmu.js:16
    for(i = 0; i < 48; i++) // ./common/mmu.js:17
    { // ./common/mmu.js:18
        this.tlb[i] = 0; // ./common/mmu.js:19
    } // ./common/mmu.js:20
 // ./common/mmu.js:21
    this.uart = new UART_16550(); // ./common/mmu.js:22
 // ./common/mmu.js:23
    this.writeTLBEntry = function(index, entrylo0, entrylo1, entryhi, pagemask) // ./common/mmu.js:24
    { // ./common/mmu.js:25
        var tlb = this.tlb; // ./common/mmu.js:26
        var g = ((entrylo0 & entrylo1) >>> 0) & 0x1; // ./common/mmu.js:27
        var pfn0 = (entrylo0 >>> 6) & 0xfffff; // ./common/mmu.js:28
        var entrylo0low = ((entrylo0) & 0x3e) >>> 1; // ./common/mmu.js:29
        var pfn1 = (entrylo1 >>> 6) & 0xfffff; // ./common/mmu.js:30
        var entrylo1low = ((entrylo1) & 0x3e) >>> 1; // ./common/mmu.js:31
        var vpn2 = (entryhi >>> 13); // ./common/mmu.js:32
        var asid = (entryhi & 0xff) >>> 0; // ./common/mmu.js:33
 // ./common/mmu.js:34
        tlb[index*4] = pagemask;//(pagemask >>> 13) & 0xfff; // ./common/mmu.js:35
        tlb[index*4+1] = ((vpn2 << 9) | (g << 8) | asid) >>> 0; // ./common/mmu.js:36
        tlb[index*4+2] = (pfn0 << 5) | entrylo0low; // ./common/mmu.js:37
        tlb[index*4+3] = (pfn1 << 5) | entrylo1low; // ./common/mmu.js:38
 // ./common/mmu.js:39
        //console.log("Writing tlb, index: " + index + ", pagemask: " + tlb[index*4].toString(16) + ", tag: " + tlb[index*4+1].toString(16) + ", data0: " + tlb[index*4+2].toString(16) + ", data1: " + tlb[index*4+3].toString(16)); // ./common/mmu.js:40
    } // ./common/mmu.js:41
 // ./common/mmu.js:42
    this.tlbProbe = function(entryhi) // ./common/mmu.js:43
    { // ./common/mmu.js:44
        var tlb = this.tlb; // ./common/mmu.js:45
        var vpn2 = (entryhi >>> 13); // ./common/mmu.js:46
        var asid = (entryhi & 0xff) >>> 0; // ./common/mmu.js:47
 // ./common/mmu.js:48
        for(i = 0; i < 64; i+=4) // ./common/mmu.js:49
        { // ./common/mmu.js:50
            var tlbEntry = tlb[i+1]; // ./common/mmu.js:51
            var entry_vpn2 = (tlbEntry >>> 9) & 0x7ffff; // ./common/mmu.js:52
            var entry_asid = (tlbEntry & 0xff); // ./common/mmu.js:53
            if((entry_vpn2 == vpn2) && (entry_asid == asid)) // ./common/mmu.js:54
            { // ./common/mmu.js:55
                return i; // ./common/mmu.js:56
            } // ./common/mmu.js:57
        } // ./common/mmu.js:58
 // ./common/mmu.js:59
        return -1; // ./common/mmu.js:60
    } // ./common/mmu.js:61
 // ./common/mmu.js:62
    this.readTLBEntry = function(index) // ./common/mmu.js:63
    { // ./common/mmu.js:64
        var ret = new Array[4]; // ./common/mmu.js:65
        var tlb = this.tlb; // ./common/mmu.js:66
 // ./common/mmu.js:67
        var pagemask_raw = tlb[index]; // ./common/mmu.js:68
        var pagemask = Math.pow(2,pagemask_raw*2)-1; // ./common/mmu.js:69
 // ./common/mmu.js:70
        var tlbTag1 = tlb[index+1]; // ./common/mmu.js:71
 // ./common/mmu.js:72
        var vpn2 = tlbTag1 >>> 9; // ./common/mmu.js:73
        var g = (tlbTag1 >>> 8) & 0x1; // ./common/mmu.js:74
        var asid = (tlbTag1 & 0xff); // ./common/mmu.js:75
 // ./common/mmu.js:76
        var tlbEntry0 = tlb[index+2]; // ./common/mmu.js:77
 // ./common/mmu.js:78
        var pfn0 = (tlbEntry0 >>> 5) & 0xfffff; // ./common/mmu.js:79
        var entrylo0low = tlbEntry0 & 0x3f; // ./common/mmu.js:80
 // ./common/mmu.js:81
        var tlbEntry1 = tlb[index+3]; // ./common/mmu.js:82
 // ./common/mmu.js:83
        var pfn1 = (tlbEntry1 >>> 5) & 0xfffff; // ./common/mmu.js:84
        var entrylo1low = tlbEntry1 & 0x3f; // ./common/mmu.js:85
 // ./common/mmu.js:86
        var entrylo0 = entrylo0low | (pfn0 << 6); // ./common/mmu.js:87
        var entrylo1 = entrylo1low | (pfn1 << 6); // ./common/mmu.js:88
 // ./common/mmu.js:89
        var entryhi = (asid | (vpn2 << 13)) >>> 0; // ./common/mmu.js:90
 // ./common/mmu.js:91
        ret[0] = entrylo0low; // ./common/mmu.js:92
        ret[1] = entrylo1low; // ./common/mmu.js:93
        ret[2] = entryhi; // ./common/mmu.js:94
        ret[3] = pagemask; // ./common/mmu.js:95
        return ret; // ./common/mmu.js:96
    } // ./common/mmu.js:97
 // ./common/mmu.js:98
    this.tlbLookup = function (addr, write) { // ./common/mmu.js:99
       //console.log("TLB lookup of addr: " + addr.toString(16)); // ./common/mmu.js:100
       var asid = this.cpu.entryHiReg.ASID; // ./common/mmu.js:101
       var vpn2 = addr >>> 13; // ./common/mmu.js:102
       var tlb = this.tlb; // ./common/mmu.js:103
       var invalidCount = 0; // ./common/mmu.js:104
 // ./common/mmu.js:105
       //console.log("Lookup ASID: " + asid + ", VPN2: " + vpn2); // ./common/mmu.js:106
 // ./common/mmu.js:107
       for(var i = 0; i < 64; i+= 4) // ./common/mmu.js:108
       { // ./common/mmu.js:109
           var tlbentry = tlb[i+1]; // ./common/mmu.js:110
           //console.log(i); // ./common/mmu.js:111
           //console.log("Entry ASID: " + (tlbentry & 0xff)); // ./common/mmu.js:112
           var globalBit = (tlbentry >>> 8) & 0x1; // ./common/mmu.js:113
 // ./common/mmu.js:114
           //console.log("Global: " + globalBit); // ./common/mmu.js:115
 // ./common/mmu.js:116
           if(((tlbentry & 0xff) == asid) | (globalBit == 0)) // ./common/mmu.js:117
           { // ./common/mmu.js:118
                var pagemask_raw = tlb[i]; // ./common/mmu.js:119
                var pagemask = Math.pow(2,pagemask_raw*2)-1; // ./common/mmu.js:120
                var pagemask_n = (~(pagemask) & 0xfff) >>> 0; // ./common/mmu.js:121
                var vpn2entry = (tlbentry >>> 9) & pagemask_n ; // ./common/mmu.js:122
                var vpn2comp = (vpn2 & pagemask_n); // ./common/mmu.js:123
 // ./common/mmu.js:124
                //console.log("VPN2Entry: " + vpn2entry.toString(16) + ", VPN2Comp: " + vpn2comp.toString(16)); // ./common/mmu.js:125
                if(vpn2entry == vpn2comp) // ./common/mmu.js:126
                { // ./common/mmu.js:127
                     //console.log("TLB match at index: " + i); // ./common/mmu.js:128
                     var evenoddbit = 12 + pagemask_raw*2; // ./common/mmu.js:129
                     //console.log("evenoddbit: " + evenoddbit); // ./common/mmu.js:130
                     var evenoddbitVal = (addr >>> evenoddbit) & 0x1; // ./common/mmu.js:131
                     //console.log("evenoddbitVal: " + evenoddbitVal.toString(16)); // ./common/mmu.js:132
                     var dataEntry = tlb[i+2+evenoddbitVal]; // ./common/mmu.js:133
                     //console.log("dataEntry: " + dataEntry.toString(16)); // ./common/mmu.js:134
                     var validBit = dataEntry & 0x1; // ./common/mmu.js:135
                     var dirtyBit = (dataEntry >>> 1) & 0x1; // ./common/mmu.js:136
 // ./common/mmu.js:137
                     if(!validBit) // ./common/mmu.js:138
                     { // ./common/mmu.js:139
                        invalidCount = invalidCount + 1; // ./common/mmu.js:140
                        continue; // ./common/mmu.js:141
                     } // ./common/mmu.js:142
 // ./common/mmu.js:143
                     if(write && !dirtyBit) // ./common/mmu.js:144
                     { // ./common/mmu.js:145
                        INFO("tlb modified exception"); // ./common/mmu.js:146
                        this.cpu.entryHiReg.VPN2 = vpn2; // ./common/mmu.js:147
                        //this.cpu.entryHiReg.ASID = // ./common/mmu.js:148
                        this.cpu.C0Registers[8].putUInt32(addr); // ./common/mmu.js:149
                        this.cpu.C0Registers[4].BadVPN2 = vpn2; // ./common/mmu.js:150
                        // TLB modified exception // ./common/mmu.js:151
                        this.cpu.triggerException(11, 1); // excCode = Mod // ./common/mmu.js:152
                        throw 1337; // ./common/mmu.js:153
                        //return addr; // ./common/mmu.js:154
                     } // ./common/mmu.js:155
 // ./common/mmu.js:156
                     var pagemask_lsb = pagemask & 0x1; // ./common/mmu.js:157
                     var pagemask_n_lsb = pagemask_n & 0x1; // ./common/mmu.js:158
 // ./common/mmu.js:159
                     var offset_mask = 4095 | (pagemask_lsb * 4096) | (pagemask * 8192); // (2^12-1) | (pagemask_lsb << 12) | (pagemask << 13) // ./common/mmu.js:160
                     var pa_mask = pagemask_n_lsb + (pagemask_n << 1) + 1040384; // (0b1111111 << 13) | pagemask_n << 1 | pagemask_n_lsb // ./common/mmu.js:161
                     var pfn = (dataEntry >>> 5) & pa_mask; // ./common/mmu.js:162
                     var pa = (pfn << 12) | (addr & offset_mask); // ./common/mmu.js:163
                     //DEBUG("pfn: " + pfn.toString(16) + ", pa: " + pa.toString(16)); // ./common/mmu.js:164
                     return pa; // ./common/mmu.js:165
                } // ./common/mmu.js:166
           } // ./common/mmu.js:167
 // ./common/mmu.js:168
       } // ./common/mmu.js:169
 // ./common/mmu.js:170
        this.cpu.entryHiReg.VPN2 = vpn2; // ./common/mmu.js:171
        this.cpu.C0Registers[4].BadVPN2 = vpn2; // ./common/mmu.js:172
        this.cpu.C0Registers[8].putUInt32(addr); // ./common/mmu.js:173
 // ./common/mmu.js:174
        if(invalidCount > 0) // ./common/mmu.js:175
        { // ./common/mmu.js:176
           this.cpu.entryHiReg.VPN2 = vpn2; // ./common/mmu.js:177
           this.cpu.C0Registers[8].putUInt32(addr); // ./common/mmu.js:178
           this.cpu.C0Registers[4].BadVPN2 = vpn2; // ./common/mmu.js:179
           // TLB invalid exception // ./common/mmu.js:180
           INFO("invalid tlb entry, va: " + addr.toString(16)); // ./common/mmu.js:181
           //console.log("invalid tlb entry"); // ./common/mmu.js:182
           if(write == 1) // ./common/mmu.js:183
           { // ./common/mmu.js:184
               this.cpu.triggerException(12,3); // excCode = TLBS // ./common/mmu.js:185
           } // ./common/mmu.js:186
           else // ./common/mmu.js:187
           { // ./common/mmu.js:188
               this.cpu.triggerException(12,2); // excCode = TLBL // ./common/mmu.js:189
           } // ./common/mmu.js:190
 // ./common/mmu.js:191
           throw 1337; // ./common/mmu.js:192
           //return addr; // ./common/mmu.js:193
        } // ./common/mmu.js:194
 // ./common/mmu.js:195
 // ./common/mmu.js:196
        // TLB refill exception // ./common/mmu.js:197
        if(write == 1) // ./common/mmu.js:198
        { // ./common/mmu.js:199
            this.cpu.triggerException(11,3); // excCode = TLBS // ./common/mmu.js:200
        } // ./common/mmu.js:201
        else // ./common/mmu.js:202
        { // ./common/mmu.js:203
            this.cpu.triggerException(11,2); // excCode = TLBL // ./common/mmu.js:204
        } // ./common/mmu.js:205
 // ./common/mmu.js:206
        INFO("TLB miss! va: " + addr.toString(16)); // ./common/mmu.js:207
        throw 1337; // ./common/mmu.js:208
    } // ./common/mmu.js:209
 // ./common/mmu.js:210
    this.addressTranslation = function(va, write) { // ./common/mmu.js:211
        if(this.cpu.isKernelMode()) // ./common/mmu.js:212
        { // ./common/mmu.js:213
            var top3 = va >>> 29; // ./common/mmu.js:214
 // ./common/mmu.js:215
            // kseg0 // ./common/mmu.js:216
            if(top3 == 0x4) // ./common/mmu.js:217
            { // ./common/mmu.js:218
                return (va - 0x80000000); // ./common/mmu.js:219
            } // ./common/mmu.js:220
            // kseg1 // ./common/mmu.js:221
            else if(top3 == 5) // ./common/mmu.js:222
            { // ./common/mmu.js:223
                return (va - 0xa0000000); // ./common/mmu.js:224
            } // ./common/mmu.js:225
            // kuseg when ERL = 1 // ./common/mmu.js:226
            else if((top3 == 0x6) & (this.cpu.statusRegister.ERL == 1)) // ./common/mmu.js:227
            { // ./common/mmu.js:228
               return va; // ./common/mmu.js:229
            } // ./common/mmu.js:230
            else if((top3 == 0x0) & (this.cpu.statusRegister.ERL == 1)) // ./common/mmu.js:231
            { // ./common/mmu.js:232
                return va; // ./common/mmu.js:233
            } // ./common/mmu.js:234
            // kseg3 in debug mode // ./common/mmu.js:235
            // TODO // ./common/mmu.js:236
            // kuseg (ERL=0), kseg2 and kseg3 // ./common/mmu.js:237
            else // ./common/mmu.js:238
            { // ./common/mmu.js:239
                return this.tlbLookup(va,write); // ./common/mmu.js:240
            } // ./common/mmu.js:241
        } // ./common/mmu.js:242
        else // ./common/mmu.js:243
        { // ./common/mmu.js:244
            if((va >>> 31) == 0) // ./common/mmu.js:245
            { // ./common/mmu.js:246
                return this.tlbLookup(va,write); // ./common/mmu.js:247
            } // ./common/mmu.js:248
            else // ./common/mmu.js:249
            { // ./common/mmu.js:250
                // trigger address error exception // ./common/mmu.js:251
            } // ./common/mmu.js:252
        } // ./common/mmu.js:253
    } // ./common/mmu.js:254
 // ./common/mmu.js:255
	this.readHalfWord = function(address) // ./common/mmu.js:256
	{ // ./common/mmu.js:257
        //if(address >= 0xbfd00000) // ./common/mmu.js:258
        //{ // ./common/mmu.js:259
        //    INFO("IO Reg readHalfWord: " + address.toString(16)); // ./common/mmu.js:260
        //    return 0; // ./common/mmu.js:261
        //} // ./common/mmu.js:262
		return this.physicalMemory.getUInt16BE(this.addressTranslation(address,0)); // ./common/mmu.js:263
	} // ./common/mmu.js:264
 // ./common/mmu.js:265
    this.writeHalfWord = function(address, val) // ./common/mmu.js:266
    { // ./common/mmu.js:267
        //if(address >= 0xbfd00000) // ./common/mmu.js:268
        //{ // ./common/mmu.js:269
        //    INFO("IO Reg writeHalfWord: " + address.toString(16) + ", val: " + val.toString(16)); // ./common/mmu.js:270
        //    return; // ./common/mmu.js:271
        // } // ./common/mmu.js:272
        this.physicalMemory.putUInt16BE(this.addressTranslation(address,1), val); // ./common/mmu.js:273
    } // ./common/mmu.js:274
 // ./common/mmu.js:275
    this.readByte = function(address_in) // ./common/mmu.js:276
    { // ./common/mmu.js:277
		address = this.addressTranslation(address_in, 0); // ./common/mmu.js:278
 // ./common/mmu.js:279
        //if(address >= 0xbfd00000) // ./common/mmu.js:280
        //{ // ./common/mmu.js:281
        //    INFO("IO Reg readByte: " + address.toString(16)); // ./common/mmu.js:282
        //    return 0; // ./common/mmu.js:283
        //} // ./common/mmu.js:284
        if((address >= this.uart.baseAddr) && (address <= this.uart.endAddr)) // ./common/mmu.js:285
        { // ./common/mmu.js:286
            return this.uart.readByte(address); // ./common/mmu.js:287
        } // ./common/mmu.js:288
        else // ./common/mmu.js:289
        { // ./common/mmu.js:290
            return this.physicalMemory.getByte(address); // ./common/mmu.js:291
        } // ./common/mmu.js:292
    } // ./common/mmu.js:293
 // ./common/mmu.js:294
    this.writeByte = function(address_in, val) // ./common/mmu.js:295
    { // ./common/mmu.js:296
		address = this.addressTranslation(address_in,1); // ./common/mmu.js:297
 // ./common/mmu.js:298
        //if(address >= 0xbfd00000) // ./common/mmu.js:299
        //{ // ./common/mmu.js:300
        //    INFO("IO Reg writeByte: " + address.toString(16) + ", val: " + val.toString(16)); // ./common/mmu.js:301
        //    return; // ./common/mmu.js:302
        //} // ./common/mmu.js:303
        if((address >= this.uart.baseAddr) && (address <= this.uart.endAddr)) // ./common/mmu.js:304
        { // ./common/mmu.js:305
            this.uart.writeByte(address,val); // ./common/mmu.js:306
        } // ./common/mmu.js:307
        else // ./common/mmu.js:308
        { // ./common/mmu.js:309
            this.physicalMemory.putByte(address, val); // ./common/mmu.js:310
        } // ./common/mmu.js:311
    } // ./common/mmu.js:312
 // ./common/mmu.js:313
	this.readWord = function(address) // ./common/mmu.js:314
	{ // ./common/mmu.js:315
        //if(address >= 0xbfd00000) // ./common/mmu.js:316
        //{ // ./common/mmu.js:317
        //    INFO("IO Reg readWord: " + address.toString(16)); // ./common/mmu.js:318
        //    return 0; // ./common/mmu.js:319
        //} // ./common/mmu.js:320
        var addr = this.addressTranslation(address,0); // ./common/mmu.js:321
 // ./common/mmu.js:322
        if((addr >= this.uart.baseAddr) && (addr <= this.uart.endAddr)) // ./common/mmu.js:323
        { // ./common/mmu.js:324
            return this.uart.readWord(addr); // ./common/mmu.js:325
        } // ./common/mmu.js:326
 // ./common/mmu.js:327
 // ./common/mmu.js:328
		if(this.cpu.getEndianness() == 0) // ./common/mmu.js:329
		{ // ./common/mmu.js:330
			return this.physicalMemory.getUInt32LE(addr); // ./common/mmu.js:331
		} // ./common/mmu.js:332
		else // ./common/mmu.js:333
		{ // ./common/mmu.js:334
			return this.physicalMemory.getUInt32BE(addr); // ./common/mmu.js:335
		} // ./common/mmu.js:336
	} // ./common/mmu.js:337
 // ./common/mmu.js:338
	this.writeWord = function(address, value) // ./common/mmu.js:339
	{ // ./common/mmu.js:340
        //if(address >= 0xbfd00000) // ./common/mmu.js:341
        //{ // ./common/mmu.js:342
        //    INFO("IO Reg writeWord: " + address.toString(16) + ", val: " + val.toString(16)); // ./common/mmu.js:343
        //    return; // ./common/mmu.js:344
        //} // ./common/mmu.js:345
        //console.log("VA: " + address.toString(16)); // ./common/mmu.js:346
        var addr = this.addressTranslation(address,1); // ./common/mmu.js:347
 // ./common/mmu.js:348
        if((addr >= this.uart.baseAddr) && (addr <= this.uart.endAddr)) // ./common/mmu.js:349
        { // ./common/mmu.js:350
            this.uart.writeWord(addr,val); // ./common/mmu.js:351
            return; // ./common/mmu.js:352
        } // ./common/mmu.js:353
 // ./common/mmu.js:354
        //console.log("PA: " + addr.toString(16)); // ./common/mmu.js:355
		if(this.cpu.getEndianness() == 0) // ./common/mmu.js:356
		{ // ./common/mmu.js:357
			return this.physicalMemory.putUInt32LE(addr, value >>> 0); // ./common/mmu.js:358
		} // ./common/mmu.js:359
		else // ./common/mmu.js:360
		{ // ./common/mmu.js:361
			return this.physicalMemory.putUInt32BE(addr, value >>> 0); // ./common/mmu.js:362
		} // ./common/mmu.js:363
	} // ./common/mmu.js:364
 // ./common/mmu.js:365
    this.loadSREC = function(srecString, setEntry) // ./common/mmu.js:366
    { // ./common/mmu.js:367
        var srecLines = srecString.split("\n"); // ./common/mmu.js:368
 // ./common/mmu.js:369
        for(i = 0; i < srecLines.length; i++) // ./common/mmu.js:370
        { // ./common/mmu.js:371
            if(srecLines[i] == "") // ./common/mmu.js:372
            { // ./common/mmu.js:373
                continue; // ./common/mmu.js:374
            } // ./common/mmu.js:375
 // ./common/mmu.js:376
            var l = srecLines[i]; // ./common/mmu.js:377
            l = l.replace("\r",""); // ./common/mmu.js:378
            var t = l[1]; // ./common/mmu.js:379
 // ./common/mmu.js:380
            if(l[0] != 'S') // ./common/mmu.js:381
            { // ./common/mmu.js:382
                ERROR("Invalid srec record!"); // ./common/mmu.js:383
                throw "Bad srecord"; // ./common/mmu.js:384
            } // ./common/mmu.js:385
 // ./common/mmu.js:386
            var count = l.substring(2,4); // ./common/mmu.js:387
            var addr = ""; // ./common/mmu.js:388
            var data = ""; // ./common/mmu.js:389
            var dataEnd = l.length-2; // ./common/mmu.js:390
 // ./common/mmu.js:391
            if(t == '0') // ./common/mmu.js:392
            { // ./common/mmu.js:393
                //DEBUG("Ignoring SREC header"); // ./common/mmu.js:394
            } // ./common/mmu.js:395
            else if(t == '1') // ./common/mmu.js:396
            { // ./common/mmu.js:397
                addr = l.substring(4,8); // ./common/mmu.js:398
                data = l.substring(8, dataEnd); // ./common/mmu.js:399
                //DEBUG("data 1 srec " + addr + " " + data); // ./common/mmu.js:400
            } // ./common/mmu.js:401
            else if(t == '2') // ./common/mmu.js:402
            { // ./common/mmu.js:403
                addr = l.substring(4,10); // ./common/mmu.js:404
                data = l.substring(10, dataEnd); // ./common/mmu.js:405
                //DEBUG("data 2 srec " + addr + " " + data); // ./common/mmu.js:406
            } // ./common/mmu.js:407
            else if(t == '3') // ./common/mmu.js:408
            { // ./common/mmu.js:409
                addr = l.substring(4,12); // ./common/mmu.js:410
                data = l.substring(12, dataEnd); // ./common/mmu.js:411
                //DEBUG("data 3 srec " + addr + " " + data); // ./common/mmu.js:412
            } // ./common/mmu.js:413
            else if(t == '5') // ./common/mmu.js:414
            { // ./common/mmu.js:415
                //DEBUG("Ignoring SREC record count field."); // ./common/mmu.js:416
            } // ./common/mmu.js:417
            else if((t == '7') | (t == '8') | (t == '9')) // ./common/mmu.js:418
            { // ./common/mmu.js:419
                count = parseInt(count,16)*2 -2; // ./common/mmu.js:420
                addr = l.substring(4,4+count); // ./common/mmu.js:421
                DEBUG("Entry point srec: " + addr); // ./common/mmu.js:422
 // ./common/mmu.js:423
                if(setEntry == 1) // ./common/mmu.js:424
                { // ./common/mmu.js:425
                    this.cpu.PC.putUInt32(parseInt(addr,16)); // ./common/mmu.js:426
                } // ./common/mmu.js:427
            } // ./common/mmu.js:428
            else // ./common/mmu.js:429
            { // ./common/mmu.js:430
                ERROR("Unknown SREC type: " + t); // ./common/mmu.js:431
                throw "Bad srecord"; // ./common/mmu.js:432
                return; // ./common/mmu.js:433
            } // ./common/mmu.js:434
 // ./common/mmu.js:435
            if((t == '1') | (t == '2') | (t == '3')) // ./common/mmu.js:436
            { // ./common/mmu.js:437
                if((data.length % 2) != 0) // ./common/mmu.js:438
                { // ./common/mmu.js:439
                    ERROR("Length of data in SREC record is not valid: " + data.length); // ./common/mmu.js:440
                    throw "Bad srecord"; // ./common/mmu.js:441
                } // ./common/mmu.js:442
 // ./common/mmu.js:443
                addr = parseInt(addr, 16); // ./common/mmu.js:444
 // ./common/mmu.js:445
                for(j = 0; j < data.length; j+= 2) // ./common/mmu.js:446
                { // ./common/mmu.js:447
                   var dataByteStr = data.substring(j,j+2); // ./common/mmu.js:448
                   var b = parseInt(dataByteStr,16); // ./common/mmu.js:449
                   var offset = j/2; // ./common/mmu.js:450
                   this.writeByte(addr + offset, b); // ./common/mmu.js:451
                } // ./common/mmu.js:452
            } // ./common/mmu.js:453
        } // ./common/mmu.js:454
    } // ./common/mmu.js:455
} // ./common/mmu.js:456
/* This class represents the emulator as a whole, it contains all the hardware. // ./common/Emu.js:0
*/ // ./common/Emu.js:1
 // ./common/Emu.js:2
 // ./common/Emu.js:3
function Emulator() { // ./common/Emu.js:4
 // ./common/Emu.js:5
    this.mmu = new Mmu(1024*1024*128); // ./common/Emu.js:6
    this.cpu = new MipsCpu(); // ./common/Emu.js:7
    this.cpu.emu = this; // ./common/Emu.js:8
    this.mmu.emu = this; // ./common/Emu.js:9
    this.mmu.uart.cpu = this.cpu; // ./common/Emu.js:10
 // ./common/Emu.js:11
    this.serialLine = new null_serial() // ./common/Emu.js:12
 // ./common/Emu.js:13
    this.mmu.cpu = this.cpu; // ./common/Emu.js:14
    this.cpu.mmu = this.mmu; // ./common/Emu.js:15
 // ./common/Emu.js:16
 // ./common/Emu.js:17
    this.step = function () { // ./common/Emu.js:18
        DEBUG("emulator tick"); // ./common/Emu.js:19
        this.cpu.step(); // ./common/Emu.js:20
    } // ./common/Emu.js:21
 // ./common/Emu.js:22
 // ./common/Emu.js:23
    this.tryQuit = function(exitCode) { // ./common/Emu.js:24
        // this is empty. node or browser can override this if they want to quit // ./common/Emu.js:25
        while(1) { ERROR("FAILED TO QUIT"); } // ./common/Emu.js:26
    } // ./common/Emu.js:27
 // ./common/Emu.js:28
 // ./common/Emu.js:29
} // ./common/Emu.js:30
var browser_srec = "S01700002E2F2E2E2F6275696C642F7261696E2E737265633C\r\nS315801000003C1C8011279C116040026000000000405B\r\nS315801000100000004000000040000000402401FFFE68\r\nS31580100020004118240000000040836000000000405A\r\nS315801000300000004000000040000000403C1D801180\r\nS3158010004027BD97802408500003A8E8212408FFF0D4\r\nS3158010005003A8E8243C088011250891703C0980117A\r\nS3158010006025299780AD0000001509FFFE250800049C\r\nS3158010007003E080213C088010250807940100F809C8\r\nS3158010008000000000020000080000000003E00008E5\r\nS315801000900000000003E00008000000003C02801110\r\nS315801000A003E00008A04591983C02BF00344309053F\r\nS315801000B090620000304200011040FFFD00000000F9\r\nS315801000C03C03BF00346309009062000000021600F2\r\nS315801000D003E00008000216033C05BF0034A309059F\r\nS315801000E090620000304200011040000500000000C0\r\nS315801000F034A209009043000024020001A08300006E\r\nS3158010010003E00008000000003C02801190439198A3\r\nS315801001100004260010600015000426033C06BF006C\r\nS3158010012034C3090590620000304200201440001A42\r\nS315801001303C07801190E591992CA200101440001D67\r\nS31580100140308200FF90620000304200201040FFFD98\r\nS31580100150308200FF3C03BF00346309002404000191\r\nS31580100160A062000003E00008A0E491993C02BF0061\r\nS315801001703443090590620000304200201040FFFD94\r\nS315801001803C02BF00308300FF34420900A0430000C8\r\nS3158010019003E0000800000000308300FF34C209002D\r\nS315801001A0A0430000240400013C02801103E00008F3\r\nS315801001B0A044919934C3090024A40001A0620000D0\r\nS315801001C003E00008A0E4919927BDFFE8AFB00010C6\r\nS315801001D000048600001086032402000A120200061C\r\nS315801001E0AFBF0014020020218FBF00148FB0001003\r\nS315801001F00804004227BD00180C0400422404000D98\r\nS31580100200020020218FBF00148FB000100804004216\r\nS3158010021027BD001827BDFFE8AFB00010AFBF001490\r\nS315801002200080802180840000108000068FBF00141B\r\nS315801002300C04007226100001820400001480FFFC5A\r\nS315801002408FBF00148FB0001003E0000827BD001880\r\nS3158010025027BDFFD03C03BF003C028011AFB60028FB\r\nS31580100260AFB50024AFB40020AFB3001CAFB20018F6\r\nS31580100270AFB10014AFB00010AFBF002C008090213A\r\nS3158010028034750900245682B800808021347109059E\r\nS315801002902413000D2414000892220000304200011D\r\nS315801002A01040FFFD0000000092A200000250182AA4\r\nS315801002B000021600000216031053000E0040202183\r\nS315801002C014540007000000001060FFF300000000C7\r\nS315801002D00C04008502C02021080400A62610FFFF0A\r\nS315801002E0A20200000C04007226100001080400A669\r\nS315801002F000000000A20000008FBF002C8FB60028DF\r\nS315801003008FB500248FB400208FB3001C8FB20018D5\r\nS315801003108FB100148FB000102404000A08040072F4\r\nS3158010032027BD003027BDFEE027A20124AFB00118FB\r\nS3158010033027B00014AFA50124AFA60128008028217C\r\nS315801003400040302102002021AFBF011CAFA7012C35\r\nS315801003500C0404C2AFA200100C04008502002021F8\r\nS315801003608FBF011C8FB0011803E0000827BD012044\r\nS3158010037027BDFFC0AFB0003027B00010020020218B\r\nS31580100380AFBF003CAFB200380C040094AFB100345C\r\nS3158010039083A300102402002D10620040000000008C\r\nS315801003A00000902182030000240200301062003386\r\nS315801003B0240200782411000A0C0404D8020020219B\r\nS315801003C02449FFFF0209202180830000240200684F\r\nS315801003D01062002724020048106200252402000AB9\r\nS315801003E012220031000000000520003B0000102181\r\nS315801003F00000202108040107000028212466FFC977\r\nS315801004001100000D2462FFA924A5000100472021B8\r\nS315801004100125102A1440000D00801021020510219C\r\nS3158010042080430000000439002862003A2466FFD019\r\nS315801004301040FFF23068002024A500010125102A03\r\nS315801004401040FFF600C720210080102100021023E3\r\nS315801004508FBF003C0052200B008010218FB20038D5\r\nS315801004608FB100348FB0003003E0000827BD004004\r\nS31580100470A0800000080400FA2529FFFF82030001EE\r\nS3158010048010620003240200581462FFCA00000000A4\r\nS3158010049026100002080400EE2411001027B0001167\r\nS315801004A0080400E9241200010C04057D02002021B5\r\nS315801004B0004020218FBF003C000210230052200BE9\r\nS315801004C0008010218FB200388FB100348FB0003089\r\nS315801004D003E0000827BD0040080401130000202116\r\nS315801004E027BDFFC827A3003CAFB50030AFB4002CA2\r\nS315801004F0AFB30028AFB20024AFB10020AFBF003435\r\nS3158010050000808821AFB0001C3C048011AFA5003C50\r\nS31580100510AFA60040AFA70044AFA300103C02BF00B7\r\nS31580100520249480108224000034550900241200255A\r\nS3158010053034530905108000068FBF00341092000CCA\r\nS3158010054026310001822400001480FFFC8FBF003406\r\nS315801005508FB500308FB4002C8FB300288FB2002453\r\nS315801005608FB100208FB0001C03E0000827BD003833\r\nS31580100570822400002482FFBD304200FF2C430031CC\r\nS315801005801060FFEC00021080028210218C43000064\r\nS3158010059000600008000000008FA200108C4400004C\r\nS315801005A0244200040C040094AFA200100804014DEC\r\nS315801005B0822400008FA200108C5000002442000478\r\nS315801005C00C0400DCAFA20010AE0200000804014D3E\r\nS315801005D0822400008FA400108C8500009262000097\r\nS315801005E0304200011040FFFD0000000092A3000081\r\nS315801005F024820004AFA20010A0A3000008040152B8\r\nS315801006008224000008041930000000003C04801188\r\nS315801006103C0580113C0680113C0780113C028011FC\r\nS3158010062027BDFFE024428300248482BC24A582D483\r\nS3158010063024C682E024E782E8AFBF001C0C0400C900\r\nS31580100640AFA200103C0480113C0580113C0680113D\r\nS315801006503C0780112484830824A5832424C68334EC\r\nS315801006600C0400C924E783403C0480113C058011AA\r\nS315801006708FBF001C2484834C24A58360080400C982\r\nS3158010068027BD002027BDFFD0AFB000180080802185\r\nS315801006903C040001AFB1001C3484C20000A0882144\r\nS315801006A000002821AFBF002CAFB40028AFB30024C0\r\nS315801006B00C040027AFB200203C0480110C0400C942\r\nS315801006C024848384020020210C041D810220282189\r\nS315801006D00C040B762413001B3C0480100000282188\r\nS315801006E00C04025C248406040C0402242404003CBA\r\nS315801006F00C04021A2412000D0C04021D00000000C6\r\nS315801007000C040183000000000C0416E3240400018D\r\nS315801007103C04801102002821022030210C0400C9DB\r\nS31580100720248483900C0405B8240400043C048011AE\r\nS315801007300C0400C9248483C43C028011245483E8A9\r\nS3158010074027B00010080401D7241100010C040042C0\r\nS31580100750000000000C0416E3240400010C0400368B\r\nS31580100760020020211451FFFB83A2001010530007B2\r\nS31580100770004020211452FFF5000000000C0400C92F\r\nS3158010078002802021080401D500000000080401E33E\r\nS315801007900000000027BDFFE0AFBF001C0C041B301B\r\nS315801007A0000000000C0417F7000000000C040EF582\r\nS315801007B0000000000C041260000000000C0415D527\r\nS315801007C0000000000C041365000000000C041101E9\r\nS315801007D0000000003C0480103C0500013C0680119E\r\nS315801007E03C0200082484068434A5900024C6E78041\r\nS315801007F03C0784000C040EA3AFA200108FBF001C10\r\nS3158010080003E0000827BD002003E000080000000078\r\nS315801008103C02801127BDFFE88C4591A4AFBF001420\r\nS3158010082000A0F809000020213C030005346316144B\r\nS315801008304083580000000000000000000000000007\r\nS3158010084000000000000010214082480000000000D7\r\nS315801008500000000000000000000000008FBF0014A0\r\nS3158010086003E0000827BD00183C02801103E0000851\r\nS31580100870AC40919C240300013C02801103E00008E7\r\nS31580100880AC43919C3C03801103E000088C628AC4BF\r\nS315801008902482FFFF2C420E101040000B3C05801165\r\nS315801008A08CA3919C3C02801110600005AC448AC4D4\r\nS315801008B024020001ACA2919C03E0000800001021E4\r\nS315801008C003E000080000102103E000082402000164\r\nS315801008D027BDFFE03C028010AFB20018AFB1001404\r\nS315801008E0AFB00010AFBF001C24520808241000417E\r\nS315801008F02411004E00102080020030210240282151\r\nS315801009000C040B3B261000011611FFFB00102080F3\r\nS315801009103C05801024A50810240401180C040B3BF8\r\nS31580100920000030213C0300053463161440835800C0\r\nS315801009300000000000000000000000000000000021\r\nS3158010094000001021408248000000000000000000D6\r\nS3158010095000000000000000008FBF001C8FB200183E\r\nS315801009608FB100148FB0001003E0000827BD00205F\r\nS3158010097027BDFFE0AFB200183C1280118E4291A0C5\r\nS31580100980AFB10014AFB00010AFBF001C0080802143\r\nS315801009901440000300A088210C04023400000000DB\r\nS315801009A03C0280118FBF001CAC5091A43C03801177\r\nS315801009B024020001AE4291A0AC7191A800001021D2\r\nS315801009C08FB200188FB100148FB0001003E00008AA\r\nS315801009D027BD002027BDFF783C028011244283F07A\r\nS315801009E027A30030AFBE0080AFB7007CAFB20068DF\r\nS315801009F0AFB00060AFBF0084AFB60078AFB50074FB\r\nS31580100A00AFB40070AFB3006CAFB1006400A090219A\r\nS31580100A1000C0B82100E0F02100808021AFA0004006\r\nS31580100A20AFA20034AFA30058920400001480000EC9\r\nS31580100A30240300258FBF00848FA200408FBE0080C4\r\nS31580100A408FB7007C8FB600788FB500748FB4007026\r\nS31580100A508FB3006C8FB200688FB100648FB0006066\r\nS31580100A6003E0000827BD00881083000A2402000ACC\r\nS31580100A70108201CC0000000002E0F80903C0282192\r\nS31580100A808FA2004026100001244200010804028A29\r\nS31580100A90AFA2004026040001AFA4005492040001C6\r\nS31580100AA02407FFFFAFA0003C0000B021AFA00038A4\r\nS31580100AB02408FFFF2C8200791440000B3C03801120\r\nS31580100AC0000426000004260302E0F80903C028214A\r\nS31580100AD08FA200408FA3005424420001AFA2004091\r\nS31580100AE00804028A24700001246380D400041080D4\r\nS31580100AF0006210218C430000006000080000000096\r\nS31580100B003C0480112484840CAFA400348FA3003C51\r\nS31580100B1030620004104001B60000000086430002D7\r\nS31580100B2026520004AFB200308FA4003C30820008F9\r\nS31580100B3010400080240600101060007E348400402F\r\nS31580100B40AFA4003C24060010AFA0003804E00004D7\r\nS31580100B508FA4003C2402FFDF00822024AFA4003C37\r\nS31580100B601460015E27B1003014E0015C0000A821FA\r\nS31580100B708FA300381060017100E0902100E0902171\r\nS31580100B8026B300018FA4003C266200023084004008\r\nS31580100B908FA3003C0044980B0272102A30630030F9\r\nS31580100BA00240A021AFA40048AFA20050AFA30044DA\r\nS31580100BB0106001280262A00A0296202AAFA4004C77\r\nS31580100BC08FA4003814800129000000008FA20048ED\r\nS31580100BD01440012B240400308FA4004424020020EA\r\nS31580100BE0108201328FA2004C8FA300501060000833\r\nS31580100BF002608021261000012404003002E0F809EA\r\nS31580100C0003C028210212102A1440FFFB261000016F\r\nS31580100C1026B0FFFF060000088FA4003C8224000047\r\nS31580100C2003C0282102E0F8092610FFFF0601FFFB0A\r\nS31580100C30263100018FA4003C308200101040000E37\r\nS31580100C408FA3004C8FA2004C1040000C8FA4004044\r\nS31580100C5002808021261000012404002002E0F80979\r\nS31580100C6003C028210216102A1440FFFB261000010B\r\nS31580100C702610FFFF8FA3004C8FA400400283B00A7A\r\nS31580100C808FA3005400962021AFA400408FB200306D\r\nS31580100C900804028A247000018FA2003C34420001AD\r\nS31580100CA0AFA2003C8FA3003C306200041040015A72\r\nS31580100CB0000000008643000226520004AFB20030C6\r\nS31580100CC02406000A080402D3AFA000388FA2003C85\r\nS31580100CD034420001AFA2003C8FA3003C3062000476\r\nS31580100CE0104001470000000086430002265200048F\r\nS31580100CF0AFB2003024060008080402D3AFA0003833\r\nS31580100D008FA3003C34630001AFA3003C8FA4003C4A\r\nS31580100D10308200041040012D00000000864300023E\r\nS31580100D20265200040460012DAFB20030080402D3AD\r\nS31580100D302406000A080402D3AFA000388E510000A2\r\nS31580100D403C0480112652000424848404AFB20030FF\r\nS31580100D5004E001470091880A00E018210804035A2C\r\nS31580100D600220282124A500012463FFFF046000A926\r\nS31580100D7000E0A82180A200001440FFFA00000000C5\r\nS31580100D8010A000A58FA4003C00B1A82300F5102A5E\r\nS31580100D90104000A1000000000804040600E0A8210D\r\nS31580100DA08E43000026520004AFB200302406001095\r\nS31580100DB0080402D3AFA000388FA3003C3062000134\r\nS31580100DC01040011B024018218C6200008FA4004045\r\nS31580100DD026520004AC4400008FA300540804028AF3\r\nS31580100DE0247000018FA3003C34630001AFA3003C44\r\nS31580100DF08FA2005402402821904400012442000111\r\nS31580100E00AFA20054080402AD00A090218FA3003C2D\r\nS31580100E10346300040804037CAFA3003C8FA4003C19\r\nS31580100E20348400200804037CAFA4003C8FA30054B4\r\nS31580100E302402002A90640001108201182470000197\r\nS31580100E4000041600000216030440011C00802821AD\r\nS31580100E503C04801124848AC8008518219062000081\r\nS31580100E60304200041040001700003821080403A403\r\nS31580100E70000020213C02801124428AC80046182195\r\nS31580100E8090620000304200041040000B00C0282100\r\nS31580100E902610000192060000000418C000041040BD\r\nS31580100EA00043102100061E0024A4FFD000031E0359\r\nS31580100EB00461FFF000822021288200000100382181\r\nS31580100EC00082380A2610FFFF0240282126030001DF\r\nS31580100ED0AFA3005492040001080402AD00A0902133\r\nS31580100EE0024028218FA4003C8FA200543484001025\r\nS31580100EF0AFA4003C9044000124420001AFA20054EC\r\nS31580100F00080402AD00A090218FA20054024028212F\r\nS31580100F10904400012403002B24420001AFA2005408\r\nS31580100F20AFA30038080402AD00A090218E560000B1\r\nS31580100F3006C000E0264500048FA3005400A090212F\r\nS31580100F409064000124630001080402ADAFA300542D\r\nS31580100F508FA4003C348400080804037CAFA4003CB2\r\nS31580100F608FA400381480FFA38FA20054024028213A\r\nS31580100F70904400012403002024420001AFA20054B3\r\nS31580100F80AFA30038080402AD00A090218FA3003CC7\r\nS31580100F90346300020804037CAFA3003C00003021B8\r\nS31580100FA0000610C000061840006218218FA2005457\r\nS31580100FB00064182124420001AFA20054904400001E\r\nS31580100FC00004160000021603044000082466FFD0B1\r\nS31580100FD03C02801124428AC8008218219062000047\r\nS31580100FE0304200041440FFEF000610C00240282152\r\nS31580100FF000C0B021080402AD00A090218E420000EE\r\nS3158010100026520004AFB20030A3A2001027B1001000\r\nS31580101010241500018FA4003C02A098213084004042\r\nS31580101020266200028FA3003C000090210044980B9A\r\nS315801010300272102A306300300240A021AFA000381F\r\nS31580101040AFA40048AFA20050AFA300441460FEDAEC\r\nS315801010500262A00A16C000460296182A8FA400388B\r\nS315801010602A8200001080FED9AFA2004C02E0F80957\r\nS3158010107003C028218FA200481040FED724040030D8\r\nS3158010108002E0F80903C028218FA3005403C0282149\r\nS3158010109002E0F809806400008FA400442402002036\r\nS315801010A01482FED28FA300508FA2004C1040FECE29\r\nS315801010B002808021261000012404003002E0F80905\r\nS315801010C003C028210216102A1440FFFB26100001A7\r\nS315801010D02610FFFF080402FB8FA300500066001B3A\r\nS315801010E000C001F48FA400342631FFFF00001010D9\r\nS315801010F00000181200821021804500001460FFF74E\r\nS31580101100A22500008FA3003C306200081040001317\r\nS315801011108FA400582402000810C2000A8FA300581A\r\nS315801011203C0480110071A8238FA30038248483F097\r\nS315801011301460FE92AFA4003400E09021080402E10E\r\nS3158010114002A098212402003010A200443C03801192\r\nS315801011502631FFFFA22200008FA400583C02801186\r\nS31580101160244283F00091A823080402DCAFA2003445\r\nS315801011701060FE93AFA3004C0280802126100001E0\r\nS315801011802404002002E0F80903C028210216102A40\r\nS315801011901440FFFB261000012610FFFF080402F101\r\nS315801011A08FA400382404000D02E0F80903C028211A\r\nS315801011B02404000A02E0F80903C028218FA4004005\r\nS315801011C024840001080402A0AFA400408E430000CE\r\nS315801011D0265200040461FED5AFB200302402002DE1\r\nS315801011E0000318232406000A080402D3AFA200388D\r\nS315801011F08E43000026520004080402CAAFB20030A3\r\nS315801012008E43000026520004AFB200302406000838\r\nS31580101210080402D3AFA000388E4300002652000483\r\nS31580101220AFB200302406000A080402D3AFA00038FB\r\nS315801012308FA4003C308200041040FEE300000000C2\r\nS315801012408E4200008FA3004026520004A443000063\r\nS315801012508FA300540804028A247000018FA20058BC\r\nS31580101260246383F00051A823080402DCAFA3003462\r\nS31580101270822200001040FF670000A82126B50001D9\r\nS3158010128002351021804300001460FFFD26B5000151\r\nS3158010129026B5FFFF080404068FA4003C8E43000089\r\nS315801012A0010038212862000026450004080403B393\r\nS315801012B00062380A080403B90016B023080403B183\r\nS315801012C000003821080404B424C6FFFF24840001DA\r\nS315801012D004C0000600000000808200001445FFFB59\r\nS315801012E024C6FFFF03E000080080102103E00008F9\r\nS315801012F0000010218CA2000024430001A0440000AD\r\nS3158010130003E00008ACA3000027BDFFE8AFA40018D7\r\nS3158010131000A0202100C028213C06801027A7001895\r\nS31580101320AFBF00140C04027524C612F48FA30018E4\r\nS31580101330A06000008FBF001403E0000827BD0018CE\r\nS315801013400080182180A2000024A50001A062000060\r\nS315801013501440FFFC2463000103E000080080102184\r\nS3158010136080820000104000070000282124A500017B\r\nS3158010137000851021804300001460FFFD24A5000124\r\nS3158010138024A5FFFF03E0000800A01021808700003D\r\nS315801013903C028011244B8AC830E300FF0163182178\r\nS315801013A090620000304200081040000B2402002B8F\r\nS315801013B0248400018087000030E200FF0162102142\r\nS315801013C090430000306300081460FFFA2484000103\r\nS315801013D02484FFFF2402002B10E2007B008048212A\r\nS315801013E02402002D10E20035241800018127000008\r\nS315801013F02402003010E2003700E0402114C0004281\r\nS3158010140028C2000B2406000A30E200FF0162102178\r\nS315801014109043000030630004106000723C027FFF2E\r\nS315801014203442FFFF0046001A00C001F400406821D4\r\nS31580101430000038213C0C8011240A0022000018126A\r\nS315801014400804051C2464FFFF2529000100001012E2\r\nS31580101450812800002447FFD0310200FF016210214D\r\nS3158010146090430000306300041060000E00000000FE\r\nS315801014700100001300E4102A1440FFF370E6000008\r\nS31580101480AD8A91702529000181280000310200FF64\r\nS315801014900162102190430000306300041460FFF451\r\nS315801014A001A0382110A0000200181827ACA900004E\r\nS315801014B00007102303E0000800E3100B24890001C5\r\nS315801014C081270000240200302418FFFF14E2FFCB8E\r\nS315801014D000E04021252900018127000030E200FF2D\r\nS315801014E0016210219043000024E4FFE03063000283\r\nS315801014F000E3200A240200581082003624020008D5\r\nS315801015000046300A28C2000B144000380000000044\r\nS3158010151010E0003400E020213C027FFF344AFFFFB8\r\nS315801015200000382124CC00363C0F8011240E002276\r\nS315801015300804055B014068210146001A00C001F4C9\r\nS31580101540000010122442FFFF00E2102A1040001BF8\r\nS315801015502484FFD070E6100200443821252900012A\r\nS31580101560812400001080FFCF00000000308200FF31\r\nS315801015700162102190430000306200023063000443\r\nS315801015801460FFED2488FFE00102200B28820041C1\r\nS315801015901440FFC40184182A1460FFC200000000A2\r\nS315801015A00146001A00C001F4000010122442FFFF09\r\nS315801015B000E2102A1440FFE72484FFC901A03821D5\r\nS315801015C008040557ADEE917024890001080404FBC8\r\nS315801015D0241800012529000124060010080405445A\r\nS315801015E08127000008040529000038210804050217\r\nS315801015F000E0402100002821080404E32406000AA4\r\nS315801016003C038011308500FF24638AC800A32821FB\r\nS315801016100080102190A40000244300203084000113\r\nS3158010162003E000080064100B3C028011308500FF37\r\nS3158010163024428AC800A2282190A300002482FFE0B9\r\nS315801016403063000203E000080083100A27BDFFE024\r\nS3158010165027A20028AFA600283C068010AFA7002C32\r\nS31580101660AFA40020AFA5002400A0202127A700202A\r\nS3158010167024C612F400402821AFBF001C0C0402754A\r\nS31580101680AFA200108FA30020A06000008FBF001CA7\r\nS3158010169003E0000827BD002027BDFFE027A2002415\r\nS315801016A0AFA600283C068010AFA50024AFA7002C5B\r\nS315801016B00040282124C616D400003821AFBF001C54\r\nS315801016C00C040275AFA200108FBF001C03E0000847\r\nS315801016D027BD00200004260008040072000426039B\r\nS315801016E027BDFFB0AFB20030008090213C0480113E\r\nS315801016F024848420AFBF004CAFBE0048AFB70044EF\r\nS31580101700AFB60040AFB5003CAFB40038AFB30034CD\r\nS31580101710AFB1002C0C0405A6AFB000280000302114\r\nS315801017202404000124050008240227100C0411A1AA\r\nS315801017300052900A3C038011240400012405000104\r\nS315801017400C0412BEAC6291783C0380110C04166DA9\r\nS31580101750AC6291803C038011AC6291843C02801112\r\nS31580101760245E8448000080213C1780113C1680112D\r\nS3158010177024150002241400032411000424130005E8\r\nS315801017803C0480113C028010248484342405009605\r\nS315801017900000302124070FA02442190CAFA200109C\r\nS315801017A0AFB20014AFB50018AFB4001CAFB10020B3\r\nS315801017B00C041901AFB30024AEE2917C3C04801175\r\nS315801017C03C028010240500C80000302124070FA099\r\nS315801017D02484844024421848AFA20010AFB200146B\r\nS315801017E0AFB50018AFB4001CAFB100200C041901BE\r\nS315801017F0AFB30024000020210C0416B7AEC291743A\r\nS315801018000200282103C020210C0405A62610000101\r\nS315801018101611FFDC3C0480118FBF004C8FBE004830\r\nS315801018208FB700448FB600408FB5003C8FB4003818\r\nS315801018308FB300348FB200308FB1002C8FB0002858\r\nS3158010184003E0000827BD005027BDFFC0AFB60038A3\r\nS31580101850AFBF003CAFB50034AFB40030AFB3002C8F\r\nS31580101860AFB20028AFB10024AFB000201880001AA4\r\nS315801018700080B0213C0280112455847827B400184A\r\nS31580101880000080213C1380113C1280113C11801184\r\nS315801018900C0414738E6491800C0417D38E44917C3F\r\nS315801018A08E24917802802821240600080000382191\r\nS315801018B0AFB00018AFB5001CAFA000100C041024F8\r\nS315801018C0261000010C0416E3240400030216182ABD\r\nS315801018D01460FFEF000000003C0280110C0417D347\r\nS315801018E08C4491848FBF003C8FB600388FB50034FE\r\nS315801018F08FB400308FB3002C8FB200288FB10024A4\r\nS315801019008FB0002003E0000827BD004027BDFFB040\r\nS31580101910AFB70044AFBF004CAFBE0048AFB6004073\r\nS31580101920AFB5003CAFB40038AFB30034AFB20030BF\r\nS31580101930AFB1002CAFB00028188000360080B821D7\r\nS315801019403C028011245E849C3C0380113C028011F1\r\nS31580101950247684C0245584E027B4001827B3002049\r\nS31580101960000080213C1280113C1180110C041473EC\r\nS315801019708E4491808E4491800C0413DF240500647C\r\nS315801019808E4491800C0413DF2405FFFF0C0416B7D8\r\nS31580101990000020218E2491780280282124060008B8\r\nS315801019A000003821AFB00018AFBE001C0C04102404\r\nS315801019B0AFA000108E249178000038210260282173\r\nS315801019C00C040FD1240600088FA500248FA60020B2\r\nS315801019D00C0405A602C020218E2491782407FFFFCF\r\nS315801019E0026028210C040FD1240600088FA500243C\r\nS315801019F08FA600200C0405A602A020212610000127\r\nS31580101A000C0416E3240400030217182A1460FFD767\r\nS31580101A10000000008FBF004C8FBE00488FB7004477\r\nS31580101A208FB600408FB5003C8FB400388FB300342A\r\nS31580101A308FB200308FB1002C8FB0002803E00008E1\r\nS31580101A4027BD005027BDFFC00000202124050001BE\r\nS31580101A50AFBF003CAFB40038AFB30034AFB2003084\r\nS31580101A60AFB1002C0C0412BEAFB00028004020216C\r\nS31580101A703C0380112405FFFF0C0413DFAC6291B088\r\nS31580101A803C0480113C0280102410000124110002B5\r\nS31580101A9024120003241300042414000524848510C2\r\nS31580101AA02405005A00003021240707D024421BB891\r\nS31580101AB0AFB00014AFB10018AFB2001CAFB30020A6\r\nS31580101AC0AFB400240C041901AFA200103C0480119D\r\nS31580101AD03C02801024421B24248485182405005A35\r\nS31580101AE000003021240707D0AFB00014AFB1001822\r\nS31580101AF0AFB2001CAFB30020AFB400240C041901A0\r\nS31580101B00AFA200108FBF003C8FB400388FB3003463\r\nS31580101B108FB200308FB1002C8FB0002803E0000800\r\nS31580101B2027BD004027BDFFD8AFB100143C118011EE\r\nS31580101B308E2491B0AFB40020AFB3001CAFB20018A2\r\nS31580101B40AFB00010AFBF00240C04147300008021C6\r\nS31580101B503C038011247485203C1280112413000AC2\r\nS31580101B608E2491B00C0413DF2405FFFF8E4391ACB5\r\nS31580101B70028020212463FFFF006028210C0405A623\r\nS31580101B80AE4391AC8E2491B00C04147326100001D0\r\nS31580101B901613FFF48E2491B08FBF00248FB40020CB\r\nS31580101BA08FB3001C8FB200188FB100148FB0001045\r\nS31580101BB003E0000827BD002827BDFFD83C0280110E\r\nS31580101BC0AFB40020AFB3001CAFB20018AFB1001491\r\nS31580101BD0AFB00010AFBF002424548554000080217C\r\nS31580101BE03C1280113C1180112413000A8E4491B04E\r\nS31580101BF00C0413DF2405FFFF8E2391AC0280202175\r\nS31580101C0024630001006028210C0405A6AE2391AC44\r\nS31580101C108E4491B00C041473261000011613FFF431\r\nS31580101C208E4491B08FBF00248FB400208FB3001CD8\r\nS31580101C308FB200188FB100148FB0001003E0000827\r\nS31580101C4027BD002827BDFFC00000202124050001E4\r\nS31580101C50AFBF003CAFB40038AFB30034AFB2003082\r\nS31580101C60AFB1002C0C0412BEAFB000283C0380111B\r\nS31580101C70AC6291B83C0480113C02801024100001A3\r\nS31580101C8024110002241200032413000424140005D6\r\nS31580101C90248485102405005A00003021240707D09B\r\nS31580101CA024421DA4AFB00014AFB10018AFB2001C0F\r\nS31580101CB0AFB30020AFB400240C041901AFA20010FA\r\nS31580101CC03C0480113C02801024421D1824848518FF\r\nS31580101CD02405005A00003021240707D0AFB0001425\r\nS31580101CE0AFB10018AFB2001CAFB30020AFB4002460\r\nS31580101CF00C041901AFA200108FBF003C8FB40038BE\r\nS31580101D008FB300348FB200308FB1002C8FB0002883\r\nS31580101D1003E0000827BD004027BDFFD83C02801194\r\nS31580101D20AFB40020AFB3001CAFB20018AFB100142F\r\nS31580101D30AFB00010AFBF002424548520000080214E\r\nS31580101D403C1280113C1180112413000A8E4491B8E4\r\nS31580101D500C0413DF2405FFFF8E2391B4028020210B\r\nS31580101D602463FFFF006028210C0405A6AE2391B4DE\r\nS31580101D708E4491B80C041473261000011613FFF4C8\r\nS31580101D808E4491B88FBF00248FB400208FB3001C6F\r\nS31580101D908FB200188FB100148FB0001003E00008C6\r\nS31580101DA027BD002827BDFFD83C028011AFB4002084\r\nS31580101DB0AFB3001CAFB20018AFB10014AFB00010B3\r\nS31580101DC0AFBF002424548554000080213C1280111A\r\nS31580101DD03C1180112413000A8E4491B80C0413DF31\r\nS31580101DE02405FFFF8E2391B40280202124630001F5\r\nS31580101DF0006028210C0405A6AE2391B48E4491B8B8\r\nS31580101E000C041473261000011613FFF48E4491B837\r\nS31580101E108FBF00248FB400208FB3001C8FB20018A0\r\nS31580101E208FB100148FB0001003E0000827BD002882\r\nS31580101E3027BDFFD024040005240500320000302180\r\nS31580101E40AFBF002C0C0411A1AFB000283C03801149\r\nS31580101E501040003EAC6291BC24040005240500327B\r\nS31580101E600C0411A1000030213C0380111040003C6D\r\nS31580101E70AC6291C03C028010244220D4240300021C\r\nS31580101E803C048011AFA2001024020003241000012C\r\nS31580101E90AFA30018AFA2001C24030004240200057F\r\nS31580101EA0248485102405005A00003021240707D089\r\nS31580101EB0AFA30020AFA200240C041901AFB0001408\r\nS31580101EC01050001E3C0480113C02801024421F7466\r\nS31580101ED0240300023C048011AFA2001024020003E8\r\nS31580101EE024100001AFA30018AFA2001C2403000425\r\nS31580101EF024020005248485182405005A0000302108\r\nS31580101F00240707D0AFA30020AFA200240C04190128\r\nS31580101F10AFB00014105000048FBF002C8FB0002873\r\nS31580101F2003E0000827BD00303C0480118FB00028E4\r\nS31580101F30248485BC080405A627BD00300C0405A69C\r\nS31580101F40248485A0080407B33C0280103C048011C9\r\nS31580101F500C0405A6248485880804079724040005A4\r\nS31580101F603C0480110C0405A6248485880804079EE9\r\nS31580101F703C0280103C0380112462864027BDFF6896\r\nS31580101F80904B001E8C6486408C4500048C43000860\r\nS31580101F908C46000C8C4700108C4800148C49001815\r\nS31580101FA0944A001C3C028011AFBE0090245E85F8D6\r\nS31580101FB03C028011AFB7008CAFB60088AFB50084F5\r\nS31580101FC0AFB40080AFB3007CAFB20078AFB100740D\r\nS31580101FD0AFB00070AFBF0094AFA40018AFA5001CBF\r\nS31580101FE0AFA30020AFA60024AFA70028AFA8002C6F\r\nS31580101FF0AFA90030A7AA0034A3AB00362457862495\r\nS31580102000000080213C14801127B200383C168011C4\r\nS3158010201027B5001824110001241300058E8491BC65\r\nS3158010202002402821240600320C040FD12407FFFF1A\r\nS3158010203003C0202110510022024028210C0405A63D\r\nS31580102040000000008EC491C002A028212406003210\r\nS315801020502407FFFF0C041024AFA0001010510013AA\r\nS3158010206002E020210C0405A6261000011613FFECB1\r\nS315801020708E8491BC0C0410FF8E8491BC8FBF00940B\r\nS315801020808FBE00908FB7008C8FB600888FB5008476\r\nS315801020908FB400808FB3007C8FB200788FB10074BC\r\nS315801020A08FB0007003E0000827BD00983C048011B3\r\nS315801020B00C0405A6248486040804081B2610000137\r\nS315801020C03C0480110C0405A6248485D808040812C3\r\nS315801020D08EC491C03C038011246286C827BDFF68D8\r\nS315801020E0904B001E8C6486C88C4500048C43000877\r\nS315801020F08C46000C8C4700108C4800148C490018B4\r\nS31580102100944A001C3C028011AFBE0090245E8680EB\r\nS315801021103C028011AFB7008CAFB60088AFB5008493\r\nS31580102120AFB40080AFB3007CAFB20078AFB10074AB\r\nS31580102130AFB00070AFBF0094AFA40018AFA5001C5D\r\nS31580102140AFA30020AFA60024AFA70028AFA8002C0D\r\nS31580102150AFA90030A7AA0034A3AB0036245786BC9B\r\nS31580102160000080213C16801127B500183C13801181\r\nS3158010217027B2003824110001241400058EC491BCA6\r\nS3158010218002A02821240600322407FFFF0C04102405\r\nS31580102190AFA000101051002203C020210C0405A608\r\nS315801021A0000000008E6491C002402821240600326F\r\nS315801021B00C040FD12407FFFF02E0202110510013D9\r\nS315801021C0024028210C0405A6261000011614FFECE7\r\nS315801021D08EC491BC0C0410FF8E6491C08FBF009486\r\nS315801021E08FBE00908FB7008C8FB600888FB5008415\r\nS315801021F08FB400808FB3007C8FB200788FB100745B\r\nS315801022008FB0007003E0000827BD00983C04801151\r\nS315801022100C0405A62484869C0804087326100001E5\r\nS315801022203C0480110C0405A6248486600804086A80\r\nS315801022308E6491C03C04801127BDFFD0AFBF002CA7\r\nS315801022400C0405A6248486E80C04161B24040001BD\r\nS315801022503C038011AC6291C43C0480113C02801016\r\nS31580102260244224C82484851024050068240601008D\r\nS3158010227024074E20AFA20010AFA00014AFA0001804\r\nS31580102280AFA0001CAFA000200C041901AFA0002441\r\nS3158010229024030001104300313C0480113C0480115A\r\nS315801022A03C028010244223942484851824050067D8\r\nS315801022B02406010024074E20AFA20010AFA0001400\r\nS315801022C0AFA00018AFA0001CAFA000200C0419010D\r\nS315801022D0AFA0002424030001104300243C04801185\r\nS315801022E03C0480113C0280102442241C2484875490\r\nS315801022F0240500662406010024074E20AFA2001094\r\nS31580102300AFA00014AFA00018AFA0001CAFA0002093\r\nS315801023100C041901AFA0002424030001104300030C\r\nS315801023208FBF002C03E0000827BD00303C048011CD\r\nS315801023302484875C00002821000030210000382189\r\nS31580102340AFA00010AFA000140C0405A6AFA0001813\r\nS315801023508FBF002C03E0000827BD00300C0405A6B3\r\nS3158010236024848718080408A83C04801124848734A0\r\nS31580102370000028210000302100003821AFA0001075\r\nS31580102380AFA000140C0405A6AFA00018080408B965\r\nS315801023903C04801127BDFFD8AFB30020AFB2001C1C\r\nS315801023A0AFB10018AFB00014AFBF00240C0416E311\r\nS315801023B0240400143C03007F3C0280113472FFFF1A\r\nS315801023C024538778000080213C11050002121024C6\r\nS315801023D01040000C261000011611FFFD0212102469\r\nS315801023E03C0480118FBF00248FB300208FB2001C55\r\nS315801023F08FB100188FB0001424848790080405A626\r\nS3158010240027BD00280C0405A6026020211611FFF0B6\r\nS3158010241002121024080408F93C04801127BDFFD04D\r\nS31580102420AFB50028AFB40024AFB30020AFB2001C04\r\nS31580102430AFB10018AFB00014AFBF002C0C0416E378\r\nS315801024402404001E3C038011247387C83C0280112B\r\nS315801024503C038011245487F824758820000080213D\r\nS315801024603C118011241200030C0405A60260202161\r\nS315801024708E2491C40C0413DF2405FFFF0C0405A6DB\r\nS31580102480028020210C0405A602A020218E2491C44E\r\nS315801024900C041473261000011612FFF38FBF002C44\r\nS315801024A03C0480118FB500288FB400248FB3002090\r\nS315801024B08FB2001C8FB100188FB000142484884806\r\nS315801024C0080405A627BD003027BDFFD03C02801129\r\nS315801024D0AFB300203C038011245388803C028011C6\r\nS315801024E0AFB50028AFB40024AFB2001CAFB100184E\r\nS315801024F0AFB00014AFBF002C247488AC245588D09C\r\nS31580102500000080213C118011241200030C0405A6C2\r\nS31580102510026020218E2491C40C0413DF2405FFFF52\r\nS315801025200C0405A6028020210C0405A602A02021F9\r\nS315801025308E2491C40C041473261000011612FFF316\r\nS315801025408FBF002C3C0480118FB500288FB40024D7\r\nS315801025508FB300208FB2001C8FB100188FB000147B\r\nS31580102560248488F8080405A627BD00303C04801111\r\nS3158010257027BDFFD0AFBF002C0C0405A6248486E8A7\r\nS315801025800C04161B240400093C038011AC6291C80C\r\nS315801025903C0480113C028010244227C82484851074\r\nS315801025A0240500682406010024074E20AFA20010DF\r\nS315801025B0AFA00014AFA00018AFA0001CAFA00020E1\r\nS315801025C00C041901AFA00024240300011043002934\r\nS315801025D03C0480113C0480113C02801024422694D5\r\nS315801025E024848518240500672406010024074E20BC\r\nS315801025F0AFA20010AFA00014AFA00018AFA0001CAF\r\nS31580102600AFA000200C041901AFA000242403000100\r\nS315801026101043001C3C0480113C0480113C02801045\r\nS315801026202442271C2484875424050066240601002E\r\nS3158010263024074E20AFA20010AFA00014AFA0001840\r\nS31580102640AFA0001CAFA000200C041901AFA000247D\r\nS3158010265024030001104300038FBF002C03E0000801\r\nS3158010266027BD00303C0480112484875C080405A6AD\r\nS3158010267027BD00300C0405A6248487180804097623\r\nS315801026803C0480110C0405A6248487340804098729\r\nS315801026903C04801127BDFFD8AFB30020AFB2001C19\r\nS315801026A0AFB10018AFB00014AFBF00240C0416E30E\r\nS315801026B0240400023C03007F3C0280113472FFFF29\r\nS315801026C024538778000080213C11050002121024C3\r\nS315801026D01040000C261000011611FFFD0212102466\r\nS315801026E03C0480118FBF00248FB300208FB2001C52\r\nS315801026F08FB100188FB0001424848790080405A623\r\nS3158010270027BD00280C0405A6026020211611FFF0B3\r\nS3158010271002121024080409B93C04801127BDFFD089\r\nS31580102720AFB50028AFB40024AFB30020AFB2001C01\r\nS31580102730AFB10018AFB00014AFBF002C0C0416E375\r\nS31580102740240400033C038011247387C83C02801143\r\nS315801027503C038011245487F824758820000080213A\r\nS315801027603C118011241200030C0405A6026020215E\r\nS315801027708E2491C80C0413DF2405FFFF0C0405A6D4\r\nS31580102780028020210C0405A602A020218E2491C847\r\nS315801027900C041473261000011612FFF38FBF002C41\r\nS315801027A03C0480118FB500288FB400248FB300208D\r\nS315801027B08FB2001C8FB100188FB000142484884803\r\nS315801027C0080405A627BD003027BDFFD03C02801126\r\nS315801027D0AFB300203C038011245388803C028011C3\r\nS315801027E0AFB50028AFB40024AFB2001CAFB100184B\r\nS315801027F0AFB00014AFBF002C247488AC245588D099\r\nS31580102800000080213C118011241200030C0405A6BF\r\nS31580102810026020218E2491C80C0413DF2405FFFF4B\r\nS315801028200C0405A6028020210C0405A602A02021F6\r\nS315801028308E2491C80C041473261000011612FFF30F\r\nS315801028408FBF002C3C0480118FB500288FB40024D4\r\nS315801028508FB300208FB2001C8FB100188FB0001478\r\nS31580102860248488F8080405A627BD00304009800016\r\nS3158010287000000040000000400000004000000040C2\r\nS3158010288031290007392900021120001B00000000A1\r\nS315801028903C0980112529919A81290000112000096F\r\nS315801028A000000000BC9700000000000F0000000030\r\nS315801028B00000000000000000000000001000000E64\r\nS315801028C0000000003C098010252928E4BD34000052\r\nS315801028D00000000F00000000000000000000000053\r\nS315801028E000000000BC900000000000000000000006\r\nS315801028F0000000000000000014A00003000000008B\r\nS3158010290003E000080000000040086000000000405E\r\nS31580102910000000400000004000000040350900190A\r\nS31580102920392900190000000040896000000000402D\r\nS315801029300000004000000040000000403C0A0040BB\r\nS31580102940012A4825000000004089600000000040F0\r\nS3158010295000000040000000400000004035290004BF\r\nS315801029603929000400000000408960000000004002\r\nS315801029700000004000000040000000403C0980112B\r\nS315801029802529919B81290000152000170000000041\r\nS315801029904009700000000040000000400000004028\r\nS315801029A0000000403C0A8010254A29C8000000001B\r\nS315801029B0408A700000000040000000400000004087\r\nS315801029C0000000404200001800000000408970009E\r\nS315801029D00000004000000040000000400000004061\r\nS315801029E01000001500000000402970000000004013\r\nS315801029F00000004000000040000000403C0A8010AB\r\nS31580102A00254A2A200000000040AA700000000040DD\r\nS31580102A100000004000000040000000404200001806\r\nS31580102A200000000040A97000000000400000004037\r\nS31580102A300000004000000040000000004088600058\r\nS31580102A4000000040000000400000004000000040F0\r\nS31580102A5003E00008000000004009800000000040EC\r\nS31580102A6000000040000000400000004031290007AF\r\nS31580102A70392900021120000F000000003C09801146\r\nS31580102A802529919A81290000112000090000000053\r\nS31580102A90BC9700000000000F00000000000000003E\r\nS31580102AA0000000000000000010000002000000007E\r\nS31580102AB0BC9500000000000F03E000088080000035\r\nS31580102AC028C100081420002E0080102100A4502652\r\nS31580102AD0314A000315400033000518233063000384\r\nS31580102AE01060000500C3302388AA000000A32821A7\r\nS31580102AF0A88A00000083202130CA001F10CA001641\r\nS31580102B0000CA382300E538218CAF00008CA300045E\r\nS31580102B108CA800088CA9000C8CAB00108CAC00140F\r\nS31580102B208CAD00188CAE001CAC8F0000AC830004FA\r\nS31580102B30AC880008AC89000CAC8B001024A5002052\r\nS31580102B40AC8C0014AC8D00182484002014A7FFEEE2\r\nS31580102B50AC8EFFFC0140302130CA000310CA000839\r\nS31580102B6000CA382300E538218CAB000024A5000468\r\nS31580102B702484000414A7FFFCAC8BFFFC0140302199\r\nS31580102B8018C0000600C5382180AA000024A50001BF\r\nS31580102B902484000114A7FFFCA08AFFFF03E000082D\r\nS31580102BA0000000000004382330E7000310E0000620\r\nS31580102BB000C7302388AA000098AA000300A72821FE\r\nS31580102BC0A88A00000087202130CA000300CA382353\r\nS31580102BD000E5382188AB000098AB000324A50004DB\r\nS31580102BE02484000414A7FFFBAC8BFFFC1000FFE4C9\r\nS31580102BF00140302130A500FF28C100081420FFE0D5\r\nS31580102C000080102110A00005000418230005420042\r\nS31580102C1000A828250005440000A828253063000355\r\nS31580102C201060000300C33023A88500000083202194\r\nS31580102C3030C8000710C8000700C8382300E43821C0\r\nS31580102C4024840008AC85FFF81487FFFDAC85FFFC53\r\nS31580102C500100302130C800041100000300C8302361\r\nS31580102C60AC8500002484000418C0000400C43821F8\r\nS31580102C70248400011487FFFEA085FFFF03E000086F\r\nS31580102C800000000003E000080000000003E00008D8\r\nS31580102C900000000003E00008000000003C028011E4\r\nS31580102CA003E0000824428BC83C03801124638BC840\r\nS31580102CB00064182103E000088C6200003C02801139\r\nS31580102CC024428BC80044102103E00008AC45000064\r\nS31580102CD08C8200002403FFFE0043182403E00008C2\r\nS31580102CE0AC83000003E000080000000027BDFFD879\r\nS31580102CF03C028011AFB30020008098218C4491480B\r\nS31580102D00AFB2001C00A0902124050014AFB10018AA\r\nS31580102D10AFB00014AFBF00240C041D4000C0882142\r\nS31580102D2010400025004080213C05801124A58FC8C5\r\nS31580102D30004020210C040AB0240600148E040000E2\r\nS31580102D408E0500048E0600088E07001000121402ED\r\nS31580102D503248FFFF3229FFFF00111C020082202516\r\nS31580102D6000A3282500C8302500E93825AE040000C8\r\nS31580102D70AE050004AE060008AE0700100200202142\r\nS31580102D800C040A1B240500143C02801124428BC8B3\r\nS31580102D908FBF002402621021AC5000008FB3002038\r\nS31580102DA0000010218FB2001C8FB100188FB0001454\r\nS31580102DB003E0000827BD00288FBF002424020001ED\r\nS31580102DC08FB300208FB2001C8FB100188FB0001403\r\nS31580102DD003E0000827BD002827BDFFE0AFB100182B\r\nS31580102DE03C1180118E269160AFB000143C05801086\r\nS31580102DF03C10800036040180AFBF001C0C040AB062\r\nS31580102E0024A576C48E2591600C040A1B3604018095\r\nS31580102E100C041E52000000003C04FFBF3484FFFFE8\r\nS31580102E200C041E58004420248FBF001C0000102163\r\nS31580102E308FB100188FB0001403E0000827BD002062\r\nS31580102E403C028011244291D08C43000C24850020B2\r\nS31580102E508C790010004020210320000800003021CA\r\nS31580102E603C028011244292E027BDFFD88C43000C8F\r\nS31580102E70AFB2001C3C128011AFB300208C660018D4\r\nS31580102E8000A098218E459244AFB00014AFBF0024A5\r\nS31580102E9000808021AFB1001800C0F80900402021C1\r\nS31580102EA08E4392442404FFFF8C62003CAC70005821\r\nS31580102EB03442000212640014AC62003C3C11801152\r\nS31580102EC08E259250026510210045102B1440001556\r\nS31580102ED03C048011249092D08E02000C8E26925043\r\nS31580102EE08E4592448C4700100266302102002021C4\r\nS31580102EF000E0F80924A500108E4392448C62003CB1\r\nS31580102F0034420004AC62003C8FBF00248FB3002093\r\nS31580102F108FB2001C8FB100188FB0001403E0000828\r\nS31580102F2027BD0028249092D08E02000C00052823FD\r\nS31580102F308C43002C0060F8090200202108040BB68F\r\nS31580102F40AE2092508C83003C27BDFFE824020001FE\r\nS31580102F50AFB00010AFBF001410620008008080214F\r\nS31580102F602402FFFE8FBF001400621024AE02003CC4\r\nS31580102F708FB0001003E0000827BD00183C048011B4\r\nS31580102F80248492E08C82000C8E0600408C430010C4\r\nS31580102F900060F809020028218E03003C2402FFFEFF\r\nS31580102FA08FBF001400621024AE02003C8FB0001058\r\nS31580102FB003E0000827BD001827BDFFD8AFB1001861\r\nS31580102FC0AFB00014AFBF0024AFB30020AFB2001C67\r\nS31580102FD000A0882114A0000A00808021240400010A\r\nS31580102FE08FBF0024008010218FB300208FB2001C69\r\nS31580102FF08FB100188FB0001403E0000827BD002899\r\nS315801030003C048011248492E08C82000C3C13801145\r\nS315801030108C46001800C0F8098E6592448E639244DF\r\nS315801030208E04000C8C62003C8C87001034420002A7\r\nS315801030308C66004000602821AC62003CAC70005861\r\nS3158010304000E0F809020020212403FFFF1223002448\r\nS315801030503C1280118E459250022510210045102B6E\r\nS31580103060144000173C048011249092D08E02000CDC\r\nS315801030708E4692508E6592448C4700100200202115\r\nS315801030800226302100E0F80924A500108E639244B0\r\nS315801030908FBF00248C62003C000020213442000443\r\nS315801030A0AC62003C8FB30020008010218FB2001CD0\r\nS315801030B08FB100188FB0001403E0000827BD0028D8\r\nS315801030C0249092D08E02000C000528238C43002C6D\r\nS315801030D00060F8090200202108040C1BAE409250B3\r\nS315801030E008040BF8000020218C82003C27BDFFE8E5\r\nS315801030F0AFB00010AFBF00141440000800808021CC\r\nS315801031003C048011248492E08C82000C8C4300183D\r\nS315801031100060F809020028218E02003C8FBF00143F\r\nS3158010312034420001AE02003C8FB0001003E000086C\r\nS3158010313027BD001827BDFFE0AFB0001400808021A6\r\nS315801031408C840058AFB100188C82000C8C43001808\r\nS31580103150AFBF001C0060F809020028218E03003CD6\r\nS31580103160004088212402FFFD006228243063000479\r\nS31580103170AE05003C1060000AAE00004C3C04801185\r\nS31580103180248492D08C83000C2402FFFB00A210248E\r\nS315801031908C660018AE02003C00C0F80926050010A7\r\nS315801031A08FBF001C022010218FB100188FB0001421\r\nS315801031B003E0000827BD00208C83003C27BDFFE07C\r\nS315801031C0AFB10018AFBF001CAFB000141060002163\r\nS315801031D0008088213062000214400019000000002F\r\nS315801031E00000802130620004104000083C048011E9\r\nS315801031F03C048011248492D08C82000C8C4300185D\r\nS315801032000060F809262500103C048011248491D092\r\nS315801032108C82000C8C46001800C0F80926250020E8\r\nS315801032208FBF001C2403000802001021AE23003C2F\r\nS315801032308FB000148FB1001803E0000827BD00205E\r\nS315801032400C040C4D000000000040802108040C790D\r\nS315801032508E23003C3C048011248492E08C82000CE6\r\nS31580103260022028218C4300180060F8090000802174\r\nS315801032703C048011248491D08C82000C8C460018DA\r\nS3158010328000C0F809262500208FBF001C24030008E3\r\nS3158010329002001021AE23003C8FB000148FB10018AD\r\nS315801032A003E0000827BD00203C028011244292E0F2\r\nS315801032B027BDFFD88C43000CAFB2001C3C12801186\r\nS315801032C08E4592448C660018AFB30020AFB10018BB\r\nS315801032D000809821AFBF0024AFB000140040202199\r\nS315801032E000C0F8093C1180118E259250026510217C\r\nS315801032F00045102B144000153C048011249092D068\r\nS315801033008E02000C8E2692508E4592448C47001069\r\nS31580103310026630210200202100E0F80924A5001061\r\nS315801033208E4392448FBF00248C62003C8FB3002062\r\nS31580103330344200048FB2001C8FB100188FB0001475\r\nS31580103340AC62003C03E0000827BD0028249092D090\r\nS315801033508E02000C000528238C43002C0060F8098F\r\nS315801033600200202108040CC0AE2092508C82004CA2\r\nS3158010337027BDFFD8AFB10018AFB00014AFBF00247F\r\nS31580103380AFB30020AFB2001C008080211040002A0D\r\nS3158010339000A088218C8300403C028011245392E047\r\nS315801033A0241200020223102B104000140220182130\r\nS315801033B08E02003C10400018AE1100401452FFFAE5\r\nS315801033C00223102B8E040058020028218C82000CB8\r\nS315801033D08C43001C0060F809022030218E02004CBC\r\nS315801033E010400002000000008C5000188E03004030\r\nS315801033F00223102B1440FFEE022018218FBF0024C9\r\nS315801034008FB300208FB2001C8FB100188FB00014BC\r\nS3158010341003E0000827BD00288E62000C0260202180\r\nS315801034208C43001C020028210060F80902203021FC\r\nS3158010343008040CE98E0300408C8300400065102B35\r\nS315801034401040FFD63C0280118C83003C1060001027\r\nS31580103450AE050040240200021462FFE98FBF0024EB\r\nS315801034608C840058020028218C82000C8C59001CF8\r\nS31580103470022030218FBF00248FB300208FB2001C12\r\nS315801034808FB100188FB000140320000827BD0028C4\r\nS315801034903C048011248492E08C82000C0200282146\r\nS315801034A008040D1C8C59001C3C04801127BDFFD0CC\r\nS315801034B08C8391943C0280113C088011AFB1001826\r\nS315801034C0245192D08C8591908D0292502467000160\r\nS315801034D08E26000C00E3182B00651821244200016B\r\nS315801034E08CC50020AC839190AFB50028AFB4002472\r\nS315801034F0AFB30020AFB2001CAC879194AFBF002C45\r\nS31580103500AFB00014AD02925000A0F809022020211D\r\nS315801035103C038011247592E03C1280112414FFFB29\r\nS31580103520241300018E22000C8C4300240060F809BD\r\nS31580103530022020211040001B2450FFF08E03003003\r\nS315801035408E4290841462FFF7000000008E03003CC8\r\nS31580103550006010210074182430420002106000268A\r\nS31580103560AE03003C14400018000000001460FFED0C\r\nS31580103570000000008EA2000C8E0600408C430010C6\r\nS31580103580020028210060F80902A020218E22000C5A\r\nS315801035908C4300240060F809022020211440FFE7A4\r\nS315801035A02450FFF08FBF002C8FB500288FB40024D5\r\nS315801035B08FB300208FB2001C8FB100188FB000140B\r\nS315801035C003E0000827BD00300C040C4D02002021BA\r\nS315801035D00200202110530010240500010C0416440B\r\nS315801035E0000000008E03003C1460FFCEAE130080F6\r\nS315801035F008040D5E8EA2000C020020210C041644D5\r\nS31580103600000028218E03003C1460FFC600000000D5\r\nS3158010361008040D5E8EA2000C0C04164424050001CD\r\nS315801036208E03003C1460FFBFAE13008008040D5E4D\r\nS315801036308EA2000C27BDFFD03C0280113C03801166\r\nS31580103640AFB60028AFB50024AFB40020AFB3001CCE\r\nS31580103650AFB20018AFB10014AFBF002CAFB00010DE\r\nS3158010366000808821245492D0247692E02413FFFD82\r\nS31580103670241200012415FFFB8E22000C8C430014AB\r\nS315801036800060F8090220202100408021004020217E\r\nS315801036901040001B240500018E02003CAE00004C39\r\nS315801036A000531024AE02003C0C041644AE12008067\r\nS315801036B08E03003C306200041440001B02802021DF\r\nS315801036C01460FFED000000008EC2000C8E060040D4\r\nS315801036D08C430010020028210060F80902C02021C6\r\nS315801036E08E22000C8C4300140060F80902202021E1\r\nS315801036F000408021004020211440FFE7240500016E\r\nS315801037008FBF002C8FB600288FB500248FB4002071\r\nS315801037108FB3001C8FB200188FB100148FB00010B9\r\nS3158010372003E0000827BD00308E82000C0075182437\r\nS315801037308C460018AE03003C00C0F8092605001020\r\nS315801037408E03003C1460FFCC0000000008040DB30B\r\nS315801037508EC2000C8C82000C27BDFFE88C430014AF\r\nS31580103760AFBF00140060F809AFB000100040802190\r\nS315801037708C42003C2403FFFD00431024AE02003C23\r\nS31580103780000028210C041644020020218E05003CDE\r\nS3158010379030A20004144000060000000010A00010A3\r\nS315801037A08FBF00148FB0001003E0000827BD0018EB\r\nS315801037B03C048011248492D08C83000C2402FFFB5D\r\nS315801037C000A210248C6600182605001000C0F80987\r\nS315801037D0AE02003C8E05003C14A0FFF28FBF001491\r\nS315801037E03C048011248492E08C82000C8E0600406A\r\nS315801037F08C590010020028218FBF00148FB0001042\r\nS315801038000320000827BD001827BDFFD03C02801179\r\nS315801038103C038011AFB50028AFB40024AFB30020AD\r\nS31580103820AFB2001CAFB10018AFBF002CAFB0001400\r\nS3158010383000808821245392D0247592E02412FFFDB3\r\nS315801038402414FFFB8E22000C8C4300140060F809B0\r\nS3158010385002202021004080210040202110400019A4\r\nS31580103860000028218E02003C005210240C041644BD\r\nS31580103870AE02003C8E03003C306200041440001AF5\r\nS31580103880026020211460FFEF000000008EA2000C61\r\nS315801038908E0600408C430010020028210060F80933\r\nS315801038A002A020218E22000C8C4300140060F8099F\r\nS315801038B00220202100408021004020211440FFE971\r\nS315801038C0000028218FBF002C8FB500288FB40024CC\r\nS315801038D08FB300208FB2001C8FB100188FB00014E8\r\nS315801038E003E0000827BD00308E62000C0074182497\r\nS315801038F08C460018AE03003C00C0F809260500105F\r\nS315801039008E03003C1460FFCF0000000008040E24D4\r\nS315801039108EA2000C27BDFFE0AFB00014008080217E\r\nS3158010392024840008AFBF001C0C040D8DAFB10018A5\r\nS3158010393092030004240200011062000600000000B9\r\nS315801039408FBF001C8FB100188FB0001403E00008E1\r\nS3158010395027BD00208E1100181220FFF93C0280111D\r\nS315801039608C4490848E2300301464FFF68FBF001C25\r\nS3158010397092030005306200081040000D306200048A\r\nS315801039808E2200482442FFFF14400007AE220048D2\r\nS315801039908E2500448E220040104500030000000052\r\nS315801039A00C040CDB022020219203000530620004F7\r\nS315801039B01040FFE48FBF001C8E22005C2442FFFF64\r\nS315801039C0AE22005C8E23005C1460FFDE8FBF001C6D\r\nS315801039D08E2200601040FFDB262400608FBF001C03\r\nS315801039E08FB100188FB0001408040E0227BD002076\r\nS315801039F08C82003C2403FFFE0043102427BDFFE881\r\nS31580103A00AFB00010AC82003C00808021AFBF0014A4\r\nS31580103A100C041644000028218E02003C304300041A\r\nS31580103A20146000073C0480111040000F3C04801184\r\nS31580103A308FBF00148FB0001003E0000827BD001858\r\nS31580103A40248492D08C82000CAE03003C8C430018E8\r\nS31580103A500060F809260500108E02003C1440FFF520\r\nS31580103A608FBF00143C048011248492E08C82000C59\r\nS31580103A708E0600408C590010020028218FBF00143A\r\nS31580103A808FB000100320000827BD001827BDFE4800\r\nS31580103A908FA301C82409FFF0AFB2019C2463000FE5\r\nS31580103AA024D2000F02499024006918240060302126\r\nS31580103AB024A8000F024318213C02801101094024DA\r\nS31580103AC0AFB701B0AFB301A00080B8213C1380110D\r\nS31580103AD002402021AC4391E4000028213C03801150\r\nS31580103AE03C028011AFBF01B4AE6891E0AC7291E830\r\nS31580103AF0AFB601ACAFB501A8AFB401A4AFB1019810\r\nS31580103B00AFB00194AC4092500C040AFD00E98024B9\r\nS31580103B108E7191E027B60030021180233C148011FB\r\nS31580103B203C15801102C02021000028212406016046\r\nS31580103B30AE9091EC0C040AFDAEA092448E8391EC6B\r\nS31580103B402633FE9002139821007218232402000354\r\nS31580103B503C05801102602021AFA30020AFA2002473\r\nS31580103B60240300042631FE7024A5892C0000302100\r\nS31580103B702407000624020005AFB10014AFB7001861\r\nS31580103B80AFA30028AFB30010AFB2001C0C041819F5\r\nS31580103B90AFA2002C026020213C028011AEB6924466\r\nS31580103BA00C0417F5AC5391F08FBF01B48FB701B0E9\r\nS31580103BB08FB601AC8FB501A88FB401A48FB301A0C5\r\nS31580103BC08FB2019C8FB101988FB0019403E00008E9\r\nS31580103BD027BD01B83C02801127BDFFC88C45908C4B\r\nS31580103BE03C048011AFB30030AFB2002CAFB10028C7\r\nS31580103BF02412000524110004AFB000243C13801158\r\nS31580103C0024100003248491D0240600012407000286\r\nS31580103C10AFBF0034AFB00010AFB100140C041B213D\r\nS31580103C20AFB200188E6591043C048011248492E012\r\nS31580103C302406000124070002AFB00010AFB10014B3\r\nS31580103C400C041B21AFB200188E6591043C048011C0\r\nS31580103C50248492D02406000124070002AFB00010FD\r\nS31580103C60AFB100140C041B21AFB200188FBF003403\r\nS31580103C708FB300308FB2002C8FB100288FB0002404\r\nS31580103C8008040F2227BD00383C028011240400014D\r\nS31580103C90AC44918C3C0380113C028011A0609189C8\r\nS31580103CA0A040918803E000080000000027BDFFD0E7\r\nS31580103CB0AFB40020AFB000103C1480113C108011BE\r\nS31580103CC09203918992829188AFB600283C16801112\r\nS31580103CD0AFB50024AFBF002CAFB3001CAFB2001835\r\nS31580103CE0AFB10014104300178ED591703C0280112D\r\nS31580103CF0245392F03C128011241100019202918972\r\nS31580103D0092039189304200FF0002108002621021D6\r\nS31580103D1024630004306300FF8C4500088C46000045\r\nS31580103D208C440004A203918900C0F80900000000A9\r\nS31580103D30AE51918C92039189928291881443FFEFB0\r\nS31580103D40000000008FBF002CAED591708FB400207C\r\nS31580103D508FB600288FB500248FB3001C8FB2001841\r\nS31580103D608FB100148FB0001003E0000827BD00301B\r\nS31580103D7008040F5C0000000027BDFFD8AFB30020F9\r\nS31580103D80AFB2001CAFB1001800A09021008088212E\r\nS31580103D9000C09821AFBF00240C041F9BAFB0001445\r\nS31580103DA03C03801190659188004030219062918803\r\nS31580103DB024420004304200FFA06291883C028011A8\r\nS31580103DC090649188904391891464000330A200FF17\r\nS31580103DD008040F74000000003C108011000210804F\r\nS31580103DE000C02021261092F00C041FA80202802108\r\nS31580103DF08FBF00243C028011AE130008AE11000064\r\nS31580103E00AE1200048FB300208FB2001C8FB1001841\r\nS31580103E108FB00014AC40918C03E0000827BD0028B9\r\nS31580103E2027BDFFE0AFB20018AFB1001400A09021FB\r\nS31580103E3000808821AFBF001C0C041F9BAFB0001000\r\nS31580103E403C03801190659188004030219062918862\r\nS31580103E5024420004304200FFA06291883C02801107\r\nS31580103E6090649188904391891464000330A200FF76\r\nS31580103E7008040F9C000000003C1080110002108086\r\nS31580103E8000C02021261092F00C041FA80202802167\r\nS31580103E908FBF001C3C028011AE120004AE110000D0\r\nS31580103EA08FB200188FB100148FB00010AC40918C77\r\nS31580103EB003E0000827BD002027BDFFE0AFB1001842\r\nS31580103EC0AFB00014AFBF001C0C041F9B008088216C\r\nS31580103ED03C038011906591880040302190629188D2\r\nS31580103EE030B000FF24420004304200FFA062918867\r\nS31580103EF03C028011906491889043918914640003E8\r\nS31580103F000000000008040FC1000000000C041FA868\r\nS31580103F1000C020213C03801100101080246392F091\r\nS31580103F208FBF001C006218213C028011AC7100000A\r\nS31580103F308FB000148FB10018AC40918C03E000084C\r\nS31580103F4027BD002027BDFFC8AFB70030AFB6002C05\r\nS31580103F50AFB50028AFB2001CAFBF0034AFB4002499\r\nS31580103F60AFB30020AFB10018AFB0001400C0B021BD\r\nS31580103F700080902100A0B82104C0003100E0A82163\r\nS31580103F803C0280118C439244249100048C62005030\r\nS31580103F903C14801124420001AC6200502413FFFFB0\r\nS31580103FA08E4300008E828FDC024020210220282141\r\nS31580103FB01462002102A030210C0419A00000000018\r\nS31580103FC01053FFF7004080211040002A02E0202184\r\nS31580103FD08C4300040076102B0060882102C2880A68\r\nS31580103FE0260500080C040AB0022030210240202148\r\nS31580103FF002003021264500240C0419FF24070001F5\r\nS315801040000C041698000000008FBF00340220102187\r\nS315801040108FB700308FB6002C8FB500288FB4002450\r\nS315801040208FB300208FB2001C8FB100188FB0001490\r\nS3158010403003E0000827BD00380C0416980000000025\r\nS315801040408FBF003424110001022010218FB7003059\r\nS315801040508FB6002C8FB500288FB400248FB3002024\r\nS315801040608FB2001C8FB100188FB0001403E00008C7\r\nS3158010407027BD00388E4200542411000124420001CD\r\nS315801040800C041698AE420054080410038FBF0034F7\r\nS3158010409027BDFFC8AFB7002C3C1780118EE2924C1B\r\nS315801040A0AFBE0030AFB60028AFB3001CAFB100145E\r\nS315801040B0AFBF0034AFB50024AFB40020AFB2001844\r\nS315801040C0AFB000100080882100A0F02100C0982198\r\nS315801040D01440003400E0B0213C0280118C4492449C\r\nS315801040E08C83005024630001AC8300502632002458\r\nS315801040F03C1580112414FFFF8E2300008EA28FDCC6\r\nS3158010410002202021024028211462001602C030218C\r\nS315801041108E22004C0053102B144000138EE2924CCA\r\nS315801041200C0419A0000000001054FFF300408021F9\r\nS315801041301040002F03C0282102603021244400083B\r\nS315801041400C040AB0AC5300048FA70048022020212B\r\nS31580104150020030210C0419FF26250004104000159A\r\nS315801041608EE2924C8EE2924C1040002600000000A7\r\nS315801041708FBF0034240200018FBE00308FB7002C11\r\nS315801041808FB600288FB500248FB400208FB3001C03\r\nS315801041908FB200188FB100148FB0001003E00008A2\r\nS315801041A027BD003810E0FFD2263200240804105DA7\r\nS315801041B08FBF003410400022000000000000102144\r\nS315801041C08FBF00348FBE00308FB7002C8FB600287B\r\nS315801041D08FB500248FB400208FB3001C8FB20018C7\r\nS315801041E08FB100148FB0001003E0000827BD00388F\r\nS315801041F08E2200508EE3924C244200011460FFDC24\r\nS31580104200AE2200500C041698000000008FBF0034B8\r\nS31580104210240200018FBE00308FB7002C8FB6002885\r\nS315801042208FB500248FB400208FB3001C8FB2001876\r\nS315801042308FB100148FB0001003E0000827BD00383E\r\nS315801042400C0416980000000008041070000010215D\r\nS315801042503C0280118C46924427BDFFC88CC2005CFC\r\nS31580104260AFB6002C24420001ACC2005C8CC3005057\r\nS315801042703C1680118C8700008EC28FDC246300016F\r\nS31580104280AFB70030AFB2001CAFBF0034AFB5002857\r\nS31580104290AFB40024AFB30020AFB10018AFB0001494\r\nS315801042A000809021ACC3005010E2001100A0B8210C\r\nS315801042B00C041698000000000C0416800000000004\r\nS315801042C08FBF0034240200018FB700308FB6002CC8\r\nS315801042D08FB500288FB400248FB300208FB2001CB6\r\nS315801042E08FB100188FB0001403E0000827BD003886\r\nS315801042F00C041B60000080210C041698265500249F\r\nS315801043008E4200480202102A26540004000088219A\r\nS31580104310144000062413FFFF080410E32403000151\r\nS3158010432010530011028028212610000102402021FE\r\nS3158010433002A028210C0419A0022030211440FFF875\r\nS3158010434002402021028028210C0419A0022030214D\r\nS315801043501040000900000000105300070240202181\r\nS3158010436026100001028028210C0419A00220302179\r\nS315801043701440FFF9000000008E4200480202102A05\r\nS315801043801440FFEA24110001240300010280202139\r\nS315801043903C0280110C041A51AC4392400C041A5101\r\nS315801043A002A020210C041E9B0000000016E0000FC6\r\nS315801043B08EC48FDC0C041680000000008FBF003482\r\nS315801043C0000010218FB700308FB6002C8FB50028D3\r\nS315801043D08FB400248FB300208FB2001C8FB10018C9\r\nS315801043E08FB0001403E0000827BD00380C041B664C\r\nS315801043F002402821080410ED0000000008041094E3\r\nS315801044002405000127BDFFE0AFB000183C108011D5\r\nS315801044108E0291F410400007AFBF001C8E0291F4FB\r\nS315801044208FBF001C2C4200018FB0001803E00008DB\r\nS3158010443027BD00203C0280118C448FDC3C07801005\r\nS315801044403C0280103C0380102442448C24634250EA\r\nS3158010445024E746842405005800003021AFA20010BE\r\nS315801044600C041B47AFA300141440FFEC2402000178\r\nS31580104470AE0291F48E0291F48FBF001C2C42000183\r\nS315801044808FB0001803E0000827BD00203C02801181\r\nS315801044908C4391F427BDFFB8AFBE0040AFB3002C5C\r\nS315801044A0AFB10024AFBF0044AFB7003CAFB6003801\r\nS315801044B0AFB50034AFB40030AFB20028AFB0002033\r\nS315801044C00080982100A0F021AFA60050AFA700541D\r\nS315801044D0146000058FB100580C0411010000000013\r\nS315801044E01440001A8FBF004402602021000028214A\r\nS315801044F00C040AFD240600588FA300543062000174\r\nS315801045001440001E000000003C0280118C50908CDC\r\nS315801045103C1280118E4590C8241700032415000480\r\nS3158010452024160005266400040200302124070002A8\r\nS31580104530AFB70010AFB500140C041B21AFB600182E\r\nS31580104540104000218E4590C88FBF00442402000180\r\nS315801045508FBE00408FB7003C8FB600388FB50034C1\r\nS315801045608FB400308FB3002C8FB200288FB1002407\r\nS315801045708FB0002003E0000827BD00481040FFE3FD\r\nS315801045803C0280113C0280118C5091043C128011A7\r\nS315801045908E4590C8241700032415000424160005A0\r\nS315801045A0266400040200302124070002AFB70010F1\r\nS315801045B0AFB500140C041B21AFB600181440FFE3EE\r\nS315801045C08FBF00448E4590C8267400240200302187\r\nS315801045D00280202124070002AFB70010AFB5001467\r\nS315801045E00C041B21AFB600181440FFD88FBF0044AF\r\nS315801045F01BC0000E8FA20050000080212443000BA8\r\nS315801046002402FFFC00629024022030212610000133\r\nS3158010461002602021028028210C0419FF2407000142\r\nS31580104620021E182A1460FFF8023288218FA30054C4\r\nS315801046303C028011AE7E0048AE6300448C458FDC10\r\nS315801046408FA20050026020210C041B5BAE62004CCE\r\nS315801046508FBF0044000010218FBE00408FB7003CF2\r\nS315801046608FB600388FB500348FB400308FB3002CDE\r\nS315801046708FB200288FB100248FB0002003E000088D\r\nS3158010468027BD00483C0280118C4391F427BDFFC89A\r\nS31580104690AFB40030AFB20028AFB10024AFBF003442\r\nS315801046A0AFB3002CAFB000200080882100A09021ED\r\nS315801046B01460000500C0A0210C0411010000000048\r\nS315801046C0144000208FBF00342402FFFC2645000BC7\r\nS315801046D000A2282470B128023C1380118E648FDCCE\r\nS315801046E00C041B7927A600181040000A0040802170\r\nS315801046F0004020218FA2001802202821024030215C\r\nS31580104700028038210C041123AFA200101440000A35\r\nS315801047108E648FDC8FBF0034020010218FB400307E\r\nS315801047208FB3002C8FB200288FB100248FB0002059\r\nS3158010473003E0000827BD00380C041B660200282100\r\nS315801047408FBF003400008021020010218FB400300A\r\nS315801047508FB3002C8FB200288FB100248FB0002029\r\nS3158010476003E0000827BD00388C8200081040000343\r\nS31580104770AC82001808040DD52484000803E00008D4\r\nS315801047800000000027BDFFD0AFB60028AFB50024CB\r\nS31580104790AFB40020AFB3001CAFB20018AFB1001495\r\nS315801047A0AFB00010AFBF002C0080802100A0B021D8\r\nS315801047B0249100083C1580113C14801124130001AB\r\nS315801047C0241200020C041F9B0000000000402821C8\r\nS315801047D0004020218E0300008EA28FE01462001804\r\nS315801047E0000000008E020018104000223C0280114A\r\nS315801047F00C041FA8AE939240022020210C040BEECD\r\nS3158010480002C028211440002A000000000C041E9BC0\r\nS31580104810000000001052FFEB8FBF002C8FB60028CF\r\nS315801048208FB500248FB400208FB3001C8FB2001870\r\nS315801048308FB100148FB0001003E0000827BD003040\r\nS315801048400C041FA8000000008FBF002C240200015A\r\nS315801048508FB600288FB500248FB400208FB3001C2C\r\nS315801048608FB200188FB100148FB0001003E00008CB\r\nS3158010487027BD00308C43924400A020210C041FA831\r\nS31580104880AE0300188FBF002C000010218FB60028B1\r\nS315801048908FB500248FB400208FB3001C8FB2001800\r\nS315801048A08FB100148FB0001003E0000827BD0030D0\r\nS315801048B00C041E9B000000008FBF002C24020001F8\r\nS315801048C08FB600288FB500248FB400208FB3001CBC\r\nS315801048D08FB200188FB100148FB0001003E000085B\r\nS315801048E027BD003027BDFFE8AFB00010AFBF001462\r\nS315801048F00C041F9B00808021004028213C028011DF\r\nS315801049008C448FE08E0300001064000800000000C5\r\nS315801049100C041FA800A02021240200018FBF0014C0\r\nS315801049208FB0001003E0000827BD00188E02000823\r\nS315801049301040000FAE02001800A0202124030001B1\r\nS315801049403C0280110C041FA8AC4392400C040DD578\r\nS31580104950260400080C041E9B000000008FBF001464\r\nS31580104960000010218FB0001003E0000827BD00184A\r\nS315801049700C041FA800A02021080412470000102153\r\nS3158010498027BDFFE8AFB000103C1080118E02922830\r\nS3158010499014400015AFBF00143C028010244248E436\r\nS315801049A03C0480113C038010AC828FE424634784DE\r\nS315801049B03C0480113C028010AC83900424424FB09A\r\nS315801049C03C0480113C038010AC8290242463476899\r\nS315801049D03C0480113C028010AC83904424424FA842\r\nS315801049E03C038011AC6290640C0414B50000000086\r\nS315801049F01440000224020001AE0292288E029228F0\r\nS31580104A008FBF00142C4200018FB0001003E0000805\r\nS31580104A1027BD00183C0280118C43922827BDFFE0E9\r\nS31580104A20AFB20018AFB10014AFB00010AFBF001C0A\r\nS31580104A300080802100A090211460000500C088218C\r\nS31580104A400C041260000000001440001B8FBF001C75\r\nS31580104A50020020210C041413024028211440001651\r\nS31580104A608FBF001C16200012240200013C02801108\r\nS31580104A708C4392443C028011AE030018A2120005AA\r\nS31580104A80A20000048C458FE0A60000060C041B5B78\r\nS31580104A9002002021000010218FBF001C8FB2001849\r\nS31580104AA08FB100148FB0001003E0000827BD0020DE\r\nS31580104AB0122200078FBF001C240200018FB200183B\r\nS31580104AC08FB100148FB0001003E0000827BD0020BE\r\nS31580104AD03C028011AE000018A2120005A20000044C\r\nS31580104AE08C458FE0A60000060C041B5B020020217B\r\nS31580104AF0080412A6000010213C0280118C439228D3\r\nS31580104B0027BDFFD8AFB2001CAFB10018AFBF0024CD\r\nS31580104B10AFB30020AFB00014008088211460000568\r\nS31580104B2000A090210C0412600000000014400018B0\r\nS31580104B308FBF00243C1380110C041B998E648FE068\r\nS31580104B401040000700408021022028210240302199\r\nS31580104B500C0412850040202114400009000000003A\r\nS31580104B608FBF0024020010218FB300208FB2001C4B\r\nS31580104B708FB100188FB0001403E0000827BD0028FD\r\nS31580104B808E648FE00C041B66020028218FBF0024E0\r\nS31580104B9000008021020010218FB300208FB2001CEC\r\nS31580104BA08FB100188FB0001403E0000827BD0028CD\r\nS31580104BB027BDFFE0AFB10018AFB0001400A0882168\r\nS31580104BC0AFBF001C0C041F9B008080210040282151\r\nS31580104BD03C0280118C448FE08E0300001064000923\r\nS31580104BE0000000000C041FA800A020212402000150\r\nS31580104BF08FBF001C8FB100188FB0001403E000081F\r\nS31580104C0027BD00208E0200181440000E00A020211F\r\nS31580104C10240300013C0280110C041FA8AC4392406F\r\nS31580104C20260400080C040BEE022028211440000FE5\r\nS31580104C30000000000C041E9B00000000080412FDFA\r\nS31580104C408FBF001C2442FFFFAE0200180C041FA861\r\nS31580104C5000A020218FBF001C000010218FB10018EA\r\nS31580104C608FB0001403E0000827BD00200C041E9BA3\r\nS31580104C7000000000080412FC240200018C82000847\r\nS31580104C80104000030000000008040DD5248400089D\r\nS31580104C908C8200182442000103E00008AC820018C0\r\nS31580104CA027BDFFE8AFB00010AFBF00140C041F9BE8\r\nS31580104CB000808021004028213C0280118C448FE0A6\r\nS31580104CC08E03000010640008000000000C041FA86A\r\nS31580104CD000A02021240200018FBF00148FB0001085\r\nS31580104CE003E0000827BD00188E0200081040000E51\r\nS31580104CF02403000100A020213C0280110C041FA86F\r\nS31580104D00AC4392400C040DD5260400080C041E9B5F\r\nS31580104D10000000008FBF0014000010218FB000101B\r\nS31580104D2003E0000827BD00188E02001800A020217D\r\nS31580104D30244200010C041FA8AE0200180804133682\r\nS31580104D400000102127BDFFE830A2000C104000059E\r\nS31580104D50AFBF00148FBF00142402000103E00008C7\r\nS31580104D6027BD001824020002A0820004AC86001819\r\nS31580104D703C028011A08500058C458FE00C041B5BDE\r\nS31580104D80A48000068FBF00140000102103E00008E5\r\nS31580104D9027BD001827BDFFE8AFB000103C1080116A\r\nS31580104DA08E02922C10400007AFBF00148E02922CF8\r\nS31580104DB08FBF00142C4200018FB0001003E0000852\r\nS31580104DC027BD00183C02801024424CA03C04801160\r\nS31580104DD03C038010AC828FEC24634BB03C04801172\r\nS31580104DE03C028010AC83900C24424FB03C0480115E\r\nS31580104DF03C038010AC82902C24634C7C3C04801144\r\nS31580104E003C028010AC83904C24424FA83C03801106\r\nS31580104E100C0414B5AC62906C1440FFE424020001BB\r\nS31580104E20AE02922C8E02922C8FBF00142C4200015F\r\nS31580104E308FB0001003E0000827BD00183C028011D7\r\nS31580104E408C43922C27BDFFE0AFB20018AFB100148F\r\nS31580104E50AFB00010AFBF001C0080802100A0882159\r\nS31580104E601460000500C090210C041365000000003A\r\nS31580104E70144000068FBF001C020020210C0414135E\r\nS31580104E8002202821104000078FBF001C2402000139\r\nS31580104E908FB200188FB100148FB0001003E0000895\r\nS31580104EA027BD002002002021022028210240302127\r\nS31580104EB08FB200188FB100148FB0001008041351F0\r\nS31580104EC027BD00203C0280118C43922C27BDFFD831\r\nS31580104ED0AFB2001CAFB10018AFBF0024AFB3002033\r\nS31580104EE0AFB00014008088211460000500A09021C6\r\nS31580104EF00C04136500000000144000188FBF0024B6\r\nS31580104F003C1380110C041B998E648FE010400007AF\r\nS31580104F100040802102202821024030210C04138F6A\r\nS31580104F200040202114400009000000008FBF00249B\r\nS31580104F30020010218FB300208FB2001C8FB1001891\r\nS31580104F408FB0001403E0000827BD00288E648FE020\r\nS31580104F500C041B66020028218FBF002400008021CC\r\nS31580104F60020010218FB300208FB2001C8FB1001861\r\nS31580104F708FB0001403E0000827BD0028908200043B\r\nS31580104F803C03801130420007000210802463900495\r\nS31580104F90004310218C5900000320000800000000F7\r\nS31580104FA003E000082402000103E00008000000006E\r\nS31580104FB027BDFFE0AFB10018AFB00014AFBF001C23\r\nS31580104FC00C041F9B00808821004080213C028011A8\r\nS31580104FD08C448FE08E2300001064000300000000D4\r\nS31580104FE00C041FA8020020218E2200081040000FFA\r\nS31580104FF0240300013C028011020020210C041FA80A\r\nS31580105000AC4392400C040E02262400080C041E9B0E\r\nS31580105010000000008FBF001C000010218FB1001807\r\nS315801050208FB0001403E0000827BD00200C041FA8D1\r\nS31580105030020020218FBF001C000010218FB10018A4\r\nS315801050408FB0001403E0000827BD002027BDFFD8CD\r\nS3158010505030A5000314A00011AFBF00243C028011BC\r\nS315801050608C45908C24020003AFA200102403000408\r\nS315801050702402000524840008240600012407000267\r\nS31580105080AFA300140C041B21AFA20018000010213E\r\nS315801050908FBF002403E0000827BD002824020001EA\r\nS315801050A014A2FFFC8FBF00243C028011080414193F\r\nS315801050B08C459104008028213C0280118C448FE01D\r\nS315801050C08CA3000027BDFFE810640005AFBF001455\r\nS315801050D08FBF00142402000103E0000827BD0018CA\r\nS315801050E090A600043C03801130C200070002108095\r\nS315801050F024639024004310218C4400001080FFF418\r\nS315801051003C028011244290640006188000621821A7\r\nS315801051100C040F888C6400008FBF001400001021CF\r\nS3158010512003E0000827BD00183C0280118C43924092\r\nS31580105130146000093C0380119082000430420007FD\r\nS315801051400002108024638FE4004310218C590000E4\r\nS3158010515003200008000000000804142D0000000041\r\nS31580105160008028213C0280118C448FE08CA30000A3\r\nS3158010517027BDFFE810640005AFBF00148FBF001471\r\nS315801051802402000103E0000827BD001890A4000443\r\nS315801051903C03801130820007246690440002108000\r\nS315801051A0004610218C4300001060FFF4000410802C\r\nS315801051B0004610210C040F888C4400008FBF001409\r\nS315801051C00000102103E0000827BD00183C02801162\r\nS315801051D08C439240146000093C0380119082000435\r\nS315801051E0304200070002108024638FE400431021B0\r\nS315801051F08C59000003200008000000000804145891\r\nS315801052000000000027BDFFD8AFB30020AFB2001C4E\r\nS31580105210AFB10018AFB0001400808821AFBF002452\r\nS315801052203C1280110C041F9B00A098210040802105\r\nS315801052308E2300008E428FE0106200082402000147\r\nS315801052408FBF00248FB300208FB2001C8FB100183F\r\nS315801052508FB0001403E0000827BD00280C041B60E3\r\nS3158010526002202021240300013C028011020020210B\r\nS315801052700C041FA8AC4392400C040E45022020213A\r\nS315801052803C0380118C6492448C82005C2442000121\r\nS31580105290AC82005C0C041E9B0000000016600005AA\r\nS315801052A08E448FE00C0416800000000008041490D1\r\nS315801052B0000010210C041B6602202821080414A962\r\nS315801052C000000000080414810000282108041481BD\r\nS315801052D02405000127BDFFE0AFB000183C108011F7\r\nS315801052E08E02923010400007AFBF001C8E029230A3\r\nS315801052F08FBF001C2C4200018FB0001803E00008FD\r\nS3158010530027BD00203C0280118C448FE03C02801027\r\nS31580105310244252042405001C00003021000038214C\r\nS31580105320AFA200140C041B47AFA000101440FFF06E\r\nS315801053308E0292308FBF001C24020001AE02923082\r\nS315801053408FB0001803E0000827BD002027BDFFE8B6\r\nS31580105350AFB0001000808021AFBF00140C040BEE9C\r\nS3158010536024840008144000118FBF00149202000597\r\nS3158010537030420008104000093C0280118C43924450\r\nS31580105380AC70004C8E0400188C6500408C820040F6\r\nS3158010539000A2102B144000098FBF001400001021AA\r\nS315801053A08FB0001003E0000827BD0018240200010A\r\nS315801053B08FB0001003E0000827BD00180C040CDB2A\r\nS315801053C0000000008FBF0014000010218FB0001065\r\nS315801053D003E0000827BD001827BDFFE0AFB1001815\r\nS315801053E03C1180118E229234AFB0001430420001ED\r\nS315801053F0AFBF001C14400017008080218E2292348B\r\nS31580105400304200041440000E3C0280118E229234E9\r\nS3158010541030420002104000068FBF001C3C028011F3\r\nS315801054208C4492440C040E02248400608FBF001CAE\r\nS315801054308FB100188FB0001408041E9B27BD002062\r\nS315801054408C4492440C040CDB8C85004408041504AF\r\nS315801054508E2292340C040DD5248400088E020018F6\r\nS31580105460AC40004C920300053062000410400007E7\r\nS31580105470306200088E0300188C62005C24420001A2\r\nS31580105480AC62005C92030005306200081040FFDCBD\r\nS315801054908E2292348E0300188C62004824420001BA\r\nS315801054A0080414FFAC62004827BDFFE0AFB10018B6\r\nS315801054B0AFB0001400A08821AFBF001C0C041F9B46\r\nS315801054C000808021004028213C0280118C448FE08E\r\nS315801054D08E03000010640009000000000C041FA851\r\nS315801054E000A02021240200018FBF001C8FB100185C\r\nS315801054F08FB0001403E0000827BD00208E0400182A\r\nS315801055001080001D3C0280118C4392441083002C25\r\nS315801055102403000100A020213C0280110C041FA846\r\nS31580105520AC439240020020210C0414D3022028217F\r\nS3158010553014400009000000000C041E9B00000000AF\r\nS315801055408FBF001C000010218FB100188FB000147F\r\nS3158010555003E0000827BD00200C041E9B00000000FD\r\nS315801055608FBF001C240200018FB100188FB0001469\r\nS3158010557003E0000827BD0020920600058C44924463\r\nS3158010558030C3000810600004AE0400188C820048F6\r\nS3158010559024420001AC82004830C20004104000044E\r\nS315801055A0000000008C82005C24420001AC82005C0A\r\nS315801055B00C041FA800A020210804153A0000102111\r\nS315801055C09602000600A02021244200010C041FA888\r\nS315801055D0A60200060804153A0000102127BDFFE038\r\nS315801055E0AFB00014AFBF001C008080210C041F9B3D\r\nS315801055F0AFB10018004028213C0280118C448FE006\r\nS315801056008E030000106400093C0280110C041FA850\r\nS3158010561000A02021240200018FBF001C8FB100182A\r\nS315801056208FB0001403E0000827BD00208C469244FA\r\nS315801056308E0300181466FFF500000000960200061F\r\nS315801056401440002E2442FFFF920400053082000889\r\nS3158010565010400007000088218CC200482442FFFFBA\r\nS315801056601040002BACC2004892040005000088212F\r\nS315801056708E02000836230001308400040062880BF5\r\nS3158010568010800018AE0200188CC2005C2442FFFF06\r\nS31580105690ACC2005C8CC3005C146000120000000079\r\nS315801056A08CC200601040000F0000000036310002EE\r\nS315801056B02402000100A020213C0380110C041FA8A5\r\nS315801056C0AC6292403C02801102002021AC5192348F\r\nS315801056D08FBF001C8FB100188FB00014080414F609\r\nS315801056E027BD00201620FFF2000000000C041FA822\r\nS315801056F000A020210804158600001021A6020006AD\r\nS315801057000C041FA800A02021080415860000102173\r\nS31580105710241100040804159C9204000527BDFFE897\r\nS3158010572024030001AFBF0014A0830004A0850005E8\r\nS31580105730AC8000183C0380118C658FE00C041B5BD9\r\nS31580105740A48000068FBF00140000102103E000081B\r\nS3158010575027BD001827BDFFE8AFB000103C108011A0\r\nS315801057608E02923810400007AFBF00148E02923816\r\nS315801057708FBF00142C4200018FB0001003E0000888\r\nS3158010578027BD00183C028010244255DC3C04801151\r\nS315801057903C038010AC828FE8246354A83C028011AD\r\nS315801057A00C0414B5AC4390081440FFF02402000199\r\nS315801057B0AE0292388E0292388FBF00142C420001AE\r\nS315801057C08FB0001003E0000827BD00183C0280113E\r\nS315801057D08C43923827BDFFE0AFB10018AFB00014EC\r\nS315801057E0AFBF001C008088211060001600A08021A9\r\nS315801057F032020008104000033202000310400006F7\r\nS315801058008FBF001C022020210C04141302002821B3\r\nS31580105810104000068FBF001C240200018FB10018B3\r\nS315801058208FB0001403E0000827BD0020022020213D\r\nS31580105830020028218FB100188FB00014080415C7F4\r\nS3158010584027BD00200C0415D5000000001040FFE98C\r\nS31580105850320200088FBF001C240200018FB100188D\r\nS315801058608FB0001403E0000827BD00203C02801191\r\nS315801058708C43923827BDFFE0AFB10014AFBF001C38\r\nS31580105880AFB20018AFB000101460000500808821F8\r\nS315801058900C0415D500000000144000168FBF001CA4\r\nS315801058A03C1280110C041B998E448FE01040000628\r\nS315801058B000408021022028210C0415F3004020216D\r\nS315801058C014400008000000008FBF001C0200102149\r\nS315801058D08FB200188FB100148FB0001003E000084B\r\nS315801058E027BD00208E448FE00C041B660200282101\r\nS315801058F08FBF001C00008021020010218FB200187B\r\nS315801059008FB100148FB0001003E0000827BD00206F\r\nS3158010591003E00008AC8500E014800003008030218D\r\nS315801059203C0280118C46924410C000060000000094\r\nS315801059303C0280118C4490848CC300301064000328\r\nS3158010594024A4000F03E00008000010218CC7007803\r\nS315801059508CC200742403FFF0008320240047102398\r\nS315801059600044102B1440FFF70000000000E41021C3\r\nS3158010597003E00008ACC2007814800007008028215C\r\nS315801059803C0280118C4492441480000300802821AC\r\nS3158010599003E0000800A010213C0380118C820030A7\r\nS315801059A08C649084004410260002280B03E00008C3\r\nS315801059B000A010213C03801103E000088C62924401\r\nS315801059C03C0280118C449244000010218C8300503C\r\nS315801059D024630001AC83005003E00008000000003F\r\nS315801059E03C0280118C449244000010218C83005C10\r\nS315801059F024630001AC83005C03E000080000000013\r\nS31580105A003C0280118C45924427BDFFE88CA3005C34\r\nS31580105A101060000FAFBF00148CA2005C2442FFFF01\r\nS31580105A20ACA2005C8CA3005C146000092403000106\r\nS31580105A308CA400603C02801110800003AC4392401D\r\nS31580105A400C040E0224A400600C041E9B00000000AF\r\nS31580105A508FBF00140000102103E0000827BD001836\r\nS31580105A603C0280118C45924427BDFFE88CA30050E0\r\nS31580105A7010600010AFBF00148CA200502442FFFFAC\r\nS31580105A80ACA200508CA300501460000A24030001BD\r\nS31580105A908CA400603C02801110800004AC439240BC\r\nS31580105AA08CA2005C10400007000000000C041E9BB6\r\nS31580105AB0000000008FBF00140000102103E00008D2\r\nS31580105AC027BD00180C040E0224A400600C041E9B33\r\nS31580105AD000000000080416AE8FBF00143C0380112E\r\nS31580105AE08C62924027BDFFE8AFBF00141040000BB8\r\nS31580105AF000802821108000053C0280118C449084FF\r\nS31580105B008CA30030106400173C0480108FBF0014E3\r\nS31580105B102402000103E0000827BD00181480000449\r\nS31580105B20240200013C0280118C459244240200011B\r\nS31580105B3010A00006AC6292403C0280118C44908486\r\nS31580105B408CA300301064000B000000000C041E9B18\r\nS31580105B5000000000240200018FBF001403E000083B\r\nS31580105B6027BD00180C040F88248430E8080416D644\r\nS31580105B70000010210C040C3A00A020210C041E9B5E\r\nS31580105B8000000000080416D60000102127BDFFE093\r\nS31580105B90240300013C028011AFBF001CAFB1001876\r\nS31580105BA0AFB0001414800019AC4392403C108011A1\r\nS31580105BB0261092E08E02000C3C1180118E259244A4\r\nS31580105BC08C4300180060F809020020218E2592442B\r\nS31580105BD08E02000C8CA600408C4300100060F809E1\r\nS31580105BE0020020210C041E9B000000008FBF001CA9\r\nS31580105BF038440002240300010064100A8FB1001893\r\nS31580105C008FB0001403E0000827BD00200C040CAAF6\r\nS31580105C10000000000C041E9B000000008FBF001CBB\r\nS31580105C2038440002240300010064100A8FB1001862\r\nS31580105C308FB0001403E0000827BD002027BDFFC8E1\r\nS31580105C40AFBE0030AFB50024AFBF0034AFB7002C65\r\nS31580105C50AFB60028AFB40020AFB3001CAFB20018A7\r\nS31580105C60AFB10014AFB00010AFA5003C00C0F0215A\r\nS31580105C701480004D00E0A8213C0280118C51924482\r\nS31580105C800C041F9B000000001220005000402821A9\r\nS31580105C903C1380118E2300308E6290841462004BE8\r\nS31580105CA0263200603C148011241000013C168011AD\r\nS31580105CB0241700028E22005C1440000700A02021C9\r\nS31580105CC08E22003C14400045000000008E220050B9\r\nS31580105CD010400042000000000C041FA8AE909240B5\r\nS31580105CE016A000268EC29244122200240240202141\r\nS31580105CF00C040BEE03C02821144000720000000033\r\nS31580105D000C041E9B000000001050000F00000000C5\r\nS31580105D1010570027000000000C041F9B0000000095\r\nS31580105D20004028218E2300308E6290841062FFE11D\r\nS31580105D30000000000C041FA800A0202124030001ED\r\nS31580105D403C028011AC439170240200018FBF003455\r\nS31580105D508FBE00308FB7002C8FB600288FB50024E9\r\nS31580105D608FB400208FB3001C8FB200188FB100142F\r\nS31580105D708FB0001003E0000827BD00388E22006027\r\nS31580105D80AE20005CAE2000501040000300000000E2\r\nS31580105D900C040E02024020210C041E9B0000000001\r\nS31580105DA00804174600000000080417200080882188\r\nS31580105DB00C041F9B00000000004028218E23003019\r\nS31580105DC08E6290841062FFBB000000000C041FA836\r\nS31580105DD000A0202108041753240200013C108011D2\r\nS31580105DE08E0292448C43005C24630001AC43005CB9\r\nS31580105DF08E24005C24840001AE24005C1051003592\r\nS31580105E0000A02021240200010C041FA8AE8292401B\r\nS31580105E100C040C3A022020210C041E9B000000006A\r\nS31580105E208E0392448C62005024420001AC62005072\r\nS31580105E308FA2003C1040000B000000008E2200381C\r\nS31580105E4030420004104000073C0280118C4391F0D0\r\nS31580105E50122300243C0280118E6490840C041B66ED\r\nS31580105E602625FFF00C041F9B0000000000408021B7\r\nS31580105E700C041B602624003024020001020020211D\r\nS31580105E800C041FA8AE8292400C040C6E02202021B6\r\nS31580105E908E23006010600003000000000C040E02C8\r\nS31580105EA0024020210C041E9B000000000C04169852\r\nS31580105EB0000000000C041680000000000804175330\r\nS31580105EC0000010210C041E9B0000000008041753CC\r\nS31580105ED0240200010C041FA800A0202108041789A1\r\nS31580105EE08E0392443C0380118C4491EC0C041C105C\r\nS31580105EF08C6591E008041799000000003C0280111F\r\nS31580105F008C43924427BDFFE88C6500508C62003824\r\nS31580105F1024A5000134420002AC640084AC650050B4\r\nS31580105F20AC620038AFBF00140C0416980000000055\r\nS31580105F308FBF001400002021240500012406FFFFD6\r\nS31580105F40000038210804170F27BD00183C02801165\r\nS31580105F508C43924027BDFFE8AFBF00141060000B42\r\nS31580105F6000802821108000053C0280118C4490848A\r\nS31580105F708CA30030106400133C04801024020001AE\r\nS31580105F808FBF001403E0000827BD00181080000999\r\nS31580105F903C0380118C8200308C6590841445FFF808\r\nS31580105FA0240200010C040BD1000000000C041E9B7F\r\nS31580105FB0000000008FBF00140000102103E00008CD\r\nS31580105FC027BD00180C040F8824842F44080417E07A\r\nS31580105FD000001021080417D30000000027BDFFE041\r\nS31580105FE0AFB000183C1080118E02923C1040000712\r\nS31580105FF0AFBF001C8E02923C8FBF001C2C4200014A\r\nS315801060008FB0001803E0000827BD00203C028011E5\r\nS315801060108C4490843C0780103C0280103C03801096\r\nS315801060202442606424635C3C24E762C824050170C2\r\nS3158010603024060030AFA200100C041B47AFA3001437\r\nS315801060401440FFEC24020001AE02923C8E02923C78\r\nS315801060508FBF001C2C4200018FB0001803E000088F\r\nS3158010606027BD00203C0280118C43923C27BDFFA89F\r\nS31580106070AFB50050AFB4004CAFB30048AFB20044D8\r\nS31580106080AFB10040AFB0003CAFBF0054008080215C\r\nS3158010609000A0A82100C0902100E098218FB100684F\r\nS315801060A0146000058FB4006C0C0417F70000000014\r\nS315801060B01440007C8FBF00543C0280118C459104A3\r\nS315801060C024020001AE000050AE130038AE02003C30\r\nS315801060D0AE120044AE120040AE000048AE0000542E\r\nS315801060E0AE00005C8FA20074AE000034AFA2002018\r\nS315801060F08FA20078AE000058AFA200248FA2007C39\r\nS3158010610024030004AFA200288FA20080260400601A\r\nS31580106110AFA2002C8FA2008424060001AFA200300B\r\nS315801061202402000324070002AFA2001024020005F7\r\nS31580106130AFA300140C041B21AFA200180234202335\r\nS31580106140AE040078AE04007CAE110074028030215B\r\nS315801061500C040AFD000028213C0380118C64908871\r\nS315801061603C02801024427CACAE0400C8AE0200CC47\r\nS31580106170AE0000D0AE0000D4AE000158AE00015C77\r\nS31580106180000018212404FF80020310212463FFFCE1\r\nS315801061901464FFFDAC4001542622FFEC3C038011B1\r\nS315801061A0AE02014C8FA2007024631160AE030148C9\r\nS315801061B0AE020070AE000080AE000084AE00008893\r\nS315801061C0AE00008CAE000090AE000094AE00009839\r\nS315801061D0AE00009CAE0000A0AE0000A400002821F6\r\nS315801061E027A700202406FFEC00E510218C44001020\r\nS315801061F00225182124A5FFFC14A6FFFBAC64FFFC26\r\nS315801062008FA200208FA30024AE0200E8AE0300EC1C\r\nS315801062108FA200288FA3002CAE0200F0AE0300F4EC\r\nS315801062203C02801124030001020020210C040B90F3\r\nS31580106230AC4392403C0280118C4590840C041B5BCD\r\nS31580106240260400300C041E9B0000000012A0000BD8\r\nS315801062508FBF00540C0404D802A0202124450001CD\r\nS315801062600C041646020020210040202102A028217D\r\nS315801062700C0404D0004088218FBF0054AE11003426\r\nS31580106280000010218FB500508FB4004C8FB300489A\r\nS315801062908FB200448FB100408FB0003C03E00008FD\r\nS315801062A027BD0058240200018FB500508FB4004CD2\r\nS315801062B08FB300488FB200448FB100408FB0003C3E\r\nS315801062C003E0000827BD005827BDFFB0AFB50044D6\r\nS315801062D0AFB40040AFB3003CAFBF004CAFB6004880\r\nS315801062E0AFB20038AFB10034AFB000300080982123\r\nS315801062F000A0A0211080002A00C0A82124F0000F41\r\nS315801063002402FFF03C168011020280248EC49084F1\r\nS31580106310020028210C041B790000302100508821AE\r\nS31580106320004090218FA2006002602821AFA2001841\r\nS315801063308FA2006402803021AFA2001C8FA2006859\r\nS3158010634036A70004AFA200208FA2006C0220202165\r\nS31580106350AFA200248FA20070AFB00014AFA20028A5\r\nS315801063608FA20074AFB100100C041819AFA2002CC4\r\nS31580106370144000168FBF004C022010218FB60048A3\r\nS315801063808FB500448FB400408FB3003C8FB2003875\r\nS315801063908FB100348FB0003003E0000827BD005065\r\nS315801063A08FBF004C240200018FB600488FB5004481\r\nS315801063B08FB400408FB3003C8FB200388FB1003459\r\nS315801063C08FB0003003E0000827BD00508EC4908443\r\nS315801063D00C041B66024028218FBF004C0000102140\r\nS315801063E08FB600488FB500448FB400408FB3003C01\r\nS315801063F08FB200388FB100348FB0003003E00008C0\r\nS3158010640027BD005027BDFFD08FA200408FA3004428\r\nS31580106410AFA20010AFA300148FA200488FA3004C28\r\nS31580106420AFA20018AFA3001C8FA200508FA30054F8\r\nS31580106430AFB00028AFBF002CAFA200200C0418B25A\r\nS31580106440AFA3002414400007004080218FBF002C8A\r\nS3158010645024100001020010218FB0002803E00008EC\r\nS3158010646027BD00300C0417D3004020218FBF002C8D\r\nS31580106470020010218FB0002803E0000827BD0030ED\r\nS315801064803C03801103E000088C62919427BDFFE8DD\r\nS31580106490AFBF0014AFB000100C041F9B008080218A\r\nS315801064A0004020213C028011AC5091948FBF001483\r\nS315801064B08FB0001027BD001808041FA8AC4091901B\r\nS315801064C03C0380118C62924027BDFFE81440000780\r\nS315801064D0AFBF0014240200010C040D2AAC62924056\r\nS315801064E08FBF001408041E9B27BD00183C04801023\r\nS315801064F08FBF0014248434A808040FAE27BD00185B\r\nS3158010650003E000080000102103E0000824020001C7\r\nS3158010651027BDFFE0AFB000108C900000AFB200181E\r\nS31580106520AFB10014AFBF001C00A09021160000066A\r\nS3158010653000C08821080419578FBF001C8E100000D8\r\nS315801065401200000702001021020020210240F809E3\r\nS31580106550022028211440FFF98FBF001C0200102151\r\nS315801065608FB200188FB100148FB0001003E00008AE\r\nS3158010657027BD002003E000080000102127BDFFE89A\r\nS31580106580AFBF00140C041FDD000000008FBF001485\r\nS315801065900000102103E0000827BD00188C8200003F\r\nS315801065A0104000030000000008041FEE00000000E9\r\nS315801065B003E00008000000002402FFFF10C2000361\r\nS315801065C000A0302108041FCC0000000008041FBC66\r\nS315801065D00000282127BDFFE8AFBF00140C041FB6AA\r\nS315801065E0000000008FBF00140000102103E0000897\r\nS315801065F027BD001803E000080000102127BDFFD832\r\nS31580106600AFB0001400808021AFB30020AFB2001C61\r\nS31580106610AFB10018AFBF002400A090210C041F9BBF\r\nS3158010662000C088218E1000001600000600409821B8\r\nS3158010663008041996000000008E1000001200000653\r\nS3158010664000000000020020210240F80902202821C3\r\nS315801066501440FFF9000000000C041FA802602021DE\r\nS315801066608FBF0024020010218FB300208FB2001C30\r\nS315801066708FB100188FB0001403E0000827BD0028E2\r\nS3158010668027BDFFC8AFB2001800A09021AFBE003062\r\nS31580106690AFB7002C0080F021AFBF0034AFB6002812\r\nS315801066A0AFB50024AFB40020AFB3001CAFB1001457\r\nS315801066B0AFB000100C041F9B00C0B8218E430000A1\r\nS315801066C01460004C0040202112E000272651001053\r\nS315801066D03C1680112415000124140002080419C3E5\r\nS315801066E03C138011144000128E628FDC8FC3000021\r\nS315801066F0146200108FBF00340C041F9B0000000032\r\nS315801067008E50000016000027004020210C041FA880\r\nS31580106710AED59240022020210C040BEE02E02821F7\r\nS315801067200C041E9B000000001454FFEE00000000B5\r\nS315801067308FBF003400008021020010218FBE0030F0\r\nS315801067408FB7002C8FB600288FB500248FB4002009\r\nS315801067508FB3001C8FB200188FB100148FB0001049\r\nS3158010676003E0000827BD00380C041FA80000802114\r\nS315801067708FBF0034020010218FBE00308FB7002CDF\r\nS315801067808FB600288FB500248FB400208FB3001CDD\r\nS315801067908FB200188FB100148FB0001003E000087C\r\nS315801067A027BD0038020018218E4200088C63000035\r\nS315801067B02442FFFFAE4200080C041FA8AE4300001F\r\nS315801067C08FBF0034020010218FBE00308FB7002C8F\r\nS315801067D08FB600288FB500248FB400208FB3001C8D\r\nS315801067E08FB200188FB100148FB0001003E000082C\r\nS315801067F027BD0038080419EA0060802127BDFFE014\r\nS31580106800AFB20018AFB10014AFB00010AFBF001C0C\r\nS315801068100080902100A0882114E0001D00C08021F6\r\nS315801068200C041F9BACC00000004020218E2200006B\r\nS31580106830104000343C0580118E220004AC500000BC\r\nS315801068408E2200088CA3924024420001AE300004B0\r\nS315801068501060001CAE2200080C041FA80000000067\r\nS315801068603C04801002402821022030210C040F5E47\r\nS31580106870248469288FBF001C000010218FB2001855\r\nS315801068808FB100148FB0001003E0000827BD0020E0\r\nS315801068900C041F9B00000000004020218E22000067\r\nS315801068A01040001BAE020000AE3000008E220008A1\r\nS315801068B03C0580118CA39240244200011460FFE6AF\r\nS315801068C0AE2200088E220010104000132402000110\r\nS315801068D00C041FA8ACA292400C040DD526240010DF\r\nS315801068E00C041E9B000000008FBF001C00001021AE\r\nS315801068F08FB200188FB100148FB0001003E000081B\r\nS3158010690027BD0020AE30000408041A2BAE300000DC\r\nS3158010691008041A2AAE3000040C041FA800000000D8\r\nS3158010692008041A3B8FBF001C8CA200101040000375\r\nS315801069300000000008040DD524A4001003E0000810\r\nS315801069400000000027BDFFE8AFBF00140C040D8DBA\r\nS31580106950248400108FBF00140000102103E000086B\r\nS3158010696027BD001827BDFFE8AFB00010008080213A\r\nS31580106970AFBF00140C040D8D248400100C041C9CD5\r\nS31580106980020020218FBF0014000010218FB000104C\r\nS3158010699003E0000827BD001827BDFFD82402000396\r\nS315801069A0AC800000AC800004AC8000082403000496\r\nS315801069B0AFA20010248400102402000524060001D2\r\nS315801069C024070002AFBF0024AFA300140C041B21C0\r\nS315801069D0AFA200188FBF00240000102103E000082A\r\nS315801069E027BD002827BDFFE0AFB1001800808821A1\r\nS315801069F0AFB00014AFBF001C0C041D43240400204C\r\nS31580106A001040000600408021022028210C041A66BE\r\nS31580106A100040202114400007000000008FBF001C9A\r\nS31580106A20020010218FB100188FB0001403E0000807\r\nS31580106A3027BD00200C041C9C0200202108041A8704\r\nS31580106A400000802103E000080000102103E0000808\r\nS31580106A502402000103E000082402000103E000087C\r\nS31580106A600000000008041A9F8C8400008C820008A5\r\nS31580106A7000451021AC8200088C8400001480FFFB36\r\nS31580106A800000000003E000080000000010A00005D0\r\nS31580106A903C0380118C8200088C64925003E00008BD\r\nS31580106AA00044102303E000088C82000827BDFFE015\r\nS31580106AB0AFB000108C900000AFB20018AFB10014C8\r\nS31580106AC0AFBF001C00A090211600000600C08821D0\r\nS31580106AD008041ABE8FBF001C8E100000120000071B\r\nS31580106AE002001021020020210240F80902202821EC\r\nS31580106AF01440FFF98FBF001C020010218FB20018BE\r\nS31580106B008FB100148FB0001003E0000827BD00205D\r\nS31580106B108C820000144000033C03801103E00008BF\r\nS31580106B20000010218C4200088C65925000A2102B18\r\nS31580106B301440FFFA0000000008041FEE0000000059\r\nS31580106B408C820000104000030000000008041FEE35\r\nS31580106B500000000003E000080000000027BDFFE8E9\r\nS31580106B60AFBF00140C041FDD000000008FBF00149F\r\nS31580106B700000102103E0000827BD00188C83000058\r\nS31580106B8000A0382114600006ACA6000808041AF08C\r\nS31580106B908C8500048C6300001060000800000000E3\r\nS31580106BA08C62000800C2102B1040FFFA0000000013\r\nS31580106BB08C65000408041FBC00E030218C8500041D\r\nS31580106BC008041FBC00E030218CA2000427BDFFE022\r\nS31580106BD0AFB20018AFB10014AFB00010AFBF001C39\r\nS31580106BE000A080210080902100C0882110400005DF\r\nS31580106BF08CA300008C42000800C2102B1440000E9B\r\nS31580106C0002402021106000068FBF001C8C62000895\r\nS31580106C100051102B14400008024020218FBF001C09\r\nS31580106C20AE1100088FB200188FB100148FB000100B\r\nS31580106C3003E0000827BD00200C041FDD0200282178\r\nS31580106C400240202102002821022030218FBF001C03\r\nS31580106C508FB200188FB100148FB0001008041ADF9D\r\nS31580106C6027BD002027BDFFE8AFBF00140C041FB658\r\nS31580106C70000000008FBF00140000102103E0000800\r\nS31580106C8027BD00188CA2003400E050218FA3001479\r\nS31580106C908FA70010104500038FA8001803E0000886\r\nS31580106CA024020001AFA30010AFA800148C59000471\r\nS31580106CB000C02821AC82000C03200008014030213E\r\nS31580106CC03C0280118C4491403C0280118C830014CC\r\nS31580106CD08C459148246300013C028010AC830014DB\r\nS31580106CE024426E7024030030AC830008AC820020EE\r\nS31580106CF03C0380103C02801024636D1C24426D641A\r\nS31580106D00AC820028AC850004AC830024AC80001CC7\r\nS31580106D10AC84000003E00008000010213C028011C2\r\nS31580106D208C4891403C0280118D0300148C49914807\r\nS31580106D30246300018FA20010AD0300148FA30014EA\r\nS31580106D40AC820024AC890004AC850008AC86001C9B\r\nS31580106D50AC870020AC830028AC88000003E00008D4\r\nS31580106D600000102103E00008240200018CA2001408\r\nS31580106D70AC8500002442000103E00008ACA2001498\r\nS31580106D808C830000AC8000008C62001824420001C5\r\nS31580106D9003E00008AC62001827BDFFE8AFB0001012\r\nS31580106DA08CB0000012040007AFBF0014240300014A\r\nS31580106DB08FBF0014006010218FB0001003E0000810\r\nS31580106DC027BD00180C041C168E0400041440FFF70F\r\nS31580106DD0000018218E0200102442000108041B6C4A\r\nS31580106DE0AE02001027BDFFE03C028011AFB0001448\r\nS31580106DF0008080218E0300008C449140AFB1001832\r\nS31580106E00AFBF001C00A010211064000800C08821AC\r\nS31580106E10000028218FBF001C00A010218FB1001800\r\nS31580106E208FB0001403E0000827BD00208E050008EF\r\nS31580106E308E0400040C041D40004528211040FFF5E7\r\nS31580106E40004028218E02000C244200011220FFF1FE\r\nS31580106E50AE02000C8E02000800A2102108041B85C9\r\nS31580106E60AE2200000000282108041B790000302182\r\nS31580106E7027BDFFD8AFB000103C108011AFB40020F2\r\nS31580106E800080A0218E049140AFB3001CAFB20018D1\r\nS31580106E90AFB1001400C09021AFBF002400A088219C\r\nS31580106EA00C041B9900E098211040000F00403021FF\r\nS31580106EB08E0591403C0380118CA20014ACD2002028\r\nS31580106EC024420001ACD300248C649148ACA20014F7\r\nS31580106ED08FA20038ACC40004ACD40008ACD1001C1E\r\nS31580106EE0ACC20028ACC500008FBF002400C01021A2\r\nS31580106EF08FB400208FB3001C8FB200188FB100148E\r\nS31580106F008FB0001003E0000827BD002803E00008BA\r\nS31580106F102402000127BDFFE0AFB000143C108011A1\r\nS31580106F20AFB10018000028210080882124060001B6\r\nS31580106F30AFBF001C0C041285260492848FBF001CE0\r\nS31580106F4026109284AE3000288FB100188FB00014AE\r\nS31580106F5003E0000827BD002027BDFFE0AFB000107A\r\nS31580106F603C028011008080218E0300008C44914465\r\nS31580106F70AFBF001CAFB2001810640008AFB1001488\r\nS31580106F80240200018FBF001C8FB200188FB100142D\r\nS31580106F908FB0001003E0000827BD002024A2000354\r\nS31580106FA02403FFFC004388240225282300C5102BC8\r\nS31580106FB01040002100C51023000090218E02001081\r\nS31580106FC02442000C000210400242102B1440FFECA9\r\nS31580106FD0262300082642FFF0006228212404000898\r\nS31580106FE034420001AE240004AE200000AE31000809\r\nS31580106FF0AC620004ACA400048E040028ACA300008C\r\nS315801070000C0413DF2405FFFF262600102604000437\r\nS315801070100C041FBC000028218E02000C001218429E\r\nS31580107020004310218E0400280C041473AE02000C49\r\nS3158010703008041BE10000102108041BEF0043902474\r\nS31580107040008010213C04801100A0302124849258A5\r\nS3158010705008041BD60040282127BDFFE0AFB00010E2\r\nS315801070603C028011008080218E0300008C44914464\r\nS31580107070AFB20018AFBF001CAFB100141064000887\r\nS3158010708000A090218FBF001C240200018FB200182F\r\nS315801070908FB100148FB0001003E0000827BD0020C8\r\nS315801070A010A000278FBF001C8E0400280C0413DF4D\r\nS315801070B02405FFFF8E030014306300101460002631\r\nS315801070C02651FFF88E45FFF88E2300048CA200040B\r\nS315801070D03042000110400050000390422402FFFE0F\r\nS315801070E000621024AE2200048CA30004001210400B\r\nS315801070F00062182100A08821ACA30004000330424E\r\nS3158010710000061040022228218CA40004308200013F\r\nS3158010711014400034000410428E0200188E03001CA6\r\nS315801071202442FFFF007218238E040028ACB10000A1\r\nS31580107130AE0200180C041473AE03001C8FBF001C23\r\nS31580107140000010218FB200188FB100148FB000107C\r\nS3158010715003E0000827BD00203C0280118C43924436\r\nS315801071608E0400288C62005024420001AC620050CC\r\nS315801071700C04147300000000322300031460001006\r\nS31580107180000000008E2400040004184200032840EA\r\nS3158010719030A200031440000A000000008E02000C8A\r\nS315801071A00062102B1040000630820001144000044B\r\nS315801071B0022510218C4300001223001F00000000BE\r\nS315801071C08E0400280C0413DF2405FFFF0C04169888\r\nS315801071D0000000000C0414738E04002808041C227E\r\nS315801071E08FBF001C00461021000210403063000142\r\nS315801071F00062182524A50008AE2300040C041FDDA8\r\nS31580107200260400048E220004000210420002104060\r\nS3158010721008041C460222282134620001AE22000492\r\nS3158010722026040004000028210C041FBC2626000812\r\nS3158010723008041C3F8E2300048E43FFF88C620004E2\r\nS315801072400002104200021040006218211623FFDC53\r\nS31580107250000000008E0400280C0413DF2405FFFFB5\r\nS315801072600C0416980000000008041C328E45FFF8A6\r\nS315801072703C0280110080282108041C168C449148F9\r\nS3158010728027BDFFB8AFB100243C0280110080882151\r\nS315801072908E2300008C449144AFB00020AFBF0044D1\r\nS315801072A0AFBE0040AFB7003CAFB60038AFB50034C4\r\nS315801072B0AFB40030AFB3002CAFB200281064000E0C\r\nS315801072C000C08021000010218FBF00448FBE004077\r\nS315801072D08FB7003C8FB600388FB500348FB400302E\r\nS315801072E08FB3002C8FB200288FB100248FB000206E\r\nS315801072F003E0000827BD00482403FFFC24A20003F6\r\nS3158010730000431024244200080045182B1460FFED1A\r\nS31580107310000230428E2300108E24002800C3102BCA\r\nS315801073200060B0212405FFFF0C0413DF00C2B00AF1\r\nS315801073308E340004001010421280006702C2B821F9\r\nS315801073403C027FFF3442FFFC02C210210002104033\r\nS31580107350AFA20010262300042602FFFF0010802310\r\nS31580107360AFA2001CAFA300140016F04008041CE264\r\nS31580107370AFB0001812C400538FA3001C8E94000067\r\nS3158010738012800055000000002685FFF88CA20004AC\r\nS315801073900002204202E4182B1060FFF60004104011\r\nS315801073A000A298218FA200108E3500100262182339\r\nS315801073B08FA20018006280242612FFF80245182337\r\nS315801073C0000317C200431021000220430095182B9A\r\nS315801073D01460004500041840AE05FFF88CA2000426\r\nS315801073E03042000100431025ACA200040272102323\r\nS315801073F0005E1023001518400043102B1040001F0C\r\nS3158010740002701823246300083463000100031042BD\r\nS315801074100002104002421021AE430004AC5200001C\r\nS315801074201240FFD62403FFFE8E4200040043102430\r\nS31580107430AE4200048E2300208E2600242463000191\r\nS31580107440AE2300208E4200048E2300188E25001C49\r\nS315801074500002104200A2282100C2302124630001BC\r\nS315801074608E240028AE260024AE2300180C04147334\r\nS31580107470AE25001C08041CB22642000837C3000142\r\nS315801074800003804200108040025080210270102339\r\nS3158010749034420001AE430004AE0200048FA40014EF\r\nS315801074A0AE1200000C041FCC260500088E020004C4\r\nS315801074B000021042000210400202802108041D08BA\r\nS315801074C0AE120000028310241040FFB50004104055\r\nS315801074D008041CE08E9400000C0414738E2400287B\r\nS315801074E008041CB20000102114B2FFA48FA400144B\r\nS315801074F00C041FDD0200282108041CFC02721023D4\r\nS315801075003C02801108041CA08C46914C3C028011D0\r\nS315801075100080282108041D408C44914827BDFFE037\r\nS31580107520AFB20018AFB1001400C0902100A088211E\r\nS315801075302406002C00002821AFBF001CAFB000101D\r\nS315801075400C040AFD008080213C0380118C649154C8\r\nS315801075503C0280118C43915024020008AE04001422\r\nS31580107560AE0200100060F809020020210C041FB63C\r\nS31580107570260400043C0380118C6591440C041B5B2B\r\nS3158010758002002021020020210220282102403021E1\r\nS315801075908FBF001C8FB200188FB100148FB00010EF\r\nS315801075A008041BD627BD002027BDFFE03C028011B2\r\nS315801075B0AFB20018008090218C449144AFB1001472\r\nS315801075C0AFB00010AFBF001C0C041B9900A088211F\r\nS315801075D010400005004080210240282102203021E1\r\nS315801075E00C041D47004020218FBF001C0200102173\r\nS315801075F08FB200188FB100148FB0001003E000080E\r\nS3158010760027BD002027BDFFD8AFB000183C108011D1\r\nS315801076108E029254AFB20020AFB1001CAFBF0024CF\r\nS31580107620008088211040000900A090218E0292547B\r\nS315801076308FBF00242C4200018FB200208FB1001C16\r\nS315801076408FB0001803E0000827BD00283C02801187\r\nS315801076508C4491443C0780103C0280103C0380107F\r\nS315801076602442751C24636F0C24E775A82405002C0E\r\nS3158010767000003021AFA200100C041B47AFA30014EA\r\nS315801076801440FFEB8E0292543C0480110220282174\r\nS31580107690024030210C041D47248492582402000194\r\nS315801076A0AE0292548E0292548FBF00242C42000157\r\nS315801076B08FB200208FB1001C8FB0001803E0000835\r\nS315801076C027BD0028401A68000000004000000040D6\r\nS315801076D000000040000000403C1B80118F7B91CC45\r\nS315801076E0335A003C17400005000000403C1A8010B9\r\nS315801076F0275A770C03400008000000003C1A8010BF\r\nS31580107700275A7910034000080000004017600007D0\r\nS31580107710000000003C1A80118F5A91E4275AFF40CE\r\nS31580107720AF5D00AC100000030340E821AFBDFFEC55\r\nS3158010773027BDFF40AFA1003CAFA20040277B0001D0\r\nS315801077403C018011AC3B91CC3C1B80118F7B924CC1\r\nS31580107750277B00013C018011AC3B924CAFA00038D6\r\nS31580107760AFA20040AFA30044AFA40048AFA5004C21\r\nS31580107770AFA60050AFA70054AFA80058AFA9005CC1\r\nS31580107780AFAA0060AFAB0064AFAC0068AFAD006C61\r\nS31580107790AFAE0070AFAF0074AFB80098AFB9009CB1\r\nS315801077A0AFBF00B40000501200005810AFAA0030CE\r\nS315801077B0AFAB0034401B6000401A70004002680076\r\nS315801077C00000004000000040000000400000004023\r\nS315801077D0AFBB0028AFBA002CAFA200143C1A8011A0\r\nS315801077E08F5A9170AFBA0010304AFF00036A102486\r\nS315801077F03C0980111040002A8D298A4000025202CD\r\nS315801078000149502191490000000949003C0180112D\r\nS31580107810002908218C2A8A4C004A102500401027FE\r\nS31580107820005BD824409B60000000004000000040B0\r\nS3158010783000000040000000402401FFFD0361D824B1\r\nS31580107840409B6000000000400000004000000040A7\r\nS31580107850000000403C018011002908218C228A48B2\r\nS315801078603C018011002908218C298A50112000039F\r\nS31580107870000000000040F80901202021004020214E\r\nS3158010788003A02821000210803C08801125088BC88F\r\nS31580107890004810218C4300000060F80900000000A9\r\nS315801078A08FAA00103C018011AC2A91708FA30044DE\r\nS315801078B08FA400488FA5004C8FA600508FA7005428\r\nS315801078C08FA800588FAC00688FAD006C8FAE00709B\r\nS315801078D08FAF00748FB800988FBF00B48FB9003007\r\nS315801078E0032000138FB90034032000118FB9009C38\r\nS315801078F08FA90028408960008FA200408FAB00645A\r\nS315801079008FAA006008041F328FA9005C0000004017\r\nS31580107910400260000000004000000040000000406F\r\nS31580107920000000402409FFFE01224824408960009F\r\nS3158010793000000040000000400000004000000040B1\r\nS315801079401000FFFF000000004002600000000040B1\r\nS31580107950000000400000004003E0000800000040E6\r\nS31580107960408460000000004000000040000000409D\r\nS3158010797003E000080000004027BDFFE8AFBF0010FD\r\nS315801079800000004000000040000000400000004061\r\nS315801079900C040F2B408A60008FBF001027BD001883\r\nS315801079A0400A60002409FFFE012A482440896000AD\r\nS315801079B00000004000000040000000400000004031\r\nS315801079C03C0880118D08918C1008FFEB0000000098\r\nS315801079D0000000403C018011AC2092400000102134\r\nS315801079E003E00008408A60008D09003C1409002CD1\r\nS315801079F00000000000000040000000400000004031\r\nS31580107A0000000040400A60002409FFFE012A482435\r\nS31580107A1040896000000000400000004000000040E7\r\nS31580107A20000000403C0880118D08918C10080007DA\r\nS31580107A3000000000000000403C018011AC20924004\r\nS31580107A40408A600003E0000800001021408A600030\r\nS31580107A5027BDFFE8AFBF00100C040F2B00000000FD\r\nS31580107A608FBF00101000000527BD00183C0880113C\r\nS31580107A708D08924C1408FFCA000000003C08801143\r\nS31580107A808D0892443C0980118D2992E01109FFD905\r\nS31580107A90000000008D0900501409FFD3000000007B\r\nS31580107AA03C0980118D299170AD090080AD1F00CCE5\r\nS31580107AB00000004000000040000000400000004030\r\nS31580107AC040096000AD1D014CAD0900C8AD0000E055\r\nS31580107AD000005012AD0A00D000005010AD0A00D43C\r\nS31580107AE0AD100118AD11011CAD120120AD1301248A\r\nS31580107AF0AD140128AD15012CAD160130AD1701342A\r\nS31580107B0008041EC2AD1E01503C0980118D2992E0D9\r\nS31580107B1010090040000000003C018011AC299244FD\r\nS31580107B203C0980118D2992448D2800803C0180115A\r\nS31580107B30AC28917040086000240AFFFE014850244A\r\nS31580107B40408A6000000000400000004000000040B5\r\nS31580107B50000000403C1A80118F5A918C101A0042F6\r\nS31580107B608D3B00C88D3D014C8D2400E88D2500ECA1\r\nS31580107B708D2600F08D2700F48D2200E08D2300E401\r\nS31580107B808D2A01008D2A00D0014000138D2A00D441\r\nS31580107B90014000118D2B01048D2C01088D2D010CB7\r\nS31580107BA08D2E01108D2F01148D3001188D31011CF1\r\nS31580107BB08D3201208D3301248D3401288D35012C91\r\nS31580107BC08D3601308D3701348D3801388D39013C31\r\nS31580107BD08D3E01508D3F01543C018011AC20924066\r\nS31580107BE08D3A00CC8D2100DC8D2A01008D2800F87D\r\nS31580107BF08D2900FC409A7000377B0002409B600004\r\nS31580107C0000000040000000400000004000000040DE\r\nS31580107C10420000183C0A80118D4A90882408000181\r\nS31580107C2000000040000000400000004000000040BE\r\nS31580107C30408A6000000000400000004000000040C4\r\nS31580107C40000000403C018011AC2892483C0980110C\r\nS31580107C508D29918C1409FFFD000000003C018011D4\r\nS31580107C6008041F1FAC20924800000040000000400E\r\nS31580107C700000004000000040408860000C040F2B7C\r\nS31580107C80000000003C0880118D0892443C09801148\r\nS31580107C908D2992E01009FFDF000000001109FFA076\r\nS31580107CA00000000008041EC6000000003C08801179\r\nS31580107CB08D0892448D0900700120F809000000009B\r\nS31580107CC00C0417BF0040202127BDFFD8AFA8001095\r\nS31580107CD0AFA90014AFAA00183C0880118D08924CE9\r\nS31580107CE02508FFFF3C018011AC28924C3C0980117D\r\nS31580107CF08D2991CC2529FFFF3C018011AC2991CC8F\r\nS31580107D003C0A80118D4A92401540000F00000000F9\r\nS31580107D101520000D000000003C0880118D0892444B\r\nS31580107D203C0A80118D4A92E0110A0007000000007B\r\nS31580107D308D09005010090011000000008D09003CCB\r\nS31580107D401409000E000000008FA800108FA90014DF\r\nS31580107D508FAA001827BD00288FBA002C8FA1003C4F\r\nS31580107D608FBD00AC409A70000000004000000040BB\r\nS31580107D700000004000000040420000182409000165\r\nS31580107D803C018011AC2992403C1A80118F5A924442\r\nS31580107D903C0880118D089170AF4800808FA8001024\r\nS31580107DA08FA900148FAA0018AF4800F8AF4900FCBD\r\nS31580107DB0AF4A01000340402127BD00288FAA002C1E\r\nS31580107DC08FA900ACAD0A00CCAD09014C8FA1003C47\r\nS31580107DD0AD0100DC401B6000000000400000004048\r\nS31580107DE000000040000000402401FFFD0361D824FC\r\nS31580107DF0AD1B00C80120E821409B6000AD0B01043B\r\nS31580107E00AD0C0108AD0D010CAD0E0110AD0F0114B6\r\nS31580107E10AD0400E8AD0500ECAD0600F0AD0700F44A\r\nS31580107E20AD0200E0AD0300E400001012000018104F\r\nS31580107E30AD0200D0AD0300D4AD100118AD11011CF8\r\nS31580107E40AD120120AD130124AD140128AD15012CFE\r\nS31580107E50AD160130AD170134AD180138AD19013C9E\r\nS31580107E60AD1E015008041EC2AD1F015440026000B1\r\nS31580107E70000000400000004000000040000000406C\r\nS31580107E802409FFFE0122482440896000000000403A\r\nS31580107E90000000400000004003E0000800000040A1\r\nS31580107EA04084600000000040000000400000004058\r\nS31580107EB003E00008000000403C08B400350802F8D2\r\nS31580107EC081090005312900201120FFFB00000000E8\r\nS31580107ED003E00008A1040000AC800004AC80000020\r\nS31580107EE003E000080000102103E0000800001021C4\r\nS31580107EF010A00008000000008CA2000010400008AE\r\nS31580107F00ACA60000AC460004ACC2000003E000083A\r\nS31580107F10ACC500048C8200001440FFFAAC860000C9\r\nS31580107F20AC860004ACC5000403E00008ACC20000B7\r\nS31580107F308C82000410400008000000008C43000072\r\nS31580107F4010600008AC450000AC650004ACA30000CE\r\nS31580107F5003E00008ACA200048C8300001460FFFAD2\r\nS31580107F60AC850000AC850004ACA2000403E00008D8\r\nS31580107F70ACA300008CA30004106000080000000071\r\nS31580107F808CA20000AC6200008CA200001040000899\r\nS31580107F900000000003E00008AC4300048CA200003F\r\nS31580107FA0AC8200008CA200001440FFFA0000000092\r\nS31580107FB003E00008AC8300048C82000010400005AA\r\nS31580107FC0000000008C43000010600004AC830000A9\r\nS31580107FD0AC60000403E000080000000003E0000825\r\nS31580107FE0AC8000048C840000108000070000000024\r\nS31580107FF0000010218C8400001480FFFE24420001B2\r\nS3158010800003E000080000000003E0000800001021D3\r\nS31580108010801005D480100534801005348010053406\r\nS315801080208010053480100534801005B48010053416\r\nS315801080308010053480100534801005348010053486\r\nS315801080408010053480100534801005348010053476\r\nS315801080508010059880100534801005348010053402\r\nS315801080608010053480100534801005348010053456\r\nS315801080708010053480100534801005348010053446\r\nS315801080808010053480100534801005348010053436\r\nS31580108090801005D480100534801005348010053486\r\nS315801080A08010053480100534801005B48010053496\r\nS315801080B08010053480100534801005348010053406\r\nS315801080C080100534801005348010053480100534F6\r\nS315801080D08010059880100A3480100AC080100AC05B\r\nS315801080E080100AC080100AC080100AC080100AC092\r\nS315801080F080100AC080100AC080100AC080100AC082\r\nS3158010810080100AC080100AC080100AC080100AC071\r\nS3158010811080100AC080100AC080100AC080100AC061\r\nS3158010812080100AC080100AC080100AC080100AC051\r\nS3158010813080100AC080100AC080100AC080100AC041\r\nS3158010814080100AC080100AC080100AC080100AC031\r\nS3158010815080100AC080100F6080100AC080100AC07C\r\nS3158010816080100F5080100AC080100AC080100AC07C\r\nS3158010817080100AC080100AC080100AC080100F2C90\r\nS3158010818080100F0880100AC080100EE080100E2C10\r\nS3158010819080100AC080100E1C80100F9C80100F9CBF\r\nS315801081A080100F9C80100F9C80100F9C80100F9C4D\r\nS315801081B080100F9C80100F9C80100F9C80100AC01E\r\nS315801081C080100AC080100AC080100AC080100AC0B1\r\nS315801081D080100AC080100AC080100AC080100AC0A1\r\nS315801081E080100AC080100D0080100AC080100AC04E\r\nS315801081F080100AC080100AC080100AC080100AC081\r\nS3158010820080100AC080100F8C80100AC080100AC09F\r\nS3158010821080100CCC80100AC080100AC080100AC052\r\nS3158010822080100AC080100AC080100C9880100AC076\r\nS3158010823080100AC080100B0080100AC080100AC0FF\r\nS3158010824080100AC080100AC080100AC080100AC030\r\nS3158010825080100AC080100AC080100AC080100AC020\r\nS3158010826080100FFC80100D0C80100AC080100AC080\r\nS3158010827080100AC080100E0C80100D0C80100AC061\r\nS3158010828080100AC080100DE480100AC080100DB8CE\r\nS3158010829080100CD880100DA080100AC080100AC0E3\r\nS315801082A080100D3C80100AC080100CA480100AC06B\r\nS30D801082B080100AC080100B0C2F\r\nS315801082B8082008000A0A257320566572202573201F\r\nS315801082C8666F72202573203A25730A004D495053DC\r\nS315801082D85F5241494E000000312E303000000000B8\r\nS315801082E8344B6320284D49505320344B2070726F7D\r\nS315801082F8636573736F72290033304A616E31320049\r\nS315801083084275696C74207573696E67202573206F42\r\nS315801083186E202573203C25733E0A00006D697073A4\r\nS315801083282D656C662D676363000000004D617220B1\r\nS31580108338313720323031340031353A30333A3134AE\r\nS3158010834800000000446576656C6F706564206279FC\r\nS315801083582025730A0A0000004A616E736F6E2C20FE\r\nS31580108368687474703A2F2F7777772E67616E646189\r\nS315801083786E63696E672E636F6D2F000074657374F4\r\nS31580108388207072696E740A006B65726E656C5374B0\r\nS3158010839861727420704D656D506F6F6C5374617215\r\nS315801083A8743A30782578206D656D506F6F6C536987\r\nS315801083B87A653A307825780A000000002D2D2D2D03\r\nS315801083C82D2D2D2D2D5348454C4C20535441525408\r\nS315801083D82D2D2D2D2D2D2D2D2D0A2D2D3E200000A8\r\nS315801083E80A2D2D3E20000000303132333435363791\r\nS315801083F8383961626364656600000000286E756CA2\r\nS315801084086C290000303132333435363738394142A9\r\nS315801084184344454600000000456E746572696E6770\r\nS315801084282077696E6444656D6F0A000074486967C1\r\nS315801084386850726900000000744C6F77507269003A\r\nS315801084480A506172656E742064656D6F20686173F9\r\nS31580108458206A75737420636F6D706C65746564209B\r\nS315801084686C6F6F70206E756D6265722025640A0058\r\nS3158010847848656C6C6F2066726F6D207468652027EE\r\nS315801084886C6F77207072696F72697479272074613E\r\nS31580108498736B000048656C6C6F2066726F6D207404\r\nS315801084A86865202768696768207072696F72697451\r\nS315801084B87927207461736B0025730A204E756D6257\r\nS315801084C86572206F6620697465726174696F6E73E0\r\nS315801084D82069732025640A0025730A204E756D62FB\r\nS315801084E86572206F6620697465726174696F6E73C0\r\nS315801084F82062792074686973207461736B2069733C\r\nS315801085083A2025640A0000007461736B31000000FC\r\nS315801085187461736B320000004920616D2074617339\r\nS315801085286B546F7720616E6420676C6F62616C2004\r\nS315801085383D2025642E2E2E2E2E2E2E2E2E2E2E2E8F\r\nS315801085482E2E2E2E2E2E2E0A000000004920616D0A\r\nS31580108558207461736B4F6E6520616E6420676C6FD3\r\nS3158010856862616C203D2025642E2E2E2E2E2E2E2EC8\r\nS315801085782E2E2E2E2E2E2E2E2E2E2E0A0000000059\r\nS315801085886D73675143726561746520696E20666183\r\nS31580108598696C65642E0A00007461736B5370617719\r\nS315801085A86E207461736B4F6E65206661696C656445\r\nS315801085B82E0A00007461736B537061776E20746134\r\nS315801085C8736B54776F206661696C65642E0A000038\r\nS315801085D86D7367515265636569766520696E207417\r\nS315801085E861736B54776F206661696C65642E0A00B7\r\nS315801085F87461736B54776F2025730A006D73675196\r\nS3158010860873656E6420696E207461736B54776F20FE\r\nS315801086186661696C65642E0A000000007461736B6C\r\nS3158010862854776F2073656E742061206D65737361DE\r\nS3158010863867652E0A00000000526563656976656471\r\nS31580108648204D6573736167652066726F6D207461DE\r\nS31580108658736B54776F2E00006D73675173656E64F4\r\nS3158010866820696E207461736B4F6E65206661696CC4\r\nS3158010867865642E0A000000007461736B4F6E652066\r\nS3158010868873656E742061206D6573736167652E0AD4\r\nS31580108698000000006D7367515265636569766520C1\r\nS315801086A8696E207461736B4F6E65206661696C653F\r\nS315801086B8642E0A007461736B4F6E652025730A00E9\r\nS315801086C85265636569766564204D65737361676500\r\nS315801086D82066726F6D207461736B4F6E652E000005\r\nS315801086E80A0A2E2E2E2E2E2E2E2E2E2E2E2E2E2E54\r\nS315801086F82E232352554E4E494E4723232E2E2E2E49\r\nS315801087082E2E2E2E2E2E2E2E2E2E2E0A0A0A0000B3\r\nS315801087187461736B537061776E207072696F4C6F6A\r\nS3158010872877206661696C65642E0A00007461736BC4\r\nS31580108738537061776E207072696F4D656469756D57\r\nS31580108748206661696C65642E0A0000007461736B1B\r\nS31580108758330000007461736B537061776E2070728A\r\nS31580108768696F48696768206661696C65642E0A0056\r\nS315801087784D656469756D207461736B2072756E6E44\r\nS31580108788696E672E0A0000002D2D2D2D2D2D2D2D6D\r\nS315801087982D2D2D2D2D2D2D2D2D2D2D2D2D2D2D2D6B\r\nS315801087A82D4D656469756D207072696F72697479FB\r\nS315801087B8207461736B206578697465642E0A00006D\r\nS315801087C848696768207072696F72697479207461F4\r\nS315801087D8736B20747269657320746F206C6F636B0A\r\nS315801087E82073656D6170686F72652E0A00000000CF\r\nS315801087F848696768207072696F72697479207461C4\r\nS31580108808736B206C6F636B732073656D6170686FA3\r\nS3158010881872652E0A000000004869676820707269C0\r\nS315801088286F72697479207461736B20756E6C6F635F\r\nS315801088386B732073656D6170686F72652E0A0000A0\r\nS315801088482E2E2E2E2E2E2E2E2E2E2E2E2E2E2E2EAA\r\nS315801088582E2E2E2E2E2E2E2E2E486967682070725A\r\nS31580108868696F72697479207461736B20657869741D\r\nS3158010887865642E0A000000004C6F77207072696F4D\r\nS3158010888872697479207461736B2074726965732048\r\nS31580108898746F206C6F636B2073656D6170686F720F\r\nS315801088A8652E0A004C6F77207072696F72697479B9\r\nS315801088B8207461736B206C6F636B732073656D6145\r\nS315801088C870686F72652E0A004C6F77207072696FA8\r\nS315801088D872697479207461736B20756E6C6F636BB3\r\nS315801088E8732073656D6170686F72652E0A0000005B\r\nS315801088F82E2E2E2E2E2E2E2E2E2E2E2E2E2E2E2EFA\r\nS315801089082E2E2E2E2E2E2E2E2E4C6F77207072698E\r\nS315801089186F72697479207461736B20657869746570\r\nS31580108928642E0A0074526F6F745461736B00000062\r\nS31580108940000001010202020203030303030303036F\r\nS315801089500404040404040404040404040404040441\r\nS315801089600505050505050505050505050505050521\r\nS315801089700505050505050505050505050505050511\r\nS3158010898006060606060606060606060606060606F1\r\nS3158010899006060606060606060606060606060606E1\r\nS315801089A006060606060606060606060606060606D1\r\nS315801089B006060606060606060606060606060606C1\r\nS315801089C007070707070707070707070707070707A1\r\nS315801089D00707070707070707070707070707070791\r\nS315801089E00707070707070707070707070707070781\r\nS315801089F00707070707070707070707070707070771\r\nS31580108A000707070707070707070707070707070760\r\nS31580108A100707070707070707070707070707070750\r\nS31580108A200707070707070707070707070707070740\r\nS31580108A300707070707070707070707070707070730\r\nS31580108A408010894000000100000000200000010015\r\nS31580108A50000000000000020000000021000002005B\r\nS31580108A600000000000000400000000410000040027\r\nS31580108A70000000000000080000000042000008000E\r\nS31580108A8000000000000010000000004300001000ED\r\nS31580108A9000000000000020000000004400002000BC\r\nS31580108AA0000000000000400000000045000040006B\r\nS31580108AB000000000000080000000004600008000DA\r\nS31580108AC0000000000000003C0020202020202020F4\r\nS31580108AD020282828282820202020202020202020D8\r\nS31580108AE020202020202020208810101010101010F8\r\nS31580108AF01010101010101010040404040404040440\r\nS31580108B0004041010101010101041414141414101D0\r\nS31580108B1001010101010101010101010101010101AF\r\nS31580108B2001010110101010101042424242424202BE\r\nS31580108B30020202020202020202020202020202027F\r\nS31580108B400202021010101020000000000000000029\r\nS31580108B50000000000000000000000000000000007F\r\nS31580108B6000000000000000000010101010101010FF\r\nS31580108B70101010101010101010101010101010105F\r\nS31580108B80101010101010101010101010101010104F\r\nS31580108B90101010101010101010101010101010103F\r\nS31580108BA010101010101010100000000000000000AF\r\nS31580108BB0000000000000000000000000000000001F\r\nS31580108BC0000000000000000080102C8480102C8C87\r\nS31580108BD080102C8C80102C8C80102C8C80102C8CDF\r\nS31580108BE080102C8C80102C8C80102C8C80102C8CCF\r\nS31580108BF080102C8C80102C8C80102C8C80102C8CBF\r\nS31580108C0080102C8C80102C8C80102C8C80102C8CAE\r\nS31580108C1080102C8C80102C8C80102C8C80102C8C9E\r\nS31580108C2080102C8C80102C8C80102C8C80102C8C8E\r\nS31580108C3080102C8C80102C8C80102C8C80102C8C7E\r\nS31580108C4080102C8C80102C8C80102C8480102C847E\r\nS31580108C5080102C8480102C8480102C8480102C847E\r\nS31580108C6080102C8480102C8480102C8480102C846E\r\nS31580108C7080102C8480102C8480102C8480102C845E\r\nS31580108C8080102C8480102C8480102C8480102C844E\r\nS31580108C9080102C8480102C8480102C8480102C843E\r\nS31580108CA080102C8C80102C8C80102C8C80102C8C0E\r\nS31580108CB080102C8C80102C8C80102C8480102C840E\r\nS31580108CC080102C8480102C8480102C8480102C840E\r\nS31580108CD080102C8480102C8480102C8480102C84FE\r\nS31580108CE080102C8480102C8480102C8480102C84EE\r\nS31580108CF080102C8480102C8480102C8480102C84DE\r\nS31580108D0080102C8480102C8480102C8480102C84CD\r\nS31580108D1080102C8480102C8480102C8480102C84BD\r\nS31580108D2080102C8480102C8480102C8480102C84AD\r\nS31580108D3080102C8480102C8480102C8480102C849D\r\nS31580108D4080102C8480102C8480102C8480102C848D\r\nS31580108D5080102C8480102C8480102C8480102C847D\r\nS31580108D6080102C8480102C8480102C8480102C846D\r\nS31580108D7080102C8480102C8480102C8480102C845D\r\nS31580108D8080102C8480102C8480102C8480102C844D\r\nS31580108D9080102C8480102C8480102C8480102C843D\r\nS31580108DA080102C8480102C8480102C8480102C842D\r\nS31580108DB080102C8480102C8480102C8480102C841D\r\nS31580108DC080102C8480102C8480102C8480102C840D\r\nS31580108DD080102C8480102C8480102C8480102C84FD\r\nS31580108DE080102C8480102C8480102C8480102C84ED\r\nS31580108DF080102C8480102C8480102C8480102C84DD\r\nS31580108E0080102C8480102C8480102C8480102C84CC\r\nS31580108E1080102C8480102C8480102C8480102C84BC\r\nS31580108E2080102C8480102C8480102C8480102C84AC\r\nS31580108E3080102C8480102C8480102C8480102C849C\r\nS31580108E4080102C8480102C8480102C8480102C848C\r\nS31580108E5080102C8480102C8480102C8480102C847C\r\nS31580108E6080102C8480102C8480102C8480102C846C\r\nS31580108E7080102C8480102C8480102C8480102C845C\r\nS31580108E8080102C8480102C8480102C8480102C844C\r\nS31580108E9080102C8480102C8480102C8480102C843C\r\nS31580108EA080102C8480102C8480102C8480102C842C\r\nS31580108EB080102C8480102C8480102C8480102C841C\r\nS31580108EC080102C8480102C8480102C8480102C840C\r\nS31580108ED080102C8480102C8480102C8480102C84FC\r\nS31580108EE080102C8480102C8480102C8480102C84EC\r\nS31580108EF080102C8480102C8480102C8480102C84DC\r\nS31580108F0080102C8480102C8480102C8480102C84CB\r\nS31580108F1080102C8480102C8480102C8480102C84BB\r\nS31580108F2080102C8480102C8480102C8480102C84AB\r\nS31580108F3080102C8480102C8480102C8480102C849B\r\nS31580108F4080102C8480102C8480102C8480102C848B\r\nS31580108F5080102C8480102C8480102C8480102C847B\r\nS31580108F6080102C8480102C8480102C8480102C846B\r\nS31580108F7080102C8480102C8480102C8480102C845B\r\nS31580108F8080102C8480102C8480102C8480102C844B\r\nS31580108F9080102C8480102C8480102C8480102C843B\r\nS31580108FA080102C8480102C8480102C8480102C842B\r\nS31580108FB080102C8480102C8480102C8480102C841B\r\nS31580108FC080102C8480102C843C0800003C04000007\r\nS31580108FD0350800000100000834840000801091F8E4\r\nS31580108FE0801096F080104FA080104FA080104FA058\r\nS31580108FF080104FA080104FA080104FA080104FA0DF\r\nS3158010900080104FA080104FA080104FA080104FA0CE\r\nS3158010901080104FA080104FA080104FA080104FA0BE\r\nS3158010902080104FA080104FA080104FA080104FA0AE\r\nS3158010903080104FA080104FA080104FA080104FA09E\r\nS3158010904080104FA080104FA080104FA080104FA08E\r\nS3158010905080104FA080104FA080104FA080104FA07E\r\nS3158010906080104FA080104FA080104FA080104FA06E\r\nS3158010907080104FA080104FA080104FA080104FA05E\r\nS3158010908080104FA0801097203000FF0180109090A4\r\nS3158010909080106500801065D4801065088010657416\r\nS315801090A0801065B88010659C8010657C8010657412\r\nS315801090B08010657480106574801065748010657476\r\nS315801090C08010651080109090801090CC801069E48C\r\nS315801090D0801069988010696480106944801067FCDC\r\nS315801090E080106680801065F4801065F4801065F4B9\r\nS315801090F0801065F4801065F4801065F4801065FC2E\r\nS31580109100801090CC8010910880106A4480106C6416\r\nS3158010911080106A4C80106A5480106B7C80106B4073\r\nS3158010912080106B5C80106BC880106A5C80106B102E\r\nS3158010913080106A8C80106A6480106AAC80109108E6\r\nS3158010914080109750801092A08010925800000004D2\r\nS3158010915080106F1400000110000000000000000055\r\nS315801091600000004800000000000000000000000021\r\nS705801000006A\r\n"; // ./browser/browser_srec.js:0
$(document).ready(function() { // ./browser/browser_main.js:0
web_console = new Console();
INFO("Starting MIPS 4kc js emulator."); // ./browser/browser_main.js:1
emu = new Emulator(); // ./browser/browser_main.js:2
INFO("Parsing SREC."); // ./browser/browser_main.js:3
emu.mmu.loadSREC(browser_srec, 1); // ./browser/browser_main.js:4
 // ./browser/browser_main.js:5
PCLogCounter = 0; // ./browser/browser_main.js:6
 // ./browser/browser_main.js:7
setInterval(function () { // ./browser/browser_main.js:8
 // ./browser/browser_main.js:9
    for(var i = 0 ; i < 10000 ; i++){ // ./browser/browser_main.js:10
        emu.step(); // ./browser/browser_main.js:11
    } // ./browser/browser_main.js:12
 // ./browser/browser_main.js:13
}, 0); // ./browser/browser_main.js:14
}); // ./browser/browser_main.js:15
