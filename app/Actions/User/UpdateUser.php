<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Events\User\UserHasBeenUpdated;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

final readonly class UpdateUser
{
    /**
     * Execute the action.
     *
     * @param  array<string, mixed>  $payload
     */
    public function handle(User $user, array $payload): bool
    {
        $this->sanitize($payload);

        return DB::transaction(function () use ($user, $payload) {
            if (isset($payload['email']) && $payload['email'] !== $user->email) {
                $payload['email_verified_at'] = null;
            }

            $updated = $user->update($payload);

            if (! $user->refresh()->email_verified_at) {
                $user->sendEmailVerificationNotification();
            }

            event(new UserHasBeenUpdated($user));

            return $updated;
        });
    }

    /**
     * Sanitize the payload by hashing the password if necessary.
     *
     * @param  array<string, mixed>  $payload
     */
    private function sanitize(array &$payload): void
    {
        if (array_key_exists('password', $payload) && isset($payload['password'])) {
            $payload['password'] = Hash::make($payload['password']);
        }
    }
}
