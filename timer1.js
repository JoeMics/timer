//take in args
const args = process.argv;

// for every argument, take that number and * 1000 to set the delay, and call setTimeout
args.forEach(seconds => {
  if (seconds && seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
});