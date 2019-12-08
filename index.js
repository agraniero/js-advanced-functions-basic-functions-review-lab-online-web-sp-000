function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

var mondayWork = function(activity='go to the office'){
  return `This Monday, I will ${activity}.`;
};

var wrapAdjective = function(boopity='*'){
  return function(boop='special'){
    return `You are ${boopity}${boop}${boopity}!`;
  };
};