
var colorConvertor=(function () {
    var generateRandomColor = function () {
        return 'rgba(' +
            generateRandomNumberBetweenZeroAnd175() + ',' +
            generateRandomNumberBetweenZeroAnd175() + ',' +
            generateRandomNumberBetweenZeroAnd175() + ')';
    };
    var generateRandomNumberBetweenZeroAnd175 = function () {
        return Math.floor(Math.random() * 175);
    };

    var getOppositeColor = function (hex) {
        return invertColor(hex, true);
    }
    var invertColor = function (hex, bw) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        var r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        if (bw) {
            // http://stackoverflow.com/a/3943023/112731
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }
        // invert color components
        r = (255 - r).toString(16);
        g = (255 - g).toString(16);
        b = (255 - b).toString(16);
        // pad each with zeros and return
        return "#" + padZero(r) + padZero(g) + padZero(b);
    }
    var getRGBseperated = function (rgb) {
        var getvalue = rgb.substring(
            rgb.lastIndexOf("(") + 1,
            rgb.lastIndexOf(")")
        );
        return getvalue.split(',');
    };
    var rgbToHexValue = (r, g, b) => '#' + [r, g, b]
        .map(x => x.toString(16).padStart(2, '0')).join('');
   
    var gethex = function (arryRGB) {
        var r = arryRGB[0];
        var g = arryRGB[1];
        var b = arryRGB[2];
       
        var hexresult = rgbToHexValue(parseInt(r, 10), parseInt(g, 10), parseInt(b, 10));
        return hexresult;
    };
    var rgbToHex = function (rgb) {
        var onlyRGB = getRGBseperated(rgb);
        var rgbToHex = gethex(onlyRGB);
        return rgbToHex;
    };


    var getOnlyNumberFromHex = function (hexwithhas) {
        return hexwithhasr.replace(/#/g, "");
    };
    var hexToRgb = function (hex) {
        var onlyNumber = getOnlyNumberFromHex(hex);
        var bigint = parseInt(onlyNumber, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return "rgb(" + r + "," + g + "," + b + ")";
    };
    return {
        hexToRgb: hexToRgb,
        rgbToHex: rgbToHex,
        getRandomColor:generateRandomColor,
        getOppositeColor: getOppositeColor

    };
})();