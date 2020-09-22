//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

//make system make a sound using -> process.stdout.write('\x07');

const alarmTimes = process.argv.slice(2);

const timer = () => {
  if (alarmTimes.length == 0) { //if no inputs then don't do anything
    return;
  };

  for(let alarm of alarmTimes) {
    setTimeout(() => {
      //ensure number is not negative and is actually a number
      if(alarm >= 0 && typeof alarm != NaN) {
        process.stdout.write('\x07');
        console.log(alarm);
      }
    }, (alarm * 1000));
  }
};

timer();