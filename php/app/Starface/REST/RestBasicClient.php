<?php

namespace Starface\REST;

use HttpRequestMethodException;
use Starface\Utils\HttpContentType;
use Starface\Utils\HttpMethod;

/**
 * Class RestClientApi
 *
 * @package Starface\REST
 */
class RestBasicClient
{
    protected $curl;
    protected $apiUrl;
    protected $lastHttpStatus = 0;
    
    /**
     * RestBasicClient constructor.
     *
     * @param string $apiUrl
     */
    public function __construct(string $apiUrl)
    {
        $this->curl = curl_init();
        // normalize api url format:
        $this->apiUrl = rtrim($apiUrl, '/') . '/'; // https://example.url.com/api/
        // define request timeout:
        $this->setCurlOption(CURLOPT_TIMEOUT, 60); // seconds
        // ignore invalid ssl certificate - WARNING: for testing only!
        $this->setCurlOption(CURLOPT_SSL_VERIFYHOST, 0); // TODO: remove this for production
        $this->setCurlOption(CURLOPT_SSL_VERIFYPEER, 0);
        // return call result in variable:
        $this->setCurlOption(CURLOPT_RETURNTRANSFER, true);
        // set default content type to json:
        $this->setCurlOption(CURLOPT_HTTPHEADER, array(
            'Content-Type: ' . HttpContentType::APPLICATION_JSON . '; charset=utf-8',
        ));
    }
    
    /**
     * Calls curl_close.
     */
    public function closeConnection()
    {
        if (!empty($this->curl)) {
            curl_close($this->curl);
        }
    }
    
    /**
     * @param int $option
     * @param     $value
     */
    public function setCurlOption(int $option, $value)
    {
        curl_setopt($this->curl, $option, $value);
    }
    
    /**
     * @return int
     */
    public function getLastRequestsHttpStatus()
    {
        return $this->lastHttpStatus;
    }
    
    /**
     * @param string $url
     * @param array  $params
     *
     * @return array|null
     */
    public function get(string $url, $params = array())
    {
        try {
            return $this->call($url, HttpMethod::GET, array(), $params);
        } catch (HttpRequestMethodException $e) {
            return null;
        }
    }
    
    /**
     * @param string $url
     * @param array  $data
     * @param array  $params
     * @param bool   $autoEncode set to false to send non json formatted data
     *
     * @return array|null
     */
    public function post(string $url, $data = array(), $params = array(), $autoEncode = true)
    {
        try {
            $data = $autoEncode && !is_string($data) ? json_encode($data) : $data;
            
            return $this->call($url, HttpMethod::POST, $data, $params);
        } catch (HttpRequestMethodException $e) {
            return null;
        }
    }
    
    /**
     * @param string $url
     * @param array  $data
     * @param array  $params
     * @param bool   $autoEncode set to false to send non json formatted data
     *
     * @return array|null
     */
    public function put(string $url, $data = array(), $params = array(), $autoEncode = true)
    {
        try {
            $data = $autoEncode && !is_string($data) ? json_encode($data) : $data;
            
            return $this->call($url, HttpMethod::PUT, $data, $params);
        } catch (HttpRequestMethodException $e) {
            return null;
        }
    }
    
    /**
     * @param string $url
     * @param array  $data
     * @param array  $params
     * @param bool   $autoEncode set to false to send non json formatted data
     *
     * @return array|null
     */
    public function patch(string $url, $data = array(), $params = array(), $autoEncode = true)
    {
        try {
            $data = $autoEncode && !is_string($data) ? json_encode($data) : $data;
            
            return $this->call($url, HttpMethod::PATCH, $data, $params);
        } catch (HttpRequestMethodException $e) {
            return null;
        }
    }
    
    /**
     * @param string $url
     * @param array  $params
     * @param array  $data
     *
     * @return array|null
     */
    public function delete(string $url, $params = array(), $data = array())
    {
        try {
            return $this->call($url, HttpMethod::DELETE, $data, $params);
        } catch (HttpRequestMethodException $e) {
            return null;
        }
    }
    
    /**
     * @param string $url
     * @param string $method
     * @param null   $data
     * @param array  $params
     *
     * @return array|null
     * @throws HttpRequestMethodException
     */
    private function call(string $url, string $method = HttpMethod::GET, $data = null, $params = array())
    {
        if (!HttpMethod::isValidValue($method)) {
            throw new HttpRequestMethodException("Invalid HTTP-Method: " . $method);
        }
        // prepare request:
        $url = $this->apiUrl . rtrim(ltrim($url, '/'), '?') . '?' . http_build_query($params);
        $this->setCurlOption(CURLOPT_URL, $url);
        $this->setCurlOption(CURLOPT_CUSTOMREQUEST, $method);
        // set post data if set:
        if (!empty($data)) {
            $this->setCurlOption(CURLOPT_POSTFIELDS, $data);
        }
        // execute api call:
        $result = curl_exec($this->curl);
        // read response's status code:
        $this->lastHttpStatus = curl_getinfo($this->curl, CURLINFO_HTTP_CODE);
        
        return json_decode($result, JSON_OBJECT_AS_ARRAY);
    }
}