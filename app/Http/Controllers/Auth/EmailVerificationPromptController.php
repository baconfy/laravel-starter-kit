<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

final class EmailVerificationPromptController
{
    /**
     * Show the email verification prompt page.
     */
    public function __invoke(Request $request): Response|RedirectResponse
    {
        return $request->user()->hasVerifiedEmail()
            ? redirect()->intended(route('app.dashboard', absolute: false))
            : Inertia::render('auth/verify-email/page', ['status' => $request->session()->get('status')]);
    }
}
