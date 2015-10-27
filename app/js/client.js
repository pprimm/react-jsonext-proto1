'use strict';

import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://localhost:8083/mqtt', {keepAlive:10});

//client.subscribe('get/lights/family/#');

export default client;