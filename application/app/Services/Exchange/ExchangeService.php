<?php

namespace App\Services\Exchange;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ExchangeService
{
    //можем получить
    public static array $needs = [
        'rub_tinkoff',
        'rub_sber',
        'rub_alfa',
        'usdt_trc20',
        'usdt_erc20',
        'usdt_bip20',
        'rub_tinkoff_cash',
        'rub_alfa_cash',
        'rub_cash',
        'usd_cash',
    ];

    //можем отправить
    public static array $sends = [
        'rub_tinkoff',
        'rub_sber',
        'rub_alfa',
        'usdt_trc20',
        'usdt_erc20',
        'usdt_bip20',
        'rub_cash',
        'usd_cash',
    ];

    public static string $urlGarantex = 'https://garantex.io/api/v2/coingecko/tickers';
    public static string $urlBinance  = 'https://api.binance.com/api/v3/ticker/bookTicker';

    //пары
    public static array $couples = [];

    /**
     * @throws GuzzleException
     */
    public static function garantex()
    {
        return json_decode((new Client())
            ->get(self::$urlGarantex)
            ->getBody()
            ->getContents());
    }

    /**
     * @throws GuzzleException
     */
    public static function binance()
    {
        return json_decode((new Client())
            ->get(self::$urlBinance)
            ->getBody()
            ->getContents());
    }
}
