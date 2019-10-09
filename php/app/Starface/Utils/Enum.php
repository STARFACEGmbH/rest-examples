<?php

namespace Starface\Utils;

use ReflectionClass as ReflectionClass;
use ReflectionException as ReflectionException;

/**
 * Class Enum
 *
 * @package Starface\Utils
 */
abstract class Enum
{
    private static $constCacheArray = null;
    
    private static function getConstants()
    {
        if (self::$constCacheArray == null) {
            self::$constCacheArray = [];
        }
        $calledClass = get_called_class();
        if (!array_key_exists($calledClass, self::$constCacheArray)) {
            try {
                $reflect = new ReflectionClass($calledClass);
                self::$constCacheArray[$calledClass] = $reflect->getConstants();
            } catch (ReflectionException $exception) {
                self::$constCacheArray[$calledClass] = array();
            }
        }
        
        return self::$constCacheArray[$calledClass];
    }
    
    private static function normalize($value)
    {
        if (null === $value || is_numeric($value)) {
            return $value;
        }
        
        return strtoupper(trim($value));
    }
    
    public static function isValidName($name, $strict = false)
    {
        $constants = self::getConstants();
        if ($strict) {
            return array_key_exists($name, $constants);
        }
        $keys = array_map('strtolower', array_keys($constants));
        
        return in_array(strtolower($name), $keys);
    }
    
    public static function isValidValue($value, $strict = true)
    {
        $values = array_values(self::getConstants());
        
        return in_array($value, $values, $strict);
    }
    
    public static function equals($value1, $value2, $strict = false)
    {
        if ($strict) {
            return $value1 === $value2;
        }
        
        return self::normalize($value1) == self::normalize($value2);
    }
    
    public static function getConstantName($constVal)
    {
        return array_flip(self::getConstants())[$constVal];
    }
}