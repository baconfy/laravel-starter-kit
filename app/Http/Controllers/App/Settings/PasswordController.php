<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Settings;

use App\Actions\User\UpdateUser;
use App\Http\Requests\App\Settings\PasswordRequest;
use Illuminate\Http\RedirectResponse;

final class PasswordController
{
    /**
     * Update the user's password.
     */
    public function update(PasswordRequest $request, UpdateUser $updateUser): RedirectResponse
    {
        $updateUser->handle($request->user(), $request->all(['password']));

        return back();
    }
}
