<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExchangeRequest;
use App\Http\Requests\LeadRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\Lead\IdResource;
use App\Http\Resources\Lead\StatusResource;
use App\Models\Account;
use App\Models\Exchange;
use App\Services\amoCRM\Client;
use App\Services\amoCRM\Models\Contacts;
use App\Services\amoCRM\Models\Leads;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use Throwable;

class SiteController extends Controller
{
    /**
     * @throws Exception
     */
    public function lead(LeadRequest $request)
    {
        $data = $request->validated();

        try {
            $amoApi = (new Client(Account::first()))->init();

            if ($amoApi->auth) {
                $contact = Contacts::search(['Почта' => $data['email']], $amoApi);

                if (!$contact)
                    $contact = Contacts::create($amoApi, $data['email']);

                $lead = Leads::create($contact, $data);

            } else {
                Log::error(__METHOD__, ['Auth error']);

                return response()->json(['status' => 'error'], 500);
            }

            return new IdResource($lead);

        } catch (Throwable $exception) {

            Log::error(__METHOD__, [$exception->getMessage()]);

            return response()->json(['status' => 'error'], 500);

        } finally {

            Exchange::query()->create([
                'contact_id' => $contact->id ?? null,
                'lead_id' => $lead->id ?? null,
                'wallet' => $data['wallet'],
                'type_exchange' => $data['type'],
                'email' => $data['email'],
                'method_pay' => $data['method'],
                'send_cost' => $data['send'][0]['cost'],
                'send_currency' => $data['send'][0]['currency'],
                'need_cost' => $data['need'][0]['cost'],
                'need_currency' => $data['need'][0]['currency'],
                'exchange_rate' => $data['exchange_rate'],
            ]);
        }
    }

    // Берем из бд курсы считаем и отдаем
    public function exchange(ExchangeRequest $request)
    {
        $data = $request->validated();
    }

    public function updateStatus(StatusRequest $request)
    {
        $data = $request->validated();

        try {
            $model = Exchange::query()
                ->where('lead_id', $data['leads']['status'][0]['id'])
                ->firstOrFail();
            $model->lead_status = $data['value'];
            $model->save();

        } catch (ModelNotFoundException $exception) {

            return $exception->getMessage();

        } catch (Throwable $exception) {

            return $exception->getMessage();
        }
    }

    public function getStatus(Exchange $exchange)
    {
        return new StatusResource($exchange);
    }
}
