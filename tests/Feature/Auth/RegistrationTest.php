<?php

declare(strict_types=1);

test('registration screen can be rendered', function () {
    $response = $this->get(route('register'));

    $response->assertStatus(200);
});

test('new users can register', function () {
    $payload = ['name' => fake()->name, 'email' => fake()->safeEmail, 'password' => 'password', 'password_confirmation' => 'password'];

    $response = $this->post(route('register'), $payload);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});
