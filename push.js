var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BCP9Ojn3eZAqxHm0akY6iMBYZUDlPskRsA4_7sx0A6IZ2jb_iq9w4IPHrcRuau6x9WoOeM1xVnaNqBd6MQYi-sU",
    "privateKey": "oeNRlIfPIEvS7TMsaIhdEMrHkxEqoDBD-Ofcqj0QW9I"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/emaBAVk_bvk:APA91bFNbosK2ExUauVQH6sMPVpphGiAEvYTP_OgkWLUrwote0xZQk2zGb0BKERpyGahXHux_X9DdqmBi4QmN9jt5aQxJTvJD1oOdHN4cobdDdxbUVLJ99abH2Q-dpLwa2enCh8FQhsx",
    "keys": {
        "p256dh": "BFIuzs5fEW+pLJOS7nJD+6OsezK6fET/ZIOZc2lAZcEygAeeTJTmCVioCHuHisUSk7S7ux7nuN1lo8iUmiMazdE==",
        "auth": "BdfWZP9L1QjRD9KvuwidMw=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi! hahahahaha';

var options = {
    gcmAPIKey: '521247596801',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);