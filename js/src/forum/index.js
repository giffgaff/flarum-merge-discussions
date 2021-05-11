import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import NotificationGrid from "flarum/components/NotificationGrid";
import Button from 'flarum/components/Button';

import DiscussionMergeModal from './components/DiscussionMergeModal';
import DiscussionMergePost from './components/DiscussionMergePost';

import MergeStartedNotification from "./notifications/MergeStartedNotification";
import MergeFinishedNotification from "./notifications/MergeFinishedNotification";
import MergeFailedNotification from "./notifications/MergeFailedNotification";

app.initializers.add('fof/merge-discussions', () => {
    app.store.models.discussions.prototype.canMerge = Model.attribute('canMerge');

    app.notificationComponents.fofMergeDiscussionStarted = MergeStartedNotification;
    app.notificationComponents.fofMergeDiscussionFinished = MergeFinishedNotification;
    app.notificationComponents.fofMergeDiscussionFailed = MergeFailedNotification;

    app.postComponents.discussionMerged = DiscussionMergePost;

    extend(DiscussionControls, 'moderationControls', function (items, discussion) {
        if (!discussion.canMerge()) return;

        items.add(
            'fof-merge',
            Button.component(
                {
                    icon: 'fas fa-code-branch fa-flip-vertical',
                    onclick: () => app.modal.show(DiscussionMergeModal, { discussion }),
                },
                app.translator.trans('fof-merge-discussions.forum.discussion.merge')
            )
        );
    });

    extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
      items.add('fofMergeDiscussionStarted', {
        name: 'fofMergeDiscussionStarted',
        icon: 'fas fa-code-branch fa-flip-vertical',
        label: app.translator.trans('fof-merge-discussions.forum.notifications.merge_started_label'),
      });
      items.add('fofMergeDiscussionFinished', {
        name: 'fofMergeDiscussionFinished',
        icon: 'fas fa-code-branch fa-flip-vertical',
        label: app.translator.trans('fof-merge-discussions.forum.notifications.merge_finished_label'),
      });
      items.add('fofMergeDiscussionFailed', {
        name: 'fofMergeDiscussionFailed',
        icon: 'fas fa-code-branch fa-flip-vertical',
        label: app.translator.trans('fof-merge-discussions.forum.notifications.merge_failed_label'),
      });
    });
});
