
function createSVG(img) {

    
var svg = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
'<svg' +
'   xmlns:dc="http://purl.org/dc/elements/1.1/"' +
'   xmlns:cc="http://creativecommons.org/ns#"' +
'  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
'  xmlns:svg="http://www.w3.org/2000/svg"' +
'  xmlns="http://www.w3.org/2000/svg"' +
'  xmlns:xlink="http://www.w3.org/1999/xlink"' +
'  viewBox="0 0 850 425"' +
'  height="425"' +
'  width="850"' +
'  id="svg64"' +
'  version="1.1">' +
' <metadata' +
'    id="metadata70">' +
'   <rdf:RDF>' +
'     <cc:Work' +
'        rdf:about="">' +
'       <dc:format>image/svg+xml</dc:format>' +
'       <dc:type' +
'         rdf:resource="http://purl.org/dc/dcmitype/StillImage" />' +
'       <dc:title></dc:title>' +
'     </cc:Work>' +
'   </rdf:RDF>' +
' </metadata>' +
' <defs' +
'    id="defs68" />' +
' <image' +
'    y="0"' +
'    x="0"' +
'    id="image72"' +
'    xlink:href="' + img + '"' +
'   preserveAspectRatio="none"' +
'   height="425"' +
'   width="850" />' +
'</svg>';
return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

}