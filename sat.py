# SAT scoring.  Parameters are <raw reading> <raw math>  
from sys import argv

raws = list(range(-1, 68))
# List of possible raw scores

math = [ 200, 220, 240, 260, 280, 290, 310, 320, 330, 350, 360, 370, 380, 390, 400, 410, 420, 420, 430, 440, 450, 460, 470, 480, 480, 490, 500, 510, 520, 530, 540, 540, 550, 560, 570, 580, 590, 590, 600, 610, 620, 630, 640, 640, 650, 660, 670, 680, 690, 700, 710, 720, 740, 760, 790, 800 ]
# List of math composite scores

reading = [ 210, 220, 240, 260, 270, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 380, 390, 400, 410, 410, 420, 430, 440, 440, 450, 460, 460, 470, 480, 480, 490, 500, 500, 510, 520, 520, 530, 530, 540, 550, 550, 560, 570, 570, 580, 590, 600, 600, 610, 620, 620, 630, 640, 650, 660, 670, 670, 680, 690, 700, 720, 730, 740, 760, 770, 790, 800, 800, 800 ]
# List of reading composite scores

md = {} # Math scores dictionary
rd = {} # Reading scores dictionary

for i in range(0, len(math)):
	md[raws[i]] = math[i]
# Generate math dictionary

for i in range(0, len(reading)):
	rd[raws[i]] = reading[i]
# Generate reading dictionary

def get_composite(rr, rm):
	cr = 200 # Value if raw <= -2
	cm = 200
	if rr > -2:
		cr = rd[rr]
	if rm > -2:
		cm = md[rm]
	return cr + cm

if __name__=="__main__":
	rr = int(argv[1])
	rm = int(argv[2])
	print(get_composite(rr, rm))
