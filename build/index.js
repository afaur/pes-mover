'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var diskspace = require('diskspace');
var glob = require('glob');

var Platform = function Platform() {
  _classCallCheck(this, Platform);

  if (/^win/.test(process.platform)) {
    this.platform = "windows";
  } else {
    this.platform = "posix_compliant";
  }
};

var FilesFinder = (function (_Platform) {
  _inherits(FilesFinder, _Platform);

  function FilesFinder() {
    var loc = arguments.length <= 0 || arguments[0] === undefined ? "D" : arguments[0];
    var ext = arguments.length <= 1 || arguments[1] === undefined ? "pes" : arguments[1];

    _classCallCheck(this, FilesFinder);

    _get(Object.getPrototypeOf(FilesFinder.prototype), 'constructor', this).call(this);
    this.ext = ext;
    this.loc = loc;
  }

  _createClass(FilesFinder, [{
    key: 'find_files',
    value: function find_files() {
      if (this.platform === "windows") {
        glob(this.loc + ":\**/*." + this.ext, {}, function (er, files) {
          console.log(files);
        });
      } else {
        glob(this.loc + "/**/*." + this.ext, {}, function (er, files) {
          console.log(files);
        });
      }
    }
  }]);

  return FilesFinder;
})(Platform);

var filesFinder = new FilesFinder("./src", "js");

filesFinder.find_files();

/*
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
*/