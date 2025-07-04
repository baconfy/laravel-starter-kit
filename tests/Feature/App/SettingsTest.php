<?php

declare(strict_types=1);

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get(route('app.settings'))->assertRedirect(route('login'));
});

test('authenticated users can visit the settings page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('app.settings'));

    $response->assertOk();
});
