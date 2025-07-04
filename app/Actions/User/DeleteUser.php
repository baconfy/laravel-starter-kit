<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Events\User\UserHasBeenDeleted;
use App\Models\User;
use Illuminate\Support\Facades\DB;

final readonly class DeleteUser
{
    /**
     * Execute the action.
     */
    public function handle(User $user): bool
    {
        return DB::transaction(function () use ($user) {
            $deleted = $user->delete();

            event(new UserHasBeenDeleted($user));

            return $deleted;
        });
    }
}
