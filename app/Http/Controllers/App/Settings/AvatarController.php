<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Settings;

use App\Actions\User\ReplaceAvatar;
use App\Actions\User\UpdateUser;
use App\Http\Requests\App\Settings\AvatarRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

final class AvatarController
{
    /**
     * Update the user's profile settings.
     */
    public function update(AvatarRequest $request, ReplaceAvatar $replaceAvatar): RedirectResponse
    {
        $replaceAvatar->handle($request->user(), $request->file('image'));

        return redirect(route('app.settings'));
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request, UpdateUser $updateUser): RedirectResponse
    {
        Storage::delete($request->user()->avatar);

        $updateUser->handle($request->user(), ['avatar' => null]);

        return redirect(route('app.settings'));
    }
}
