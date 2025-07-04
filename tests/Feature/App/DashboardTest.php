<?php

declare(strict_types=1);

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get(route('app.dashboard'))->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $response = $this->actingAs(User::factory()->create())->get(route('app.dashboard'));

    $response->assertOk();
});
