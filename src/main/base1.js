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
