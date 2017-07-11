<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //
    protected $table = "fl_role_master";
    protected $primaryKey = "ROLE_ID";
    protected $guarded = ["ROLE_ID","ROLE_NAME"];
    public $timestamps = false;



}
