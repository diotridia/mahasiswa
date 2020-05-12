<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MahasiswaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testgetMahasiswa()
    {
        $response = $this->get('/home');

        $response->assertStatus(200);
    }
    public function testcreateMahasiswa()
    {
        $input = [
            'Name'    => 'test',
            'Faculty' => 'sv',
            'NIM'    => 12345,
            'Gender' => 'Female'
        ];
        $this->json('POST', '/create',$input)->assertStatus(200);
    }
}
