<?php

declare(strict_types=1);

use App\Actions\User\ReplaceAvatar;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

it('replaces user avatar', function () {
    Storage::fake('public');

    $avatar = UploadedFile::fake()->image('old-avatar.jpg');
    $user = User::factory()->create(['avatar' => $avatar->store('avatars')]);

    (new ReplaceAvatar)->handle($user, UploadedFile::fake()->image('new-avatar.jpg'));

    $user->refresh();
    expect($user->avatar)->not->toBe($avatar->hashName('avatars'));

    Storage::disk('public')->assertExists($user->avatar);
    Storage::disk('public')->assertMissing($avatar->hashName('avatars'));
});
