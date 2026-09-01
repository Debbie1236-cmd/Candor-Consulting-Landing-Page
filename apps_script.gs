function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    new Date(),
    data['Name'] || '',
    data['Organisation'] || '',
    data['Role / Job Title'] || '',
    data['Email Address'] || '',
    data['Phone Number'] || '',
    data['Approximate Number of Participants'] || '',
    data['Preferred Delivery'] || '',
    data['Message'] || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
