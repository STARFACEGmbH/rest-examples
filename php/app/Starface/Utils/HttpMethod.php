<?php

namespace Starface\Utils;

/**
 * Class HttpMethod
 *
 * @package Starface\Utils
 */
class HttpMethod extends Enum
{
    const GET = "GET";
    const PUT = "PUT";
    const POST = "POST";
    const PATCH = "PATCH";
    const DELETE = "DELETE";
    const OPTIONS = "OPTIONS";
}