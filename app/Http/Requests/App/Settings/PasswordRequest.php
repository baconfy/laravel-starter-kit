<?php

declare(strict_types=1);

namespace App\Http\Requests\App\Settings;

use Baconfy\Support\Http\FormRequest;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Validation\Rules\Password;

final class PasswordRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the update request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function update(): array
    {
        return [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ];
    }
}
