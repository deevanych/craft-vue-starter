<?php

return [
    '*' => [
        'cachingEnabled' => getenv('BLITZ_ENABLE_CACHING'),
        'queueJobTtr'    => 60 * 60,
        'outputComments' => false,
    ],

    'dev' => [
    ],

    'staging' => [
    ],

    'production' => [
    ],
];
