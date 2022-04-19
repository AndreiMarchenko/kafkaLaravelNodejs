const { Kafka, CompressionTypes, CompressionCodecs } = require('kafkajs');

const knex = require('./knexConfig');

const SnappyCodec = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['broker:9092'],
});

(async () => {
    const consumer = kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'topic', fromBeginning: false })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const jsonMessageUser = JSON.parse(message.value.toString()).user[0];
            knex('users').insert({
                user_id: jsonMessageUser.id,
                name: jsonMessageUser.name,
                email: jsonMessageUser.email,
            }).then( function (result) {
                console.log('processed!');
            });
        },
    })
})();