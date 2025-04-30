
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("출석기록");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.id]);
  return ContentService.createTextOutput("OK");
}
