var exercise = {};

exercise.goalCheck = function(x, y) {
    // log coordinates to the console
    console.log('x=' + x + ', y=' + y);

    // check y coordinate first as it is the same range for both areas
    if ((y > 109) && (y < 389)) {
        // check whether center of ball is inside goal area 1
        if ((x > 24) && (x < 138)) {
            return true;
        }
        // check whether center of ball is inside goal area 2
        else if ((x > 640) && (x < 754)) {
            return true;
        }
    }

    return false;
};

module.exports = exercise;