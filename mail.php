<?php

if ($_SERVER('REQUEST-METHOD') === 'POST') {
    $name = $_POST ('name');
    $phone = $_POST ('phone');
    $customer = $_POST ('customer');
    $call = $_POST ('call');
    $content = $name . 'оформил заказ' . $phone . 'номер';
    $feedback = $customer . 'Звонок обратной связи' . $call . 'номер';

   $success = mail('callme@tealovers.com', 'Для заказа', $content);
    $response = mail('callme@tealovers.com', 'Для обратной связи', $feedback);
    if ($success)  {
        http_response_code(202);
        echo 'Письмо отправлено';
    } else {
        http_response_code(500);
        echo 'Письмо не отправлено';
    }
    if ($response)  {
        http_response_code(202);
        echo 'Письмо отправлено';
    } else {
        http_response_code(500);
        echo 'Письмо не отправлено';
    }

} else {
    http_response_code(403);
    echo 'Такой запрос не поддерживается';

}