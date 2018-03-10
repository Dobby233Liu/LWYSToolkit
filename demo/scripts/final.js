// LWYS Toolkit by Liu wenyuan

/**
*   Copyright 2018 Liu Wenyuan <papaqi1234567@163.com>
*   Licensed under the Do What The F*ck You Want To Public License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*       http://www.wtfpl.net/about
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

'use strict';
/**
* function DoDataUrl(String Base64, String MIMEType)
* Made a data url.
* @author Liu wenyuan
**/

function DoDataUrl(Base64,MIMEType){var possibe1=Base64!=null&&MIMEType!=null
var possibe2=Base64!=""&&MIMEType!=""
var possibe3=Base64!=null||MIMEType!=null
var possibe4=Base64!=""||MIMEType!=""
if(possibe1||possibe2||possibe3||possibe4){
var url="data:"+MIMEType+";base64,"+Base64;
  return url;
}return null;}

/**
* function dataUrlComp(Blob blob)
* This is for convert the Blob to Urls
* @author Liu wenyuan
**/

function dataUrlComp(blob){
	return window.URL.createObjectURL(data);
}
/**
* function Data(data)
* A Object than store data.
* @author Liu wenyuan
*/

function Data(data){
var obj=new Object()
obj.data=data;
return obj
}
