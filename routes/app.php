<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->name('app.')->group(function () {

    /** Dashboard */
    Route::inertia('/dashboard', 'app/dashboard/page')->name('dashboard');

    /** Settings */
    Route::inertia('/settings', 'app/settings/page')->name('settings');

});
