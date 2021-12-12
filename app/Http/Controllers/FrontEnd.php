<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontEnd extends Controller
{
    public function index()
    {
        return view('layouts.vue');
    }

}
