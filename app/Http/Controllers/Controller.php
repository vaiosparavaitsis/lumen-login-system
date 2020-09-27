<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Laravel\Lumen\Routing\Controller as BaseController;

/**
 * @package App\Http\Controllers
 */
class Controller extends BaseController
{
    /**
     * @param string $token
     * @param array $optionalData
     * @return JsonResponse
     */
    protected function responseWithToken($token, $optionalData = []): JsonResponse
    {
        $data = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ];

        if (!empty($optionalData)) {
            $data = array_merge($optionalData, $data);
        }

        return response()->json($data, 200);
    }
}
