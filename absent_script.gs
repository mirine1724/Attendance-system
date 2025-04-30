
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("결석사유");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.id, data.date, data.reason]);
  return ContentService.createTextOutput("OK");
}
