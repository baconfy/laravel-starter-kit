<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

require __DIR__.'/auth.php';
require __DIR__.'/app.php';

Route::inertia('/', 'web/welcome/page')->name('home');
