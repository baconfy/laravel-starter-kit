<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    /** Dashboard */
    Route::inertia('/dashboard', 'app/dashboard/page')->name('app.dashboard');

    /** Settings Profile */
    Route::inertia('/settings', 'app/settings/profile/page')->name('app.settings');
    Route::patch('/settings', [App\Http\Controllers\App\Settings\ProfileController::class, 'update']);
    Route::delete('/settings', [App\Http\Controllers\App\Settings\ProfileController::class, 'destroy']);

    /** Settings Profile Avatar */
    Route::post('/settings/avatar', [App\Http\Controllers\App\Settings\AvatarController::class, 'update'])->name('app.settings.avatar');
    Route::delete('/settings/avatar', [App\Http\Controllers\App\Settings\AvatarController::class, 'destroy']);

    /** Settings Security */
    Route::inertia('/settings/security', 'app/settings/security/page')->name('app.settings.security');
    Route::put('/settings/password', [App\Http\Controllers\App\Settings\PasswordController::class, 'update'])->name('app.settings.password');

    /** Settings Preferences */
    Route::inertia('/settings/preferences', 'app/settings/preferences/page')->name('app.settings.preferences');

});
