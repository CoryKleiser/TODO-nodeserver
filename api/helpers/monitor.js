const client = require('../helpers/es');

const monitor = function (start, tag) {
    if (start) {
        let endTime = process.hrtime(start);
        let duration = parseInt((endTime[0]*1000) + (endTime[1]/1000000));
        console.log(`Duration for ${tag}: ${duration} msec`);
        client.create({
            index: 'monitoring',
            type: 'todo-api',
            id: new Date().getTime(),
            body: { 'duration': duration, 'tag': tag }
        })
    } else {
        return process.hrtime();
    }
};