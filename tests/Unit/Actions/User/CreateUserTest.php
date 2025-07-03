<?php

declare(strict_types=1);

use App\Actions\User\CreateUser;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;

it('creates a user successfully', function () {
    // Arrange
    Event::fake(Registered::class);
    $data = ['name' => fake()->name, 'email' => fake()->email, 'password' => 'password'];

    // Act
    $user = (new CreateUser)->handle($data);

    // Assert
    expect($user)->toBeInstanceOf(User::class)
        ->and($user->name)->toBe($data['name'])
        ->and($user->email)->toBe($data['email'])
        ->and(Hash::check('password', $user->password))->toBeTrue();
    Event::assertDispatched(Registered::class);
});

it('is not possible to creates a user without password', function () {
    // Arrange
    Event::fake(Registered::class);
    $data = ['name' => fake()->name, 'email' => fake()->email];

    // Act
    (new CreateUser)->handle($data);

    // Assert
    Event::assertNotDispatched(Registered::class);
})->throws(InvalidArgumentException::class, 'Password is required to create a user.');
