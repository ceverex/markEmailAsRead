function markEmailAsRead() {
  var threads = GmailApp.search('label:unread label:inbox')

  for (var i = 0; i < threads.length; i++) {
    threads[i].markRead();
  }
};
