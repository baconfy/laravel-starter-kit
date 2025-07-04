<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('guests are redirected to the login page', function () {
    $this->get(route('app.settings.password'))->assertRedirect(route('login'));
});

test('profile page is displayed', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('app.settings.password'));

    $response->assertOk();
});

test('password can be updated', function () {
    $user = User::factory()->create();
    $payload = ['password' => 'new-password', 'current_password' => 'password', 'password_confirmation' => 'new-password'];

    $response = $this->actingAs($user)->from(route('app.settings.password'))->put(route('app.settings.password'), $payload);

    $response->assertSessionHasNoErrors()->assertRedirect(route('app.settings.password'));
    expect(Hash::check('new-password', $user->refresh()->password))->toBeTrue();
});

test('correct password must be provided to update password', function () {
    $user = User::factory()->create();
    $payload = ['current_password' => 'wrong-password', 'password' => 'new-password', 'password_confirmation' => 'new-password'];

    $response = $this->actingAs($user)->from(route('app.settings.password'))->put(route('app.settings.password'), $payload);

    $response->assertSessionHasErrors('current_password')->assertRedirect(route('app.settings.password'));
});
