<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Events\User\UserHasBeenUpdated;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

final readonly class UpdateUser
{
    /**
     * Execute the action.
     *
     * @param  array<string, mixed>  $payload
     */
    public function handle(User $user, array $payload): bool
    {
        if (array_key_exists('password', $payload)) {
            throw new InvalidArgumentException(__('Password is not allowed to update.'));
        }

        return DB::transaction(function () use ($user, $payload) {
            if (isset($payload['email']) && $payload['email'] !== $user->email) {
                $payload['email_verified_at'] = null;
            }

            $updated = $user->update($payload);

            event(new UserHasBeenUpdated($user));

            return $updated;
        });
    }
}
