<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

test('guests are redirected to the login page', function () {
    $this->get(route('app.settings'))->assertRedirect(route('login'));
});

test('profile page can be displayed', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('app.settings'));

    $response->assertOk();
});

test('profile information can be updated', function () {
    $user = User::factory()->create();
    $payload = ['name' => fake()->name, 'email' => fake()->email];

    $response = $this->actingAs($user)->patch(route('app.settings'), $payload);

    $user->refresh();
    $response->assertSessionHasNoErrors()->assertRedirect(route('app.settings'));
    expect($user->name)->toBe($payload['name'])
        ->and($user->email)->toBe($payload['email'])
        ->and($user->email_verified_at)->toBeNull();
});

test('email verification status is unchanged when the email address is unchanged', function () {
    $user = User::factory()->create();
    $payload = ['name' => fake()->name, 'email' => $user->email];

    $response = $this->actingAs($user)->patch(route('app.settings'), $payload);

    $response->assertSessionHasNoErrors()->assertRedirect(route('app.settings'));
    expect($user->refresh()->email_verified_at)->not->toBeNull();
});

test('user can delete their account', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('app.settings'), ['password' => 'password']);

    $this->assertGuest();
    $response->assertSessionHasNoErrors()->assertRedirectBack();
    $this->assertSoftDeleted($user->fresh());
});

test('correct password must be provided to delete account', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->from(route('app.settings'))->delete(route('app.settings'), ['password' => 'wrong-password']);

    $response->assertSessionHasErrors('password')->assertRedirect(route('app.settings'));
    expect($user->fresh())->not->toBeNull();
});

it('can not upload big avatar.', function (): void {
    Storage::fake('public');

    $user = User::factory()->create();
    $file = UploadedFile::fake()->image('avatar.jpg')->size(21000);

    $response = $this->actingAs($user)->post(route('app.settings.avatar'), ['image' => $file]);
    $response->assertSessionHasErrors('image');

    Storage::disk('public')->assertMissing($file->hashName('avatars'));
});

it('can update user avatar successfully with valid data.', function (): void {
    Storage::fake('public');
    $file = UploadedFile::fake()->image('avatar.jpg');
    $user = User::factory()->create(['avatar' => $file->store('avatars')])->refresh();

    $this->actingAs($user)->post(route('app.settings.avatar'), ['image' => $file]);

    Storage::disk('public')->assertExists($file->hashName('avatars'));
});

it('can remove user avatar.', function (): void {
    Storage::fake('public');
    $file = UploadedFile::fake()->image('avatar.jpg');
    $user = User::factory()->create(['avatar' => $file->store('avatars')]);

    $this->actingAs($user)->delete(route('app.settings.avatar'));

    expect($user->refresh()->avatar)->toBeNull();
    Storage::disk('public')->assertMissing($file->hashName('avatars'));
});
