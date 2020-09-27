<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * @package Database\Seeders
 */
class DatabaseSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);
    }
}
