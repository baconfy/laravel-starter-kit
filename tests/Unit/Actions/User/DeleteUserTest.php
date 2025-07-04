<?php

declare(strict_types=1);

use App\Actions\User\DeleteUser;
use App\Events\User\UserHasBeenDeleted;
use App\Models\User;
use Illuminate\Support\Facades\Event;

it('deletes a user successfully', function () {
    // Arrange
    Event::fake(UserHasBeenDeleted::class);
    $user = User::factory()->create();

    // Act
    $result = (new DeleteUser)->handle($user);

    // Assert
    expect($result)->toBeTrue();
    $this->assertSoftDeleted($user);
    Event::assertDispatched(UserHasBeenDeleted::class);
});
