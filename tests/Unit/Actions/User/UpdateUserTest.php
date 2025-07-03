<?php

declare(strict_types=1);

use App\Actions\User\UpdateUser;
use App\Events\User\UserHasBeenUpdated;
use App\Models\User;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;

it('updates a user successfully', function () {
    // Arrange
    Event::fake(UserHasBeenUpdated::class);
    $user = User::factory()->create();
    $payload = ['name' => fake()->name];

    // Act
    $result = (new UpdateUser)->handle($user, $payload);

    // Assert
    expect($result)->toBeBool()
        ->and($user->name)->toBe($payload['name'])
        ->and(Hash::check('password', $user->password))->toBeTrue();
    Event::assertDispatched(UserHasBeenUpdated::class);
});

it('is not possible to update the user password with action.', function () {
    // Arrange
    Event::fake(UserHasBeenUpdated::class);
    $user = User::factory()->create();
    $payload = ['password' => 'new-password'];

    // Act
    (new UpdateUser)->handle($user, $payload);

    // Assert
    Event::assertNotDispatched(UserHasBeenUpdated::class);
})->throws(InvalidArgumentException::class, 'Password is not allowed to update.');

it('set user as unverified if email was changed', function () {
    // Arrange
    Event::fake(UserHasBeenUpdated::class);
    $user = User::factory()->create();
    $payload = ['email' => fake()->safeEmail];

    // Act
    $result = (new UpdateUser)->handle($user, $payload);

    // Assert
    expect($result)->toBeBool()
        ->and($user->email)->toBe($payload['email'])
        ->and($user->email_verified_at)->toBeNull();
    Event::assertDispatched(UserHasBeenUpdated::class);
});
