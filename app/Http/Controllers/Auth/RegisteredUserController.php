<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Actions\User\CreateUser;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

final class RegisteredUserController
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register/page');
    }

    /**
     * Handle an incoming registration request.
     */
    public function store(RegisterRequest $request, CreateUser $createUser): RedirectResponse
    {
        $user = $createUser->handle($request->all(['name', 'email', 'password']));

        Auth::login($user);

        return redirect()->intended(route('app.dashboard', absolute: false));
    }
}
