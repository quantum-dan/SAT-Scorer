// Dictionaries of SAT scores and the function to calculate composite
var raws = [];
for (var i = -1; i < 68; i++) {
  raws.push(i)
}

var math = [ 200, 220, 240, 260, 280, 290, 310, 320, 330, 350, 360, 370, 380, 390, 400, 410, 420, 420, 430, 440, 450, 460, 470, 480, 480, 490, 500, 510, 520, 530, 540, 540, 550, 560, 570, 580, 590, 590, 600, 610, 620, 630, 640, 640, 650, 660, 670, 680, 690, 700, 710, 720, 740, 760, 790, 800 ];
var reading = [ 210, 220, 240, 260, 270, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 380, 390, 400, 410, 410, 420, 430, 440, 440, 450, 460, 460, 470, 480, 480, 490, 500, 500, 510, 520, 520, 530, 530, 540, 550, 550, 560, 570, 570, 580, 590, 600, 600, 610, 620, 620, 630, 640, 650, 660, 670, 670, 680, 690, 700, 720, 730, 740, 760, 770, 790, 800, 800, 800 ];

// Note: Max value of math is 54, reading is 67.  No error handling, so anything higher will cause problems.

var math_composite = {};
var reading_composite = {};

for (var i = 0; i < math.length; i++) {
  math_composite[raws[i]] = math[i];
}

for (var i = 0; i < reading.length; i++) {
  reading_composite[raws[i]] = reading[i];
}

var get_composite = function(reading_raw, math_raw) {
  var reading_score = 200;
  var math_score = 200;
  if (reading_raw > -2) {
    reading_score = reading_composite[reading_raw];
  }
  if (math_raw > -2) {
    math_score = math_composite[math_raw];
  }
  return reading_score + math_score;
};
