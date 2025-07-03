<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use InvalidArgumentException;

final readonly class CreateUser
{
    /**
     * Execute the action.
     *
     * @param  array<string, mixed>  $payload
     */
    public function handle(array $payload): User
    {
        $this->sanitize($payload);

        return DB::transaction(function () use ($payload) {
            $user = User::create($payload);

            event(new Registered($user));

            return $user->refresh();
        });
    }

    /**
     * Sanitize the given payload. Ensures the payload contains a
     * password and hashes it before proceeding.
     *
     * @param  array<string, mixed>  $payload  The payload containing user information.
     */
    private function sanitize(array &$payload): void
    {
        if (! array_key_exists('password', $payload)) {
            throw new InvalidArgumentException(__('Password is required to create a user.'));
        }

        $payload['password'] = Hash::make($payload['password']);
    }
}
