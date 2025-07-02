<?php

declare(strict_types=1);

use App\Models\User;

test('to array', function () {
    $model = User::factory()->create()->refresh();

    expect(array_keys($model->toArray()))
        ->toBe([
            'id',
            'name',
            'email',
            'email_verified_at',
            'created_at',
            'updated_at',
            'deleted_at',
        ]);
});

test('model uses soft delete', function () {
    $model = User::factory()->create()->refresh();

    $model->delete();

    $this->assertSoftDeleted($model);
});
