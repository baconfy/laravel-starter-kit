<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

final readonly class ReplaceAvatar
{
    /**
     * Execute the action.
     */
    public function handle(User $user, UploadedFile $file): bool
    {
        return DB::transaction(function () use ($user, $file) {
            if ($user->avatar && Storage::disk('public')->exists($user->avatar)) {
                Storage::disk('public')->delete($user->avatar);
            }

            $avatar = $file->store('avatars', 'public');

            return $user->update(['avatar' => $avatar]);
        });
    }
}
