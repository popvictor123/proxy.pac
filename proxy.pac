function FindProxyForURL(url, host) { 
var proxy = "SOCKS5 127.0.0.1:2080"; 
if (isResolvable(host))
{ 
return proxy + "; DIRECT"; 
} 
return "DIRECT";
 }