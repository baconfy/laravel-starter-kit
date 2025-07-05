<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Settings;

use App\Actions\User\DeleteUser;
use App\Actions\User\UpdateUser;
use App\Http\Requests\App\Settings\ProfileRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

final class ProfileController
{
    /**
     * Update the user's profile settings.
     */
    public function update(ProfileRequest $request, UpdateUser $updateUser): RedirectResponse
    {
        $updateUser->handle($request->user(), $request->validated());

        return to_route('app.settings');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(ProfileRequest $request, DeleteUser $deleteUser): RedirectResponse
    {
        $deleteUser->handle($request->user());

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect(route('welcome'));
    }
}
