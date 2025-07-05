<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    /** Dashboard */
    Route::inertia('/dashboard', 'app/dashboard/page')->name('app.dashboard');

    /** Settings */
    Route::get('/settings', [App\Http\Controllers\App\Settings\ProfileController::class, 'edit'])->name('app.settings');
    Route::patch('/settings', [App\Http\Controllers\App\Settings\ProfileController::class, 'update']);
    Route::delete('/settings', [App\Http\Controllers\App\Settings\ProfileController::class, 'destroy']);

    Route::inertia('/settings/security', 'app/settings/security/page')->name('app.settings.security');
    Route::put('/settings/password', [App\Http\Controllers\App\Settings\PasswordController::class, 'update'])->name('app.settings.password');

    Route::inertia('/settings/preferences', 'app/settings/preferences/page')->name('app.settings.preferences');

});
