<?php


namespace App\Services\amoCRM\Models;


use App\Services\amoCRM\Client;
use Illuminate\Support\Facades\Log;

abstract class Leads
{
    public static function searchByStatus($contact, $client, int $pipeline_id, int $status_id) : ?array
    {
        $leads = [];

        if($contact->leads) {

            foreach ($contact->leads as $lead) {

                if ($lead->status_id == $status_id && $lead->pipeline_id == $pipeline_id) {

                    $lead = $client->service
                        ->leads()
                        ->find($lead->id);

                    $leads = array_merge($leads, $lead);
                }
            }
        }
        return $leads;
    }

    //поиск активных в воронке
    public static function search($contact, $client, int $pipeline_id = null)
    {
        $leads = [];

        if($contact->leads) {

            foreach ($contact->leads as $lead) {

                if ($lead->status_id != 143 &&
                    $lead->status_id != 142) {

                    if($pipeline_id != null && $lead->pipeline_id == $pipeline_id) {

                        return $client->service
                            ->leads()
                            ->find($lead->id);
                    }
                }
            }
        }
    }

    public static function create($contact, $model)
    {
        $lead = $contact->createLead();

        $lead->name = $contact->name;
        $lead->contacts_id = $contact->id;

//        $lead->cf('Платежные данные')->setValue($params['wallet']);
//        $lead->cf('Тип обмена')->setValue($params['type']);
//        $lead->cf('Метод платежа')->setValue($model->);
        $lead->cf('Отправленная сумма')->setValue($model->send_cost);
        $lead->cf('Отправленная валюта')->setValue($model->send_currency);
        $lead->cf('Нужная сумма')->setValue($model->need_cost);
        $lead->cf('Тип обмена')->setValue($model->need_currency);
        $lead->cf('Обменный курс')->setValue($model->exchange_rate);

        $lead->save();

        return $lead;
    }

    public static function update($lead, array $params, array $fields)
    {
        try {

            if($lead !== null) {

                if($fields) {

                    foreach ($fields as $key => $field) {

                        $lead->cf($key)->setValue($field);
                    }
                }

                if(!empty($params['responsible_user_id']))
                    $lead->responsible_user_id = $params['responsible_user_id'];

                if(!empty($params['status_id']))
                    $lead->status_id = $params['status_id'];

                $lead->updated_at = time();
                $lead->save();

                return $lead;
            }

        } catch (\Exception $exception) {

            Log::error(__METHOD__. ' : ошибка обновления '.$exception->getMessage(). ' , сделка : '.$lead->id);
        }
    }

    public static function get($client, $id)
    {
        try {

            $lead = $client->service->leads()->find($id);

            return $lead;

        } catch (\Exception $exception) {

            sleep(2);

            Log::error(__METHOD__. ' : '.$exception->getMessage(). ' , сделка : '.$id);
        }
    }
}
