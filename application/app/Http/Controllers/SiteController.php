<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExchangeRequest;
use App\Http\Requests\LeadRequest;
use App\Http\Requests\StatusRequest;
use App\Http\Resources\Lead\IdResource;
use App\Http\Resources\Lead\StatusResource;
use App\Models\Account;
use App\Models\Course;
use App\Models\Exchange;
use App\Services\amoCRM\Client;
use App\Services\amoCRM\Models\Contacts;
use App\Services\amoCRM\Models\Leads;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Throwable;

class SiteController extends Controller
{
    /**
     * @throws Exception
     */
    public function form(Request $request)
    {
        $data = $request->toArray();

        try {

            $model = Exchange::query()->create([
                'contact_id' => $contact->id ?? null,
                'lead_id' => $lead->id ?? null,
//                'wallet' => $data['wallet'],
//                'type_exchange' => $data['sender'],
                'email' => $data['email'],
//                'method_pay' => $data['method'],
                'send_cost' => $data['sender_amount'],
                'send_currency' => $data['sender'],
                'need_cost' => $data['reciver_amount'],
                'need_currency' => $data['reciver'],
                'exchange_rate' => $data['kurs'],
            ]);

            $amoApi = (new Client(Account::query()->first()))->init();

            if ($amoApi->auth) {
                $contact = Contacts::search(['Почта' => $data['email']], $amoApi);

                if (!$contact)
                    $contact = Contacts::create($amoApi, $data['email']);

                $lead = Leads::create($contact, $model);

            } else {
                Log::error(__METHOD__, ['Auth amoCRM error']);

                return response()->json(['status' => 'error'], 500);
            }

            $model->lead_id = $lead->id;
            $model->contact_id = $contact->id;
            $model->save();

            $viewName = match ($model->need_currency) {
                'alfa-rub-cash' => 'cashin.step-7',
            };

            return view($viewName);

        } catch (Throwable $exception) {

            Log::error(__METHOD__, [$exception->getMessage().' : '.$exception->getFile().' : '.$exception->getLine()]);

            return response()->json(['status' => 'error'], 500);
        }
    }

    // Берем из бд курсы считаем и отдаем
    public function exchange(ExchangeRequest $request): float|JsonResponse
    {
        try {
            $course = Course::query()
                ->where('name', $request->type)
                ->firstOrFail()
                ->value;

        } catch (Throwable $exception) {

            Log::error(__METHOD__, [$exception->getMessage()]);

            return response()->json(['status' => 'error'], 500);
        }

        return response()->json(['course' => floatval($course * Course::$default * $request->need_cost)]);
    }

    public function updateStatus(StatusRequest $request)
    {
        $data = $request->validated();

        try {
            $model = Exchange::query()
                ->where('lead_id', $data['leads']['status'][0]['id'])
                ->first();

            if ($model) {
                $model->lead_status = $data['value'];
                $model->save();
            }

        } catch (Throwable $exception) {

            Log::error(__METHOD__.' : '.$exception->getMessage());
        }
    }

    public function getStatus(Exchange $exchange)
    {
        return new StatusResource($exchange);
    }
}
