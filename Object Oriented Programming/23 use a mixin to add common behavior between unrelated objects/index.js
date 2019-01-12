let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("gliding...");
  };
};
glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
