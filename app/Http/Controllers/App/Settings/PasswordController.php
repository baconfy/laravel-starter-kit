<?php

declare(strict_types=1);

namespace App\Http\Controllers\App\Settings;

use App\Actions\User\UpdateUser;
use App\Http\Requests\App\Settings\PasswordRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class PasswordController
{
    /**
     * Handle the request to render the Profile page.
     *
     * @return Response The Inertia response containing the profile creation page.
     */
    public function edit(): Response
    {
        return Inertia::render('app/settings/password/page');
    }

    /**
     * Update the user's password.
     */
    public function update(PasswordRequest $request, UpdateUser $updateUser): RedirectResponse
    {
        $updateUser->handle($request->user(), $request->all(['password']));

        return back();
    }
}
