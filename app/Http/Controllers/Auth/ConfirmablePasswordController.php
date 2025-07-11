<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

final class ConfirmablePasswordController
{
    /**
     * Show the confirm password page.
     */
    public function show(): Response
    {
        return Inertia::render('auth/confirm-password/page');
    }

    /**
     * Confirm the user's password.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        if (! Auth::guard('web')->validate(['email' => $request->user()->email, 'password' => $request->string('password')])) {
            throw ValidationException::withMessages(['password' => __('auth.password')]);
        }

        $request->session()->put('auth.password_confirmed_at', time());

        return redirect()->intended(route('app.dashboard', absolute: false));
    }
}
