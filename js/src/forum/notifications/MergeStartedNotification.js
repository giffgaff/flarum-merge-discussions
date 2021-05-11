import Notification from 'flarum/components/Notification';

export default class MergeStarted extends Notification {
  icon() {
    return 'fas fa-code-branch fa-flip-vertical';
  }

  href() {
    const notification = this.attrs.notification;
    const discussion = notification.subject();

    return app.route.discussion(discussion);
  }

  content() {
    return app.translator.trans('fof-merge-discussions.forum.notifications.merge_started');
  }
}
