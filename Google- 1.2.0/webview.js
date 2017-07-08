module.exports = (Franz, options) => {
  var newStyle = document.createElement('style');
        newStyle.type = "text/css";
        document.getElementsByTagName('head').item(0).appendChild(newStyle);
        newStyle.sheet.insertRule(".OFyC1e { width: 65px; }",0);
        newStyle.sheet.insertRule(".nWGHWc.k7iNHb .DAbEod { margin-left: 0px }",0);
        newStyle.sheet.insertRule(".pd4VHb { margin-left: 65px; width: calc(100% - 90px); }",0);
        newStyle.sheet.insertRule(".AlZIPe { display: none ; }",0);
        newStyle.sheet.insertRule(".PvjVhe { border: 0; padding-bottom: 0px; margin-bottom: 0px; }",0);
        newStyle.sheet.insertRule(".M9kDrd:nth-last-child(-n+2) { display: none ; }",0);
        newStyle.sheet.insertRule(".aPExg { width: 90%; margin-left: 70px; }",0);
        newStyle.sheet.insertRule(".gb_ea { visibility: hidden; }",0);
        newStyle.sheet.insertRule(".JhVB8e { width: 120px; }",0);
        newStyle.sheet.insertRule(".YRgYyc { max-width: 9999999px; margin-left: 20px; margin-right: 0; }",0);
        newStyle.sheet.insertRule(".TdBWGb { display: none; }",0);
        newStyle.sheet.insertRule(".M9kDrd { border-radius: 50%; padding: 0 10px; margin: 0 10px; }",0);
        newStyle.sheet.insertRule(".pWQY8d { background-color: #e7e7e7; }",0);
function loop() {
  var badge = 0;
  badge = document.getElementsByClassName("gb_Fc") ? document.getElementsByClassName("gb_Fc").innerHTML : 0;
  Franz.setBadge(badge);
  document.getElementsByClassName("gb_Fc").location.reload();
}
Franz.loop(loop);
}