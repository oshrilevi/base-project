<?php
require_once 'PHPUnit/Autoload.php';

include_once '../php/core.php';

class CoreTest extends TestCase
{
    // ...

    public function encrypt()
    {
        // Assert
        $this->assertTrue(Core::encrypt("test"));
    }

    // ...
}