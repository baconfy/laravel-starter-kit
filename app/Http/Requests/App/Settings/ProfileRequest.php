<?php

declare(strict_types=1);

namespace App\Http\Requests\App\Settings;

use App\Models\User;
use Baconfy\Support\Http\FormRequest;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Validation\Rule;

final class ProfileRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the update request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function update(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }

    /**
     * Get the validation rules that apply to the delete request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function destroy(): array
    {
        return [
            'password' => ['required', 'current_password'],
        ];
    }
}
