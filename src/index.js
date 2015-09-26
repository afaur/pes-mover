diskspace = require('diskspace');
glob = require('glob');

var CDREADY = false;
var FLOPPYREADY = false;

var checkCD = function () {
  diskspace.check('D', function (err, total, free, status)
  {
    // Remove extra chars on end of status message
    status = status.trim();

    if (status === "NOTREADY") {
      CDREADY = false;
    } else {
      CDREADY = true;
    }
  });
}

var checkFloppy = function () {
  diskspace.check('A', function (err, total, free, status)
  {
    // Remove extra chars on end of status message
    status = status.trim();

    if (status === "NOTREADY") {
      console.log('No Floppy Disk in drive.');
    }

    //console.log('Total: ' + total    );
    //console.log('Status: ' + status  );
    //console.log('Free: ' + free      );

  });
}

var sizeOfPES = function () {
  console.log('fin');
}

console.log('This tool is used to help you copy files from your CD rom disks to floppy disks.');
console.log('Then you can use those in your sewing machine.');
console.log('');
console.log('Lets start by seeing if you have a CD disk inserted.');
console.log('');

var result = checkCD();

if (result.status) {
  console.log('Looks like you have a CD inserted.');
  console.log('I am finding all PES files on the disk.');
  sizeOfPES();
} else {
  console.log('Did not find a CD in your CD drive.');
  console.log('Rerun this application after inserting your CD');
  process.exit();
}

